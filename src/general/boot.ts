import { boot_parameters } from "./boot_parameters";
import { create } from "./create";

export const boot = (state) => {
  var obj = document.getElementById("dvique");
  var canvas = document.createElement("canvas");
  canvas.id = "canvas";
  obj.appendChild(canvas);
  boot_parameters();

  var urlParam = location.search.substring(1);
  if (urlParam) {
    load(state.pu, urlParam);
  } else {
    create(state);
  }

  //翻訳、ボタン色サイズ調整
  var language = (
    navigator["browserLanguage"] ||
    navigator.language ||
    navigator["userLanguage"]
  ).substr(0, 2);
  if (language != "ja") {
    document.getElementById("english")["value"] = "English";
  } else {
    document.getElementById("english")["value"] = "JP";
  }
  trans();
};
