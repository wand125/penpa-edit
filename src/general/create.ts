import { Panel } from "../model/Panel";
import { make_class } from "./makeClass";

export const create = (state) => {
  //盤面サイズ取得
  var gridtype = document.getElementById("gridtype")["value"];
  const pu = make_class(gridtype);
  state.pu = pu;
  pu.reset_frame(); //盤面描画
  //描画パネル
  const panel_pu = new Panel();
  state.panel_pu = panel_pu;
  panel_pu.draw_panel();
  pu.mode_set("surface"); //include redraw
}

export const create_newboard = (state) => {
  //盤面サイズ取得
  var mode = state.pu.mode;
  var gridtype = document.getElementById("gridtype")["value"];
  const pu = make_class(gridtype);
  state.pu = pu;
  pu.mode = mode;

  pu.reset_frame(); //盤面描画
  //描画
  state.panel_pu.draw_panel();
  document.getElementById("modal").style.display = "none";
  pu.mode_set(pu.mode[pu.mode.qa].edit_mode); //include redraw
}
