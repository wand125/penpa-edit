export const set_solvemode = (pu) => {
  pu.mmode = "solve";
  pu.mode.qa = "pu_a";
  document.getElementById("title").innerHTML = "解答モード";
  document.getElementById("nb_size3_r")["value"] =
    document.getElementById("nb_size3")["value"];
  document.getElementById("newsize").style.display = "inline";
  document.getElementById("pu_a")["checked"] = true;
  document.getElementById("pu_q_label").style.display = "none";
  document.getElementById("newboard").style.display = "none";
  document.getElementById("rotation").style.display = "none";
  document.getElementById("mo_cage_lb").style.display = "none";
  document.getElementById("mo_special_lb").style.display = "none";
  document.getElementById("mo_board_lb").style.display = "none";
  document.getElementById("sub_lineE5_lb").style.display = "none";
  document.getElementById("tb_delete")["value"] = "解答消去";
};
