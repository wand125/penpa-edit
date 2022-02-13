import { Panel } from "../model/Panel";
import { Stack } from "../model/Stack";
import { make_class } from "./makeClass";
import { set_solvemode } from "./setSolveMode";

export const load = (pu, urlParam) => {
  //try{
  var param = urlParam.split("&");
  var paramArray = [];

  //アドレスを要素に分解
  for (var i = 0; i < param.length; i++) {
    var paramItem = param[i].split("=");
    paramArray[paramItem[0]] = paramItem[1];
  }

  //pを復号
  const _ab = atob(paramArray["p"]);
  const ab = Uint8Array.from(_ab.split(""), (e) => e.charCodeAt(0));
  var inflate = new Zlib.RawInflate(ab);
  var plain = inflate.decompress();
  var rtext = new TextDecoder().decode(plain);
  rtext = rtext.split("\n");

  rtext[0] = rtext[0].split("zO").join("null");
  rtext[1] = rtext[1].split("zO").join("null");

  if (!isNaN(rtext[0][0])) {
    loadver1(paramArray, rtext);
    return;
  }

  //初期設定を読み込み
  var rtext_para = rtext[0].split(",");
  document.getElementById("gridtype")["value"] = rtext_para[0];
  changetype();
  document.getElementById("nb_size1")["value"] = rtext_para[1];
  document.getElementById("nb_size2")["value"] = rtext_para[2];
  document.getElementById("nb_size3")["value"] = rtext_para[3];
  document.getElementById("nb_space1")["value"] = JSON.parse(rtext[1])[0];
  document.getElementById("nb_space2")["value"] = JSON.parse(rtext[1])[1];
  document.getElementById("nb_space3")["value"] = JSON.parse(rtext[1])[2];
  document.getElementById("nb_space4")["value"] = JSON.parse(rtext[1])[3];

  make_class(rtext_para[0]);

  pu.theta = parseInt(rtext_para[4]);
  pu.reflect[0] = parseInt(rtext_para[5]);
  pu.reflect[1] = parseInt(rtext_para[6]);

  pu.canvasx = parseInt(rtext_para[7]);
  pu.canvasy = parseInt(rtext_para[8]);
  pu.width_c = pu.canvasx / rtext_para[3];
  pu.height_c = pu.canvasy / rtext_para[3]; //newgrid更新の際、canvasxyupdateでwidth_cを使うので記録しておく
  pu.center_n = parseInt(rtext_para[9]);
  pu.center_n0 = parseInt(rtext_para[10]);

  const panel_pu = new Panel();

  for (var i = 0; i < pu.replace.length; i++) {
    rtext[2] = rtext[2].split(pu.replace[i][1]).join(pu.replace[i][0]);
    rtext[3] = rtext[3].split(pu.replace[i][1]).join(pu.replace[i][0]);
    rtext[4] = rtext[4].split(pu.replace[i][1]).join(pu.replace[i][0]);
  }
  rtext[5] = JSON.parse(rtext[5]);
  for (var i = 1; i < rtext[5].length; i++) {
    rtext[5][i] = rtext[5][i - 1] + rtext[5][i];
  }

  if (paramArray.m === "edit") {
    //edit_mode
    var mode = JSON.parse(rtext[2]);
    for (var i in mode) {
      for (var j in mode[i]) {
        pu.mode[i][j] = mode[i][j];
      }
    }
    pu.pu_q = JSON.parse(rtext[3]);
    pu.pu_a = JSON.parse(rtext[4]);
    if (!pu.pu_q.polygon) {
      pu.pu_q.polygon = [];
    }
    if (!pu.pu_a.polygon) {
      pu.pu_a.polygon = [];
    }
    pu.centerlist = rtext[5];

    //classがコピーできないので別
    for (var i of ["pu_q", "pu_a"]) {
      for (var j of ["command_redo", "command_undo"]) {
        var t = pu[i][j].__a;
        pu[i][j] = new Stack();
        pu[i][j].set(t);
      }
    }
  } else if (paramArray["m"] === "solve") {
    //solve_mode
    set_solvemode(pu);
    pu.mode.qa = "pu_a";

    //mode初期化
    var rtext_mode = rtext[2].split("~");
    pu.mode.grid = JSON.parse(rtext_mode[0]);
    pu.mode_set("surface");

    pu.pu_q = JSON.parse(rtext[3]);
    if (!pu.pu_q.polygon) {
      pu.pu_q.polygon = [];
    }
    pu.centerlist = rtext[5];

    //classがコピーできないので別
    for (var i of ["pu_q"]) {
      for (var j of ["command_redo", "command_undo"]) {
        var t = pu[i][j].__a;
        pu[i][j] = new Stack();
        pu[i][j].set(t);
      }
    }

    //aを復号
    if (paramArray["a"]) {
      const _ab = atob(paramArray["a"]);
      const ab = Uint8Array.from(_ab.split(""), (e) => e.charCodeAt(0));
      var inflate = new Zlib.RawInflate(ab);
      var plain = inflate.decompress();
      var atext = new TextDecoder().decode(plain);
      pu.solution = atext;
    }
  }

  if (paramArray["l"] === "solvedup") {
    set_solvemode(pu);
  }

  document.getElementById("nb_grid" + pu.mode.grid[0])["checked"] = true;
  document.getElementById("nb_lat" + pu.mode.grid[1])["checked"] = true;
  document.getElementById("nb_out" + pu.mode.grid[2])["checked"] = true;

  //描画
  pu.create_point();
  pu.point_move(
    pu.canvasx * 0.5 - pu.point[pu.center_n].x + 0.5,
    pu.canvasy * 0.5 - pu.point[pu.center_n].y + 0.5,
    pu.theta
  );
  pu.canvas_size_setting();
  pu.cursol = pu.centerlist[0];
  if (pu.reflect[0] === -1) {
    pu.point_reflect_LR();
  }
  if (pu.reflect[1] === -1) {
    pu.point_reflect_UD();
  }
  pu.make_frameline(); //盤面描画
  panel_pu.draw_panel();
  pu.mode_qa(pu.mode.qa); //include redraw

  if (paramArray.m === "solve") {
    //solveモードの場合のみ、mode読み込み
    var rtext_mode = rtext[2].split("~");
    pu.mode.grid = JSON.parse(rtext_mode[0]);
    if (rtext_mode[1]) {
      var amode = JSON.parse(rtext_mode[1]);
      if (amode != "board" && amode != "cage" && amode != "special") {
        //解答モードにないモードは除外
        pu.mode[pu.mode.qa].edit_mode = amode;
        pu.mode[pu.mode.qa][amode] = JSON.parse(rtext_mode[2]);
      }
    }
  }

  pu.mode_set(pu.mode[pu.mode.qa].edit_mode); //include redraw
  //}catch(error){
  //  alert("不正なアドレスです");
  //}
};

