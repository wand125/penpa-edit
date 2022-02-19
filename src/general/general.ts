import { create_newboard } from "./create";


export const newboard = () => {
  document.getElementById("modal").style.display = "block";
}

export const rotation = () => {
  document.getElementById("modal-rotate").style.display = "block";
}

export const CreateCheck = (state) => {
  if (document.getElementById("english")["value"] === "English") {
    if (
      confirm(
        "現在の盤面がリセットされます\n\n 表示サイズ・グリッド線は「枠変更」で変更可能"
      )
    ) {
      create_newboard(state);
      state.pu.redraw();
    }
  } else {
    if (
      confirm(
        "Reset the Grid.\n\n Display size and a type of gridline can be changed from 'Change grid'."
      )
    ) {
      create_newboard(state);
      state.pu.redraw();
    }
  }
}

export const newgrid = (pu, panel_pu) => {
  var size = parseInt(document.getElementById("nb_size3")["value"]);
  if (15 <= size && size <= 60) {
    pu.reset_frame_newgrid();
    pu.redraw();
    panel_pu.draw_panel();
    document.getElementById("modal").style.display = "none";
  } else {
    if (document.getElementById("english")["value"] === "English") {
      alert("表示サイズ:15~60");
    } else {
      alert("Display size:15~60");
    }
  }
}

export const newgrid_r = (pu, panel_pu) => {
  var sizer = parseInt(document.getElementById("nb_size3_r")["value"], 10);
  document.getElementById("nb_size3")["value"] = sizer;
  if (15 <= sizer && sizer <= 60) {
    pu.reset_frame_newgrid();
    pu.size = sizer;
    pu.redraw();
    panel_pu.draw_panel();
    document.getElementById("modal-newsize").style.display = "none";
  } else {
    if (document.getElementById("english")["value"] === "English") {
      alert("表示サイズ:15~60");
    } else {
      alert("Display size:15~60");
    }
  }
}

export const newsize = () => {
  document.getElementById("modal-newsize").style.display = "block";
}

export const panel_onoff = (pu) => {
  if (document.getElementById("panel_button").textContent === "OFF") {
    document.getElementById("panel_button").textContent = "ON";
    document.getElementById("float-key").style.display = "block";
    document.getElementById("float-key-body").style.left = 0 + "px";
    document.getElementById("float-key-body").style.top = 0 + "px";
    document.getElementById("float-key-header").style.left = 0 + "px";
    document.getElementById("float-key-header").style.top = 0 + "px";
  } else {
    document.getElementById("panel_button").textContent = "OFF";
    document.getElementById("float-key").style.display = "none";
  }
  pu.redraw();
}

export const edge_onoff = (pu) => {
  if (document.getElementById("edge_button").textContent === "OFF") {
    document.getElementById("edge_button").textContent = "ON";
  } else {
    document.getElementById("edge_button").textContent = "OFF";
    pu.cursol = pu.centerlist[0];
  }
  pu.type = pu.type_set();
  pu.redraw();
}

export const ResetCheck = (pu) => {
  if (document.getElementById("english")["value"] === "English") {
    if (confirm("選択中の記号を消去します")) {
      pu.reset_selectedmode();
    }
  } else {
    if (confirm("Erase current selection")) {
      pu.reset_selectedmode();
    }
  }
}

export const DeleteCheck = (pu) => {
  var text;
  if (document.getElementById("english")["value"] === "English") {
    if (document.getElementById("pu_q")['checked']) {
      text = "問題";
    } else if (document.getElementById("pu_a")['checked']) {
      text = "解答";
    }
    if (confirm(text + "盤面をリセットします")) {
      pu.reset_board();
      pu.redraw();
    }
  } else {
    if (document.getElementById("pu_q")['checked']) {
      text = "Problem";
    } else if (document.getElementById("pu_a")['checked']) {
      text = "Solution";
    }
    if (confirm("Reset " + text + " grid.")) {
      pu.reset_board();
      pu.redraw();
    }
  }
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isEmptycontent(pu, pu_qa, array, num, value) {
  for (var i in pu[pu_qa][array]) {
    if (pu[pu_qa][array][i][num] === value) {
      return false;
    }
  }
  return true;
}

