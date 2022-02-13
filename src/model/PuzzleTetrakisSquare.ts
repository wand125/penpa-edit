import { Point } from "./Point";
import { Puzzle_truncated_square } from "./PuzzleTruncatedSquare";

export class Puzzle_tetrakis_square extends Puzzle_truncated_square {
  constructor(nx, ny, size) {
    //盤面情報
    super(nx, ny, size, "tetrakis_square");
    this.gridtype = "tetrakis_square";
    this.nx = nx;
    this.ny = ny;
    this.nx0 = this.nx + 2;
    this.ny0 = this.ny * 2 + 2;
    this.margin = -1; //for arrow of number pointing outside of the grid

    this.width0 = this.nx + 6;
    this.height0 = this.ny;
    this.width_c = this.width0;
    this.height_c = this.height0;
    this.width = this.width_c;
    this.height = this.height_c;
    this.canvasx = this.width_c * this.size;
    this.canvasy = this.height_c * this.size;
    this.space = [];
    this.size = size;
    this.onoff_symbolmode_list = {
      cross: 4,
      arrow_cross: 4,
      arrow_fourtip: 4,
      degital: 7,
      degital_f: 7,
      arrow_eight: 8,
      arrow_fouredge_B: 8,
      arrow_fouredge_G: 8,
      arrow_fouredge_E: 8,
      dice: 9,
      polyomino: 9,
    };
    this.reset();
    this.erase_buttons();
  }