export const loadver1 = (pu, paramArray, rtext) => {
  //初期設定を読み込み
  var rtext_para = rtext[0].split(",");

  document.getElementById("gridtype")["value"] = "square";
  changetype();
  document.getElementById("nb_size1")["value"] = parseInt(rtext_para[0]);
  document.getElementById("nb_size2")["value"] = parseInt(rtext_para[1]);
  document.getElementById("nb_size3")["value"] = parseInt(rtext_para[2]);
  document.getElementById("nb_space1")["value"] = parseInt(rtext_para[3]);
  document.getElementById("nb_space2")["value"] = parseInt(rtext_para[4]);
  document.getElementById("nb_space3")["value"] = parseInt(rtext_para[5]);
  document.getElementById("nb_space4")["value"] = parseInt(rtext_para[6]);

  make_class("square");

  pu.theta = 0;
  pu.reflect[0] = 1;
  pu.reflect[1] = 1;

  pu.canvasx = (parseInt(rtext_para[1]) + 1) * parseInt(rtext_para[3]);
  pu.canvasy = (parseInt(rtext_para[2]) + 1) * parseInt(rtext_para[3]);
  pu.search_center();
  pu.center_n0 = pu.center;

  panel_pu = new Panel();

  if (!paramArray.m) {
    //edit_mode
    var rtext_q = JSON.parse(rtext[1]);
    var rtext_a = JSON.parse(rtext[2]);
    var rtext_qa = { pu_q: rtext_q, pu_a: rtext_a };
    pu.reset_frame();

    var pre_centerlist = pu.centerlist;
    pu.centerlist = [];
    for (var j = 2; j < pu.ny0 - 2; j++) {
      for (var i = 2; i < pu.nx0 - 2; i++) {
        pu.centerlist.push(i + j * pu.nx0);
      }
    }

    loadqa_arrayver1(pu, "pu_q", rtext_qa);
    loadqa_arrayver1(pu, "pu_a", rtext_qa);
  } else if (paramArray.m === "solve") {
    //solve_mode
    set_solvemode(pu);
    pu.mode.qa = "pu_a";
    pu.mode_set("surface");
    var rtext_q = JSON.parse(rtext[1]);
    var rtext_qa = { pu_q: rtext_q };
    pu.reset_frame();

    var pre_centerlist = pu.centerlist;
    pu.centerlist = [];
    for (var j = 2; j < pu.ny0 - 2; j++) {
      for (var i = 2; i < pu.nx0 - 2; i++) {
        pu.centerlist.push(i + j * pu.nx0);
      }
    }

    loadqa_arrayver1("pu_q", rtext_qa);
  }

  if (paramArray.l === "solvedup") {
    set_solvemode(pu);
  }

  document.getElementById(rtext_para[7]).checked = true;
  pu.mode.grid[0] = rtext_para[7].slice(-1);
  document.getElementById(rtext_para[8]).checked = true;
  pu.mode.grid[1] = rtext_para[8].slice(-1);
  document.getElementById(rtext_para[9]).checked = true;
  pu.mode.grid[2] = rtext_para[9].slice(-1);

  //描画
  pu.create_point();
  pu.point_move(
    pu.canvasx * 0.5 - pu.point[pu.center_n].x + 0.5,
    pu.canvasy * 0.5 - pu.point[pu.center_n].y + 0.5,
    pu.theta
  );
  pu.canvas_size_setting();
  pu.cursol = pu.centerlist[0];

  pu.centerlist = pre_centerlist;
  pu.make_frameline(); //盤面描画
  panel_pu.draw_panel();
  pu.mode_qa(pu.mode.qa); //include redraw
  pu.mode_set(pu.mode[pu.mode.qa].edit_mode); //include redraw
}

