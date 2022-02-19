import { CreateCheck, DeleteCheck, edge_onoff, newboard, newgrid, newgrid_r, newsize, panel_onoff, ResetCheck, rotation } from "../general/general";
import { expansion, make_ppfile, pp_file_open, saveimage, saveimage_download, savetext, savetext_copy, savetext_download, savetext_edit, savetext_solve, savetext_withsolution, solution_open } from "../general/save";
import { State } from "../State";
import { onDown } from "./Control";

export const window_click = (state : State, e) => {
  //modalwindow
  if (e.target.className === "modal") {
    document.getElementById(e.target.id).style.display = "none";
    e.preventDefault();
  }

  const pu = state.pu;
  const panel_pu = state.panel_pu;

  const canvas = document.createElement("canvas");
  const statedController = (func) => {
    return (e) => {
      func(pu, canvas, e);
    };
  };

  switch (e.target.id) {
    //canvas
    case "canvas":
      document.getElementById("inputtext").blur(); //テキストボックスからフォーカスを外す
      statedController(onDown)(e);
      if (state.checkms === 0) {
        e.preventDefault();
      }
      break;
    //top/bottom button
    case "newboard":
      newboard();
      e.preventDefault();
      break;
    case "rotation":
      rotation();
      e.preventDefault();
      break;
    case "newsize":
      newsize();
      e.preventDefault();
      break;
    case "saveimage":
      saveimage();
      e.preventDefault();
      break;
    case "savetext":
      savetext();
      e.preventDefault();
      break;
    //case "duplicate":
    //duplicate();
    //  break;
    case "tb_undo":
      pu.undo();
      e.preventDefault();
      break;
    case "tb_redo":
      pu.redo();
      e.preventDefault();
      break;
    case "tb_reset":
      ResetCheck(pu);
      break;
    case "tb_delete":
      DeleteCheck(pu);
      break;

    //panel_menu
    case "panel_1_lbmenu":
      panel_pu.mode_set("number");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_A_lbmenu":
      panel_pu.mode_set("alphabet");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_a_lbmenu":
      panel_pu.mode_set("alphabet_s");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_!_lbmenu":
      panel_pu.mode_set("key_symbol");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_ja_K_lbmenu":
      panel_pu.mode_set("ja_K");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_ja_H_lbmenu":
      panel_pu.mode_set("ja_H");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_Text_lbmenu":
      panel_pu.mode_set("Text");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_Kan_lbmenu":
      panel_pu.mode_set("Kan");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_Rome_lbmenu":
      panel_pu.mode_set("Rome");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_Greek_lbmenu":
      panel_pu.mode_set("Greek");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_europe_lbmenu":
      panel_pu.mode_set("europe");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_Cyrillic_lbmenu":
      panel_pu.mode_set("Cyrillic");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_Chess_lbmenu":
      panel_pu.mode_set("Chess");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_card_lbmenu":
      panel_pu.mode_set("card");
      panel_pu.select_close();
      e.preventDefault();
      break;
    case "panel_select_lbmenu":
      panel_pu.select_open();
      e.preventDefault();
      break;
    case "closeBtn_input1":
      panel_pu.inputtext();
      e.preventDefault();
      break;
    case "closeBtn_input2":
      panel_pu.cleartext();
      e.preventDefault();
      break;
    case "float-canvas":
      f_mdown(pu, panel_pu, e);
      if (state.checkms === 0) {
        e.preventDefault();
      }
      break;
    //savetext
    case "address_edit":
      savetext_edit(pu);
      e.preventDefault();
      break;
    case "address_solve":
      savetext_solve(pu);
      e.preventDefault();
      break;
    case "expansion":
      expansion();
      e.preventDefault();
      break;
    case "pp_file":
      make_ppfile(pu);
      e.preventDefault();
      break;
    case "savetextarea":
      return;
    case "savetextname":
      return;
    case "savetextarea_pp":
      return;
    case "closeBtn_save1":
      savetext_copy();
      e.preventDefault();
      break;
    case "closeBtn_save2":
      savetext_download();
      e.preventDefault();
      break;
    //case "closeBtn_save3":
    //  savetext_window();
    //  break;
    case "closeBtn_save4":
      document.getElementById("modal-save").style.display = "none";
      e.preventDefault();
      break;
    case "closeBtn_save5":
      savetext_withsolution(pu);
      e.preventDefault();
      break;
    case "solution_open":
      solution_open();
      e.preventDefault();
      break;
    case "pp_file_open":
      pp_file_open();
      e.preventDefault();
      break;
    case "rt_right":
      pu.rotate_right();
      e.preventDefault();
      break;
    case "rt_left":
      pu.rotate_left();
      e.preventDefault();
      break;
    case "rt_LR":
      pu.rotate_LR();
      e.preventDefault();
      break;
    case "rt_UD":
      pu.rotate_UD();
      e.preventDefault();
      break;
    case "rt_center":
      pu.rotate_center();
      e.preventDefault();
      break;
    case "rt_size":
      pu.rotate_size();
      e.preventDefault();
      break;
    case "rt_reset":
      pu.rotate_reset();
      e.preventDefault();
      break;
    case "closeBtn_rotate1":
      document.getElementById("modal-rotate").style.display = "none";
      e.preventDefault();
      break;
    //saveimage
    case "nb_margin1_lb":
      document.getElementById("nb_margin1")["checked"] = true;
      e.preventDefault();
      break;
    case "nb_margin2_lb":
      document.getElementById("nb_margin2")["checked"] = true;
      e.preventDefault();
      break;
    case "saveimagename":
      return;
    //case "closeBtn_image1":
    //  saveimage_window();
    //  break;
    case "closeBtn_image2":
      saveimage_download(pu);
      e.preventDefault();
      break;
    case "closeBtn_image3":
      document.getElementById("modal-image").style.display = "none";
      e.preventDefault();
      break;
    //newboard
    case "nb_size1":
    case "nb_size2":
    case "nb_size3":
      return;
    //textbox
    case "nb_space1":
    case "nb_space2":
    case "nb_space3":
    case "nb_space4":
      return;
    //textbox
    case "nb_grid1_lb":
    case "nb_grid2_lb":
    case "nb_grid3_lb":
    case "nb_lat1_lb":
    case "nb_lat2_lb":
    case "nb_out1_lb":
    case "nb_out2_lb":
      pu.mode_grid(e.target.id.slice(0, -3));
      e.preventDefault();
      break;
    case "closeBtn_nb1":
      CreateCheck(state);
      e.preventDefault();
      break;
    case "closeBtn_nb2":
      newgrid(pu, panel_pu);
      e.preventDefault();
      break;
    case "closeBtn_nb3":
      document.getElementById("modal").style.display = "none";
      e.preventDefault();
      break;
    //newsize
    case "nb_size3_r":
      return;
    case "closeBtn_size1":
      newgrid_r(pu, panel_pu);
      e.preventDefault();
      break;
    case "closeBtn_size2":
      document.getElementById("modal-newsize").style.display = "none";
      e.preventDefault();
      break;
    case "float-key-header":
      mdown(e);
      e.preventDefault();
      break;
    case "float-key-header-lb":
      mdown(e);
      e.preventDefault();
      break;
    //buttons
    case "panel_button":
      panel_onoff(pu);
      e.preventDefault();
      break;
    case "edge_button":
      edge_onoff(pu);
      e.preventDefault();
      break;
    case "pu_q_label":
      pu.mode_qa("pu_q");
      e.preventDefault();
      break;
    case "pu_a_label":
      pu.mode_qa("pu_a");
      e.preventDefault();
      break;
  }
  //メインモード
  if (e.target.id.slice(0, 3) === "mo_") {
    pu.mode_set(e.target.id.slice(3, -3));
    e.preventDefault();
  }
  //サブモード
  if (e.target.id.slice(0, 4) === "sub_") {
    pu.submode_check(e.target.id.slice(0, -3));
    e.preventDefault();
  }
  //スタイルモード
  if (e.target.id.slice(0, 3) === "st_") {
    pu.stylemode_check(e.target.id.slice(0, -3));
    e.preventDefault();
  }
  //コンビモード
  if (e.target.id.slice(0, 9) === "combisub_") {
    pu.subcombimode(e.target.id.slice(9));
    e.preventDefault();
  }
  //シンボル
  if (e.target.id.slice(0, 3) === "ms_") {
    state.checkms = 1;
    pu.subsymbolmode(e.target.id.slice(3));
    e.preventDefault();
    //シンボルホバーetc
  } else if (e.target.id.slice(0, 2) === "ms") {
    state.checkms = 1;
    return;
  } else if (state.checkms === 1) {
    state.checkms = 0;
    return;
  }
};
