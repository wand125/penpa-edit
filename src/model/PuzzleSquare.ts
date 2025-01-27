import { Point } from "./Point";
import { Puzzle } from "./Puzzle";

export class Puzzle_square extends Puzzle {
  constructor(nx, ny, size) {
    //盤面情報
    super("square");
    this.nx = nx;
    this.ny = ny;
    this.nx0 = this.nx + 4;
    this.ny0 = this.ny + 4;
    this.margin = -1; //for arrow of number pointing outside of the grid

    this.width0 = this.nx + 1;
    this.height0 = this.ny + 1;
    this.width_c = this.width0;
    this.height_c = this.height0;
    this.width = this.width_c;
    this.height = this.height_c;
    this.canvasx = this.width_c * this.size;
    this.canvasy = this.height_c * this.size;
    this.space = [
      parseInt(document.getElementById("nb_space1")["value"], 10),
      parseInt(document.getElementById("nb_space2")["value"], 10),
      parseInt(document.getElementById("nb_space3")["value"], 10),
      parseInt(document.getElementById("nb_space4")["value"], 10),
    ];
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

  erase_buttons() {
    for (var i of this.group1) {
      document.getElementById(i).style.display = "inline-block";
    }
    for (var i of this.group2) {
      document.getElementById(i).style.display = "inline-block";
    }
    for (var i of this.group3) {
      document.getElementById(i).style.display = "inline-block";
    }
    for (var i of this.group4) {
      document.getElementById(i).style.display = "inline-block";
    }
    for (var i of this.group5) {
      document.getElementById(i).style.display = "inline-block";
    }
  }

  create_point() {
    var k = 0;
    var nx = this.nx0;
    var ny = this.ny0;
    var adjacent, surround, type, use, neighbor, adjacent_dia;
    var point = [];
    //center
    type = 0;
    for (var j = 0; j < ny; j++) {
      for (var i = 0; i < nx; i++) {
        if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
          use = -1;
        } else {
          use = 1;
        }
        adjacent = [k - nx, k - 1, k + 1, k + nx];
        adjacent_dia = [k - nx - 1, k - nx + 1, k + nx - 1, k + nx + 1];
        surround = [
          k + nx * ny - nx - 1,
          k + nx * ny - nx,
          k + nx * ny,
          k + nx * ny - 1,
        ];
        neighbor = [
          k + 2 * nx * ny - nx,
          k + 2 * nx * ny,
          k + 3 * nx * ny - 1,
          k + 3 * nx * ny,
        ];
        point[k] = new Point(
          (i + 0.5) * this.size,
          (j + 0.5) * this.size,
          type,
          adjacent,
          surround,
          use,
          neighbor,
          adjacent_dia
        );
        k++;
      }
    }
    //vertex
    type = 1;
    for (var j = 0; j < ny; j++) {
      for (var i = 0; i < nx; i++) {
        if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
          use = -1;
        } else {
          use = 1;
        }
        adjacent = [k - nx, k - 1, k + 1, k + nx];
        adjacent_dia = [k - nx - 1, k - nx + 1, k + nx - 1, k + nx + 1];
        surround = [];
        point[k] = new Point(
          point[i + j * nx].x + 0.5 * this.size,
          point[i + j * nx].y + 0.5 * this.size,
          type,
          adjacent,
          surround,
          use,
          [],
          adjacent_dia
        );
        k++;
      }
    }