const loadqa_arrayver1 = (pu, qa, rtext_qa) => {
  var key, i1, i2, p, q;
  //surface
  for (var i in rtext_qa[qa][0]) {
    pu[qa].surface[pu.centerlist[i]] = rtext_qa[qa][0][i];
  }
  //line
  for (var i in rtext_qa[qa][1]) {
    //lineH
    if (rtext_qa[qa][1][i] != 98) {
      i1 = (i % (pu.nx - 1)) + parseInt(i / (pu.nx - 1)) * pu.nx;
      i2 = i1 + 1;
      key = pu.centerlist[i1] + "," + pu.centerlist[i2];
      pu[qa].line[key] = rtext_qa[qa][1][i];
    } else {
      i1 = (i % (pu.nx - 1)) + parseInt(i / (pu.nx - 1)) * pu.nx;
      i2 = pu.point[pu.centerlist[i1]].neighbor[3];
      pu[qa].line[i2] = rtext_qa[qa][1][i];
    }
  }
  for (var i in rtext_qa[qa][2]) {
    //lineV
    if (rtext_qa[qa][2][i] != 98) {
      i1 = (i % pu.nx) + parseInt(i / pu.nx) * pu.nx;
      i2 = i1 + pu.nx;
      key = pu.centerlist[i1] + "," + pu.centerlist[i2];
      pu[qa].line[key] = rtext_qa[qa][2][i];
    } else {
      i1 = (i % pu.nx) + parseInt(i / pu.nx) * pu.nx;
      i2 = pu.point[pu.centerlist[i1]].neighbor[1];
      pu[qa].line[i2] = rtext_qa[qa][2][i];
    }
  }
  for (var i in rtext_qa[qa][3]) {
    //lineDa
    i1 = (i % (pu.nx - 1)) + parseInt(i / (pu.nx - 1)) * pu.nx;
    i2 = i1 + pu.nx + 1;
    key = pu.centerlist[i1] + "," + pu.centerlist[i2];
    pu[qa].line[key] = rtext_qa[qa][3][i];
  }
  for (var i in rtext_qa[qa][4]) {
    //lineDb
    i1 = (i % (pu.nx - 1)) + parseInt(i / (pu.nx - 1)) * pu.nx + 1;
    i2 = i1 + pu.nx - 1;
    key = pu.centerlist[i1] + "," + pu.centerlist[i2];
    pu[qa].line[key] = rtext_qa[qa][4][i];
  }

  //lineE
  for (var i in rtext_qa[qa][5]) {
    //lineEH
    if (rtext_qa[qa][5][i] != 98) {
      i1 = (i % pu.nx) + parseInt(i / pu.nx) * pu.nx;
      if (parseInt(i / pu.nx) === pu.ny) {
        i2 = pu.centerlist[i1 - pu.nx] + pu.nx + 4;
      } else {
        i2 = pu.centerlist[i1];
      }
      key = pu.point[i2].surround[0] + "," + pu.point[i2].surround[1];
      pu[qa].lineE[key] = rtext_qa[qa][5][i];
    } else {
      i1 = (i % pu.nx) + parseInt(i / pu.nx) * pu.nx;
      if (parseInt(i / pu.nx) === pu.ny) {
        i2 = pu.centerlist[i1 - pu.nx] + pu.nx + 4;
      } else {
        i2 = pu.centerlist[i1];
      }
      pu[qa].lineE[pu.point[i2].neighbor[0]] = rtext_qa[qa][5][i];
    }
  }

  for (var i in rtext_qa[qa][6]) {
    //lineEV
    if (rtext_qa[qa][6][i] != 98) {
      i1 = (i % (pu.nx + 1)) + parseInt(i / (pu.nx + 1)) * pu.nx;
      if (i % (pu.nx + 1) === pu.nx) {
        i2 = pu.centerlist[i1 - 1] + 1;
      } else {
        i2 = pu.centerlist[i1];
      }
      key = pu.point[i2].surround[0] + "," + pu.point[i2].surround[3];
      pu[qa].lineE[key] = rtext_qa[qa][6][i];
    } else {
      i1 = (i % (pu.nx + 1)) + parseInt(i / (pu.nx + 1)) * pu.nx;
      if (i % (pu.nx + 1) === pu.nx) {
        i2 = pu.centerlist[i1 - 1] + 1;
      } else {
        i2 = pu.centerlist[i1];
      }
      pu[qa].lineE[pu.point[i2].neighbor[2]] = rtext_qa[qa][6][i];
    }
  }
  for (var i in rtext_qa[qa][7]) {
    //lineEDa
    i1 = pu.centerlist[i];
    key = pu.point[i1].surround[0] + "," + pu.point[i1].surround[2];
    pu[qa].lineE[key] = rtext_qa[qa][7][i];
  }
  for (var i in rtext_qa[qa][8]) {
    //st_lineEDb
    i1 = pu.centerlist[i];
    key = pu.point[i1].surround[1] + "," + pu.point[i1].surround[3];
    pu[qa].lineE[key] = rtext_qa[qa][8][i];
  }
  for (var i in rtext_qa[qa][9]) {
    //st_wallH
    i1 = pu.centerlist[i];
    key = pu.point[i1].neighbor[2] + "," + pu.point[i1].neighbor[3];
    pu[qa].wall[key] = rtext_qa[qa][9][i];
  }
  for (var i in rtext_qa[qa][10]) {
    //st_wallH
    i1 = pu.centerlist[i];
    key = pu.point[i1].neighbor[0] + "," + pu.point[i1].neighbor[1];
    pu[qa].wall[key] = rtext_qa[qa][10][i];
  }
  for (var i in rtext_qa[qa][11]) {
    //number
    i1 = pu.centerlist[i];
    if (rtext_qa[qa][11][i][2] === "2") {
      //arrow
      if (rtext_qa[qa][11][i][0].slice(-2) === "_R") {
        rtext_qa[qa][11][i][0] = rtext_qa[qa][11][i][0].slice(0, -2) + "_2";
      } else if (rtext_qa[qa][11][i][0].slice(-2) === "_U") {
        rtext_qa[qa][11][i][0] = rtext_qa[qa][11][i][0].slice(0, -2) + "_0";
      } else if (rtext_qa[qa][11][i][0].slice(-2) === "_D") {
        rtext_qa[qa][11][i][0] = rtext_qa[qa][11][i][0].slice(0, -2) + "_3";
      } else if (rtext_qa[qa][11][i][0].slice(-2) === "_L") {
        rtext_qa[qa][11][i][0] = rtext_qa[qa][11][i][0].slice(0, -2) + "_1";
      }
    }
    pu[qa].number[i1] = rtext_qa[qa][11][i];
  }

  for (var i in rtext_qa[qa][12]) {
    //numberS
    i1 = (pu.nx + 4) * (pu.ny + 4) * 4 + 4 * (pu.nx + 4) * 2 + 8; //topleft
    p = i % (2 * pu.nx);
    q = parseInt(i / (2 * pu.nx));
    if (p % 2 === 0 && q % 2 === 0) {
      i1 += p * 2 + q * (pu.nx + 4) * 2;
    } else if (p % 2 === 1 && q % 2 === 0) {
      i1 += p * 2 - 1 + q * (pu.nx + 4) * 2;
    } else if (p % 2 === 0 && q % 2 === 1) {
      i1 += p * 2 + 2 + (q - 1) * (pu.nx + 4) * 2;
    } else if (p % 2 === 1 && q % 2 === 1) {
      i1 += p * 2 + 1 + (q - 1) * (pu.nx + 4) * 2;
    }
    pu[qa].numberS[i1] = rtext_qa[qa][12][i];
  }
  for (var i in rtext_qa[qa][13]) {
    //numberE
    p = i % (2 * pu.nx + 1);
    q = parseInt(i / (2 * pu.nx + 1));
    if (p % 2 === 0 && q % 2 === 0) {
      i1 = (pu.nx + 4) * (pu.ny + 4) + (pu.nx + 4) + 1;
      i1 += parseInt(p * 0.5 + q * 0.5 * (pu.nx + 4));
    } else if (p % 2 === 1 && q % 2 === 0) {
      i1 = (pu.nx + 4) * (pu.ny + 4) * 2 + (pu.nx + 4) + 2;
      i1 += parseInt((p - 1) * 0.5 + q * 0.5 * (pu.nx + 4));
    } else if (p % 2 === 0 && q % 2 === 1) {
      i1 = (pu.nx + 4) * (pu.ny + 4) * 3 + 2 * (pu.nx + 4) + 1;
      i1 += parseInt(p * 0.5 + (q - 1) * 0.5 * (pu.nx + 4));
    } else if (p % 2 === 1 && q % 2 === 1) {
      i1 = 2 * (pu.nx + 4) + 2;
      i1 += parseInt((p - 1) * 0.5 + (q - 1) * 0.5 * (pu.nx + 4));
      i1 += "E";
    }
    pu[qa].number[i1] = rtext_qa[qa][13][i];
  }
  for (var i in rtext_qa[qa][14]) {
    //cageH
    i1 = (pu.nx + 4) * (pu.ny + 4) * 4 + 4 * (pu.nx + 4) * 2 + 8; //topleft
    i2 = (i % (2 * pu.nx - 1)) + parseInt(i / (2 * pu.nx - 1)) * 2 * pu.nx;
    p = i2 % (2 * pu.nx);
    q = parseInt(i2 / (2 * pu.nx));
    if (p % 2 === 0 && q % 2 === 0) {
      i1 += p * 2 + q * (pu.nx + 4) * 2;
      i2 = i1 + 1;
    } else if (p % 2 === 1 && q % 2 === 0) {
      i1 += p * 2 - 1 + q * (pu.nx + 4) * 2;
      i2 = i1 + 3;
    } else if (p % 2 === 0 && q % 2 === 1) {
      i1 += p * 2 + 2 + (q - 1) * (pu.nx + 4) * 2;
      i2 = i1 + 1;
    } else if (p % 2 === 1 && q % 2 === 1) {
      i1 += p * 2 + 1 + (q - 1) * (pu.nx + 4) * 2;
      i2 = i1 + 3;
    }
    key = i1 + "," + i2;
    pu[qa].cage[key] = rtext_qa[qa][14][i];
  }
  for (var i in rtext_qa[qa][15]) {
    //cageV
    i1 = (pu.nx + 4) * (pu.ny + 4) * 4 + 4 * (pu.nx + 4) * 2 + 8; //topleft
    p = i % (2 * pu.nx);
    q = Math.floor(i / (2 * pu.nx));
    if (p % 2 === 0 && q % 2 === 0) {
      i1 += p * 2 + q * (pu.nx + 4) * 2;
      i2 = i1 + 2;
    } else if (p % 2 === 1 && q % 2 === 0) {
      i1 += p * 2 - 1 + q * (pu.nx + 4) * 2;
      i2 = i1 + 2;
    } else if (p % 2 === 0 && q % 2 === 1) {
      i1 += p * 2 + 2 + (q - 1) * (pu.nx + 4) * 2;
      i2 = i1 + 4 * (pu.nx * 2) - 2;
    } else if (p % 2 === 1 && q % 2 === 1) {
      i1 += p * 2 + 1 + (q - 1) * (pu.nx + 4) * 2;
      i2 = i1 + 4 * (pu.nx * 2) - 2;
    }
    key = i1 + "," + i2;
    pu[qa].cage[key] = rtext_qa[qa][15][i];
  }

  var dif_symbol = [];
  for (var i in rtext_qa[qa][16]) {
    //symbol
    i1 = pu.centerlist[i];
    pu[qa].symbol[i1] = rtext_qa[qa][16][i];
    if (pu[qa].symbol[i1][1] === "cross") {
      dif_symbol = [0, 0, 0, 0];
      dif_symbol[0] = pu[qa].symbol[i1][0][2];
      dif_symbol[1] = pu[qa].symbol[i1][0][3];
      dif_symbol[2] = pu[qa].symbol[i1][0][0];
      dif_symbol[3] = pu[qa].symbol[i1][0][1];
      pu[qa].symbol[i1][0] = dif_symbol;
    } else if (
      pu[qa].symbol[i1][1] === "battleship_B" ||
      pu[qa].symbol[i1][1] === "battleship_G" ||
      pu[qa].symbol[i1][1] === "battleship_W"
    ) {
      if (pu[qa].symbol[i1][0] >= 7) {
        pu[qa].symbol[i1][0] = 2;
      }
    } else if (pu[qa].symbol[i1][1] === "kakuro") {
      dif_symbol = [0, 1, 1, 2, 3, 4, 5, 6];
      pu[qa].symbol[i1][0] = dif_symbol[pu[qa].symbol[i1][0]];
    } else if (pu[qa].symbol[i1][1] === "firefly") {
      dif_symbol = [0, 3, 4, 1, 2, 5];
      pu[qa].symbol[i1][0] = dif_symbol[pu[qa].symbol[i1][0]];
    }
  }
  for (var i in rtext_qa[qa][17]) {
    //symbolE
    p = i % (2 * pu.nx + 1);
    q = parseInt(i / (2 * pu.nx + 1));
    if (p % 2 === 0 && q % 2 === 0) {
      i1 = (pu.nx + 4) * (pu.ny + 4) + (pu.nx + 4) + 1;
      i1 += parseInt(p * 0.5 + q * 0.5 * (pu.nx + 4));
    } else if (p % 2 === 1 && q % 2 === 0) {
      i1 = (pu.nx + 4) * (pu.ny + 4) * 2 + (pu.nx + 4) + 2;
      i1 += parseInt((p - 1) * 0.5 + q * 0.5 * (pu.nx + 4));
    } else if (p % 2 === 0 && q % 2 === 1) {
      i1 = (pu.nx + 4) * (pu.ny + 4) * 3 + 2 * (pu.nx + 4) + 1;
      i1 += parseInt(p * 0.5 + (q - 1) * 0.5 * (pu.nx + 4));
    } else if (p % 2 === 1 && q % 2 === 1) {
      i1 = 2 * (pu.nx + 4) + 2;
      i1 += parseInt((p - 1) * 0.5 + (q - 1) * 0.5 * (pu.nx + 4));
      i1 += "E";
    }
    pu[qa].symbol[i1] = rtext_qa[qa][17][i];
    if (pu[qa].symbol[i1][1] === "cross") {
      dif_symbol = [0, 0, 0, 0];
      dif_symbol[0] = pu[qa].symbol[i1][0][2];
      dif_symbol[1] = pu[qa].symbol[i1][0][3];
      dif_symbol[2] = pu[qa].symbol[i1][0][0];
      dif_symbol[3] = pu[qa].symbol[i1][0][1];
      pu[qa].symbol[i1][0] = dif_symbol;
    } else if (
      pu[qa].symbol[i1][1] === "battleship_B" ||
      pu[qa].symbol[i1][1] === "battleship_G" ||
      pu[qa].symbol[i1][1] === "battleship_W"
    ) {
      if (pu[qa].symbol[i1][0] >= 7) {
        pu[qa].symbol[i1][0] = 2;
      }
    } else if (pu[qa].symbol[i1][1] === "kakuro") {
      dif_symbol = [0, 1, 1, 2, 3, 4, 5, 6];
      pu[qa].symbol[i1][0] = dif_symbol[pu[qa].symbol[i1][0]];
    } else if (pu[qa].symbol[i1][1] === "firefly") {
      dif_symbol = [0, 3, 4, 1, 2, 5];
      pu[qa].symbol[i1][0] = dif_symbol[pu[qa].symbol[i1][0]];
    } else if (pu[qa].symbol[i1][1] === "inequality") {
      dif_symbol = [0, 1, 3, 4, 2, 5, 7, 8, 6];
      pu[qa].symbol[i1][0] = dif_symbol[pu[qa].symbol[i1][0]];
    }
  }
  for (var i in rtext_qa[qa][18]) {
    //freeline
    i1 = i.split(",")[0];
    i2 = i.split(",")[1];
    key = pu.centerlist[i1] + "," + pu.centerlist[i2];
    pu[qa].line[key] = rtext_qa[qa][18][i];
  }
  for (var i in rtext_qa[qa][19]) {
    //freelineE
    i1 = i.split(",")[0];
    i2 = i.split(",")[1];

    i1 = (i1 % (pu.nx + 1)) + parseInt(i1 / (pu.nx + 1)) * pu.nx;
    i1 = pu.centerlist[i1];
    if (i1 % (pu.nx + 1) === pu.nx) {
      i1 += 1;
    }
    if (parseInt(i1 / pu.nx) === pu.ny) {
      i1 += pu.nx;
    }
    i2 = (i2 % (pu.nx + 1)) + parseInt(i2 / (pu.nx + 1)) * pu.nx;
    i2 = pu.centerlist[i2];
    if (i2 % (pu.nx + 1) === pu.nx) {
      i2 += 1;
    }
    if (parseInt(i1 / pu.nx) === pu.ny) {
      i2 += pu.nx;
    }
    key = pu.point[i1].surround[0] + "," + pu.point[i2].surround[0];
    pu[qa].lineE[key] = rtext_qa[qa][19][i];
  }
  for (var i of rtext_qa[qa][20]) {
    //thermo
    pu[qa].thermo.push([]);
    for (j of i) {
      pu[qa].thermo[pu[qa].thermo.length - 1].push(pu.centerlist[j]);
    }
  }
  for (var i of rtext_qa[qa][21]) {
    //arrows
    pu[qa].arrows.push([]);
    for (j of i) {
      pu[qa].arrows[pu[qa].arrows.length - 1].push(pu.centerlist[j]);
    }
  }
  for (var i of rtext_qa[qa][22]) {
    //direction
    pu[qa].direction.push([]);
    for (j of i) {
      pu[qa].direction[pu[qa].direction.length - 1].push(pu.centerlist[j]);
    }
  }
  if (rtext_qa[qa][23]) {
    for (var i of rtext_qa[qa][23]) {
      //squareframe
      pu[qa].squareframe.push([]);
      for (j of i) {
        pu[qa].squareframe[pu[qa].squareframe.length - 1].push(
          pu.centerlist[j]
        );
      }
    }
  }
  if (rtext_qa[qa][24]) {
    for (const index in rtext_qa[qa][24]) {
      const i = parseInt(index);
      //deletelineHE
      if (parseInt(i / pu.nx) === pu.ny) {
        i2 = pu.centerlist[i - pu.nx] + pu.nx + 4;
      } else {
        i2 = pu.centerlist[i];
      }
      key = pu.point[i2].surround[0] + "," + pu.point[i2].surround[1];
      pu[qa].deletelineE[key] = rtext_qa[qa][24][i];
    }
  }
  if (rtext_qa[qa][25]) {
    for (const index in rtext_qa[qa][25]) {
      //deletelineVE
      const i = parseInt(index);
      i1 = (i % (pu.nx + 1)) + parseInt(i / (pu.nx + 1)) * pu.nx;
      if (i % (pu.nx + 1) === pu.nx) {
        i2 = pu.centerlist[i1 - 1] + 1;
      } else {
        i2 = pu.centerlist[i1];
      }
      key = pu.point[i2].surround[0] + "," + pu.point[i2].surround[3];
      pu[qa].deletelineE[key] = rtext_qa[qa][25][i];
    }
  }
}
