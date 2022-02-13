import { Puzzle_cairo_pentagonal } from "../model/PuzzleCairoPentagonal";
import { Puzzle_hex } from "../model/PuzzleHex";
import { Puzzle_iso } from "../model/PuzzleIso";
import { Puzzle_pyramid } from "../model/PuzzlePyramid";
import { Puzzle_snub_square } from "../model/PuzzleSnubSquare";
import { Puzzle_square } from "../model/PuzzleSquare";
import { Puzzle_tetrakis_square } from "../model/PuzzleTetrakisSquare";
import { Puzzle_tri } from "../model/PuzzleTri";
import { Puzzle_truncated_square } from "../model/PuzzleTruncatedSquare";

export const make_class = (gridtype) => {
  var size = parseInt(document.getElementById("nb_size3")["value"]);
  let pu = null;
  switch (gridtype) {
    case "square":
      var nx = parseInt(document.getElementById("nb_size1")["value"], 10);
      var ny = parseInt(document.getElementById("nb_size2")["value"], 10);
      var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
      var space2 = parseInt(document.getElementById("nb_space2")["value"], 10);
      var space3 = parseInt(document.getElementById("nb_space3")["value"], 10);
      var space4 = parseInt(document.getElementById("nb_space4")["value"], 10);
      if (
        nx <= 32 &&
        nx > 0 &&
        ny <= 32 &&
        ny > 0 &&
        12 <= size &&
        size <= 60 &&
        space1 + space2 < ny &&
        space3 + space4 < nx
      ) {
        pu = new Puzzle_square(nx, ny, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~32 表示サイズ:12~60");
        } else {
          alert("Grid:1~32 Display size:12~60");
        }
      }
      break;
    case "hex":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
      if (n0 <= 12 && n0 > 0 && 12 <= size && size <= 60 && space1 < n0) {
        pu = new Puzzle_hex(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~12 表示サイズ:12~60");
        } else {
          alert("Grid:1~12 Display size:12~60");
        }
      }
      break;
    case "tri":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
      if (n0 <= 20 && n0 > 0 && 12 <= size && size <= 60 && space1 < n0 / 3) {
        pu = new Puzzle_tri(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~20 表示サイズ:12~60");
        } else {
          alert("Grid:1~20 Display size:12~60");
        }
      }
      break;
    case "pyramid":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
      if (n0 <= 20 && n0 > 0 && 12 <= size && size <= 60 && space1 < n0 / 3) {
        pu = new Puzzle_pyramid(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~20 表示サイズ:12~60");
        } else {
          alert("Grid:1~20 Display size:12~60");
        }
      }
      break;
    case "iso":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      if (n0 <= 16 && n0 > 0 && 12 <= size && size <= 60) {
        pu = new Puzzle_iso(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~16 表示サイズ:12~60");
        } else {
          alert("Grid:1~16 Display size:12~60");
        }
      }
      break;
    case "truncated_square":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
        pu = new Puzzle_truncated_square(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~10 表示サイズ:12~60");
        } else {
          alert("Grid:1~10 Display size:12~60");
        }
      }
      break;
    case "tetrakis_square":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
        pu = new Puzzle_tetrakis_square(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~10 表示サイズ:12~60");
        } else {
          alert("Grid:1~10 Display size:12~60");
        }
      }
      break;
    case "snub_square":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
        pu = new Puzzle_snub_square(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~10 表示サイズ:12~60");
        } else {
          alert("Grid:1~10 Display size:12~60");
        }
      }
      break;
    case "cairo_pentagonal":
      var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
      if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
        pu = new Puzzle_cairo_pentagonal(n0, n0, size);
      } else {
        if (document.getElementById("english")["value"] === "English") {
          alert("一辺:1~10 表示サイズ:12~60");
        } else {
          alert("Grid:1~10 Display size:12~60");
        }
      }
      break;
  }
  return pu;
};
