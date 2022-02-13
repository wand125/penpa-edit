function saveimage_window(pu) {
  var downloadLink = document.getElementById("download_link");
  var win = window.open();
  var address = pu.resizecanvas();
  win.document.write("<img src='" + address + "'/>");
}

function savetext() {
  document.getElementById("modal-save").style.display = "block";
  document.getElementById("savetextarea")["value"] = "";
}

function expansion() {
  document.getElementById("modal-save2").style.display = "block";
}

function solution_open() {
  document.getElementById("modal-save2-solution").style.display = "block";
  document.getElementById("modal-save2-pp").style.display = "none";
}

function pp_file_open() {
  document.getElementById("modal-save2-solution").style.display = "none";
  document.getElementById("modal-save2-pp").style.display = "block";
}

function savetext_edit(pu) {
  var text = pu.maketext();
  document.getElementById("savetextarea")["value"] = text;
}

function savetext_solve(pu) {
  var text = pu.maketext_solve();
  document.getElementById("savetextarea")["value"] = text;
}

function savetext_withsolution(pu) {
  var text = pu.maketext_solve_solution();
  document.getElementById("savetextarea")["value"] = text;
  document.getElementById("modal-save2").style.display = "none";
}

function make_ppfile(pu) {
  var text = pu.maketext_ppfile();
  document.getElementById("savetextarea")["value"] = text;
}

function savetext_copy() {
  var textarea = document.getElementById("savetextarea") as HTMLTextAreaElement;
  textarea.select();
  var range = document.createRange();
  range.selectNodeContents(textarea);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  textarea.setSelectionRange(0, 1e5);
  if (document.getElementById("english")["value"] === "English") {
    alert("コピーしました。");
  } else {
    alert("Copied.");
  }
  document.execCommand("copy");
}

function savetext_download() {
  const text = document.getElementById("savetextarea")["value"];
  const downloadLink = document.getElementById("download_link");
  let filename = document.getElementById("savetextname")["value"];
  if (filename.indexOf(".") === -1) {
    filename += ".txt";
  }
  var blob = new Blob([text], { type: "text/plain" });
  var ua = window.navigator.userAgent.toLowerCase();
  var str_sym = '\\/:*?"<>|';
  var valid_name = 1;
  for (var i = 0; i < filename.length; i++) {
    if (str_sym.indexOf(filename[i]) != -1) {
      valid_name = 0;
    }
  }
  if (valid_name) {
    if (
      ua.indexOf("safari") !== -1 &&
      ua.indexOf("chrome") === -1 &&
      ua.indexOf("edge") === -1
    ) {
      //safari
      window.open(
        "data:text/plain;base64," + window["Base64"].encode(text),
        "_blank"
      );
    } else if (window.navigator["msSaveBlob"]) {
      // for IE
      window.navigator["msSaveBlob"](blob, filename);
    } else {
      downloadLink["href"] = URL.createObjectURL(blob);
      downloadLink["target"] = "_blank";
      downloadLink["download"] = filename;
      downloadLink.click();
    }
  } else {
    if (document.getElementById("english")["value"] === "English") {
      alert('ファイル名に使えない文字列\\/:*?"<>|が含まれています。');
    } else {
      alert("\\/:*?\"<>| can't be used.");
    }
  }
}

export const saveimage = () => {
  document.getElementById("modal-image").style.display = "block";
};

function saveimage_download(pu) {
  var downloadLink = document.getElementById(
    "download_link"
  ) as HTMLAnchorElement;
  var filename = document.getElementById("saveimagename")["value"];
  if (filename.slice(-4) != ".png") {
    filename += ".png";
  }
  var str_sym = '\\/:*?"<>|';
  var valid_name = 1;
  for (var i = 0; i < filename.length; i++) {
    if (str_sym.indexOf(filename[i]) != -1) {
      valid_name = 0;
    }
  }

  if (valid_name) {
    if (pu.canvas.msToBlob) {
      var blob = pu.canvas.msToBlob();
      window.navigator["msSaveBlob"](blob, filename);
    } else {
      downloadLink.href = pu.resizecanvas();
      downloadLink.download = filename;
      downloadLink.click();
    }
  } else {
    if (document.getElementById("english")["value"] === "English") {
      alert('ファイル名に使えない文字列\\/:*?"<>|が含まれています。');
    } else {
      alert("\\/:*?\"<>| can't be used.");
    }
  }
}

function savetext_window() {
  var text = document.getElementById("savetextarea")["value"];
  if (text) {
    window.open(text);
  }
}