  create_point() {
    var k = 0,
      k0;
    var nx = this.nx0;
    var ny = this.ny0;
    var r;
    var adjacent, surround, type, use, neighbor;
    var point = [];
    adjacent = [];
    surround = [];
    neighbor = [];
    //center
    for (var i = 0; i < nx; i++) {
      for (var j = 0; j < ny; j++) {
        k0 = k;
        type = 1;
        if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
          use = -1;
        } else {
          use = 1;
        }
        point[k] = new Point(
          (i * 2 + (j % 2) + 0.5) * this.size,
          (j + 0.5) * this.size,
          type,
          adjacent,
          surround,
          use,
          neighbor,
          [],
          0
        );
        k++;
        point[k] = new Point(
          (i * 2 + (j % 2) + 1.5) * this.size,
          (j + 0.5) * this.size,
          type,
          adjacent,
          surround,
          use,
          neighbor,
          [],
          1
        );
        k++;

        type = 0;
        r = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
        for (var m = 0; m < 8; m++) {
          point[k] = new Point(
            point[k0].x +
              r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 45 + 22.5)),
            point[k0].y +
              r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 45 + 22.5)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0].surround = point[k0].surround.concat([k]); //pushやspliceだと全てのpointが更新されてしまう
          point[k].surround = point[k].surround.concat([k0]);
          k++;
        }
        r = Math.sqrt(2) - 1;
        for (var m = 0; m < 4; m++) {
          point[k] = new Point(
            point[k0 + 1].x +
              r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 90 + 45)),
            point[k0 + 1].y +
              r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 90 + 45)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
          point[k].surround = point[k].surround.concat([k0 + 1]);
          k++;
        }

        //type = 2-4;
        r = 0.5 * Math.sqrt(2);
        for (var m = 0; m < 8; m++) {
          if (m % 2 === 0) {
            type = 2;
          } else {
            type = 3;
          }
          point[k] = new Point(
            point[k0].x + r * this.size * Math.cos(((2 * Math.PI) / 8) * m),
            point[k0].y + r * this.size * Math.sin(((2 * Math.PI) / 8) * m),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0].neighbor = point[k0].neighbor.concat([k]); //pushやspliceだとpointが全て更新されてしまう
          if (m === 0) {
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
            point[k - 5].neighbor = point[k - 5].neighbor.concat([k]);
          } else {
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
            point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
          }
          k++;
        }
        type = 2;
        r = 1 - 0.5 * Math.sqrt(2);
        for (var m = 0; m < 4; m++) {
          point[k] = new Point(
            point[k0 + 1].x + r * this.size * Math.cos(((2 * Math.PI) / 4) * m),
            point[k0 + 1].y + r * this.size * Math.sin(((2 * Math.PI) / 4) * m),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 1].neighbor = point[k0 + 1].neighbor.concat([k]);
          if (m === 0) {
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
            point[k - 9].neighbor = point[k - 9].neighbor.concat([k]);
          } else {
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
            point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
          }
          k++;
        }
        type = 4;
        r = 0.5;
        for (var m = 0; m < 4; m++) {
          point[k] = new Point(
            point[k0 + 1].x + r * this.size * Math.cos(((2 * Math.PI) / 4) * m),
            point[k0 + 1].y + r * this.size * Math.sin(((2 * Math.PI) / 4) * m),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          k++;
        }
      }
    }
    // 重複判定
    for (var i = 0; i < point.length; i++) {
      if (!point[i]) {
        continue;
      }
      for (var j = i + 1; j < point.length; j++) {
        if (!point[j]) {
          continue;
        }
        if (
          (point[i].x - point[j].x) ** 2 + (point[i].y - point[j].y) ** 2 <
          0.01
        ) {
          //surround,neighbor置換
          for (var k = 0; k < point.length; k++) {
            if (!point[k]) {
              continue;
            }
            for (var n = 0; n < point[k].surround.length; n++) {
              if (point[k].surround[n] === j) {
                point[k].surround.splice(n, 1, i);
              }
            }
            for (var n = 0; n < point[k].neighbor.length; n++) {
              if (point[k].neighbor[n] === j) {
                if (point[k].neighbor.indexOf(i) === -1) {
                  point[k].neighbor.splice(n, 1, i); //無ければ置き換え
                } else {
                  point[k].neighbor.splice(n, 1); //あったら削除
                }
              }
            }
          }
          for (var n = 0; n < point[j].surround.length; n++) {
            //削除された点のsurroundを移し替え
            if (point[i].surround.indexOf(point[j].surround[n]) === -1) {
              point[i].surround = point[i].surround.concat([
                point[j].surround[n],
              ]);
            }
          }
          for (var n = 0; n < point[j].neighbor.length; n++) {
            //削除された点のneighborを移し替え
            if (point[i].neighbor.indexOf(point[j].neighbor[n]) === -1) {
              point[i].neighbor = point[i].neighbor.concat([
                point[j].neighbor[n],
              ]);
            }
          }
          delete point[j];
          //置換ここまで
        }
      }
    }
    // adjacent作成
    for (var i = 0; i < point.length; i++) {
      if (!point[i] || point[i].type != 0) {
        continue;
      }
      for (var j = i + 1; j < point.length; j++) {
        if (!point[j] || point[j].type != 0) {
          continue;
        }
        for (var k = 0; k < point[i].neighbor.length; k++) {
          if (point[j].neighbor.indexOf(point[i].neighbor[k]) != -1) {
            point[i].adjacent = point[i].adjacent.concat([j]);
            point[j].adjacent = point[j].adjacent.concat([i]);
          }
        }
      }
    }
    for (var i = 0; i < point.length; i++) {
      if (!point[i] || point[i].type != 1) {
        continue;
      }
      for (var j = i + 1; j < point.length; j++) {
        if (!point[j] || point[j].type != 1) {
          continue;
        }
        for (var k = 0; k < point[i].neighbor.length; k++) {
          if (point[j].neighbor.indexOf(point[i].neighbor[k]) != -1) {
            point[i].adjacent = point[i].adjacent.concat([j]);
            point[j].adjacent = point[j].adjacent.concat([i]);
          }
        }
      }
    }
    //use更新
    for (var i = 0; i < point.length; i++) {
      if (!point[i] || point[i].type != 0 || point[i].use === -1) {
        continue;
      }
      for (var k = 0; k < point[i].neighbor.length; k++) {
        point[point[i].neighbor[k]].use = 1;
      }
      for (var k = 0; k < point[i].surround.length; k++) {
        point[point[i].surround[k]].use = 1;
      }
    }
    this.point = point;
  }

  reset_frame() {
    this.create_point();
    this.space = [];

    this.centerlist = [];
    for (var i = 0; i < this.point.length; i++) {
      if (
        this.point[i] &&
        this.point[i].use === 1 &&
        this.point[i].type === 0
      ) {
        this.centerlist.push(i);
      }
    }
    this.search_center();
    this.width_c = this.width;
    this.height_c = this.height;
    this.center_n0 = this.center_n;
    this.canvasxy_update();
    this.canvas_size_setting();
    this.point_move(
      this.canvasx * 0.5 - this.point[this.center_n].x + 0.5,
      this.canvasy * 0.5 - this.point[this.center_n].y + 0.5,
      this.theta
    );

    this.make_frameline();
    this.cursol = this.centerlist[0];
    this.cursolS = 4 * this.nx0 * this.ny0 + 4 + 4 * this.nx0;
  }

  search_center() {
    var xmax = 0,
      xmin = 1e5;
    var ymax = 0,
      ymin = 1e5;
    for (var i of this.centerlist) {
      if (this.point[i].x > xmax) {
        xmax = this.point[i].x;
      }
      if (this.point[i].x < xmin) {
        xmin = this.point[i].x;
      }
      if (this.point[i].y > ymax) {
        ymax = this.point[i].y;
      }
      if (this.point[i].y < ymin) {
        ymin = this.point[i].y;
      }
    }
    var x = (xmax + xmin) / 2;
    var y = (ymax + ymin) / 2;
    this.width = (xmax - xmin) / this.size + 2.5;
    this.height = (ymax - ymin) / this.size + 2.5;

    var min0,
      min = 10e6;
    let num = 0;
    for (const i in this.point) {
      min0 = (x - this.point[i].x) ** 2 + (y - this.point[i].y) ** 2;
      if (min0 < min) {
        min = min0;
        num = parseInt(i);
      }
    }
    this.center_n = Math.floor(num);
  }

  type_set() {
    var type;
    switch (this.mode[this.mode.qa].edit_mode) {
      case "surface":
      case "board":
        type = [0];
        break;
      case "symbol":
      case "move":
        if (document.getElementById("edge_button").textContent === "OFF") {
          type = [0];
        } else {
          type = [0, 1, 3, 4];
        }
        break;
      case "number":
        if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2"
        ) {
          type = [0];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3"
        ) {
          type = [5];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9"
        ) {
          type = [6];
        } else {
          if (document.getElementById("edge_button").textContent === "OFF") {
            type = [0];
          } else {
            type = [0, 1, 3, 4];
          }
        }
        break;
      case "line":
        if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4"
        ) {
          type = [3, 4];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2"
        ) {
          type = [0, 1];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5"
        ) {
          type = [0, 2, 3];
        } else {
          type = [0];
        }
        break;
      case "lineE":
        if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4"
        ) {
          type = [3, 4];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2"
        ) {
          type = [0, 1];
        } else {
          type = [1];
        }
        break;
      case "special":
        if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
          "polygon"
        ) {
          type = [1];
        } else {
          type = [0, 1];
        }
        break;
      case "combi":
        switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
          case "tents":
          case "linex":
            type = [0, 3, 4];
            break;
          case "edgexoi":
            type = [0, 1, 3, 4];
            break;
          case "blpo":
          case "blwh":
          case "battleship":
          case "star":
          case "magnets":
          case "lineox":
          case "yajilin":
          case "hashi":
          case "arrowS":
          case "shaka":
          case "numfl":
          case "alfl":
            type = [0];
            break;
          case "edgesub":
            type = [0, 1];
            break;
        }
        break;
    }
    return type;
  }

  recalculate_num(x, y, num) {
    var min0,
      min = 10e6;
    var num0 = 0;
    var r0 = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
    var r1 = Math.sqrt(2) - 1;
    if (this.point[num].type != 1) {
      return num;
    }

    for (var i = 0; i < this.point.length; i++) {
      if (
        this.point[i] &&
        this.point[i].type === 1 &&
        this.point[i].use === 1
      ) {
        min0 = (x - this.point[i].x) ** 2 + (y - this.point[i].y) ** 2;
        if (min0 < min) {
          if (this.point[i].type2 === 0 && min0 > (r0 * this.size) ** 2) {
            continue;
          } //円形の内側に入っていなければ更新しない
          if (this.point[i].type2 === 1 && min0 > (r1 * this.size) ** 2) {
            continue;
          }
          min = min0;
          num = i;
        }
      }
    }
    return parseInt(num);
  }

  coord_p_edgex(x, y) {
    var min0,
      min = 10e6;
    var num = 0;
    for (var i = 0; i < this.point.length; i++) {
      if (this.point[i] && this.type.indexOf(this.point[i].type) != -1) {
        min0 = (x - this.point[i].x) ** 2 + (y - this.point[i].y) ** 2;
        if (min0 < min) {
          if (this.point[i].type === 2 || this.point[i].type === 3) {
            if (min0 > (0.3 * this.size) ** 2) {
              continue;
            }
          }
          min = min0;
          num = i;
        }
      }
    }
    return Math.floor(num);
  }

  rotate_left() {
    this.theta =
      (this.theta - 45 * this.reflect[0] * this.reflect[1] + 360) % 360;
    this.point_move(0, 0, -45);
    this.redraw();
  }

  rotate_right() {
    this.theta =
      (this.theta + 45 * this.reflect[0] * this.reflect[1] + 360) % 360;
    this.point_move(0, 0, +45);
    this.redraw();
  }

  ////////////////draw/////////////////////

  draw() {
    this.draw_surface("pu_q");
    this.draw_surface("pu_a");
    //    this.draw_squareframe("pu_q");
    //  this.draw_squareframe("pu_a");
    //    this.draw_thermo("pu_q");
    //    this.draw_thermo("pu_a");
    //    this.draw_arrowsp("pu_q");
    //  this.draw_arrowsp("pu_a");
    this.draw_symbol("pu_q", 1);
    this.draw_symbol("pu_a", 1);
    //  this.draw_wall("pu_q");
    //  this.draw_wall("pu_a");
    this.draw_frame();
    this.draw_polygonsp("pu_q");
    this.draw_polygonsp("pu_a");
    this.draw_freeline("pu_q");
    this.draw_freeline("pu_a");
    this.draw_line("pu_q");
    this.draw_line("pu_a");
    //this.draw_direction("pu_q");
    //this.draw_direction("pu_a");
    this.draw_lattice();
    this.draw_frameBold();
    this.draw_symbol("pu_q", 2);
    this.draw_symbol("pu_a", 2);
    //this.draw_cage("pu_q");
    //this.draw_cage("pu_a");
    this.draw_number("pu_q");
    this.draw_number("pu_a");
    this.draw_cursol();
    this.draw_freecircle();

    //this.draw_point();
  }
  draw_point() {
    set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
    for (var i in this.point) {
      if (this.point[i].type === 0) {
        this.ctx.fillStyle = "#000";
        if (this.point[i].use === 1) {
          this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
        }
      } else if (this.point[i].type === 1) {
        this.ctx.fillStyle = "blue";
        if (this.point[i].use === 1) {
          this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
        }
      } else if (this.point[i].type === 2) {
        this.ctx.fillStyle = "red";
        if (this.point[i].use === 1) {
          this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
        }
        this.ctx.fillStyle = "rgba(0,0,0,0)";
      } else if (this.point[i].type === 3) {
        this.ctx.fillStyle = "orange";
        if (this.point[i].use === 1) {
          this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
        }
        this.ctx.fillStyle = "rgba(0,0,0,0)";
      } else if (this.point[i].type === 4) {
        this.ctx.fillStyle = "green";
        if (this.point[i].use === 1) {
          this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
        }
        this.ctx.fillStyle = "rgba(0,0,0,0)";
      } else if (this.point[i].type === 5) {
        this.ctx.fillStyle = "green";
        //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
        this.ctx.fillStyle = "rgba(0,0,0,0)";
      }
      this.ctx.beginPath();
      //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
      this.ctx.fill();
    }
  }

  rotate_theta(th) {
    th = th + this.theta;
    if (this.reflect[0] === -1) {
      th = (180 - th + 360) % 360;
    }
    if (this.reflect[1] === -1) {
      th = (360 - th + 360) % 360;
    }
    th = (th / 180) * Math.PI;
    return th;
  }
}