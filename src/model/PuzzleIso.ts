import { Point } from "./Point";
import { Puzzle_truncated_square } from "./PuzzleTruncatedSquare";

export class Puzzle_iso extends Puzzle_truncated_square {
  constructor(nx, ny, size) {
    //盤面情報
    super(nx, ny, size, "iso");
    this.gridtype = "iso";
    this.nx = nx;
    this.ny = ny;
    this.nx0 = this.nx;
    this.ny0 = this.ny;
    this.margin = -1; //for arrow of number pointing outside of the grid

    this.width0 = this.nx + 6;
    this.height0 = this.ny + 6;
    this.width_c = this.width0;
    this.height_c = this.height0;
    this.width = this.width_c;
    this.height = this.height_c;
    this.canvasx = this.width_c * this.size;
    this.canvasy = this.height_c * this.size;
    this.space = [];
    this.size = size;
    this.onoff_symbolmode_list = {
      cross: 6,
      arrow_cross: 6,
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
    document.getElementById("sub_lineE2_lb").style.display = "inline-block";
  }

  create_point() {
    var k = 0,
      k0;
    var nx = this.nx0;
    var r1, r2, angle;
    var adjacent, surround, type, use, neighbor;
    var point = [];
    adjacent = [];
    surround = [];
    neighbor = [];
    use = 1;
    var offsetx, offsety;
    //center
    for (var j = 0; j < nx; j++) {
      for (var i = 0; i < nx; i++) {
        k0 = k;
        type = 0;
        offsetx = i * 0.5 * Math.sqrt(3) - j * 0.5 * Math.sqrt(3);
        offsety = -i * 0.5 - j * 0.5;
        point[k] = new Point(
          offsetx * this.size,
          (offsety - 0.5) * this.size,
          type,
          adjacent,
          surround,
          use,
          neighbor,
          [],
          1
        );
        k++;
        offsetx = -j * 0.5 * Math.sqrt(3);
        offsety = i - j * 0.5;
        point[k] = new Point(
          (offsetx - Math.sqrt(3) / 4) * this.size,
          (offsety + 0.25) * this.size,
          type,
          adjacent,
          surround,
          use,
          neighbor,
          [],
          2
        );
        k++;
        offsetx = j * 0.5 * Math.sqrt(3);
        offsety = i - j * 0.5;
        point[k] = new Point(
          (offsetx + Math.sqrt(3) / 4) * this.size,
          (offsety + 0.25) * this.size,
          type,
          adjacent,
          surround,
          use,
          neighbor,
          [],
          3
        );
        k++;

        type = 1;
        r1 = 0.5 * Math.sqrt(3);
        r2 = 0.5;
        for (var m = 0; m < 2; m++) {
          point[k] = new Point(
            point[k0].x +
              r1 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 0)),
            point[k0].y +
              r1 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 0)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0].surround = point[k0].surround.concat([k]);
          point[k].surround = point[k].surround.concat([k0]);
          if (m === 0) {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
          } else {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
          }
          k++;
          point[k] = new Point(
            point[k0].x +
              r2 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 90)),
            point[k0].y +
              r2 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 90)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0].surround = point[k0].surround.concat([k]);
          point[k].surround = point[k].surround.concat([k0]);
          if (m === 0) {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
          } else {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
          }
          k++;
        }
        for (var m = 0; m < 2; m++) {
          point[k] = new Point(
            point[k0 + 1].x +
              r1 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 60)),
            point[k0 + 1].y +
              r1 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 60)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
          point[k].surround = point[k].surround.concat([k0 + 1]);
          if (m === 0) {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
          } else {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
          }
          k++;
          point[k] = new Point(
            point[k0 + 1].x +
              r2 *
                this.size *
                Math.cos(((2 * Math.PI) / 360) * (m * 180 + 150)),
            point[k0 + 1].y +
              r2 *
                this.size *
                Math.sin(((2 * Math.PI) / 360) * (m * 180 + 150)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
          point[k].surround = point[k].surround.concat([k0 + 1]);
          if (m === 0) {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
          } else {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
          }
          k++;
        }
        for (var m = 0; m < 2; m++) {
          point[k] = new Point(
            point[k0 + 2].x +
              r1 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 - 60)),
            point[k0 + 2].y +
              r1 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 - 60)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 2].surround = point[k0 + 2].surround.concat([k]);
          point[k].surround = point[k].surround.concat([k0 + 2]);
          if (m === 0) {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
          } else {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
          }
          k++;
          point[k] = new Point(
            point[k0 + 2].x +
              r2 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 30)),
            point[k0 + 2].y +
              r2 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 30)),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 2].surround = point[k0 + 2].surround.concat([k]);
          point[k].surround = point[k].surround.concat([k0 + 2]);
          if (m === 0) {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
          } else {
            point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
          }
          k++;
        }

        type = 2;
        r1 = 0.5;
        angle = [30, 150, 210, 330];
        for (var m = 0; m < 4; m++) {
          point[k] = new Point(
            point[k0].x +
              r1 * this.size * Math.cos(((2 * Math.PI) / 360) * angle[m]),
            point[k0].y +
              r1 * this.size * Math.sin(((2 * Math.PI) / 360) * angle[m]),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0].neighbor = point[k0].neighbor.concat([k]);
          if (m === 3) {
            point[k - 15].neighbor = point[k - 15].neighbor.concat([k]);
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
          } else {
            point[k - 11].neighbor = point[k - 11].neighbor.concat([k]);
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
          }
          k++;
        }
        angle = [30, 90, 210, 270];
        for (var m = 0; m < 4; m++) {
          point[k] = new Point(
            point[k0 + 1].x +
              r1 * this.size * Math.cos(((2 * Math.PI) / 360) * angle[m]),
            point[k0 + 1].y +
              r1 * this.size * Math.sin(((2 * Math.PI) / 360) * angle[m]),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 1].neighbor = point[k0 + 1].neighbor.concat([k]);
          if (m === 0) {
            point[k - 9].neighbor = point[k - 9].neighbor.concat([k]);
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
          } else {
            point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
          }
          k++;
        }
        angle = [-30, 90, 150, 270];
        for (var m = 0; m < 4; m++) {
          point[k] = new Point(
            point[k0 + 2].x +
              r1 * this.size * Math.cos(((2 * Math.PI) / 360) * angle[m]),
            point[k0 + 2].y +
              r1 * this.size * Math.sin(((2 * Math.PI) / 360) * angle[m]),
            type,
            adjacent,
            surround,
            use,
            neighbor
          );
          point[k0 + 2].neighbor = point[k0 + 2].neighbor.concat([k]);
          if (m === 3) {
            point[k - 15].neighbor = point[k - 15].neighbor.concat([k]);
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
          } else {
            point[k - 11].neighbor = point[k - 11].neighbor.concat([k]);
            point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
          }
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
            for (var n = 0; n < point[k].adjacent_dia.length; n++) {
              if (point[k].adjacent_dia[n] === j) {
                point[k].adjacent_dia.splice(n, 1, i);
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
          for (var n = 0; n < point[j].adjacent_dia.length; n++) {
            //削除された点のadjacent_diaを移し替え
            if (
              point[i].adjacent_dia.indexOf(point[j].adjacent_dia[n]) === -1
            ) {
              point[i].adjacent_dia = point[i].adjacent_dia.concat([
                point[j].adjacent_dia[n],
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
    var num = 0;
    for (const index in this.point) {
      const i = parseInt(i);
      min0 = (x - this.point[i].x) ** 2 + (y - this.point[i].y) ** 2;
      if (min0 < min) {
        min = min0;
        num = i;
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
          type = [0, 1, 2];
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
            type = [0, 1, 2];
          }
        }
        break;
      case "line":
        if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4"
        ) {
          type = [2];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2"
        ) {
          type = [0, 1];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5"
        ) {
          type = [0, 2];
        } else {
          type = [0];
        }
        break;
      case "lineE":
        if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4"
        ) {
          type = [2];
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
            type = [0, 2];
            break;
          case "edgexoi":
            type = [0, 1, 2];
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
      (this.theta - 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
    this.point_move(0, 0, -30);
    this.redraw();
  }

  rotate_right() {
    this.theta =
      (this.theta + 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
    this.point_move(0, 0, +30);
    this.redraw();
  }

  direction_arrow8(x, y, x0, y0) {
    var angle = (Math.atan2(y - y0, x - x0) * 360) / 2 / Math.PI + 180;
    if (this.reflect[0] === -1) {
      angle = (180 - angle + 360) % 360;
    }
    if (this.reflect[1] === -1) {
      angle = (360 - angle + 360) % 360;
    }
    angle = (angle - this.theta + 360) % 360;
    angle -= 180;
    var a;
    if (angle < -120) {
      a = 0;
    } else if (angle > -120 && angle < -60) {
      a = 1;
    } else if (angle > -60 && angle < 0) {
      a = 2;
    } else if (angle > 0 && angle < 60) {
      a = 3;
    } else if (angle > 60 && angle < 120) {
      a = 4;
    } else if (angle > 120) {
      a = 5;
    }
    return a;
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

  draw_line(pu) {
    for (var i in this[pu].line) {
      if (this[pu].line[i] === 98) {
        var r = 0.2;
        var x = this.point[i].x;
        var y = this.point[i].y;
        set_line_style(this.ctx, 98);
        this.ctx.beginPath();
        this.ctx.moveTo(
          x + r * Math.cos(45 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(45 * (Math.PI / 180)) * this.size
        );
        this.ctx.lineTo(
          x + r * Math.cos(225 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(225 * (Math.PI / 180)) * this.size
        );
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(
          x + r * Math.cos(135 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(135 * (Math.PI / 180)) * this.size
        );
        this.ctx.lineTo(
          x + r * Math.cos(315 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(315 * (Math.PI / 180)) * this.size
        );
        this.ctx.stroke();
      } else {
        set_line_style(this.ctx, this[pu].line[i]);
        var i1 = i.split(",")[0];
        var i2 = i.split(",")[1];
        var i3;
        //search neighbor
        for (var j = 0; j < 4; j++) {
          if (
            this.point[i2].neighbor.indexOf(this.point[i1].neighbor[j]) != -1
          ) {
            i3 = this.point[i1].neighbor[j];
          }
        }
        this.ctx.beginPath();
        if (this[pu].line[i] === 40) {
          var r = 0.6;
          var x1 = r * this.point[i1].x + (1 - r) * this.point[i3].x;
          var y1 = r * this.point[i1].y + (1 - r) * this.point[i3].y;
          var x2 = (1 - r) * this.point[i3].x + r * this.point[i2].x;
          var y2 = (1 - r) * this.point[i3].y + r * this.point[i2].y;
          this.ctx.moveTo(x1, y1);
          this.ctx.lineTo(this.point[i3].x, this.point[i3].y);
          this.ctx.lineTo(x2, y2);
        } else if (this[pu].line[i] === 30) {
          var r = 0.15 * this.size;
          var dx = this.point[i1].x - this.point[i2].x;
          var dy = this.point[i1].y - this.point[i2].y;
          var d = Math.sqrt(dx ** 2 + dy ** 2);
          this.ctx.moveTo(
            this.point[i1].x - (r / d) * dy,
            this.point[i1].y + (r / d) * dx
          );
          this.ctx.lineTo(
            this.point[i2].x - (r / d) * dy,
            this.point[i2].y + (r / d) * dx
          );
          this.ctx.stroke();
          this.ctx.moveTo(
            this.point[i1].x + (r / d) * dy,
            this.point[i1].y - (r / d) * dx
          );
          this.ctx.lineTo(
            this.point[i2].x + (r / d) * dy,
            this.point[i2].y - (r / d) * dx
          );
        } else {
          if (this.point[i1].type === 2 || this.point[i1].type === 3) {
            //for centerline
            this.ctx.moveTo(this.point[i2].x, this.point[i2].y);
            this.ctx.lineTo(
              (this.point[i1].x + this.point[i2].x) * 0.5,
              (this.point[i1].y + this.point[i2].y) * 0.5
            );
            this.ctx.stroke();
            this.ctx.lineCap = "butt";
          } else if (this.point[i2].type === 2 || this.point[i2].type === 3) {
            this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
            this.ctx.lineTo(
              (this.point[i1].x + this.point[i2].x) * 0.5,
              (this.point[i1].y + this.point[i2].y) * 0.5
            );
            this.ctx.stroke();
            this.ctx.lineCap = "butt";
          }
          this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
          this.ctx.lineTo(this.point[i3].x, this.point[i3].y);
          this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
        }
        this.ctx.stroke();
      }
    }
    for (var i in this[pu].lineE) {
      if (this[pu].lineE[i] === 98) {
        var r = 0.2;
        var x = this.point[i].x;
        var y = this.point[i].y;
        set_line_style(this.ctx, 98);
        this.ctx.beginPath();
        this.ctx.moveTo(
          x + r * Math.cos(45 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(45 * (Math.PI / 180)) * this.size
        );
        this.ctx.lineTo(
          x + r * Math.cos(225 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(225 * (Math.PI / 180)) * this.size
        );
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(
          x + r * Math.cos(135 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(135 * (Math.PI / 180)) * this.size
        );
        this.ctx.lineTo(
          x + r * Math.cos(315 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(315 * (Math.PI / 180)) * this.size
        );
        this.ctx.stroke();
      } else {
        set_line_style(this.ctx, this[pu].lineE[i]);
        var i1 = i.split(",")[0];
        var i2 = i.split(",")[1];
        this.ctx.beginPath();
        if (this[pu].lineE[i] === 30) {
          var r = 0.15 * this.size;
          var dx = this.point[i1].x - this.point[i2].x;
          var dy = this.point[i1].y - this.point[i2].y;
          var d = Math.sqrt(dx ** 2 + dy ** 2);
          this.ctx.moveTo(
            this.point[i1].x - (r / d) * dy,
            this.point[i1].y + (r / d) * dx
          );
          this.ctx.lineTo(
            this.point[i2].x - (r / d) * dy,
            this.point[i2].y + (r / d) * dx
          );
          this.ctx.stroke();
          this.ctx.moveTo(
            this.point[i1].x + (r / d) * dy,
            this.point[i1].y - (r / d) * dx
          );
          this.ctx.lineTo(
            this.point[i2].x + (r / d) * dy,
            this.point[i2].y - (r / d) * dx
          );
        } else {
          this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
          this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
        }
        this.ctx.stroke();
      }
    }
  }

  draw_number(pu) {
    /*number*/
    for (var i in this[pu].number) {
      switch (this[pu].number[i][2]) {
        case "1": //normal
          this.draw_numbercircle(pu, i, 0.42);
          set_font_style(
            this.ctx,
            (0.7 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.text(
            this[pu].number[i][0],
            this.point[i].x,
            this.point[i].y + 0.06 * this.size,
            this.size * 0.8
          );
          break;
        case "2": //arrow
          var arrowlength = 0.7;
          this.draw_numbercircle(pu, i, 0.42);
          set_font_style(
            this.ctx,
            (0.65 * this.size).toString(10),
            this[pu].number[i][1]
          );
          var direction = {
            _0: 150,
            _1: 90,
            _2: 30,
            _3: 330,
            _4: 270,
            _5: 210,
          };
          direction =
            (direction[this[pu].number[i][0].slice(-2)] - this.theta + 360) %
            360;
          if (this.reflect[0] === -1) {
            direction = (180 - direction + 360) % 360;
          }
          if (this.reflect[1] === -1) {
            direction = (360 - direction + 360) % 360;
          }
          switch (direction) {
            case 120:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x - 0.1 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x + (arrowlength * 0.25 + 0.15) * this.size,
                this.point[i].y +
                  (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size,
                this.point[i].x + (-arrowlength * 0.25 + 0.15) * this.size,
                this.point[i].y +
                  (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 300:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x - 0.1 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x + (-arrowlength * 0.25 + 0.2) * this.size,
                this.point[i].y +
                  (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size,
                this.point[i].x + (arrowlength * 0.25 + 0.2) * this.size,
                this.point[i].y +
                  (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 60:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x + 0.1 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x - (arrowlength * 0.25 + 0.15) * this.size,
                this.point[i].y +
                  (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size,
                this.point[i].x - (-arrowlength * 0.25 + 0.15) * this.size,
                this.point[i].y +
                  (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 240:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x + 0.1 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x - (-arrowlength * 0.25 + 0.2) * this.size,
                this.point[i].y +
                  (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size,
                this.point[i].x - (arrowlength * 0.25 + 0.2) * this.size,
                this.point[i].y +
                  (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 180:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x + 0.0 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x + (arrowlength * 0.5 + 0.0) * this.size,
                this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size,
                this.point[i].x + (-arrowlength * 0.5 + 0.0) * this.size,
                this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 0:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x + 0.0 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x - (arrowlength * 0.5 + 0.0) * this.size,
                this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size,
                this.point[i].x - (-arrowlength * 0.5 + 0.0) * this.size,
                this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 150:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x - 0.0 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x +
                  (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size,
                this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size,
                this.point[i].x +
                  (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size,
                this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 330:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x - 0.0 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x +
                  (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size,
                this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size,
                this.point[i].x +
                  (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size,
                this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 30:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x + 0.0 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x -
                  (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size,
                this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size,
                this.point[i].x -
                  (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size,
                this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 210:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x + 0.0 * this.size,
                this.point[i].y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x -
                  (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size,
                this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size,
                this.point[i].x -
                  (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size,
                this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 90:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x - 0.1 * this.size,
                this.point[i].y + 0.05 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size,
                this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size,
                this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size,
                this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 270:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                this.point[i].x - 0.1 * this.size,
                this.point[i].y + 0.05 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size,
                this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size,
                this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size,
                this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            default:
              set_font_style(
                this.ctx,
                (0.7 * this.size).toString(10),
                this[pu].number[i][1]
              );
              this.ctx.text(
                this[pu].number[i][0],
                this.point[i].x,
                this.point[i].y + 0.06 * this.size,
                this.size * 0.8
              );
              break;
          }
          break;
        case "4": //tapa
          this.draw_numbercircle(pu, i, 0.44);
          if (this[pu].number[i][0].length === 1) {
            set_font_style(
              this.ctx,
              (0.7 * this.size).toString(10),
              this[pu].number[i][1]
            );
            this.ctx.text(
              this[pu].number[i][0],
              this.point[i].x,
              this.point[i].y + 0.06 * this.size,
              this.size * 0.8
            );
          } else if (this[pu].number[i][0].length === 2) {
            set_font_style(
              this.ctx,
              (0.48 * this.size).toString(10),
              this[pu].number[i][1]
            );
            this.ctx.text(
              this[pu].number[i][0].slice(0, 1),
              this.point[i].x - 0.16 * this.size,
              this.point[i].y - 0.15 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(1, 2),
              this.point[i].x + 0.18 * this.size,
              this.point[i].y + 0.19 * this.size,
              this.size * 0.8
            );
          } else if (this[pu].number[i][0].length === 3) {
            set_font_style(
              this.ctx,
              (0.45 * this.size).toString(10),
              this[pu].number[i][1]
            );
            this.ctx.text(
              this[pu].number[i][0].slice(0, 1),
              this.point[i].x - 0.22 * this.size,
              this.point[i].y - 0.14 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(1, 2),
              this.point[i].x + 0.24 * this.size,
              this.point[i].y - 0.05 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(2, 3),
              this.point[i].x - 0.0 * this.size,
              this.point[i].y + 0.3 * this.size,
              this.size * 0.8
            );
          } else if (this[pu].number[i][0].length === 4) {
            set_font_style(
              this.ctx,
              (0.4 * this.size).toString(10),
              this[pu].number[i][1]
            );
            this.ctx.text(
              this[pu].number[i][0].slice(0, 1),
              this.point[i].x - 0.0 * this.size,
              this.point[i].y - 0.22 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(1, 2),
              this.point[i].x - 0.26 * this.size,
              this.point[i].y + 0.04 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(2, 3),
              this.point[i].x + 0.26 * this.size,
              this.point[i].y + 0.04 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(3, 4),
              this.point[i].x - 0.0 * this.size,
              this.point[i].y + 0.3 * this.size,
              this.size * 0.8
            );
          }
          break;
        case "5": //small
          this.draw_numbercircle(pu, i, 0.17);
          set_font_style(
            this.ctx,
            (0.25 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.text(
            this[pu].number[i][0],
            this.point[i].x,
            this.point[i].y + 0.02 * this.size,
            this.size * 0.8
          );
          break;
        case "6": //medium
          this.draw_numbercircle(pu, i, 0.25);
          set_font_style(
            this.ctx,
            (0.4 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.text(
            this[pu].number[i][0],
            this.point[i].x,
            this.point[i].y + 0.03 * this.size,
            this.size * 0.8
          );
          break;
        case "7": //sudoku
          this.draw_numbercircle(pu, i, 0.42);
          var sum = 0,
            pos = 0;
          for (var j = 0; j < 9; j++) {
            if (this[pu].number[i][0][j] === 1) {
              sum += 1;
              pos = j;
            }
          }
          if (sum === 1) {
            set_font_style(
              this.ctx,
              (0.7 * this.size).toString(10),
              this[pu].number[i][1]
            );
            this.ctx.text(
              (pos + 1).toString(),
              this.point[i].x,
              this.point[i].y + 0.06 * this.size,
              this.size * 0.8
            );
          } else {
            set_font_style(
              this.ctx,
              (0.3 * this.size).toString(10),
              this[pu].number[i][1]
            );
            for (var j = 0; j < 9; j++) {
              if (this[pu].number[i][0][j] === 1) {
                this.ctx.text(
                  (j + 1).toString(),
                  this.point[i].x + ((j % 3) - 1) * 0.25 * this.size,
                  this.point[i].y +
                    ((((j / 3) | 0) - 1) * 0.25 + 0.01) * this.size
                );
              }
            }
          }
          break;
        case "8": //long
          if (this[pu].number[i][1] === 5) {
            set_font_style(
              this.ctx,
              (0.5 * this.size).toString(10),
              this[pu].number[i][1]
            );
            set_circle_style(this.ctx, 7);
            this.ctx.fillRect(
              this.point[i].x - 0.2 * this.size,
              this.point[i].y - 0.25 * this.size,
              this.ctx.measureText(this[pu].number[i][0]).width,
              0.5 * this.size
            );
          }
          set_font_style(
            this.ctx,
            (0.5 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.textAlign = "left";
          this.ctx.text(
            this[pu].number[i][0],
            this.point[i].x - 0.2 * this.size,
            this.point[i].y
          );
          break;
      }
    }

    for (var i in this[pu].numberS) {
      if (this[pu].numberS[i][1] === 5) {
        set_circle_style(this.ctx, 7);
        this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
      } else if (this[pu].numberS[i][1] === 6) {
        set_circle_style(this.ctx, 1);
        this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
      } else if (this[pu].numberS[i][1] === 7) {
        set_circle_style(this.ctx, 2);
        this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
      }
      if (true) {
        set_font_style(
          this.ctx,
          (0.26 * this.size).toString(10),
          this[pu].numberS[i][1]
        );
        this.ctx.textAlign = "center";
        this.ctx.text(
          this[pu].numberS[i][0],
          this.point[i].x,
          this.point[i].y + 0.03 * this.size,
          0.3 * this.size
        );
      }
    }
  }

  draw_cross(ctx, num, x, y) {
    for (var i = 0; i < 6; i++) {
      if (num[i] === 1) {
        var th = this.rotate_theta(i * 60 - 150);
        ctx.beginPath();
        ctx.moveTo(
          x + ctx.lineWidth * 0.3 * Math.cos(th),
          y + ctx.lineWidth * 0.3 * Math.sin(th)
        );
        ctx.lineTo(
          x - 0.5 * this.size * Math.cos(th),
          y - 0.5 * this.size * Math.sin(th)
        );
        ctx.stroke();
      }
    }
  }

  draw_inequality(ctx, num, x, y) {
    var th;
    var len = 0.14;
    switch (num) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        ctx.beginPath();
        th = this.rotate_theta((num - 1) * 60 + 75);
        ctx.moveTo(
          x + len * Math.sqrt(2) * this.size * Math.cos(th),
          y + len * Math.sqrt(2) * this.size * Math.sin(th)
        );
        th = this.rotate_theta((num - 1) * 60 + 210);
        ctx.lineTo(
          x + len * this.size * Math.cos(th),
          y + len * this.size * Math.sin(th)
        );
        th = this.rotate_theta((num - 1) * 60 + 345);
        ctx.lineTo(
          x + len * Math.sqrt(2) * this.size * Math.cos(th),
          y + len * Math.sqrt(2) * this.size * Math.sin(th)
        );
        ctx.fill();
        ctx.stroke();
        break;
    }
  }

  draw_arrowGP(ctx, num, x, y) {
    var len1 = 0.35; //nemoto
    var len2 = 0.35; //tip
    var w1 = 0.12;
    var w2 = 0.23;
    var w3 = 0.34;
    var r1 = -0.33;
    var r2 = -0.44;
    var r3 = -0.32;
    var th;
    if (num > 0 && num <= 6) {
      th = this.rotate_theta((num - 1) * 60 - 150);
      ctx.beginPath();
      ctx.arrow(
        x - len1 * this.size * Math.cos(th),
        y - len1 * this.size * Math.sin(th),
        x + len2 * this.size * Math.cos(th),
        y + len2 * this.size * Math.sin(th),
        [
          0,
          w1 * this.size,
          r1 * this.size,
          w1 * this.size,
          r2 * this.size,
          w2 * this.size,
          r3 * this.size,
          w3 * this.size,
        ]
      );
      ctx.fill();
      ctx.stroke();
    }
  }

  draw_arrowGP_C(ctx, num, x, y) {
    if (num > 0 && num <= 6) {
      var th = this.rotate_theta((num - 1) * 60 - 150);
      this.draw_circle(ctx, x, y, 0.35);
      this.draw_arrowGP(
        ctx,
        num,
        x + 0.5 * this.size * Math.cos(th),
        y + 0.5 * this.size * Math.sin(th)
      );
    }
  }

  draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri) {
    var th;
    if (num > 0 && num <= 6) {
      th = this.rotate_theta((num - 1) * 60 - 150);
      ctx.beginPath();
      ctx.arrow(
        x - len1 * this.size * Math.cos(th),
        y - len1 * this.size * Math.sin(th),
        x + len2 * this.size * Math.cos(th),
        y + len2 * this.size * Math.sin(th),
        [
          0,
          w1 * this.size,
          ri * this.size,
          w1 * this.size,
          ri * this.size,
          w2 * this.size,
        ]
      );
      ctx.fill();
      ctx.stroke();
    }
  }

  draw_arrowcross(ctx, num, x, y) {
    var w1 = 0.025;
    var w2 = 0.12;
    var len1 = 0.5 * w1; //nemoto
    var len2 = 0.45; //tip
    var ri = -0.18;
    var th;
    for (var i = 0; i < 6; i++) {
      if (num[i] === 1) {
        th = this.rotate_theta(i * 60 - 150);
        ctx.beginPath();
        ctx.arrow(
          x - len1 * this.size * Math.cos(th),
          y - len1 * this.size * Math.sin(th),
          x + len2 * this.size * Math.cos(th),
          y + len2 * this.size * Math.sin(th),
          [
            0,
            w1 * this.size,
            ri * this.size,
            w1 * this.size,
            ri * this.size,
            w2 * this.size,
          ]
        );
        ctx.fill();
      }
    }
  }

  draw_arroweight(ctx, num, x, y) {
    var len1 = -0.2; //nemoto
    var len2 = 0.45; //tip
    var w1 = 0.025;
    var w2 = 0.1;
    var ri = -0.15;
    for (var i = 0; i < 6; i++) {
      if (num[i] === 1) {
        this.draw_arrow(ctx, i + 1, x, y, len1, len2, w1, w2, ri);
      }
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
