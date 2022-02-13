function changetype() {
  var gridtype = document.getElementById("gridtype")["value"];
  var type = [
    "name_size2",
    "nb_size2",
    "name_space2",
    "name_space3",
    "name_space4",
    "nb_space2",
    "nb_space3",
    "nb_space4",
  ];
  var type2 = ["name_space1", "nb_space1"];
  switch (gridtype) {
    case "square":
      for (var i of type) {
        document.getElementById(i).style.display = "inline";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "inline";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "ヨコ：";
        document.getElementById("name_space1").innerHTML = "上：";
      } else {
        document.getElementById("name_size1").innerHTML = "Width：";
        document.getElementById("name_space1").innerHTML = "Over：";
      }
      document.getElementById("nb_size1")["value"] = 10;
      document.getElementById("nb_size2")["value"] = 10;
      document.getElementById("nb_size3")["value"] = 38;
      document.getElementById("nb_space1")["value"] = 0;
      document.getElementById("nb_space2")["value"] = 0;
      document.getElementById("nb_space3")["value"] = 0;
      document.getElementById("nb_space4")["value"] = 0;
      break;
    case "hex":
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "inline";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
        document.getElementById("name_space1").innerHTML = "外周：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
        document.getElementById("name_space1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 5;
      document.getElementById("nb_size3")["value"] = 40;
      document.getElementById("nb_space1")["value"] = 0;
      break;
    case "tri":
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "inline";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
        document.getElementById("name_space1").innerHTML = "外周：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
        document.getElementById("name_space1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 6;
      document.getElementById("nb_size3")["value"] = 60;
      document.getElementById("nb_space1")["value"] = 0;
      break;
    case "pyramid":
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "inline";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
        document.getElementById("name_space1").innerHTML = "外周：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
        document.getElementById("name_space1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 6;
      document.getElementById("nb_size3")["value"] = 50;
      document.getElementById("nb_space1")["value"] = 0;
      break;
    case "iso":
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "none";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 5;
      document.getElementById("nb_size3")["value"] = 34;
      break;
    case "truncated_square":
      for (var i of type2) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 5;
      document.getElementById("nb_size3")["value"] = 32;
      break;
    case "tetrakis_square":
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "none";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 4;
      document.getElementById("nb_size3")["value"] = 32;
      break;
    case "snub_square":
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "none";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 4;
      document.getElementById("nb_size3")["value"] = 38;
      break;
    case "cairo_pentagonal":
      for (var i of type) {
        document.getElementById(i).style.display = "none";
      }
      for (var i of type2) {
        document.getElementById(i).style.display = "none";
      }
      if (document.getElementById("english")["value"] === "English") {
        document.getElementById("name_size1").innerHTML = "一辺：";
      } else {
        document.getElementById("name_size1").innerHTML = "Side：";
      }
      document.getElementById("nb_size1")["value"] = 4;
      document.getElementById("nb_size3")["value"] = 38;
      break;
  }
}