    //centervertex
    type = 2;
    for (var j = 0; j < ny; j++) {
      for (var i = 0; i < nx; i++) {
        if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
          use = -1;
        } else {
          use = 1;
        }
        adjacent = [k + nx, k - nx];
        surround = [];
        neighbor = [k - 2 * nx * ny, k - 2 * nx * ny + nx];
        point[k] = new Point(
          point[i + j * nx].x,
          point[i + j * nx].y + 0.5 * this.size,
          type,
          adjacent,
          surround,
          use,
          neighbor
        );
        k++;
      }
    }
    type = 3;
    for (var j = 0; j < ny; j++) {
      for (var i = 0; i < nx; i++) {
        if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
          use = -1;
        } else {
          use = 1;
        }
        adjacent = [k + 1, k - 1];
        surround = [];
        neighbor = [k - 3 * nx * ny, k - 3 * nx * ny + 1];
        point[k] = new Point(
          point[i + j * nx].x + 0.5 * this.size,
          point[i + j * nx].y,
          type,
          adjacent,
          surround,
          use,
          neighbor
        );
        k++;
      }
    }

    //  1/4
    var r = 0.25;
    type = 4;
    for (var j = 0; j < ny; j++) {
      for (var i = 0; i < nx; i++) {
        if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
          use = -1;
        } else {
          use = 1;
        }
        surround = [];
        adjacent = [k - 4 * nx + 2, k - 3, k + 1, k + 2];
        point[k] = new Point(
          point[i + j * nx].x - r * this.size,
          point[i + j * nx].y - r * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
        adjacent = [k - 4 * nx + 2, k - 1, k + 3, k + 2];
        point[k] = new Point(
          point[i + j * nx].x + r * this.size,
          point[i + j * nx].y - r * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
        adjacent = [k - 2, k - 3, k + 1, k + 4 * nx - 2];
        point[k] = new Point(
          point[i + j * nx].x - r * this.size,
          point[i + j * nx].y + r * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
        adjacent = [k - 2, k - 1, k + 3, k + 4 * nx - 2];
        point[k] = new Point(
          point[i + j * nx].x + r * this.size,
          point[i + j * nx].y + r * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
      }
    }

    //  compass
    var r = 0.3;
    type = 5;
    for (var j = 0; j < ny; j++) {
      for (var i = 0; i < nx; i++) {
        if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
          use = -1;
        } else {
          use = 1;
        }
        adjacent = [];
        surround = [];
        point[k] = new Point(
          point[i + j * nx].x - 0 * this.size,
          point[i + j * nx].y - r * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
        point[k] = new Point(
          point[i + j * nx].x + r * this.size,
          point[i + j * nx].y - 0 * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
        point[k] = new Point(
          point[i + j * nx].x - r * this.size,
          point[i + j * nx].y + 0 * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
        point[k] = new Point(
          point[i + j * nx].x + 0 * this.size,
          point[i + j * nx].y + r * this.size,
          type,
          adjacent,
          surround,
          use
        );
        k++;
      }
    }

    this.point = point;
  }

  reset_frame() {
    this.create_point();
    this.space = [
      parseInt(document.getElementById("nb_space1")["value"], 10),
      parseInt(document.getElementById("nb_space2")["value"], 10),
      parseInt(document.getElementById("nb_space3")["value"], 10),
      parseInt(document.getElementById("nb_space4")["value"], 10),
    ];

    this.centerlist = [];
    for (var j = 2; j < this.ny0 - 2; j++) {
      for (var i = 2; i < this.nx0 - 2; i++) {
        //上下と左右端は未使用
        this.centerlist.push(i + j * this.nx0);
      }
    }
    this.search_center(); //centerlistの中心を探す
    this.center_n0 = this.center_n; //center_n0に初期状態のcenter_nを保存
    this.canvasxy_update();
    this.canvas_size_setting();
    this.point_move(
      this.canvasx * 0.5 - this.point[this.center_n].x + 0.5,
      this.canvasy * 0.5 - this.point[this.center_n].y + 0.5,
      this.theta
    );

    this.centerlist = []; //centerlistを余白に合わせて再設定
    for (var j = 2 + this.space[0]; j < this.ny0 - 2 - this.space[1]; j++) {
      for (var i = 2 + this.space[2]; i < this.nx0 - 2 - this.space[3]; i++) {
        //上と左端は未使用
        this.centerlist.push(i + j * this.nx0);
      }
    }

    this.make_frameline();
    this.cursol = this.centerlist[0];
    this.cursolS = 4 * this.nx0 * this.ny0 + 4 + 4 * this.nx0;
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
          type = [0, 1, 2, 3];
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
          type = [4];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9"
        ) {
          type = [5];
        } else {
          if (document.getElementById("edge_button").textContent === "OFF") {
            type = [0];
          } else {
            type = [0, 1, 2, 3];
          }
        }
        break;
      case "line":
        if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4"
        ) {
          type = [2, 3];
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
          type = [2, 3];
        } else if (
          this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2"
        ) {
          type = [0, 1];
        } else {
          type = [1];
        }
        break;
      case "wall":
        if (this.drawing) {
          type = [this.point[this.last].type];
        } else {
          type = [2, 3];
        }
        break;
      case "cage":
        type = [4];
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
            type = [0, 2, 3];
            break;
          case "edgexoi":
            type = [0, 1, 2, 3];
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

  coord_p_edgex(x, y) {
    var min0,
      min = 10e6;
    var num = 0;
    for (var i = 0; i < this.point.length; i++) {
      if (this.type.indexOf(this.point[i].type) != -1) {
        min0 = (x - this.point[i].x) ** 2 + (y - this.point[i].y) ** 2;
        if (min0 < min) {
          if (this.point[i].type === 2 || this.point[i].type === 3) {
            if (min0 > (0.3 * this.size) ** 2) {
              break;
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
      (this.theta - 90 * this.reflect[0] * this.reflect[1] + 360) % 360;
    this.point_move(0, 0, -90);
    this.redraw();
  }

  rotate_right() {
    this.theta =
      (this.theta + 90 * this.reflect[0] * this.reflect[1] + 360) % 360;
    this.point_move(0, 0, +90);
    this.redraw();
  }

  cursolcheck() {
    if (
      this.mode[this.mode.qa].edit_mode === "number" &&
      this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3"
    ) {
      if (this.cursolS > 8 * this.nx0 * this.ny0) {
        this.cursolS -= 4 * this.nx0 * this.ny0;
      }
    } else if (
      this.mode[this.mode.qa].edit_mode === "number" &&
      this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9"
    ) {
      if (this.cursolS < 8 * this.nx0 * this.ny0) {
        this.cursolS += 4 * this.nx0 * this.ny0;
      }
    }
  }

  key_arrow(key_code) {
    var a, b, c;
    if (this.theta === 0) {
      b = [0, 1, 2, 3];
    } else if (this.theta === 90) {
      b = [3, 0, 1, 2];
    } else if (this.theta === 180) {
      b = [2, 3, 0, 1];
    } else if (this.theta === 270) {
      b = [1, 2, 3, 0];
    }
    if (this.reflect[0] === -1) {
      c = b[0];
      b[0] = b[2];
      b[2] = c;
    }
    if (this.reflect[1] === -1) {
      c = b[1];
      b[1] = b[3];
      b[3] = c;
    }
    switch (key_code) {
      case "ArrowLeft":
        c = b[0];
        break;
      case "ArrowUp":
        c = b[1];
        break;
      case "ArrowRight":
        c = b[2];
        break;
      case "ArrowDown":
        c = b[3];
        break;
    }
    if (
      this.mode[this.mode.qa].edit_mode === "number" ||
      this.mode[this.mode.qa].edit_mode === "symbol"
    ) {
      if (
        this.mode[this.mode.qa].edit_mode === "number" &&
        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3"
      ) {
        switch (c) {
          case 0:
            a = this.cursolS % 2 === 0 ? this.cursolS - 3 : this.cursolS - 1;
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
          case 1:
            a =
              this.cursolS % 4 === 0 || this.cursolS % 4 === 1
                ? this.cursolS - 4 * this.nx0 + 2
                : this.cursolS - 2;
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
          case 2:
            a = this.cursolS % 2 === 0 ? this.cursolS + 1 : this.cursolS + 3;
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
          case 3:
            a =
              this.cursolS % 4 === 0 || this.cursolS % 4 === 1
                ? this.cursolS + 2
                : this.cursolS + 4 * this.nx0 - 2;
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
        }
      } else if (
        this.mode[this.mode.qa].edit_mode === "number" &&
        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9"
      ) {
        switch (c) {
          case 0:
            a =
              this.cursolS % 4 === 2
                ? this.cursolS - 4
                : this.cursolS - (this.cursolS % 4) + 2;
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
          case 1:
            a =
              this.cursolS % 4 === 0
                ? this.cursolS - 4 * this.nx0
                : this.cursolS - (this.cursolS % 4);
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
          case 2:
            a =
              this.cursolS % 4 === 1
                ? this.cursolS + 4
                : this.cursolS - (this.cursolS % 4) + 1;
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
          case 3:
            a =
              this.cursolS % 4 === 3
                ? this.cursolS + 4 * this.nx0
                : this.cursolS - (this.cursolS % 4) + 3;
            if (this.point[a].use === 1) {
              this.cursolS = a;
            }
            break;
        }
      } else {
        switch (c) {
          case 0:
            a = this.cursol - 1;
            if (this.point[a].use === 1) {
              this.cursol = a;
            }
            break;
          case 1:
            a = this.cursol - this.nx0;
            if (this.point[a].use === 1) {
              this.cursol = a;
            }
            break;
          case 2:
            a = this.cursol + 1;
            if (this.point[a].use === 1) {
              this.cursol = a;
            }
            break;
          case 3:
            a = this.cursol + this.nx0;
            if (this.point[a].use === 1) {
              this.cursol = a;
            }
            break;
        }
      }
    }
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
    if (angle < -157.5 || angle > 157.5) {
      a = 1;
    } else if (angle > -157.5 && angle < -112.5) {
      a = 4;
    } else if (angle > -112.5 && angle < -67.5) {
      a = 0;
    } else if (angle > -67.5 && angle < -22.5) {
      a = 5;
    } else if (angle > -22.5 && angle < 22.5) {
      a = 2;
    } else if (angle > 22.5 && angle < 67.5) {
      a = 7;
    } else if (angle > 67.5 && angle < 112.5) {
      a = 3;
    } else if (angle > 112.5 && angle < 157.5) {
      a = 6;
    }
    return a;
  }

  direction_arrow4(x, y, x0, y0) {
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
    if (angle >= -180 && angle < -90) {
      a = 1;
    } else if (angle >= -90 && angle < 0) {
      a = 4;
    } else if (angle >= 0 && angle < 90) {
      a = 3;
    } else if (angle >= 90 && angle <= 180) {
      a = 2;
    }
    return a;
  }

  ////////////////draw/////////////////////

  draw() {
    this.draw_surface("pu_q");
    this.draw_surface("pu_a");
    this.draw_squareframe("pu_q");
    this.draw_squareframe("pu_a");
    this.draw_thermo("pu_q");
    this.draw_thermo("pu_a");
    this.draw_arrowsp("pu_q");
    this.draw_arrowsp("pu_a");
    this.draw_symbol("pu_q", 1);
    this.draw_symbol("pu_a", 1);
    this.draw_wall("pu_q");
    this.draw_wall("pu_a");
    this.draw_frame();
    this.draw_polygonsp("pu_q");
    this.draw_polygonsp("pu_a");
    this.draw_freeline("pu_q");
    this.draw_freeline("pu_a");
    this.draw_line("pu_q");
    this.draw_line("pu_a");
    this.draw_direction("pu_q");
    this.draw_direction("pu_a");
    this.draw_lattice();
    this.draw_frameBold();
    this.draw_symbol("pu_q", 2);
    this.draw_symbol("pu_a", 2);
    this.draw_cage("pu_q");
    this.draw_cage("pu_a");
    this.draw_number("pu_q");
    this.draw_number("pu_a");
    this.draw_cursol();
    this.draw_freecircle();

    //this.draw_point();
  }

  /*
      draw_clip(num){
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw_surface("pu_q",num);
        this.draw_surface("pu_a",num);
        this.draw_squareframe("pu_q");
        this.draw_squareframe("pu_a");
        this.draw_thermo("pu_q");
        this.draw_thermo("pu_a");
        this.draw_arrowsp("pu_q");
        this.draw_arrowsp("pu_a");
        this.draw_symbol("pu_q",1);
        this.draw_symbol("pu_a",1);
        this.draw_wall("pu_q");
        this.draw_wall("pu_a");
        this.draw_frame(num);
        this.draw_polygonsp("pu_q");
        this.draw_polygonsp("pu_a");
        this.draw_freeline("pu_q");
        this.draw_freeline("pu_a");
        this.draw_line("pu_q");
        this.draw_line("pu_a");
        this.draw_direction("pu_q");
        this.draw_direction("pu_a");
        this.draw_lattice();
        this.draw_frameBold(num);
        this.draw_symbol("pu_q",2);
        this.draw_symbol("pu_a",2);
        this.draw_cage("pu_q");
        this.draw_cage("pu_a");
        this.draw_number("pu_q");
        this.draw_number("pu_a");
        this.draw_cursol();
        this.draw_freecircle();

        //this.draw_point();
      }

      draw_frame(num="") {
        if(num){
          var keys=[],i1,i2,key0;
          for(var i=0;i<this.point[num].surround.length;i++){
            for(var j=0;j<this.point[this.point[num].surround[i]].adjacent.length-4;j++){//-4 for square diagonal
              i1 = this.point[num].surround[i];
              i2 = this.point[this.point[num].surround[i]].adjacent[j];
              key0 = Math.min(i1,i2)+","+Math.max(i1,i2);
              if(keys.indexOf(key0)===-1){
                keys.push(key0);
              }
            }
          }
        }else{
          var keys = Object.keys(this.frame);
        }
        for(var k = 0;k<keys.length;k++){
          var i = keys[k];
          if(this.frame[i]&&!this.pu_q.deletelineE[i]){
            set_line_style(this.ctx,this.frame[i]);
             var i1 = i.split(",")[0];
             var i2 = i.split(",")[1];
            this.ctx.beginPath();
            this.ctx.moveTo(this.point[i1].x,this.point[i1].y);
            this.ctx.lineTo(this.point[i2].x,this.point[i2].y);
            this.ctx.stroke();
          }
        }
      }

      draw_frameBold(num=""){
        if(num){
          var keys=[],i1,i2,key0;
          for(var i=0;i<this.point[num].surround.length;i++){
            for(var j=0;j<this.point[this.point[num].surround[i]].adjacent.length-4;j++){//-4 for square diagonal
              i1 = this.point[num].surround[i];
              i2 = this.point[this.point[num].surround[i]].adjacent[j];
              key0 = Math.min(i1,i2)+","+Math.max(i1,i2);
              if(keys.indexOf(key0)===-1){
                keys.push(key0);
              }
            }
          }
        }else{
          var keys = Object.keys(this.frame);
        }
        for(var k = 0;k<keys.length;k++){
          var i = keys[k];
          if(this.frame[i]===2&&!this.pu_q.deletelineE[i]){
            set_line_style(this.ctx,this.frame[i]);
            var i1 = i.split(",")[0];
            var i2 = i.split(",")[1];
            this.ctx.beginPath();
            this.ctx.moveTo(this.point[i1].x,this.point[i1].y);
            this.ctx.lineTo(this.point[i2].x,this.point[i2].y);
            this.ctx.stroke();
          }
        }
      }
      */

  draw_point() {
    set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
    for (var i in this.point) {
      if (this.point[i].type === 0) {
        this.ctx.fillStyle = "#000";
        this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
      } else if (this.point[i].type === 1) {
        this.ctx.fillStyle = "blue";
        this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
      } else if (this.point[i].type === 2) {
        this.ctx.fillStyle = "red";
        this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
        this.ctx.fillStyle = "rgba(0,0,0,0)";
      } else if (this.point[i].type === 3) {
        this.ctx.fillStyle = "orange";
        this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
        this.ctx.fillStyle = "rgba(0,0,0,0)";
      } else if (this.point[i].type === 4) {
        this.ctx.fillStyle = "green";
        this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
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

  draw_lattice() {
    if (this.mode.grid[1] === "1") {
      this.ctx.fillStyle = "#000";
      var verticelist = [];
      for (var i = 0; i < this.centerlist.length; i++) {
        for (
          var j = 0;
          j < this.point[this.centerlist[i]].surround.length;
          j++
        ) {
          verticelist.push(this.point[this.centerlist[i]].surround[j]);
        }
      }
      verticelist = Array.from(new Set(verticelist));
      for (var i = 0; i < verticelist.length; i++) {
        this.ctx.beginPath();
        this.ctx.arc(
          this.point[verticelist[i]].x,
          this.point[verticelist[i]].y,
          2.1,
          0,
          2 * Math.PI,
          true
        );
        this.ctx.fill();
      }
    }
  }

  draw_surface(pu, num = "") {
    let keys = null;
    if (num) {
      keys = [];
      const key0 = num + "";
      if (this[pu].surface[key0]) {
        keys.push(key0);
      }
      for (var i = 0; i < this.point[num].adjacent.length; i++) {
        const key0 = this.point[num].adjacent[i] + "";
        if (keys.indexOf(key0) === -1 && this[pu].surface[key0]) {
          keys.push(key0);
        }
      }
    } else {
      keys = Object.keys(this[pu].surface);
    }
    for (var k = 0; k < keys.length; k++) {
      const i = keys[k];
      set_surface_style(this.ctx, this[pu].surface[i]);
      this.ctx.beginPath();
      this.ctx.moveTo(
        this.point[this.point[i].surround[0]].x,
        this.point[this.point[i].surround[0]].y
      );
      for (var j = 1; j < this.point[i].surround.length; j++) {
        this.ctx.lineTo(
          this.point[this.point[i].surround[j]].x,
          this.point[this.point[i].surround[j]].y
        );
      }
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
    }
  }

  draw_polygon(ctx, x, y, r, n, th) {
    ctx.LineCap = "round";
    ctx.beginPath();
    ctx.moveTo(
      x - r * Math.cos(th * (Math.PI / 180)) * this.size,
      y - r * Math.sin(th * (Math.PI / 180)) * this.size
    );
    for (var i = 0; i < n - 1; i++) {
      th += 360 / n;
      ctx.lineTo(
        x - r * Math.cos(th * (Math.PI / 180)) * this.size,
        y - r * Math.sin(th * (Math.PI / 180)) * this.size
      );
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  draw_squareframe(pu) {
    for (var i = 0; i < this[pu].squareframe.length; i++) {
      if (this[pu].squareframe[i][0]) {
        this.ctx.setLineDash([]);
        this.ctx.lineCap = "square";
        this.ctx.strokeStyle = "#ccc";
        this.ctx.lineWidth = this.size * 0.8;
        this.ctx.beginPath();
        this.ctx.moveTo(
          this.point[this[pu].squareframe[i][0]].x,
          this.point[this[pu].squareframe[i][0]].y
        );
        for (var j = 1; j < this[pu].squareframe[i].length; j++) {
          this.ctx.lineTo(
            this.point[this[pu].squareframe[i][j]].x,
            this.point[this[pu].squareframe[i][j]].y
          );
        }
        this.ctx.stroke();
      }
    }
  }

  draw_thermo(pu) {
    for (var i = 0; i < this[pu].thermo.length; i++) {
      if (this[pu].thermo[i][0]) {
        this.ctx.strokeStyle = "rgba(0,0,0,0)";
        this.ctx.fillStyle = "#ccc";
        this.draw_circle(
          this.ctx,
          this.point[this[pu].thermo[i][0]].x,
          this.point[this[pu].thermo[i][0]].y,
          0.4
        );
        this.ctx.setLineDash([]);
        this.ctx.lineCap = "square";
        this.ctx.strokeStyle = "#ccc";
        this.ctx.lineWidth = this.size * 0.4;
        this.ctx.beginPath();
        this.ctx.moveTo(
          this.point[this[pu].thermo[i][0]].x,
          this.point[this[pu].thermo[i][0]].y
        );
        for (var j = 1; j < this[pu].thermo[i].length; j++) {
          this.ctx.lineTo(
            this.point[this[pu].thermo[i][j]].x,
            this.point[this[pu].thermo[i][j]].y
          );
        }
        this.ctx.stroke();
      }
    }
  }

  draw_arrowsp(pu) {
    for (var i = 0; i < this[pu].arrows.length; i++) {
      if (this[pu].arrows[i][0]) {
        this.ctx.setLineDash([]);
        this.ctx.lineCap = "square";
        this.ctx.strokeStyle = "#ccc";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(
          this.point[this[pu].arrows[i][0]].x,
          this.point[this[pu].arrows[i][0]].y
        );
        for (var j = 1; j < this[pu].arrows[i].length - 1; j++) {
          this.ctx.lineTo(
            this.point[this[pu].arrows[i][j]].x,
            this.point[this[pu].arrows[i][j]].y
          );
        }
        this.ctx.stroke();

        j = this[pu].arrows[i].length - 1;
        this.ctx.lineJoin = "bevel";
        this.ctx.beginPath();
        this.ctx.arrow(
          this.point[this[pu].arrows[i][j - 1]].x,
          this.point[this[pu].arrows[i][j - 1]].y,
          this.point[this[pu].arrows[i][j]].x +
            (this.point[this[pu].arrows[i][j]].x -
              this.point[this[pu].arrows[i][j - 1]].x) *
              0.2,
          this.point[this[pu].arrows[i][j]].y +
            (this.point[this[pu].arrows[i][j]].y -
              this.point[this[pu].arrows[i][j - 1]].y) *
              0.2,
          [-0.00001, 0, -0.3 * this.size, 0.3 * this.size]
        );
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.lineJoin = "miter";
        this.ctx.strokeStyle = "rgba(192,192,192,1)";
        this.ctx.fillStyle = "rgba(255,255,255,1)";
        this.ctx.lineWidth = 3;

        this.draw_circle(
          this.ctx,
          this.point[this[pu].arrows[i][0]].x,
          this.point[this[pu].arrows[i][0]].y,
          0.4
        );
      }
    }
  }

  draw_direction(pu) {
    for (var i = 0; i < this[pu].direction.length; i++) {
      if (this[pu].direction[i][0]) {
        this.ctx.setLineDash([]);
        this.ctx.lineCap = "square";
        this.ctx.strokeStyle = "#999";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(
          this.point[this[pu].direction[i][0]].x,
          this.point[this[pu].direction[i][0]].y
        );
        for (var j = 1; j < this[pu].direction[i].length - 1; j++) {
          this.ctx.lineTo(
            this.point[this[pu].direction[i][j]].x,
            this.point[this[pu].direction[i][j]].y
          );
        }
        this.ctx.stroke();

        j = this[pu].direction[i].length - 1;
        this.ctx.lineJoin = "bevel";
        this.ctx.beginPath();
        this.ctx.arrow(
          this.point[this[pu].direction[i][j - 1]].x,
          this.point[this[pu].direction[i][j - 1]].y,
          this.point[this[pu].direction[i][j]].x,
          this.point[this[pu].direction[i][j]].y,
          [-0.00001, 0, -0.25 * this.size, 0.25 * this.size]
        );
        this.ctx.stroke();
        this.ctx.lineJoin = "miter";
      }
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
        this.ctx.beginPath();
        if (this[pu].line[i] === 40) {
          var r = 0.8;
          var x1 = r * this.point[i1].x + (1 - r) * this.point[i2].x;
          var y1 = r * this.point[i1].y + (1 - r) * this.point[i2].y;
          var x2 = (1 - r) * this.point[i1].x + r * this.point[i2].x;
          var y2 = (1 - r) * this.point[i1].y + r * this.point[i2].y;
          this.ctx.moveTo(x1, y1);
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

  draw_freeline(pu) {
    /*freeline*/
    for (var i in this[pu].freeline) {
      set_line_style(this.ctx, this[pu].freeline[i]);
      var i1 = i.split(",")[0];
      var i2 = i.split(",")[1];
      this.ctx.beginPath();
      if (this[pu].freeline[i] === 30) {
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

  draw_wall(pu) {
    for (var i in this[pu].wall) {
      set_line_style(this.ctx, this[pu].wall[i]);
      this.ctx.lineCap = "butt";
      var i1 = i.split(",")[0];
      var i2 = i.split(",")[1];
      this.ctx.beginPath();
      this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
      this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
      this.ctx.stroke();
    }
  }

  draw_cage(pu) {
    var r = 0.16; //space between grid
    var a = [0, 1, 2, 3],
      c;
    if (this.theta === 90) {
      a = [2, 0, 3, 1];
    } else if (this.theta === 180) {
      a = [3, 2, 1, 0];
    } else if (this.theta === 270) {
      a = [1, 3, 0, 2];
    }
    if (this.reflect[0] === -1) {
      c = a[0];
      a[0] = a[1];
      a[1] = c;
      c = a[2];
      a[2] = a[3];
      a[3] = c;
    }
    if (this.reflect[1] === -1) {
      c = a[0];
      a[0] = a[2];
      a[2] = c;
      c = a[1];
      a[1] = a[3];
      a[3] = c;
    }
    for (var i in this[pu].cage) {
      const i1 = parseInt(i.split(",")[0]);
      const i2 = parseInt(i.split(",")[1]);
      var x1, y1, x2, y2;

      if (i1 % 4 === a[0]) {
        x1 = this.point[i1].x - r * this.size;
        y1 = this.point[i1].y - r * this.size;
      } else if (i1 % 4 === a[1]) {
        x1 = this.point[i1].x + r * this.size;
        y1 = this.point[i1].y - r * this.size;
      } else if (i1 % 4 === a[2]) {
        x1 = this.point[i1].x - r * this.size;
        y1 = this.point[i1].y + r * this.size;
      } else if (i1 % 4 === a[3]) {
        x1 = this.point[i1].x + r * this.size;
        y1 = this.point[i1].y + r * this.size;
      }
      if (i2 % 4 === a[0]) {
        x2 = this.point[i2].x - r * this.size;
        y2 = this.point[i2].y - r * this.size;
      } else if (i2 % 4 === a[1]) {
        x2 = this.point[i2].x + r * this.size;
        y2 = this.point[i2].y - r * this.size;
      } else if (i2 % 4 === a[2]) {
        x2 = this.point[i2].x - r * this.size;
        y2 = this.point[i2].y + r * this.size;
      } else if (i2 % 4 === a[3]) {
        x2 = this.point[i2].x + r * this.size;
        y2 = this.point[i2].y + r * this.size;
      }
      if (i1 % 4 === 3 || i2 % 4 === 0) {
        set_line_style(this.ctx, this[pu].cage[i] + 100);
      } else {
        set_line_style(this.ctx, this[pu].cage[i]);
      }
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  }

  draw_symbol(pu, layer) {
    /*symbol_layer*/
    var p_x, p_y;
    for (var i in this[pu].symbol) {
      if (i.slice(-1) === "E") {
        //辺モードでの重ね書き
        p_x = this.point[i.slice(0, -1)].x;
        p_y = this.point[i.slice(0, -1)].y;
      } else {
        p_x = this.point[i].x;
        p_y = this.point[i].y;
      }
      if (this[pu].symbol[i][2] === layer) {
        this.draw_symbol_select(
          this.ctx,
          p_x,
          p_y,
          this[pu].symbol[i][0],
          this[pu].symbol[i][1]
        );
      }
    }
  }

  draw_number(pu) {
    /*number*/
    var p_x, p_y;
    for (var i in this[pu].number) {
      if (i.slice(-1) === "E") {
        //辺モードでの重ね書き
        p_x = this.point[i.slice(0, -1)].x;
        p_y = this.point[i.slice(0, -1)].y;
      } else {
        p_x = this.point[i].x;
        p_y = this.point[i].y;
      }
      switch (this[pu].number[i][2]) {
        case "1": //normal
          this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
          set_font_style(
            this.ctx,
            (0.7 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.text(
            this[pu].number[i][0],
            p_x,
            p_y + 0.06 * this.size,
            this.size * 0.8
          );
          break;
        case "2": //arrow
          var arrowlength = 0.7;
          this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
          set_font_style(
            this.ctx,
            (0.7 * this.size).toString(10),
            this[pu].number[i][1]
          );
          var direction = {
            _0: 90,
            _1: 180,
            _2: 0,
            _3: 270,
            _4: 135,
            _5: 45,
            _6: 225,
            _7: 315,
          };
          var direction =
            (direction[this[pu].number[i][0].slice(-2)] - this.theta + 360) %
            360;
          if (this.reflect[0] === -1) {
            direction = (180 - direction + 360) % 360;
          }
          if (this.reflect[1] === -1) {
            direction = (360 - direction + 360) % 360;
          }
          switch (direction) {
            case 180:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x + 0.0 * this.size,
                p_y + 0.15 * this.size,
                this.size * 0.8
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x + (arrowlength * 0.5 + 0.0) * this.size,
                p_y + (arrowlength * 0.0 - 0.3) * this.size,
                p_x + (-arrowlength * 0.5 + 0.0) * this.size,
                p_y + (-arrowlength * 0.0 - 0.3) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 0:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x + 0.0 * this.size,
                p_y + 0.15 * this.size,
                this.size * 0.8
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x - (arrowlength * 0.5 + 0.0) * this.size,
                p_y + (arrowlength * 0.0 - 0.3) * this.size,
                p_x - (-arrowlength * 0.5 + 0.0) * this.size,
                p_y + (-arrowlength * 0.0 - 0.3) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 90:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x - 0.1 * this.size,
                p_y + 0.05 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x + (arrowlength * 0.0 + 0.3) * this.size,
                p_y + (arrowlength * 0.5 - 0.0) * this.size,
                p_x + (-arrowlength * 0.0 + 0.3) * this.size,
                p_y + (-arrowlength * 0.5 - 0.0) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 270:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x - 0.1 * this.size,
                p_y + 0.05 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x + (arrowlength * 0.0 + 0.3) * this.size,
                p_y + (-arrowlength * 0.5 - 0.0) * this.size,
                p_x + (-arrowlength * 0.0 + 0.3) * this.size,
                p_y + (arrowlength * 0.5 - 0.0) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 45:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x + 0.05 * this.size,
                p_y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x + (-arrowlength * 0.35 - 0.2) * this.size,
                p_y + (arrowlength * 0.35 - 0.2) * this.size,
                p_x + (arrowlength * 0.35 - 0.2) * this.size,
                p_y + (-arrowlength * 0.35 - 0.2) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 225:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x + 0.05 * this.size,
                p_y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x + (arrowlength * 0.35 - 0.2) * this.size,
                p_y + (-arrowlength * 0.35 - 0.2) * this.size,
                p_x + (-arrowlength * 0.35 - 0.2) * this.size,
                p_y + (arrowlength * 0.35 - 0.2) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 135:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x - 0.05 * this.size,
                p_y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x + (arrowlength * 0.35 + 0.2) * this.size,
                p_y + (arrowlength * 0.35 - 0.2) * this.size,
                p_x + (-arrowlength * 0.35 + 0.2) * this.size,
                p_y + (-arrowlength * 0.35 - 0.2) * this.size,
                [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]
              );
              this.ctx.stroke();
              this.ctx.fill();
              break;
            case 315:
              this.ctx.text(
                this[pu].number[i][0].slice(0, -2),
                p_x - 0.05 * this.size,
                p_y + 0.15 * this.size,
                this.size * 0.7
              );
              this.ctx.beginPath();
              this.ctx.arrow(
                p_x + (-arrowlength * 0.35 + 0.2) * this.size,
                p_y + (-arrowlength * 0.35 - 0.2) * this.size,
                p_x + (arrowlength * 0.35 + 0.2) * this.size,
                p_y + (arrowlength * 0.35 - 0.2) * this.size,
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
                p_x,
                p_y + 0.06 * this.size,
                this.size * 0.8
              );
              break;
          }
          break;
        case "4": //tapa
          this.draw_numbercircle(pu, i, p_x, p_y, 0.44);
          if (this[pu].number[i][0].length === 1) {
            set_font_style(
              this.ctx,
              (0.7 * this.size).toString(10),
              this[pu].number[i][1]
            );
            this.ctx.text(
              this[pu].number[i][0],
              p_x,
              p_y + 0.06 * this.size,
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
              p_x - 0.16 * this.size,
              p_y - 0.15 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(1, 2),
              p_x + 0.18 * this.size,
              p_y + 0.19 * this.size,
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
              p_x - 0.22 * this.size,
              p_y - 0.14 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(1, 2),
              p_x + 0.24 * this.size,
              p_y - 0.05 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(2, 3),
              p_x - 0.0 * this.size,
              p_y + 0.3 * this.size,
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
              p_x - 0.0 * this.size,
              p_y - 0.22 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(1, 2),
              p_x - 0.26 * this.size,
              p_y + 0.04 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(2, 3),
              p_x + 0.26 * this.size,
              p_y + 0.04 * this.size,
              this.size * 0.8
            );
            this.ctx.text(
              this[pu].number[i][0].slice(3, 4),
              p_x - 0.0 * this.size,
              p_y + 0.3 * this.size,
              this.size * 0.8
            );
          }
          break;
        case "5": //small
          this.draw_numbercircle(pu, i, p_x, p_y, 0.17);
          set_font_style(
            this.ctx,
            (0.25 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.text(
            this[pu].number[i][0],
            p_x,
            p_y + 0.02 * this.size,
            this.size * 0.8
          );
          break;
        case "6": //medium
          this.draw_numbercircle(pu, i, p_x, p_y, 0.25);
          set_font_style(
            this.ctx,
            (0.4 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.text(
            this[pu].number[i][0],
            p_x,
            p_y + 0.03 * this.size,
            this.size * 0.8
          );
          break;
        case "10": //big
          this.draw_numbercircle(pu, i, p_x, p_y, 0.36);
          set_font_style(
            this.ctx,
            (0.6 * this.size).toString(10),
            this[pu].number[i][1]
          );
          this.ctx.text(
            this[pu].number[i][0],
            p_x,
            p_y + 0.03 * this.size,
            this.size * 0.8
          );
          break;
        case "7": //sudoku
          this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
          set_font_style(
            this.ctx,
            (0.3 * this.size).toString(10),
            this[pu].number[i][1]
          );
          for (var j = 0; j < 9; j++) {
            if (this[pu].number[i][0][j] === 1) {
              this.ctx.text(
                (j + 1).toString(),
                p_x + ((j % 3) - 1) * 0.28 * this.size,
                p_y + ((((j / 3) | 0) - 1) * 0.28 + 0.02) * this.size
              );
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
              p_x - 0.2 * this.size,
              p_y - 0.25 * this.size,
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
          this.ctx.text(this[pu].number[i][0], p_x - 0.2 * this.size, p_y);
          break;
      }
    }

    for (var i in this[pu].numberS) {
      if (this[pu].numberS[i][1] === 5) {
        set_circle_style(this.ctx, 7);
        this.draw_polygon(
          this.ctx,
          this.point[i].x,
          this.point[i].y,
          0.27,
          4,
          45
        );
      } else if (this[pu].numberS[i][1] === 6) {
        set_circle_style(this.ctx, 1);
        this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
      } else if (this[pu].numberS[i][1] === 7) {
        set_circle_style(this.ctx, 2);
        this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
      }
      if (true) {
        //(this[pu].numberS[i][0].length <= 2 ){
        set_font_style(
          this.ctx,
          (0.32 * this.size).toString(10),
          this[pu].numberS[i][1]
        );
        this.ctx.textAlign = "center";
        this.ctx.text(
          this[pu].numberS[i][0],
          this.point[i].x,
          this.point[i].y + 0.03 * this.size,
          this.size * 0.48
        );
        //}else{
        //  set_font_style(this.ctx,0.28*this.size.toString(10),this[pu].numberS[i][1]);
        //  this.ctx.textAlign = "left";
        //  this.ctx.text(this[pu].numberS[i][0],this.point[i].x-0.15*this.size,this.point[i].y+0.03*this.size,this.size*0.8);
      }
    }
  }

  draw_numbercircle(pu, i, p_x, p_y, size) {
    if (this[pu].number[i][1] === 5) {
      set_circle_style(this.ctx, 7);
      this.draw_circle(this.ctx, p_x, p_y, size);
    } else if (this[pu].number[i][1] === 6) {
      set_circle_style(this.ctx, 1);
      this.draw_circle(this.ctx, p_x, p_y, size);
    } else if (this[pu].number[i][1] === 7) {
      set_circle_style(this.ctx, 2);
      this.draw_circle(this.ctx, p_x, p_y, size);
    }
  }

  draw_symbol_select(ctx, x, y, num, sym) {
    switch (sym) {
      /* figure */
      case "circle_L":
        if (num === 0) {
          set_circle_style(ctx, 1);
          this.draw_circle(ctx, x, y, 0.43);
          this.draw_circle(ctx, x, y, 0.32);
        } else {
          set_circle_style(ctx, num);
          this.draw_circle(ctx, x, y, 0.43);
        }
        break;
      case "circle_M":
        if (num === 0) {
          set_circle_style(ctx, 1);
          this.draw_circle(ctx, x, y, 0.35);
          this.draw_circle(ctx, x, y, 0.25);
        } else {
          set_circle_style(ctx, num);
          this.draw_circle(ctx, x, y, 0.35);
        }
        break;
      case "circle_S":
        if (num === 0) {
          set_circle_style(ctx, 1);
          this.draw_circle(ctx, x, y, 0.22);
          this.draw_circle(ctx, x, y, 0.14);
        } else {
          set_circle_style(ctx, num);
          this.draw_circle(ctx, x, y, 0.22);
        }
        break;
      case "circle_SS":
        if (num === 0) {
          set_circle_style(ctx, 1);
          this.draw_circle(ctx, x, y, 0.13);
          this.draw_circle(ctx, x, y, 0.07);
        } else {
          set_circle_style(ctx, num);
          this.draw_circle(ctx, x, y, 0.13);
        }
        break;
      case "square_LL":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.5 * Math.sqrt(2), 4, 45);
        break;
      case "square_L":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.4 * Math.sqrt(2), 4, 45);
        break;
      case "square_M":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.35 * Math.sqrt(2), 4, 45);
        break;
      case "square_S":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.22 * Math.sqrt(2), 4, 45);
        break;
      case "square_SS":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.13 * Math.sqrt(2), 4, 45);
        break;
      case "triup_L":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y + 0.5 * 0.25 * this.size, 0.5, 3, 90);
        break;
      case "triup_M":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y + 0.4 * 0.25 * this.size, 0.4, 3, 90);
        break;
      case "triup_SS":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y + 0.16 * 0.25 * this.size, 0.16, 3, 90);
        break;
      case "tridown_L":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y - 0.5 * 0.25 * this.size, 0.5, 3, -90);
        break;
      case "tridown_M":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y - 0.4 * 0.25 * this.size, 0.4, 3, -90);
        break;
      case "tridown_SS":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y - 0.16 * 0.25 * this.size, 0.16, 3, -90);
        break;
      case "triright_L":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x - 0.5 * 0.25 * this.size, y, 0.5, 3, 180);
        break;
      case "triright_M":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x - 0.4 * 0.25 * this.size, y, 0.4, 3, 180);
        break;
      case "triright_SS":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x - 0.16 * 0.25 * this.size, y, 0.16, 3, 180);
        break;
      case "trileft_L":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x + 0.5 * 0.25 * this.size, y, 0.5, 3, 0);
        break;
      case "trileft_M":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x + 0.4 * 0.25 * this.size, y, 0.4, 3, 0);
        break;
      case "trileft_SS":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x + 0.16 * 0.25 * this.size, y, 0.16, 3, 0);
        break;
      case "diamond_L":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.43, 4, 0);
        break;
      case "diamond_M":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.35, 4, 0);
        break;
      case "diamond_SS":
        set_circle_style(ctx, num);
        this.draw_polygon(ctx, x, y, 0.13, 4, 0);
        break;
      case "ox_B":
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(255,255,255,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 2;
        this.draw_ox(ctx, num, x, y);
        break;
      case "ox_E":
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(255,255,255,0)";
        ctx.strokeStyle = "rgba(32,128,32,1)";
        ctx.lineWidth = 2;
        this.draw_ox(ctx, num, x, y);
        break;
      case "ox_G":
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(255,255,255,0)";
        ctx.strokeStyle = "rgba(153,153,153,1)";
        ctx.lineWidth = 2;
        this.draw_ox(ctx, num, x, y);
        break;
      case "tri":
        this.draw_tri(ctx, num, x, y);
        break;
      case "cross":
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 3;
        this.draw_cross(ctx, num, x, y);
        break;
      case "line":
        this.draw_linesym(ctx, num, x, y);
        break;

      //number
      case "inequality":
        set_circle_style(ctx, 10);
        this.draw_inequality(ctx, num, x, y);
        break;
      case "math":
        set_font_style(ctx, (0.8 * this.size).toString(10), 1);
        this.draw_math(ctx, num, x, y + 0.05 * this.size);
        break;
      case "math_G":
        set_font_style(ctx, (0.8 * this.size).toString(10), 2);
        this.draw_math(ctx, num, x, y + 0.05 * this.size);
        break;
      case "degital":
        this.draw_degital(ctx, num, x, y);
        break;
      case "degital_f":
        this.draw_degital_f(ctx, num, x, y);
        break;
      case "dice":
        set_circle_style(ctx, 2);
        this.draw_dice(ctx, num, x, y);
        break;
      case "pills":
        set_circle_style(ctx, 3);
        this.draw_pills(ctx, num, x, y);
        break;

      /* arrow */
      case "arrow_B_B":
        set_circle_style(ctx, 2);
        this.draw_arrowB(ctx, num, x, y);
        break;
      case "arrow_B_G":
        set_circle_style(ctx, 3);
        this.draw_arrowB(ctx, num, x, y);
        break;
      case "arrow_B_W":
        set_circle_style(ctx, 1);
        this.draw_arrowB(ctx, num, x, y);
        break;
      case "arrow_N_B":
        set_circle_style(ctx, 2);
        this.draw_arrowN(ctx, num, x, y);
        break;
      case "arrow_N_G":
        set_circle_style(ctx, 3);
        this.draw_arrowN(ctx, num, x, y);
        break;
      case "arrow_N_W":
        set_circle_style(ctx, 1);
        this.draw_arrowN(ctx, num, x, y);
        break;
      case "arrow_S":
        set_circle_style(ctx, 2);
        this.draw_arrowS(ctx, num, x, y);
        break;
      case "arrow_GP":
        set_circle_style(ctx, 2);
        this.draw_arrowGP(ctx, num, x, y);
        break;
      case "arrow_GP_C":
        set_circle_style(ctx, 2);
        this.draw_arrowGP_C(ctx, num, x, y);
        break;
      case "arrow_Short":
        set_circle_style(ctx, 2);
        this.draw_arrowShort(ctx, num, x, y);
        break;
      case "arrow_tri_B":
        set_circle_style(ctx, 2);
        this.draw_arrowtri(ctx, num, x, y);
        break;
      case "arrow_tri_G":
        set_circle_style(ctx, 3);
        this.draw_arrowtri(ctx, num, x, y);
        break;
      case "arrow_tri_W":
        set_circle_style(ctx, 1);
        this.draw_arrowtri(ctx, num, x, y);
        break;
      case "arrow_cross":
        set_circle_style(ctx, 2);
        this.draw_arrowcross(ctx, num, x, y);
        break;
      case "arrow_eight":
        set_circle_style(ctx, 2);
        this.draw_arroweight(ctx, num, x, y);
        break;
      case "arrow_fourtip":
        set_circle_style(ctx, 2);
        this.draw_arrowfourtip(ctx, num, x, y);
        break;
      case "arrow_fouredge_B":
        set_circle_style(ctx, 2);
        ctx.strokeStyle = "rgba(0,0,0,0)";
        this.draw_arrowfouredge(ctx, num, x, y);
        break;
      case "arrow_fouredge_G":
        set_circle_style(ctx, 2);
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.fillStyle = "#999";
        this.draw_arrowfouredge(ctx, num, x, y);
        break;
      case "arrow_fouredge_E":
        set_circle_style(ctx, 2);
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.fillStyle = "#24a024";
        this.draw_arrowfouredge(ctx, num, x, y);
        break;

      /* special */
      case "kakuro":
        this.draw_kakuro(ctx, num, x, y);
        break;
      case "compass":
        this.draw_compass(ctx, num, x, y);
        break;
      case "star":
        this.draw_star(ctx, num, x, y);
        break;
      case "tents":
        this.draw_tents(ctx, num, x, y);
        break;
      case "battleship_B":
        set_circle_style(ctx, 2);
        this.draw_battleship(ctx, num, x, y);
        break;
      case "battleship_G":
        set_circle_style(ctx, 3);
        ctx.fillStyle = "#999";
        this.draw_battleship(ctx, num, x, y);
        break;
      case "battleship_W":
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 2;
        this.draw_battleship(ctx, num, x, y);
        break;
      case "battleship_B+":
        set_circle_style(ctx, 2);
        this.draw_battleshipplus(ctx, num, x, y);
        break;
      case "battleship_G+":
        set_circle_style(ctx, 3);
        ctx.fillStyle = "#999";
        this.draw_battleshipplus(ctx, num, x, y);
        break;
      case "battleship_W+":
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 2;
        this.draw_battleshipplus(ctx, num, x, y);
        break;
      case "angleloop":
        this.draw_angleloop(ctx, num, x, y);
        break;
      case "firefly":
        this.draw_firefly(ctx, num, x, y);
        break;
      case "sun_moon":
        this.draw_sun_moon(ctx, num, x, y);
        break;
      case "sudokuetc":
        this.draw_sudokuetc(ctx, num, x, y);
        break;
      case "polyomino":
        this.draw_polyomino(ctx, num, x, y);
        break;
      case "pencils":
        this.draw_pencils(ctx, num, x, y);
        break;
      case "slovak":
        this.draw_slovak(ctx, num, x, y);
        break;
      case "arc":
        this.draw_arc(ctx, num, x, y);
        break;
      case "darts":
        this.draw_darts(ctx, num, x, y);
        break;
      case "spans":
        this.draw_spans(ctx, num, x, y);
        break;
      case "neighbors":
        this.draw_neighbors(ctx, num, x, y);
        break;
    }
  }

  draw_circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r * this.size, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
  }

  draw_x(ctx, x, y, r) {
    ctx.beginPath();
    ctx.moveTo(
      x + r * Math.cos(45 * (Math.PI / 180)) * this.size,
      y + r * Math.sin(45 * (Math.PI / 180)) * this.size
    );
    ctx.lineTo(
      x + r * Math.cos(225 * (Math.PI / 180)) * this.size,
      y + r * Math.sin(225 * (Math.PI / 180)) * this.size
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(
      x + r * Math.cos(135 * (Math.PI / 180)) * this.size,
      y + r * Math.sin(135 * (Math.PI / 180)) * this.size
    );
    ctx.lineTo(
      x + r * Math.cos(315 * (Math.PI / 180)) * this.size,
      y + r * Math.sin(315 * (Math.PI / 180)) * this.size
    );
    ctx.stroke();
  }

  draw_ast(ctx, x, y, r) {
    var th;
    th = 45 + (this.theta % 180);
    ctx.beginPath();
    ctx.moveTo(
      x + r * Math.cos(th * (Math.PI / 180)) * this.size,
      y + r * Math.sin(th * (Math.PI / 180)) * this.size
    );
    ctx.lineTo(
      x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size,
      y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size
    );
    ctx.stroke();
    th = 135 + (this.theta % 180);
    ctx.beginPath();
    ctx.moveTo(
      x + r * Math.cos(th * (Math.PI / 180)) * this.size,
      y + r * Math.sin(th * (Math.PI / 180)) * this.size
    );
    ctx.lineTo(
      x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size,
      y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size
    );
    ctx.stroke();
  }

  draw_slash(ctx, x, y, r) {
    var th;
    th = 45 + (this.theta % 180);
    ctx.beginPath();
    ctx.moveTo(
      x + r * Math.cos(th * (Math.PI / 180)) * this.size,
      y + r * Math.sin(th * (Math.PI / 180)) * this.size
    );
    ctx.lineTo(
      x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size,
      y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size
    );
    ctx.stroke();
  }

  draw_ox(ctx, num, x, y) {
    var r = 0.3;
    switch (num) {
      case 1:
        this.draw_circle(ctx, x, y, r);
        break;
      case 2:
        this.draw_polygon(ctx, x, y + 0.05 * this.size, 0.3, 3, 90);
        break;
      case 3:
        this.draw_polygon(ctx, x, y, 0.35, 4, 45);
        break;
      case 4:
        this.draw_x(ctx, x, y, r);
        break;
      case 5:
        r = 0.5;
        ctx.beginPath();
        ctx.moveTo(
          x + r * Math.cos(45 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(45 * (Math.PI / 180)) * this.size
        );
        ctx.lineTo(
          x + r * Math.cos(225 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(225 * (Math.PI / 180)) * this.size
        );
        ctx.stroke();
        break;
      case 6:
        r = 0.5;
        ctx.beginPath();
        ctx.moveTo(
          x + r * Math.cos(135 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(135 * (Math.PI / 180)) * this.size
        );
        ctx.lineTo(
          x + r * Math.cos(315 * (Math.PI / 180)) * this.size,
          y + r * Math.sin(315 * (Math.PI / 180)) * this.size
        );
        ctx.stroke();
        break;
      case 7:
        this.draw_x(ctx, x, y, 0.5);
        break;
      case 8:
        r = 0.05;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = ctx.strokeStyle;
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 2;
        this.draw_circle(ctx, x, y, r);
        break;
      case 9:
        r = 0.3;
        this.draw_circle(ctx, x, y, r);
        this.draw_x(ctx, x, y, 0.45);
        break;
    }
  }

  draw_tri(ctx, num, x, y) {
    var r = 0.5,
      th;
    switch (num) {
      case 1:
      case 2:
      case 3:
      case 4:
        set_circle_style(ctx, 2);
        th = this.rotate_theta(-90 * (num - 1));
        ctx.beginPath();
        ctx.moveTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th - Math.PI * 0.75),
          y + Math.sqrt(2) * r * this.size * Math.sin(th - Math.PI * 0.75)
        );
        ctx.lineTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th - Math.PI * 0.25),
          y + Math.sqrt(2) * r * this.size * Math.sin(th - Math.PI * 0.25)
        );
        ctx.lineTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th + Math.PI * 0.75),
          y + Math.sqrt(2) * r * this.size * Math.sin(th + Math.PI * 0.75)
        );
        ctx.lineTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th - Math.PI * 0.75),
          y + Math.sqrt(2) * r * this.size * Math.sin(th - Math.PI * 0.75)
        );
        ctx.fill();
        break;
      case 5:
        set_circle_style(ctx, 2);
        this.draw_polygon(ctx, x, y, r * Math.sqrt(2), 4, 45);
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        set_circle_style(ctx, 3);
        ctx.fillStyle = "#999";
        th = this.rotate_theta(-90 * (num - 1));
        ctx.beginPath();
        ctx.moveTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th - Math.PI * 0.75),
          y + Math.sqrt(2) * r * this.size * Math.sin(th - Math.PI * 0.75)
        );
        ctx.lineTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th - Math.PI * 0.25),
          y + Math.sqrt(2) * r * this.size * Math.sin(th - Math.PI * 0.25)
        );
        ctx.lineTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th + Math.PI * 0.75),
          y + Math.sqrt(2) * r * this.size * Math.sin(th + Math.PI * 0.75)
        );
        ctx.lineTo(
          x + Math.sqrt(2) * r * this.size * Math.cos(th - Math.PI * 0.75),
          y + Math.sqrt(2) * r * this.size * Math.sin(th - Math.PI * 0.75)
        );
        ctx.fill();
        break;
      case 0:
        set_circle_style(ctx, 3);
        ctx.fillStyle = "#999";
        this.draw_polygon(ctx, x, y, r * Math.sqrt(2), 4, 45);
        break;
    }
  }

  draw_cross(ctx, num, x, y) {
    for (var i = 0; i < 4; i++) {
      if (num[i] === 1) {
        var th = this.rotate_theta(i * 90 - 180);
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

  draw_linesym(ctx, num, x, y) {
    var r = 0.32;
    ctx.setLineDash([]);
    ctx.lineCap = "round";
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 3;
    switch (num) {
      case 1:
        ctx.beginPath();
        ctx.moveTo(x - r * this.size, y - 0 * this.size);
        ctx.lineTo(x + r * this.size, y + 0 * this.size);
        ctx.closePath();
        ctx.stroke();
        break;
      case 2:
        ctx.beginPath();
        ctx.moveTo(x - 0 * this.size, y - r * this.size);
        ctx.lineTo(x + 0 * this.size, y + r * this.size);
        ctx.closePath();
        ctx.stroke();
        break;
      case 3:
        r = r / Math.sqrt(2);
        ctx.beginPath();
        ctx.moveTo(x - r * this.size, y - r * this.size);
        ctx.lineTo(x + r * this.size, y + r * this.size);
        ctx.closePath();
        ctx.stroke();
        break;
      case 4:
        r = r / Math.sqrt(2);
        ctx.beginPath();
        ctx.moveTo(x + r * this.size, y - r * this.size);
        ctx.lineTo(x - r * this.size, y + r * this.size);
        ctx.closePath();
        ctx.stroke();
        break;
      case 5:
        ctx.beginPath();
        ctx.moveTo(x - r * this.size, y - 0 * this.size);
        ctx.lineTo(x + r * this.size, y + 0 * this.size);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - 0 * this.size, y - r * this.size);
        ctx.lineTo(x + 0 * this.size, y + r * this.size);
        ctx.closePath();
        ctx.stroke();
        break;
      case 6:
        r = r / Math.sqrt(2);
        ctx.beginPath();
        ctx.moveTo(x - r * this.size, y - r * this.size);
        ctx.lineTo(x + r * this.size, y + r * this.size);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + r * this.size, y - r * this.size);
        ctx.lineTo(x - r * this.size, y + r * this.size);
        ctx.closePath();
        ctx.stroke();
        break;
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
        ctx.beginPath();
        th = this.rotate_theta((num - 1) * 90 + 45);
        ctx.moveTo(
          x + len * Math.sqrt(2) * this.size * Math.cos(th),
          y + len * Math.sqrt(2) * this.size * Math.sin(th)
        );
        th = this.rotate_theta((num - 1) * 90 + 180);
        ctx.lineTo(
          x + len * this.size * Math.cos(th),
          y + len * this.size * Math.sin(th)
        );
        th = this.rotate_theta((num - 1) * 90 + 315);
        ctx.lineTo(
          x + len * Math.sqrt(2) * this.size * Math.cos(th),
          y + len * Math.sqrt(2) * this.size * Math.sin(th)
        );
        ctx.fill();
        ctx.stroke();
        break;
      //for square
      case 5:
      case 6:
      case 7:
      case 8:
        len = 0.12;
        set_circle_style(ctx, 10);
        ctx.beginPath();
        th = this.rotate_theta((num - 1) * 90 + 80);
        ctx.moveTo(
          x + len * Math.sqrt(2) * this.size * Math.cos(th),
          y + len * Math.sqrt(2) * this.size * Math.sin(th)
        );
        th = this.rotate_theta((num - 1) * 90 + 180);
        ctx.lineTo(
          x + len * this.size * Math.cos(th),
          y + len * this.size * Math.sin(th)
        );
        th = this.rotate_theta((num - 1) * 90 + 280);
        ctx.lineTo(
          x + len * Math.sqrt(2) * this.size * Math.cos(th),
          y + len * Math.sqrt(2) * this.size * Math.sin(th)
        );
        ctx.stroke();
        break;
    }
  }

  draw_math(ctx, num, x, y) {
    switch (num) {
      case 1:
        ctx.font = 0.8 * this.size + "px sans-serif";
        ctx.text("\u{221E}", x, y);
        break;
      case 2:
        ctx.font = 0.7 * this.size + "px Helvetica,Arial";
        ctx.text("＋", x, y);
        break;
      case 3:
        ctx.font = 0.7 * this.size + "px Helvetica,Arial";
        ctx.text("－", x, y);
        break;
      case 4:
        ctx.text("×", x, y);
        break;
      case 5:
        ctx.font = 0.7 * this.size + "px Helvetica,Arial";
        ctx.text("＊", x, y);
        break;
      case 6:
        ctx.text("÷", x, y);
        break;
      case 7:
        ctx.font = (0.7 * this.size).toString() + "px Helvetica,Arial";
        ctx.text("＝", x, y);
        break;
      case 8:
        ctx.text("≠", x, y);
        break;
      case 9:
        ctx.text("≦", x, y);
        break;
      case 0:
        ctx.text("≧", x, y);
        break;
    }
  }

  draw_degital(ctx, num, x, y) {
    set_circle_style(ctx, 2);
    var w1, w2, w3, w4, z1, z2;
    z1 = 0.17;
    z2 = 0.015;
    w3 = 0.05;
    w4 = 0.05;
    for (var i = 0; i < 7; i++) {
      if (num[0] === 1) {
        w1 = z1;
        w2 = -2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(
          x - w1 * this.size,
          y + w2 * this.size,
          x + w1 * this.size,
          y + w2 * this.size,
          [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
        );
        ctx.fill();
      }
      if (num[1] === 1) {
        w1 = -(z1 + z2);
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(
          x + w1 * this.size,
          y + w2 * this.size,
          x + w1 * this.size,
          y - 2 * z2 * this.size,
          [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
        );
        ctx.fill();
      }
      if (num[2] === 1) {
        w1 = z1 + z2;
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(
          x + w1 * this.size,
          y + w2 * this.size,
          x + w1 * this.size,
          y - 2 * z2 * this.size,
          [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
        );
        ctx.fill();
      }
      if (num[3] === 1) {
        w1 = z1;
        w2 = 0;
        ctx.beginPath();
        ctx.arrow(
          x - w1 * this.size,
          y + w2 * this.size,
          x + w1 * this.size,
          y + w2 * this.size,
          [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
        );
        ctx.fill();
      }
      if (num[4] === 1) {
        w1 = -(z1 + z2);
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(
          x + w1 * this.size,
          y + w2 * this.size,
          x + w1 * this.size,
          y + 2 * z2 * this.size,
          [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
        );
        ctx.fill();
      }
      if (num[5] === 1) {
        w1 = z1 + z2;
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(
          x + w1 * this.size,
          y + w2 * this.size,
          x + w1 * this.size,
          y + 2 * z2 * this.size,
          [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
        );
        ctx.fill();
      }
      if (num[6] === 1) {
        w1 = z1;
        w2 = 2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(
          x - w1 * this.size,
          y + w2 * this.size,
          x + w1 * this.size,
          y + w2 * this.size,
          [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
        );
        ctx.fill();
      }
    }
  }

  draw_degital_f(ctx, num, x, y) {
    set_circle_style(ctx, 3);
    var w1, w2, w3, w4, z1, z2;
    z1 = 0.17;
    z2 = 0.015;
    w3 = 0.05;
    w4 = 0.05;
    //frame
    w1 = z1;
    w2 = -2 * (z1 + z2);
    ctx.beginPath();
    ctx.arrow(
      x - w1 * this.size,
      y + w2 * this.size,
      x + w1 * this.size,
      y + w2 * this.size,
      [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
    );
    ctx.stroke();
    ctx.fill();
    w1 = -(z1 + z2);
    w2 = -2 * z1;
    ctx.beginPath();
    ctx.arrow(
      x + w1 * this.size,
      y + w2 * this.size,
      x + w1 * this.size,
      y - 2 * z2 * this.size,
      [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
    );
    ctx.stroke();
    ctx.fill();
    w1 = z1 + z2;
    w2 = -2 * z1;
    ctx.beginPath();
    ctx.arrow(
      x + w1 * this.size,
      y + w2 * this.size,
      x + w1 * this.size,
      y - 2 * z2 * this.size,
      [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
    );
    ctx.stroke();
    ctx.fill();
    w1 = z1;
    w2 = 0;
    ctx.beginPath();
    ctx.arrow(
      x - w1 * this.size,
      y + w2 * this.size,
      x + w1 * this.size,
      y + w2 * this.size,
      [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
    );
    ctx.stroke();
    ctx.fill();
    w1 = -(z1 + z2);
    w2 = 2 * z1;
    ctx.beginPath();
    ctx.arrow(
      x + w1 * this.size,
      y + w2 * this.size,
      x + w1 * this.size,
      y + 2 * z2 * this.size,
      [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
    );
    ctx.stroke();
    ctx.fill();
    w1 = z1 + z2;
    w2 = 2 * z1;
    ctx.beginPath();
    ctx.arrow(
      x + w1 * this.size,
      y + w2 * this.size,
      x + w1 * this.size,
      y + 2 * z2 * this.size,
      [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
    );
    ctx.stroke();
    ctx.fill();
    w1 = z1;
    w2 = 2 * (z1 + z2);
    ctx.beginPath();
    ctx.arrow(
      x - w1 * this.size,
      y + w2 * this.size,
      x + w1 * this.size,
      y + w2 * this.size,
      [w3 * this.size, w4 * this.size, -w3 * this.size, w4 * this.size]
    );
    ctx.stroke();
    ctx.fill();

    //contents
    this.draw_degital(ctx, num, x, y);
  }

  draw_dice(ctx, num, x, y) {
    for (var i = 0; i < 9; i++) {
      if (num[i] === 1) {
        this.draw_circle(
          ctx,
          x + ((i % 3) - 1) * 0.25 * this.size,
          y + (((i / 3) | 0) - 1) * 0.25 * this.size,
          0.09
        );
      }
    }
  }

  draw_pills(ctx, num, x, y) {
    var r = 0.15;
    ctx.fillStyle = "#999";
    switch (num) {
      case 1:
        this.draw_circle(ctx, x, y, r);
        break;
      case 2:
        this.draw_circle(ctx, x - 0.22 * this.size, y - 0.22 * this.size, r);
        this.draw_circle(ctx, x + 0.22 * this.size, y + 0.22 * this.size, r);
        break;
      case 3:
        this.draw_circle(ctx, x - 0 * this.size, y - 0.23 * this.size, r);
        this.draw_circle(ctx, x + 0.23 * this.size, y + 0.2 * this.size, r);
        this.draw_circle(ctx, x - 0.23 * this.size, y + 0.2 * this.size, r);
        break;
      case 4:
        this.draw_circle(ctx, x - 0.22 * this.size, y - 0.22 * this.size, r);
        this.draw_circle(ctx, x + 0.22 * this.size, y + 0.22 * this.size, r);
        this.draw_circle(ctx, x - 0.22 * this.size, y + 0.22 * this.size, r);
        this.draw_circle(ctx, x + 0.22 * this.size, y - 0.22 * this.size, r);
        break;
      case 5:
        this.draw_circle(ctx, x, y, r);
        this.draw_circle(ctx, x - 0.24 * this.size, y - 0.24 * this.size, r);
        this.draw_circle(ctx, x + 0.24 * this.size, y + 0.24 * this.size, r);
        this.draw_circle(ctx, x - 0.24 * this.size, y + 0.24 * this.size, r);
        this.draw_circle(ctx, x + 0.24 * this.size, y - 0.24 * this.size, r);
        break;
    }
  }

  draw_arrowB(ctx, num, x, y) {
    var len1 = 0.38; //nemoto
    var len2 = 0.4; //tip
    var w1 = 0.2;
    var w2 = 0.4;
    var ri = -0.4;
    this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
  }

  draw_arrowN(ctx, num, x, y) {
    var len1 = 0.38; //nemoto
    var len2 = 0.4; //tip
    var w1 = 0.03;
    var w2 = 0.13;
    var ri = -0.25;
    this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
  }

  draw_arrowS(ctx, num, x, y) {
    var len1 = 0.3; //nemoto
    var len2 = 0.32; //tip
    var w1 = 0.02;
    var w2 = 0.12;
    var ri = -0.2;
    this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
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
    if (num > 0 && num <= 8) {
      th = this.rotate_theta((num - 1) * 45 - 180);
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
    if (num > 0 && num <= 8) {
      this.draw_circle(ctx, x, y, 0.4);
      var th = this.rotate_theta((num - 1) * 45 - 180);
      this.draw_arrowGP(
        ctx,
        num,
        x + 0.6 * this.size * Math.cos(th),
        y + 0.6 * this.size * Math.sin(th)
      );
    }
  }

  draw_arrowShort(ctx, num, x, y) {
    var len1 = 0.3; //nemoto
    var len2 = 0.3; //tip
    var w1 = 0.15;
    var w2 = 0.31;
    var ri = -0.33;
    this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
  }

  draw_arrowtri(ctx, num, x, y) {
    var len1 = 0.25; //nemoto
    var len2 = 0.4; //tip
    var w1 = 0;
    var w2 = 0.35;
    var ri = 0;
    this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
  }

  draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri) {
    var th;
    if (num > 0 && num <= 8) {
      th = this.rotate_theta((num - 1) * 45 - 180);
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
    for (var i = 0; i < 4; i++) {
      if (num[i] === 1) {
        th = this.rotate_theta(i * 90 - 180);
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
    for (var i = 0; i < 8; i++) {
      if (num[i] === 1) {
        this.draw_arrow8(ctx, i + 1, x, y, len1, len2, w1, w2, ri);
      }
    }
  }

  draw_arrow8(ctx, num, x, y, len1, len2, w1, w2, ri) {
    var th;
    if (num === 2 || num === 4 || num === 6 || num === 8) {
      len1 *= 1.3;
      len2 *= 1.2;
    }
    if (num > 0 && num <= 8) {
      th = this.rotate_theta((num - 1) * 45 - 180);
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

  draw_arrowfourtip(ctx, num, x, y) {
    var len1 = 0.5; //nemoto
    var len2 = -0.25; //tip
    var w1 = 0.0;
    var w2 = 0.2;
    var ri = 0.0;
    for (var i = 0; i < 4; i++) {
      if (num[i] === 1) {
        this.draw_arrow4(ctx, i + 1, x, y, len1, len2, w1, w2, ri);
      }
    }
  }

  draw_arrow4(ctx, num, x, y, len1, len2, w1, w2, ri) {
    var th;
    if (num > 0 && num <= 4) {
      th = this.rotate_theta((num - 1) * 90);
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

  draw_arrowfouredge(ctx, num, x, y) {
    var len1 = 0.5; //nemoto
    var len2 = 0.5;
    var t1 = 0.0;
    var t2 = 0.5;
    var w1 = 0.02;
    var w2 = 0.07;
    var ri = 0.42;
    var th1, th2;
    for (var i = 0; i < 4; i++) {
      if (num[i] === 1) {
        th1 = this.rotate_theta(225 + 90 * i);
        th2 = this.rotate_theta(90 * i);
        ctx.beginPath();
        ctx.arrow(
          x +
            len1 * this.size * Math.cos(th1 + Math.PI * t1) +
            0.1 * this.size * Math.cos(th2),
          y +
            len1 * this.size * Math.sin(th1 + Math.PI * t1) +
            0.1 * this.size * Math.sin(th2),
          x +
            len2 * this.size * Math.cos(th1 + Math.PI * t2) -
            0.05 * this.size * Math.cos(th2),
          y +
            len2 * this.size * Math.sin(th1 + Math.PI * t2) -
            0.05 * this.size * Math.sin(th2),
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
    for (var i = 4; i < 8; i++) {
      if (num[i] === 1) {
        th1 = this.rotate_theta(225 + 90 * i);
        th2 = this.rotate_theta(90 * i);
        ctx.beginPath();
        ctx.arrow(
          x +
            len2 * this.size * Math.cos(th1 + Math.PI * t2) -
            0.1 * this.size * Math.cos(th2),
          y +
            len2 * this.size * Math.sin(th1 + Math.PI * t2) -
            0.1 * this.size * Math.sin(th2),
          x +
            len1 * this.size * Math.cos(th1 + Math.PI * t1) +
            0.05 * this.size * Math.cos(th2),
          y +
            len1 * this.size * Math.sin(th1 + Math.PI * t1) +
            0.05 * this.size * Math.sin(th2),
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
  }

  draw_kakuro(ctx, num, x, y) {
    var th = (this.rotate_theta(45) * 180) / Math.PI;
    switch (num) {
      case 1:
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "rgba(255,255,255,0)";
        ctx.lineWidth = 1;
        this.draw_polygon(ctx, x, y, 0.5 * Math.sqrt(2), 4, th);
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        this.draw_slash(ctx, x, y, 0.5 * Math.sqrt(2));
        break;
      case 2:
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "rgba(255,255,255,0)";
        ctx.lineWidth = 1;
        this.draw_polygon(ctx, x, y, 0.5 * Math.sqrt(2), 4, th);
        break;
      case 3:
        ctx.fillStyle = "#ccc";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 1;
        this.draw_polygon(ctx, x, y, 0.5 * Math.sqrt(2), 4, th);
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_slash(ctx, x, y, 0.5 * Math.sqrt(2));
        break;
      case 4:
        ctx.fillStyle = "#ccc";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 1;
        this.draw_polygon(ctx, x, y, 0.5 * Math.sqrt(2), 4, th);
        break;
      case 5:
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 1;
        this.draw_polygon(ctx, x, y, 0.5 * Math.sqrt(2), 4, th);
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_slash(ctx, x, y, 0.5 * Math.sqrt(2));
        break;
      case 6:
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 1;
        this.draw_polygon(ctx, x, y, 0.5 * Math.sqrt(2), 4, th);
        break;
    }
  }

  draw_compass(ctx, num, x, y) {
    switch (num) {
      case 1:
        var r = 0.5;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_ast(ctx, x, y, r * Math.sqrt(2));
        break;
      case 2:
        var r = 0.33;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_ast(ctx, x, y, r * Math.sqrt(2));
        break;
      case 3:
        var r = 0.5;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        this.draw_ast(ctx, x, y, r * Math.sqrt(2));
        break;
    }
  }

  draw_tents(ctx, num, x, y) {
    switch (num) {
      case 1:
        var r1;
        var r2;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 1;
        ctx.fillStyle = "#fff";
        r1 = 0.1;
        r2 = 0.4;
        ctx.beginPath();
        ctx.moveTo(x - r1 * this.size, y);
        ctx.lineTo(x + r1 * this.size, y);
        ctx.lineTo(x + r1 * this.size, y + r2 * this.size);
        ctx.lineTo(x - r1 * this.size, y + r2 * this.size);
        ctx.lineTo(x - r1 * this.size, y);
        ctx.fill();
        ctx.stroke();

        r1 = 0.2;
        r2 = 0.4;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.fillStyle = "#999";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(
          x - r1 * Math.cos(90 * (Math.PI / 180)) * this.size,
          y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0) * this.size
        );
        ctx.lineTo(
          x - r2 * Math.cos(210 * (Math.PI / 180)) * this.size,
          y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0) * this.size
        );
        ctx.lineTo(
          x - r2 * Math.cos(330 * (Math.PI / 180)) * this.size,
          y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0) * this.size
        );
        //ctx.arc(x,y-0.1*this.size,0.3*this.size,0,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(
          x - r1 * Math.cos(90 * (Math.PI / 180)) * this.size,
          y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0.2) * this.size
        );
        ctx.lineTo(
          x - r2 * Math.cos(210 * (Math.PI / 180)) * this.size,
          y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0.2) * this.size
        );
        ctx.lineTo(
          x - r2 * Math.cos(330 * (Math.PI / 180)) * this.size,
          y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0.2) * this.size
        );
        ctx.fill();
        break;
      case 2:
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#ccc";
        ctx.lineWidth = 1;
        r1 = 0.3;
        r2 = 0.4;
        ctx.beginPath();
        ctx.moveTo(
          x - r1 * Math.cos(90 * (Math.PI / 180)) * this.size,
          y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * this.size
        );
        ctx.lineTo(
          x - r2 * Math.cos(210 * (Math.PI / 180)) * this.size,
          y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * this.size
        );
        ctx.lineTo(
          x - r2 * Math.cos(330 * (Math.PI / 180)) * this.size,
          y - (r2 * Math.sin(330 * (Math.PI / 180)) - 0.1) * this.size
        );
        ctx.lineTo(
          x - r1 * Math.cos(90 * (Math.PI / 180)) * this.size,
          y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * this.size
        );
        ctx.lineTo(
          x - r2 * Math.cos(210 * (Math.PI / 180)) * this.size,
          y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * this.size
        );
        ctx.fill();
        ctx.stroke();
        break;
      case 3: //anglers
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - 0.35 * this.size, y);
        ctx.quadraticCurveTo(
          x - 0 * this.size,
          y + 0.37 * this.size,
          x + 0.3 * this.size,
          y - 0.2 * this.size
        );
        ctx.stroke();
        ctx.moveTo(x - 0.35 * this.size, y);
        ctx.quadraticCurveTo(
          x - 0 * this.size,
          y - 0.37 * this.size,
          x + 0.3 * this.size,
          y + 0.2 * this.size
        );
        ctx.stroke();
        break;
      case 4:
        set_font_style(ctx, (0.8 * this.size).toString(10), 1);
        ctx.text("～", x, y - 0.11 * this.size);
        ctx.text("～", x, y + 0.09 * this.size);
        ctx.text("～", x, y + 0.29 * this.size);
        break;
      /*
                case 4: //cactus
                  ctx.setLineDash([]);
                  ctx.lineCap = "butt";
                  ctx.strokeStyle = "rgba(0,0,0,0)";
                  ctx.fillStyle = "rgba(1,1,1,1)";
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(x-0.1*this.size,y+0.4*this.size);
                  ctx.lineTo(x-0.1*this.size,y+0.2*this.size);
                  ctx.lineTo(x-0.35*this.size,y+0.2*this.size);
                  ctx.lineTo(x-0.35*this.size,y-0.2*this.size);
                  ctx.lineTo(x-0.2*this.size,y-0.2*this.size);
                  ctx.lineTo(x-0.2*this.size,y+0.05*this.size);
                  ctx.lineTo(x-0.1*this.size,y+0.05*this.size);
                  ctx.lineTo(x-0.1*this.size,y-0.45*this.size);
                  ctx.lineTo(x+0.1*this.size,y-0.45*this.size);
                  ctx.lineTo(x+0.1*this.size,y-0.1*this.size);
                  ctx.lineTo(x+0.2*this.size,y-0.1*this.size);
                  ctx.lineTo(x+0.2*this.size,y-0.3*this.size);
                  ctx.lineTo(x+0.35*this.size,y-0.3*this.size);
                  ctx.lineTo(x+0.35*this.size,y+0.05*this.size);
                  ctx.lineTo(x+0.1*this.size,y+0.05*this.size);
                  ctx.lineTo(x+0.1*this.size,y+0.4*this.size);
                  ctx.stroke();
                  ctx.fill();
                  break;
                  */
    }
  }

  draw_star(ctx, num, x, y) {
    var r1 = 0.38;
    var r2 = 0.382 * r1;
    switch (num) {
      case 1:
        ctx.fillStyle = "#fff";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y + 0.03 * this.size, r1, r2, 5);
        break;
      case 2:
        ctx.fillStyle = "#000"; //"#009826";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y + 0.03 * this.size, r1, r2, 5);
        break;
      case 3:
        ctx.fillStyle = "#999";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y + 0.03 * this.size, r1, r2, 5);
        break;
      case 4:
        ctx.fillStyle = "#fff";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y, r1, r2 * 0.9, 4);
        break;
      case 5:
        ctx.fillStyle = "#000"; //"#009826";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y, r1, r2 * 0.9, 4);
        break;
      case 6:
        ctx.fillStyle = "#999";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y, r1, r2 * 0.9, 4);
        break;
      case 7:
        ctx.fillStyle = "#fff";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y, r2 * 0.9, r1, 4);
        break;
      case 8:
        ctx.fillStyle = "#000"; //"#009826";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y, r2 * 0.9, r1, 4);
        break;
      case 9:
        ctx.fillStyle = "#999";
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 1;
        this.draw_star0(ctx, x, y, r2 * 0.9, r1, 4);
        break;
      case 0:
        var r = 0.4;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        this.draw_x(ctx, x, y, r);
        break;
    }
  }

  draw_star0(ctx, x, y, r1, r2, n) {
    var th1 = 90;
    var th2 = th1 + 180 / n;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(
      x - r1 * Math.cos(th1 * (Math.PI / 180)) * this.size,
      y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * this.size
    );
    ctx.lineTo(
      x - r2 * Math.cos(th2 * (Math.PI / 180)) * this.size,
      y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * this.size
    );
    for (var i = 0; i < n; i++) {
      th1 += 360 / n;
      th2 += 360 / n;
      ctx.lineTo(
        x - r1 * Math.cos(th1 * (Math.PI / 180)) * this.size,
        y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * this.size
      );
      ctx.lineTo(
        x - r2 * Math.cos(th2 * (Math.PI / 180)) * this.size,
        y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * this.size
      );
    }
    ctx.fill();
    ctx.stroke();
  }

  draw_battleship(ctx, num, x, y) {
    var r = 0.4;
    var th;
    switch (num) {
      case 1:
        ctx.beginPath();
        ctx.arc(x, y, r * this.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        break;
      case 2:
        th = (this.rotate_theta(45) * 180) / Math.PI;
        this.draw_polygon(ctx, x, y, 0.36 * Math.sqrt(2), 4, th);
        break;
      case 3:
        this.draw_battleship_tip(ctx, x, y, 0);
        break;
      case 4:
        this.draw_battleship_tip(ctx, x, y, 90);
        break;
      case 5:
        this.draw_battleship_tip(ctx, x, y, 180);
        break;
      case 6:
        this.draw_battleship_tip(ctx, x, y, 270);
        break;
      case 7:
        set_font_style(ctx, (0.8 * this.size).toString(10), 1);
        ctx.text("～", x, y - 0.11 * this.size);
        ctx.text("～", x, y + 0.09 * this.size);
        ctx.text("～", x, y + 0.29 * this.size);
        break;
      case 8:
        r = 0.05;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 2;
        this.draw_circle(ctx, x, y, r);
        break;
    }
  }

  draw_battleship_tip(ctx, x, y, th) {
    var r = 0.36;
    th = this.rotate_theta(th);
    ctx.beginPath();
    ctx.arc(x, y, r * this.size, Math.PI * 0.5 + th, Math.PI * 1.5 + th, false);
    ctx.moveTo(
      x + r * this.size * Math.sin(th),
      y - r * this.size * Math.cos(th)
    );
    ctx.lineTo(
      x + r * Math.sqrt(2) * this.size * Math.sin(th + (45 / 180) * Math.PI),
      y - r * Math.sqrt(2) * this.size * Math.cos(th + (45 / 180) * Math.PI)
    );
    ctx.lineTo(
      x + r * Math.sqrt(2) * this.size * Math.sin(th + (135 / 180) * Math.PI),
      y - r * Math.sqrt(2) * this.size * Math.cos(th + (135 / 180) * Math.PI)
    );
    ctx.lineTo(
      x + r * this.size * Math.sin(th + Math.PI),
      y - r * this.size * Math.cos(th + Math.PI)
    );
    ctx.fill();
    ctx.stroke();
  }

  draw_battleshipplus(ctx, num, x, y) {
    var r = 0.4;
    var th;
    switch (num) {
      case 1:
        this.draw_battleship_tipplus(ctx, x, y, 0);
        break;
      case 2:
        this.draw_battleship_tipplus(ctx, x, y, 90);
        break;
      case 3:
        this.draw_battleship_tipplus(ctx, x, y, 180);
        break;
      case 4:
        this.draw_battleship_tipplus(ctx, x, y, 270);
        break;
    }
  }

  draw_battleship_tipplus(ctx, x, y, th) {
    var r = 0.36;
    th = this.rotate_theta(th);
    ctx.beginPath();
    ctx.arc(x, y, r * this.size, Math.PI * 0.5 + th, Math.PI * 1.0 + th, false);
    ctx.moveTo(
      x - r * this.size * Math.sin(th),
      y + r * this.size * Math.cos(th)
    );
    ctx.lineTo(
      x + r * Math.sqrt(2) * this.size * Math.sin(-th + (45 / 180) * Math.PI),
      y + r * Math.sqrt(2) * this.size * Math.cos(-th + (45 / 180) * Math.PI)
    );
    ctx.lineTo(
      x + r * Math.sqrt(2) * this.size * Math.sin(-th + (135 / 180) * Math.PI),
      y + r * Math.sqrt(2) * this.size * Math.cos(-th + (135 / 180) * Math.PI)
    );
    ctx.lineTo(
      x + r * Math.sqrt(2) * this.size * Math.sin(-th + (225 / 180) * Math.PI),
      y + r * Math.sqrt(2) * this.size * Math.cos(-th + (225 / 180) * Math.PI)
    );
    ctx.lineTo(
      x - r * this.size * Math.sin(-th + 0.5 * Math.PI),
      y - r * this.size * Math.cos(-th + 0.5 * Math.PI)
    );
    ctx.fill();
    ctx.stroke();
  }

  draw_angleloop(ctx, num, x, y) {
    var r;
    switch (num) {
      case 1:
        r = 0.24;
        set_circle_style(ctx, 2);
        this.draw_polygon(ctx, x, y, r, 3, 90);
        break;
      case 2:
        r = 0.24;
        set_circle_style(ctx, 5);
        ctx.fillStyle = "#999";
        this.draw_polygon(ctx, x, y, r, 4, 45);
        break;
      case 3:
        r = 0.215;
        set_circle_style(ctx, 1);
        ctx.lineWidth = 1;
        this.draw_polygon(ctx, x, y, r, 5, 90);
        break;
      case 4:
        r = 0.25;
        set_circle_style(ctx, 1);
        ctx.lineWidth = 2;
        this.draw_x(ctx, x, y, r);
        break;
    }
  }

  draw_firefly(ctx, num, x, y) {
    var r1 = 0.36,
      r2 = 0.09;
    ctx.setLineDash([]);
    ctx.lineCap = "butt";
    switch (num) {
      case 1:
      case 2:
      case 3:
      case 4:
        var th = this.rotate_theta((num - 1) * 90 - 180);
        set_circle_style(ctx, 1);
        this.draw_circle(ctx, x, y, r1);
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineWidth = 2;
        this.draw_circle(
          ctx,
          x - r1 * this.size * Math.cos(th),
          y - r1 * this.size * Math.sin(th),
          r2
        );
        break;
      case 5:
        set_circle_style(ctx, 1);
        this.draw_circle(ctx, x, y, r1);
        break;
    }
  }

  draw_sun_moon(ctx, num, x, y) {
    var r1 = 0.36,
      r2 = 0.34;
    switch (num) {
      case 1:
        set_circle_style(ctx, 1);
        this.draw_circle(ctx, x, y, r1);
        break;
      case 2:
        set_circle_style(ctx, 2);
        ctx.beginPath();
        ctx.arc(x, y, r1 * this.size, -0.34 * Math.PI, 0.73 * Math.PI, false);
        ctx.arc(
          x - 0.12 * this.size,
          y - 0.08 * this.size,
          r2 * this.size,
          0.67 * Math.PI,
          -0.28 * Math.PI,
          true
        );
        ctx.closePath();
        ctx.fill();
        break;
    }
  }

  draw_pencils(ctx, num, x, y) {
    var r = 0.2,
      th;
    ctx.setLineDash([]);
    ctx.lineCap = "butt";
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.lineJoin = "bevel";
    switch (num) {
      case 1:
      case 2:
      case 3:
      case 4:
        ctx.beginPath();
        th = this.rotate_theta(90 * (num - 1));
        ctx.moveTo(
          x + Math.sqrt(2) * 0.5 * this.size * Math.cos(th + Math.PI * 0.25),
          y + Math.sqrt(2) * 0.5 * this.size * Math.sin(th + Math.PI * 0.25)
        );
        ctx.lineTo(x, y);
        ctx.lineTo(
          x + Math.sqrt(2) * 0.5 * this.size * Math.cos(th - Math.PI * 0.25),
          y + Math.sqrt(2) * 0.5 * this.size * Math.sin(th - Math.PI * 0.25)
        );
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(
          x + Math.sqrt(2) * 0.25 * this.size * Math.cos(th + Math.PI * 0.25),
          y + Math.sqrt(2) * 0.25 * this.size * Math.sin(th + Math.PI * 0.25)
        );
        ctx.lineTo(x, y);
        ctx.lineTo(
          x + Math.sqrt(2) * 0.25 * this.size * Math.cos(th - Math.PI * 0.25),
          y + Math.sqrt(2) * 0.25 * this.size * Math.sin(th - Math.PI * 0.25)
        );
        ctx.closePath();
        ctx.fill();
        break;
    }
  }

  draw_slovak(ctx, num, x, y) {
    var r = 0.09,
      h = 0.37;
    switch (num) {
      case 1:
        set_circle_style(ctx, 1);
        this.draw_circle(ctx, x, y + h * this.size, r);
        break;
      case 2:
        set_circle_style(ctx, 1);
        this.draw_circle(ctx, x - 0.2 * this.size, y + h * this.size, r);
        this.draw_circle(ctx, x + 0.2 * this.size, y + h * this.size, r);
        break;
      case 3:
        set_circle_style(ctx, 1);
        this.draw_circle(ctx, x - 0.25 * this.size, y + h * this.size, r);
        this.draw_circle(ctx, x + 0.0 * this.size, y + h * this.size, r);
        this.draw_circle(ctx, x + 0.25 * this.size, y + h * this.size, r);
        break;
      case 4:
        set_circle_style(ctx, 1);
        this.draw_circle(ctx, x - 0.36 * this.size, y + h * this.size, r);
        this.draw_circle(ctx, x - 0.12 * this.size, y + h * this.size, r);
        this.draw_circle(ctx, x + 0.12 * this.size, y + h * this.size, r);
        this.draw_circle(ctx, x + 0.36 * this.size, y + h * this.size, r);
        break;
      case 5:
        set_font_style(ctx, (0.35 * this.size).toString(10), 1);
        ctx.text("?", x, y + h * this.size);
        break;
    }
  }

  draw_sudokuetc(ctx, num, x, y) {
    switch (num) {
      case 1:
        var r = 0.14;
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.fillStyle = "#ccc";
        this.draw_polygon(
          ctx,
          x - r * this.size,
          y + r * this.size,
          r * Math.sqrt(2),
          4,
          45
        );
        this.draw_polygon(
          ctx,
          x + r * this.size,
          y - r * this.size,
          r * Math.sqrt(2),
          4,
          45
        );
        ctx.fillStyle = "#666";
        this.draw_polygon(
          ctx,
          x - r * this.size,
          y - r * this.size,
          r * Math.sqrt(2),
          4,
          45
        );
        this.draw_polygon(
          ctx,
          x + r * this.size,
          y + r * this.size,
          r * Math.sqrt(2),
          4,
          45
        );
        break;
      case 2:
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 4;
        this.draw_circle(ctx, x, y, 0.71);
        break;
      case 3:
        var r = 0.99;
        set_circle_style(ctx, 3);
        ctx.beginPath();
        ctx.moveTo(x, y + r * this.size);
        ctx.lineTo(x + r * this.size, y);
        ctx.lineTo(x, y - r * this.size);
        ctx.lineTo(x - r * this.size, y);
        ctx.closePath();
        ctx.fill();
        break;
      case 4:
        var r = 0.2 * this.size;
        var w = 1.8 * this.size;
        var h = 0.8 * this.size;
        x = x - 0.4 * this.size;
        y = y - 0.4 * this.size;
        ctx.lineCap = "butt";
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
        ctx.stroke();
        break;
      case 5:
        var r = 0.2 * this.size;
        var w = 0.8 * this.size;
        var h = 1.8 * this.size;
        x = x - 0.4 * this.size;
        y = y - 0.4 * this.size;
        ctx.lineCap = "butt";
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
        ctx.stroke();
        break;
      case 6:
        var r = 0.2 * this.size;
        var w = 2.8 * this.size;
        var h = 0.8 * this.size;
        x = x - 0.4 * this.size;
        y = y - 0.4 * this.size;
        ctx.lineCap = "butt";
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
        ctx.stroke();
        break;
      case 7:
        var r = 0.2 * this.size;
        var w = 0.8 * this.size;
        var h = 2.8 * this.size;
        x = x - 0.4 * this.size;
        y = y - 0.4 * this.size;
        ctx.lineCap = "butt";
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
        ctx.stroke();
        break;
    }
  }

  draw_arc(ctx, num, x, y) {
    var r = 0.2,
      th;
    ctx.setLineDash([]);
    ctx.lineCap = "butt";
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.lineJoin = "bevel";
    switch (num) {
      case 1:
      case 2:
      case 3:
      case 4:
        ctx.beginPath();
        th = this.rotate_theta(90 * (num - 1));
        ctx.moveTo(
          x + Math.sqrt(2) * 0.5 * this.size * Math.cos(th + Math.PI * 0.25),
          y + Math.sqrt(2) * 0.5 * this.size * Math.sin(th + Math.PI * 0.25)
        );
        ctx.arcTo(
          x + Math.sqrt(2) * 0.5 * this.size * Math.cos(th - Math.PI * 0.25),
          y + Math.sqrt(2) * 0.5 * this.size * Math.sin(th - Math.PI * 0.25),
          x + Math.sqrt(2) * 0.5 * this.size * Math.cos(th - Math.PI * 0.75),
          y + Math.sqrt(2) * 0.5 * this.size * Math.sin(th - Math.PI * 0.75),
          this.size
        );
        ctx.stroke();
        break;
      case 5:
      case 6:
        ctx.beginPath();
        th = this.rotate_theta(90 * (num - 5));
        ctx.moveTo(
          x + Math.sqrt(2) * 0.5 * this.size * Math.cos(th + Math.PI * 0.25),
          y + Math.sqrt(2) * 0.5 * this.size * Math.sin(th + Math.PI * 0.25)
        );
        ctx.lineTo(
          x + Math.sqrt(2) * 0.5 * this.size * Math.cos(th - Math.PI * 0.75),
          y + Math.sqrt(2) * 0.5 * this.size * Math.sin(th - Math.PI * 0.75)
        );
        ctx.stroke();
    }
  }

  draw_darts(ctx, num, x, y) {
    set_circle_style(ctx, 9);
    if (1 <= num && num <= 4) {
      for (var i = 1; i <= num; i++) {
        this.draw_circle(ctx, x, y, Math.sqrt(2) * 0.5 * (2 * i - 1));
      }
    }
    for (var i = 0; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(
        x + Math.sqrt(2) * 0.5 * this.size * Math.cos(Math.PI * 0.5 * i),
        y + Math.sqrt(2) * 0.5 * this.size * Math.sin(Math.PI * 0.5 * i)
      );
      ctx.lineTo(
        x +
          Math.sqrt(2) *
            0.5 *
            this.size *
            Math.cos(Math.PI * 0.5 * i) *
            (2 * num - 1),
        y +
          Math.sqrt(2) *
            0.5 *
            this.size *
            Math.sin(Math.PI * 0.5 * i) *
            (2 * num - 1)
      );
      ctx.stroke();
    }
  }

  draw_spans(ctx, num, x, y) {
    var h = 0.15;
    switch (num) {
      case 1:
        set_circle_style(ctx, 8);
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x + 0.5 * this.size, y - h * this.size);
        ctx.lineTo(x + 0.5 * this.size, y + h * this.size);
        ctx.lineTo(x + h * this.size, y + 0.5 * this.size);
        ctx.lineTo(x - h * this.size, y + 0.5 * this.size);
        ctx.lineTo(x - 0.5 * this.size, y + h * this.size);
        ctx.lineTo(x - 0.5 * this.size, y - h * this.size);
        ctx.lineTo(x - h * this.size, y - 0.5 * this.size);
        ctx.lineTo(x + h * this.size, y - 0.5 * this.size);
        ctx.lineTo(x + 0.5 * this.size, y - h * this.size);
        ctx.closePath();
        ctx.stroke();
        break;
    }
  }

  draw_neighbors(ctx, num, x, y) {
    var r = 0.85;
    switch (num) {
      case 1:
        set_circle_style(ctx, 1);
        ctx.fillStyle = "#999";
        this.draw_polygon(ctx, x, y, 1 / Math.sqrt(2), 4, 45);
        ctx.fillStyle = "#ccc";
        this.draw_polygon(ctx, x, y, r / Math.sqrt(2), 4, 45);
        break;
    }
  }

  draw_polyomino(ctx, num, x, y) {
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(200,200,200,1)";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1.2;
    ctx.lineCap = "butt";
    var r = 0.25;
    for (var i = 0; i < 9; i++) {
      if (num[i] === 1) {
        this.draw_polygon(
          ctx,
          x + ((i % 3) - 1) * r * this.size,
          y + (((i / 3) | 0) - 1) * r * this.size,
          r * 0.5 * Math.sqrt(2),
          4,
          45
        );
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
