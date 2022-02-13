/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/State.ts":
/*!**********************!*\
  !*** ./src/State.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
var State = /** @class */ (function () {
    function State() {
        this.pu = null;
        this.panel_pu = null;
    }
    return State;
}());



/***/ }),

/***/ "./src/general/boot.ts":
/*!*****************************!*\
  !*** ./src/general/boot.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boot": () => (/* binding */ boot)
/* harmony export */ });
/* harmony import */ var _boot_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot_parameters */ "./src/general/boot_parameters.ts");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./src/general/create.ts");


var boot = function (state) {
    var obj = document.getElementById("dvique");
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    obj.appendChild(canvas);
    (0,_boot_parameters__WEBPACK_IMPORTED_MODULE_0__.boot_parameters)();
    var urlParam = location.search.substring(1);
    if (urlParam) {
        load(state.pu, urlParam);
    }
    else {
        (0,_create__WEBPACK_IMPORTED_MODULE_1__.create)(state);
    }
    //翻訳、ボタン色サイズ調整
    var language = (navigator["browserLanguage"] ||
        navigator.language ||
        navigator["userLanguage"]).substr(0, 2);
    if (language != "ja") {
        document.getElementById("english")["value"] = "English";
    }
    else {
        document.getElementById("english")["value"] = "JP";
    }
    trans();
};


/***/ }),

/***/ "./src/general/boot_parameters.ts":
/*!****************************************!*\
  !*** ./src/general/boot_parameters.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boot_parameters": () => (/* binding */ boot_parameters)
/* harmony export */ });
var boot_parameters = function () {
    document.getElementById("gridtype")['value'] = "square";
    document.getElementById("nb_size1")['value'] = 10;
    document.getElementById("nb_size2")['value'] = 10;
    document.getElementById("nb_size3")['value'] = 38;
    document.getElementById("nb_space1")['value'] = 0;
    document.getElementById("nb_space2")['value'] = 0;
    document.getElementById("nb_space3")['value'] = 0;
    document.getElementById("nb_space4")['value'] = 0;
};


/***/ }),

/***/ "./src/general/create.ts":
/*!*******************************!*\
  !*** ./src/general/create.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "create_newboard": () => (/* binding */ create_newboard)
/* harmony export */ });
/* harmony import */ var _model_Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Panel */ "./src/model/Panel.ts");
/* harmony import */ var _makeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeClass */ "./src/general/makeClass.ts");


var create = function (state) {
    //盤面サイズ取得
    var gridtype = document.getElementById("gridtype")["value"];
    var pu = (0,_makeClass__WEBPACK_IMPORTED_MODULE_1__.make_class)(gridtype);
    state.pu = pu;
    pu.reset_frame(); //盤面描画
    //描画パネル
    var panel_pu = new _model_Panel__WEBPACK_IMPORTED_MODULE_0__.Panel();
    state.panel_pu = panel_pu;
    panel_pu.draw_panel();
    pu.mode_set("surface"); //include redraw
};
var create_newboard = function (state) {
    //盤面サイズ取得
    var mode = state.pu.mode;
    var gridtype = document.getElementById("gridtype")["value"];
    var pu = (0,_makeClass__WEBPACK_IMPORTED_MODULE_1__.make_class)(gridtype);
    state.pu = pu;
    pu.mode = mode;
    pu.reset_frame(); //盤面描画
    //描画
    state.panel_pu.draw_panel();
    document.getElementById("modal").style.display = "none";
    pu.mode_set(pu.mode[pu.mode.qa].edit_mode); //include redraw
};


/***/ }),

/***/ "./src/general/duplicate.ts":
/*!**********************************!*\
  !*** ./src/general/duplicate.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "duplicate": () => (/* binding */ duplicate)
/* harmony export */ });
var duplicate = function (pu) {
    var address = pu.maketext();
    if (pu.mmode === "solve") {
        address = address + "&l=solvedup";
    }
    window.open(address);
};


/***/ }),

/***/ "./src/general/makeClass.ts":
/*!**********************************!*\
  !*** ./src/general/makeClass.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "make_class": () => (/* binding */ make_class)
/* harmony export */ });
/* harmony import */ var _model_PuzzleCairoPentagonal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/PuzzleCairoPentagonal */ "./src/model/PuzzleCairoPentagonal.ts");
/* harmony import */ var _model_PuzzleHex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/PuzzleHex */ "./src/model/PuzzleHex.ts");
/* harmony import */ var _model_PuzzleIso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/PuzzleIso */ "./src/model/PuzzleIso.ts");
/* harmony import */ var _model_PuzzlePyramid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/PuzzlePyramid */ "./src/model/PuzzlePyramid.ts");
/* harmony import */ var _model_PuzzleSnubSquare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/PuzzleSnubSquare */ "./src/model/PuzzleSnubSquare.ts");
/* harmony import */ var _model_PuzzleSquare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/PuzzleSquare */ "./src/model/PuzzleSquare.ts");
/* harmony import */ var _model_PuzzleTetrakisSquare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PuzzleTetrakisSquare */ "./src/model/PuzzleTetrakisSquare.ts");
/* harmony import */ var _model_PuzzleTri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/PuzzleTri */ "./src/model/PuzzleTri.ts");
/* harmony import */ var _model_PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/PuzzleTruncatedSquare */ "./src/model/PuzzleTruncatedSquare.ts");









var make_class = function (gridtype) {
    var size = parseInt(document.getElementById("nb_size3")["value"]);
    var pu = null;
    switch (gridtype) {
        case "square":
            var nx = parseInt(document.getElementById("nb_size1")["value"], 10);
            var ny = parseInt(document.getElementById("nb_size2")["value"], 10);
            var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
            var space2 = parseInt(document.getElementById("nb_space2")["value"], 10);
            var space3 = parseInt(document.getElementById("nb_space3")["value"], 10);
            var space4 = parseInt(document.getElementById("nb_space4")["value"], 10);
            if (nx <= 32 &&
                nx > 0 &&
                ny <= 32 &&
                ny > 0 &&
                12 <= size &&
                size <= 60 &&
                space1 + space2 < ny &&
                space3 + space4 < nx) {
                pu = new _model_PuzzleSquare__WEBPACK_IMPORTED_MODULE_5__.Puzzle_square(nx, ny, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~32 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~32 Display size:12~60");
                }
            }
            break;
        case "hex":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
            if (n0 <= 12 && n0 > 0 && 12 <= size && size <= 60 && space1 < n0) {
                pu = new _model_PuzzleHex__WEBPACK_IMPORTED_MODULE_1__.Puzzle_hex(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~12 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~12 Display size:12~60");
                }
            }
            break;
        case "tri":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
            if (n0 <= 20 && n0 > 0 && 12 <= size && size <= 60 && space1 < n0 / 3) {
                pu = new _model_PuzzleTri__WEBPACK_IMPORTED_MODULE_7__.Puzzle_tri(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~20 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~20 Display size:12~60");
                }
            }
            break;
        case "pyramid":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            var space1 = parseInt(document.getElementById("nb_space1")["value"], 10);
            if (n0 <= 20 && n0 > 0 && 12 <= size && size <= 60 && space1 < n0 / 3) {
                pu = new _model_PuzzlePyramid__WEBPACK_IMPORTED_MODULE_3__.Puzzle_pyramid(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~20 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~20 Display size:12~60");
                }
            }
            break;
        case "iso":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            if (n0 <= 16 && n0 > 0 && 12 <= size && size <= 60) {
                pu = new _model_PuzzleIso__WEBPACK_IMPORTED_MODULE_2__.Puzzle_iso(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~16 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~16 Display size:12~60");
                }
            }
            break;
        case "truncated_square":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
                pu = new _model_PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_8__.Puzzle_truncated_square(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~10 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~10 Display size:12~60");
                }
            }
            break;
        case "tetrakis_square":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
                pu = new _model_PuzzleTetrakisSquare__WEBPACK_IMPORTED_MODULE_6__.Puzzle_tetrakis_square(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~10 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~10 Display size:12~60");
                }
            }
            break;
        case "snub_square":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
                pu = new _model_PuzzleSnubSquare__WEBPACK_IMPORTED_MODULE_4__.Puzzle_snub_square(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~10 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~10 Display size:12~60");
                }
            }
            break;
        case "cairo_pentagonal":
            var n0 = parseInt(document.getElementById("nb_size1")["value"], 10);
            if (n0 <= 10 && n0 > 0 && 12 <= size && size <= 60) {
                pu = new _model_PuzzleCairoPentagonal__WEBPACK_IMPORTED_MODULE_0__.Puzzle_cairo_pentagonal(n0, n0, size);
            }
            else {
                if (document.getElementById("english")["value"] === "English") {
                    alert("一辺:1~10 表示サイズ:12~60");
                }
                else {
                    alert("Grid:1~10 Display size:12~60");
                }
            }
            break;
    }
    return pu;
};


/***/ }),

/***/ "./src/main/Control.ts":
/*!*****************************!*\
  !*** ./src/main/Control.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onDown": () => (/* binding */ onDown),
/* harmony export */   "onUp": () => (/* binding */ onUp),
/* harmony export */   "onMove": () => (/* binding */ onMove),
/* harmony export */   "onOut": () => (/* binding */ onOut),
/* harmony export */   "onContextmenu": () => (/* binding */ onContextmenu),
/* harmony export */   "onKeyDown": () => (/* binding */ onKeyDown)
/* harmony export */ });
/* harmony import */ var _general_duplicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/duplicate */ "./src/general/duplicate.ts");

var coord_point = function (pu, canvas, e) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    var min0 = 10e6;
    var min = 10e6;
    var num = 0;
    //const startTime = performance.now();
    for (var i = 0; i < pu.point.length; i++) {
        if (pu.point[i] && pu.type.indexOf(pu.point[i].type) != -1) {
            min0 = Math.pow((x - pu.point[i].x), 2) + Math.pow((y - pu.point[i].y), 2);
            if (min0 < min) {
                min = min0;
                num = i;
            }
        }
    }
    //const endTime = performance.now();
    //console.log(endTime - startTime);
    num = Math.floor(num);
    return { x: x, y: y, num: num };
};
var onDown = function (pu, canvas, e) {
    if (e.type === "mousedown") {
        var event = e;
    }
    else {
        var event = e.changedTouches[0];
        e.preventDefault(); //mouseとtouchが両方起動する時、touchのみ
    }
    var obj = coord_point(pu, canvas, event);
    var x = obj.x;
    var y = obj.y;
    var num = obj.num;
    if (pu.point[num].use === 1) {
        if (event.button === 2) {
            pu.mouse_mode = "down_right";
            pu.mouseevent(x, y, num);
        }
        else {
            //左クリックorタップ
            pu.mouse_mode = "down_left";
            pu.mouseevent(x, y, num);
        }
    }
};
var onUp = function (pu, canvas, e) {
    if (e.type === "mouseup") {
        var event = e;
    }
    else {
        var event = e.changedTouches[0];
        e.preventDefault(); //mouseとtouchが両方起動する時、touchのみ
    }
    var obj = coord_point(pu, canvas, event);
    var x = obj.x, y = obj.y, num = obj.num;
    pu.mouse_mode = "up";
    pu.mouseevent(x, y, num);
};
var onMove = function (pu, canvas, e) {
    if (e.type === "mousemove") {
        var event = e;
    }
    else {
        var event = e.changedTouches[0];
    }
    e.preventDefault();
    var obj = coord_point(pu, canvas, event);
    var x = obj.x, y = obj.y, num = obj.num;
    if (pu.point[num].use === 1) {
        pu.mouse_mode = "move";
        pu.mouseevent(x, y, num);
    }
};
var onOut = function (pu, e) {
    pu.mouse_mode = "out";
    pu.mouseevent(0, 0, 0);
    return;
};
var onContextmenu = function (pu, e) {
    //右クリック
    e.preventDefault();
};
var onKeyDown = function (pu, e) {
    if (e.target.type === "number" ||
        e.target.type === "text" ||
        e.target.id == "savetextarea_pp" ||
        e.target.id == "inputtext") {
        //入力フォーム用
    }
    else {
        var key = e.key;
        var shift_key = e.shiftKey;
        var ctrl_key = e.ctrlKey;
        var alt_key = e.altKey;
        var str_num = "1234567890";
        var str_alph_low = "abcdefghijklmnopqrstuvwxyz";
        var str_alph_up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var str_sym = "!\"#$%&'()-=^~|@[];+:*,.<>/?_";
        if (key === "F2") {
            //function_key
            pu.mode_qa("pu_q");
            event.returnValue = false;
        }
        else if (key === "F3") {
            pu.mode_qa("pu_a");
            event.returnValue = false;
        }
        if (key === "ArrowLeft" ||
            key === "ArrowRight" ||
            key === "ArrowUp" ||
            key === "ArrowDown") {
            //arrow
            pu.key_arrow(key);
            event.returnValue = false;
        }
        if (!ctrl_key) {
            if (shift_key && key === " ") {
                pu.key_number(key);
                event.returnValue = false;
            }
            else if (str_num.indexOf(key) != -1 ||
                str_alph_low.indexOf(key) != -1 ||
                str_alph_up.indexOf(key) != -1 ||
                str_sym.indexOf(key) != -1) {
                pu.key_number(key);
            }
            else if (key === " ") {
                pu.key_space();
                event.returnValue = false;
            }
            else if (key === "Backspace") {
                pu.key_backspace();
                event.returnValue = false;
            }
        }
        if (ctrl_key) {
            switch (key) {
                case "d": //Ctrl+d
                case "D":
                    (0,_general_duplicate__WEBPACK_IMPORTED_MODULE_0__.duplicate)(pu);
                    event.returnValue = false;
                    break;
                case "y": //Ctrl+y
                case "Y":
                    pu.redo();
                    event.returnValue = false;
                    break;
                case "z": //Ctrl+z
                case "Z":
                    pu.undo();
                    event.returnValue = false;
                    break;
                case " ": //Ctrl+space
                    pu.key_shiftspace();
                    event.returnValue = false;
                    break;
            }
        }
    }
};


/***/ }),

/***/ "./src/model/Panel.ts":
/*!****************************!*\
  !*** ./src/model/Panel.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Panel": () => (/* binding */ Panel)
/* harmony export */ });
var Panel = /** @class */ (function () {
    function Panel() {
        this.panelmode = "number";
        this.canvasf = document.getElementById("float-canvas");
        this.ctxf = this.canvasf.getContext("2d");
        this.fkh = document.getElementById("float-key-header");
        this.fkm = document.getElementById("float-key-menu");
        this.fkb = document.getElementById("float-key-body");
        this.spacef = 3;
        this.sizef = 36; //Math.min(45,Math.max(pu.size,28));
        this.nxf = 4;
        this.nyf = 3;
        this.cont = [];
        this.str = "";
        this.edit_num = 0;
    }
    Panel.prototype.mode_set = function (mode) {
        this.panelmode = mode;
        this.draw_panel();
    };
    Panel.prototype.select_open = function () {
        document.getElementById("float-key-select").style.display = "inline";
        document.getElementById("float-key-select").style.left = this.fkh.style.width;
    };
    Panel.prototype.select_close = function () {
        document.getElementById("float-key-select").style.display = "none";
    };
    Panel.prototype.inputtext = function () {
        var input_text = "";
        input_text = document.getElementById("inputtext")['value'];
        pu.key_space();
        for (var i = 0; i < input_text.length; i++) {
            pu.key_number(input_text[i]);
        }
    };
    Panel.prototype.cleartext = function () {
        var input_message = document.getElementById("inputtext")['value'] = "";
    };
    Panel.prototype.canvas_size_setting = function (height) {
        this.canvasf.width = ((this.sizef + this.spacef) * this.nxf - this.spacef) * pu.resol;
        this.canvasf.height = ((this.sizef + this.spacef) * this.nyf - this.spacef) * pu.resol;
        this.ctxf.scale(pu.resol, pu.resol);
        this.canvasf.style.width = ((this.sizef + this.spacef) * this.nxf - this.spacef).toString() + "px";
        this.canvasf.style.height = ((this.sizef + this.spacef) * this.nyf - this.spacef).toString() + "px";
        this.fkh.style.width = ((this.sizef + this.spacef) * this.nxf + this.spacef).toString() + "px";
        this.fkb.style.width = ((this.sizef + this.spacef) * this.nxf + this.spacef).toString() + "px";
        this.fkb.style.height = ((this.sizef + this.spacef) * this.nyf + this.spacef + height).toString() + "px";
    };
    Panel.prototype.draw_number = function () {
        set_surface_style(this.ctxf, 99);
        for (var i = 0; i < this.nxf * this.nyf; i++) {
            this.ctxf.fillRect((i % this.nxf) * (this.sizef + this.spacef), (i / this.nxf | 0) * (this.sizef + this.spacef), this.sizef, this.sizef);
        }
        for (var i = 0; i < this.nxf * this.nyf; i++) {
            set_font_style(this.ctxf, 0.8 * this.sizef.toString(10), pu.mode[pu.mode.qa][pu.mode[pu.mode.qa].edit_mode][1]);
            if (this.ctxf.fillStyle === "#ffffff") {
                this.ctxf.fillStyle = "#000000";
            }
            this.ctxf.text(this.cont[i].toString(), (i % this.nxf + 0.45) * (this.sizef + this.spacef), ((i / this.nxf | 0) + 0.55) * (this.sizef + this.spacef));
        }
    };
    Panel.prototype.draw_unicodesymbol = function () {
        set_surface_style(this.ctxf, 99);
        for (var i = 0; i < this.nxf * this.nyf; i++) {
            this.ctxf.fillRect((i % this.nxf) * (this.sizef + this.spacef), (i / this.nxf | 0) * (this.sizef + this.spacef), this.sizef, this.sizef);
        }
        for (var i = 0; i < this.nxf * this.nyf; i++) {
            set_font_style(this.ctxf, 0.8 * this.sizef.toString(10), pu.mode[pu.mode.qa][pu.mode[pu.mode.qa].edit_mode][1]);
            if (this.ctxf.fillStyle === "#ffffff") {
                this.ctxf.fillStyle = "#000000";
            }
            this.ctxf.text(this.cont[i], (i % this.nxf + 0.45) * (this.sizef + this.spacef), ((i / this.nxf | 0) + 0.55) * (this.sizef + this.spacef));
        }
    };
    Panel.prototype.draw_panel = function () {
        this.select_close();
        document.getElementById("float-key-board").style.display = "inline";
        document.getElementById("float-key-text").style.display = "none";
        if (pu.mode[pu.mode.qa].edit_mode === "number") {
            switch (this.panelmode) {
                case "Text":
                    this.nxf = 4;
                    this.nyf = 3;
                    this.sizef = 36;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    document.getElementById("float-key-text").style.display = "inline";
                    document.getElementById("float-key-board").style.display = "none";
                    break;
                case "number":
                    this.nxf = 4;
                    this.nyf = 3;
                    this.sizef = 36;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.cont = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "\u21B2", ""];
                    this.draw_number();
                    break;
                case "alphabet":
                    this.nxf = 6;
                    this.nyf = 5;
                    this.sizef = 36;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.cont = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
                        "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "?", "\u2423", ""];
                    this.draw_number();
                    break;
                case "alphabet_s":
                    this.nxf = 6;
                    this.nyf = 5;
                    this.sizef = 36;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.cont = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "?", "\u2423", ""];
                    this.draw_number();
                    break;
                case "key_symbol":
                    this.nxf = 6;
                    this.nyf = 5;
                    this.sizef = 36;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "!?#$%&()[]+\uFF0D\u00D7\uFF0A/\u00F7\uFF1D\u221E^<>\uFF5E|@;:,._   ";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "ja_K":
                    this.nxf = 10;
                    this.nyf = 9;
                    this.sizef = 28;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ" +
                        "ヤユヨ　　ラリルレロワヲン　　ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョッ　ー。、「」";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "ja_H":
                    this.nxf = 10;
                    this.nyf = 9;
                    this.sizef = 28;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも" +
                        "やゆよ　　らりるれろわをん　　がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょっ　ー。、「」";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "Kan":
                    this.nxf = 10;
                    this.nyf = 9;
                    this.sizef = 28;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "黒白灰緑赤青黄水数独偶奇大中小上下左右　同違長短縦横行列遠近高低以央最各交差方向" +
                        "一二三四五六七八九十壁領域部屋点線輪　　書含入出通切曲直進問丸角形例題解答正誤図計算言葉文字盤面矢印";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "Rome":
                    this.nxf = 6;
                    this.nyf = 4;
                    this.sizef = 36;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅺⅻ";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "Greek":
                    this.nxf = 8;
                    this.nyf = 6;
                    this.sizef = 28;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυϕχψω";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "Cyrillic":
                    this.nxf = 7;
                    this.nyf = 5;
                    this.sizef = 28;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ   ";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "europe":
                    this.nxf = 7;
                    this.nyf = 6;
                    this.sizef = 28;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "ÄÖÜäöüßÑñÉÀÈÙÂÊÎÔÛËÏÜÇŒÆéàèùâêîôûëïüçœæ   ";
                    this.cont = this.str.split("");
                    this.draw_number();
                    break;
                case "Chess":
                    this.nxf = 6;
                    this.nyf = 8;
                    this.sizef = 32;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "♔♕♖♗♘♙♚♛♜♝♞♟☖☗歩角飛香桂銀金王玉と龍馬杏圭全成帥俥傌炮仕相兵將車馬砲士象卒　　　　";
                    this.cont = this.str.split("");
                    this.draw_unicodesymbol();
                    break;
                case "card":
                    this.nxf = 4;
                    this.nyf = 6;
                    this.sizef = 32;
                    this.canvas_size_setting(45);
                    this.fkb.style.paddingTop = "0px";
                    this.fkb.style.display = "block";
                    this.fkm.style.display = "flex";
                    this.str = "♤♡♢♧♠♥♦♣A2345678910JQK  ";
                    this.cont = this.str.split("");
                    this.draw_unicodesymbol();
                    break;
            }
        }
        else if (pu.mode[pu.mode.qa].edit_mode === "symbol") {
            this.nxf = 4;
            this.nyf = 3;
            this.sizef = 36;
            this.canvas_size_setting(5);
            this.fkb.style.paddingTop = "20px";
            this.fkb.style.display = "block";
            this.fkm.style.display = "none";
            set_surface_style(this.ctxf, 99);
            for (var i = 0; i < 10; i++) {
                this.ctxf.fillRect((i % this.nxf) * (this.sizef + this.spacef), (i / this.nxf | 0) * (this.sizef + this.spacef), this.sizef, this.sizef);
            }
            i = 11;
            this.ctxf.fillRect((i % this.nxf) * (this.sizef + this.spacef), (i / this.nxf | 0) * (this.sizef + this.spacef), this.sizef, this.sizef);
            if (pu.onoff_symbolmode_list[pu.mode[pu.mode.qa].symbol[0]]) {
                this.cont = this.makecont(pu.onoff_symbolmode_list[pu.mode[pu.mode.qa].symbol[0]]);
            }
            else {
                this.cont = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, " "];
            }
            var size = pu.size;
            pu.size = this.sizef;
            for (var i = 0; i < this.cont.length; i++) {
                pu.draw_symbol_select(this.ctxf, (i % this.nxf + 0.45) * (this.sizef + this.spacef), ((i / this.nxf | 0) + 0.45) * (this.sizef + this.spacef), this.cont[i], pu.mode[pu.mode.qa].symbol[0]);
            }
            pu.size = size;
            if (!pu.onoff_symbolmode_list[pu.mode[pu.mode.qa].symbol[0]]) { //onoffモードでなければ赤カーソル
                var i_n;
                if (this.edit_num >= 0 && this.edit_num <= 11 && this.edit_num != 10) {
                    i_n = this.edit_num;
                }
                set_line_style(this.ctxf, 100);
                this.ctxf.strokeRect((i_n % this.nxf) * (this.sizef + this.spacef), (i_n / this.nxf | 0) * (this.sizef + this.spacef), this.sizef, this.sizef);
            }
        }
        else {
            this.fkb.style.display = "none";
        }
    };
    Panel.prototype.makecont = function (n) {
        var a = [];
        for (var i = 0; i < n; i++) {
            a[i] = [];
            for (var j = 0; j < n; j++) {
                if (i === j) {
                    a[i][j] = 1;
                }
                else {
                    a[i][j] = 0;
                }
            }
        }
        return a;
    };
    return Panel;
}());



/***/ }),

/***/ "./src/model/Point.ts":
/*!****************************!*\
  !*** ./src/model/Point.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
var Point = /** @class */ (function () {
    function Point(x, y, type, adjacent, surround, use, neighbor, adjacent_dia, type2) {
        if (neighbor === void 0) { neighbor = []; }
        if (adjacent_dia === void 0) { adjacent_dia = []; }
        if (type2 === void 0) { type2 = 0; }
        this.x = x;
        this.y = y;
        this.type = type;
        this.type2 = type2;
        this.adjacent = adjacent;
        this.adjacent_dia = adjacent_dia;
        this.surround = surround;
        this.neighbor = neighbor;
        this.use = use;
    }
    return Point;
}());



/***/ }),

/***/ "./src/model/Puzzle.ts":
/*!*****************************!*\
  !*** ./src/model/Puzzle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle": () => (/* binding */ Puzzle)
/* harmony export */ });
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stack */ "./src/model/Stack.ts");

var Puzzle = /** @class */ (function () {
    function Puzzle(gridtype) {
        this.gridtype = gridtype;
        this.resol = 2.5; //window.devicePixelRatio || 1;
        this.canvasx = 0; //predefine
        this.canvasy = 0; //predefine
        this.center_n = 0;
        this.center_n0 = 0;
        this.margin = 6;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.obj = document.getElementById("dvique");
        //square
        this.group1 = [
            "sub_line2_lb",
            "sub_lineE2_lb",
            "sub_number9_lb",
            "msli_triright",
            "msli_trileft",
            "ms_tri",
            "ms_battleship_B+",
            "ms_battleship_G+",
            "ms_battleship_W+",
            "ms_pencils",
            "ms_slovak",
            "ms_arc",
            "ms_spans",
            "ms_neighbors",
            "ms_arrow_fourtip",
            "ms0_arrow_fouredge",
            "ms_darts",
            "combili_shaka",
            "combili_battleship",
            "combili_arrowS",
        ];
        //square,pyramid,hex
        this.group2 = [
            "mo_wall_lb",
            "sub_number3_lb",
            "sub_number10_lb",
            "ms4",
            "ms5",
            "subc4",
        ];
        //square,tri,hex
        this.group3 = ["sub_line5_lb"];
        //square,hex
        this.group4 = ["mo_cage_lb"];
        //square,tri,hex,pyramid,
        this.group5 = [
            "sub_specialthermo_lb",
            "sub_specialarrows_lb",
            "sub_specialdirection_lb",
            "sub_specialsquareframe_lb",
        ];
        //描画位置
        this.mouse_mode = "";
        this.last = -1;
        this.lastx = -1;
        this.lasty = -1;
        this.first = -1;
        this.start_point = {}; //for move_redo
        this.drawing = false;
        this.drawing_mode = -1;
        this.cursol = 0;
        this.cursolS = 0;
        this.paneloff = false;
        //描画モード
        this.mmode = ""; //出題モード用
        this.mode = {
            qa: "pu_q",
            grid: ["1", "2", "1"],
            pu_q: {
                edit_mode: "surface",
                surface: ["", 1],
                line: ["1", 3],
                lineE: ["1", 2],
                wall: ["", 3],
                cage: ["", 10],
                number: ["1", 1],
                symbol: ["circle_L", 2],
                special: ["thermo", ""],
                board: ["", ""],
                move: ["1", ""],
                combi: ["battleship", ""],
            },
            pu_a: {
                edit_mode: "surface",
                surface: ["", 1],
                line: ["1", 3],
                lineE: ["1", 3],
                wall: ["", 3],
                cage: ["", 10],
                number: ["1", 2],
                symbol: ["circle_L", 2],
                special: ["thermo", ""],
                board: ["", ""],
                move: ["1", ""],
                combi: ["battleship", ""],
            },
        };
        this.theta = 0;
        this.reflect = [1, 1];
        this.centerlist = [];
        this.solution = "";
        this.sol_flag = 0;
        this.replace = [
            ['"qa"', "z9"],
            ['"pu_q"', "zQ"],
            ['"pu_a"', "zA"],
            ['"grid"', "zG"],
            ['"edit_mode"', "zM"],
            ['"surface"', "zS"],
            ['"line"', "zL"],
            ['"lineE"', "zE"],
            ['"wall"', "zW"],
            ['"cage"', "zC"],
            ['"number"', "zN"],
            ['"symbol"', "zY"],
            ['"special"', "zP"],
            ['"board"', "zB"],
            ['"command_redo"', "zR"],
            ['"command_undo"', "zU"],
            ['"numberS"', "z1"],
            ['"freeline"', "zF"],
            ['"freelineE"', "z2"],
            ['"thermo"', "zT"],
            ['"arrows"', "z3"],
            ['"direction"', "zD"],
            ['"squareframe"', "z0"],
            ['"polygon"', "z5"],
            ['"deletelineE"', "z4"],
            ['"__a"', "z_"],
            ["null", "zO"],
        ];
    }
    Puzzle.prototype.reset = function () {
        //盤面状態
        for (var _i = 0, _a = ["pu_q", "pu_a"]; _i < _a.length; _i++) {
            var i = _a[_i];
            this[i] = {};
            this[i].command_redo = new _Stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
            this[i].command_undo = new _Stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
            this[i].surface = {};
            this[i].number = {};
            this[i].numberS = {};
            this[i].symbol = {};
            this[i].freeline = {};
            this[i].freelineE = {};
            this[i].thermo = [];
            this[i].arrows = [];
            this[i].direction = [];
            this[i].squareframe = [];
            this[i].polygon = [];
            this[i].line = {};
            this[i].lineE = {};
            this[i].wall = {};
            this[i].cage = {};
            this[i].deletelineE = {};
        }
        this.frame = {};
        this.freelinecircle_g = [-1, -1];
        this.point = [];
    };
    Puzzle.prototype.reset_board = function () {
        this[this.mode.qa] = {};
        this[this.mode.qa].command_redo = new _Stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
        this[this.mode.qa].command_undo = new _Stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
        this[this.mode.qa].surface = {};
        this[this.mode.qa].number = {};
        this[this.mode.qa].numberS = {};
        this[this.mode.qa].symbol = {};
        this[this.mode.qa].freeline = {};
        this[this.mode.qa].freelineE = {};
        this[this.mode.qa].thermo = [];
        this[this.mode.qa].arrows = [];
        this[this.mode.qa].direction = [];
        this[this.mode.qa].squareframe = [];
        this[this.mode.qa].polygon = [];
        this[this.mode.qa].line = {};
        this[this.mode.qa].lineE = {};
        this[this.mode.qa].wall = {};
        this[this.mode.qa].cage = {};
        this[this.mode.qa].deletelineE = {};
    };
    Puzzle.prototype.reset_arr = function () {
        switch (this.mode[this.mode.qa].edit_mode) {
            case "surface":
                this[this.mode.qa].surface = {};
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] != "4") {
                    this[this.mode.qa].line = {};
                    this[this.mode.qa].freeline = {};
                }
                else {
                    for (i in this[this.mode.qa].line) {
                        if (this[this.mode.qa].line[i] === 98) {
                            delete this[this.mode.qa].line[i];
                        }
                    }
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    for (i in this[this.mode.qa].lineE) {
                        if (this[this.mode.qa].lineE[i] === 98) {
                            delete this[this.mode.qa].lineE[i];
                        }
                    }
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    this[this.mode.qa].deletelineE = {};
                }
                else {
                    this[this.mode.qa].lineE = {};
                    this[this.mode.qa].freelineE = {};
                }
                break;
            case "wall":
                this[this.mode.qa].wall = {};
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] != "3") {
                    this[this.mode.qa].number = {};
                }
                else {
                    this[this.mode.qa].numberS = {};
                }
                break;
            case "symbol":
                this[this.mode.qa].symbol = {};
                //this[this.mode.qa].symbol2 = {};
                break;
            case "cage":
                this[this.mode.qa].cage = {};
                break;
            case "special":
                this[this.mode.qa][this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]] = [];
                break;
        }
        this.redraw();
    };
    Puzzle.prototype.reset_frame_newgrid = function () {
        this.canvasxy_update();
        this.create_point();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
        if (this.reflect[0] === -1) {
            this.point_reflect_LR();
        }
        if (this.reflect[1] === -1) {
            this.point_reflect_UD();
        }
        this.make_frameline();
    };
    Puzzle.prototype.create_point = function () {
        throw new Error("Method not implemented.");
    };
    Puzzle.prototype.make_frameline = function () {
        var gr = 1; //実線
        var ot = 2; //太線
        if (this.mode.grid[0] === "2") {
            gr = 11; //点線
        }
        else if (this.mode.grid[0] === "3") {
            gr = 0; //線なし
        }
        if (this.mode.grid[2] === "2") {
            //枠なし
            ot = gr; //枠は内部と同じ線
        }
        var max, min, key, corner;
        this.frame = {};
        for (var j = 0; j < this.centerlist.length; j++) {
            corner = this.point[this.centerlist[j]].surround.length;
            for (var i = 0; i < corner; i++) {
                max = Math.max(this.point[this.centerlist[j]].surround[i], this.point[this.centerlist[j]].surround[(i + 1) % corner]);
                min = Math.min(this.point[this.centerlist[j]].surround[i], this.point[this.centerlist[j]].surround[(i + 1) % corner]);
                key = min.toString() + "," + max.toString();
                if (this.frame[key]) {
                    this.frame[key] = gr;
                }
                else {
                    this.frame[key] = ot;
                }
            }
        }
    };
    Puzzle.prototype.point_move = function (x, y, theta) {
        var x0 = this.canvasx * 0.5 + 0.5; //canvasの中心+0.5で回転させる、平行移動時にはx,yを+0.5で入力
        var y0 = this.canvasy * 0.5 + 0.5;
        var x1, y1, x2, y2;
        theta = (theta / 180) * Math.PI;
        for (var i in this.point) {
            x1 = this.point[i].x + x;
            y1 = this.point[i].y + y;
            x2 = (x1 - x0) * Math.cos(theta) - (y1 - y0) * Math.sin(theta) + x0;
            y2 = (x1 - x0) * Math.sin(theta) + (y1 - y0) * Math.cos(theta) + y0;
            this.point[i].x = x2;
            this.point[i].y = y2;
        }
        this.point_usecheck();
    };
    Puzzle.prototype.search_center = function () {
        var xmax = 0, xmin = 1e5;
        var ymax = 0, ymin = 1e5;
        for (var _i = 0, _a = this.centerlist; _i < _a.length; _i++) {
            var i = _a[_i];
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
        this.width = (xmax - xmin) / this.size + 2;
        this.height = (ymax - ymin) / this.size + 2;
        var min0, min = 10e6;
        var num = 0;
        for (var i in this.point) {
            min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
            if (min0 < min) {
                min = min0;
                num = i;
            }
        }
        this.center_n = Math.floor(num);
    };
    Puzzle.prototype.search_center_pixel = function () {
        var obj = this.gridspace_calculate();
        var yu = obj.yu, yd = obj.yd, xl = obj.xl, xr = obj.xr;
        var x = (xl + xr) / 2;
        var y = (yu + yd) / 2;
        this.width = (xr - xl) / this.size + 1;
        this.height = (yd - yu) / this.size + 1;
        var min0, min = 10e6;
        var num = 0;
        for (var i in this.point) {
            min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
            if (min0 < min) {
                min = min0;
                num = i;
            }
        }
        this.center_n = parseInt(num);
        var out = 1;
        if (yu <= 0 || yd >= this.canvasy || xl <= 0 || xr >= this.canvasx) {
            out = 0;
        }
        return out;
    };
    Puzzle.prototype.rotate_UD = function () {
        this.point_reflect_UD();
        this.reflect[1] *= -1;
        this.redraw();
    };
    Puzzle.prototype.rotate_LR = function () {
        this.point_reflect_LR();
        this.reflect[0] *= -1;
        this.redraw();
    };
    Puzzle.prototype.point_reflect_LR = function () {
        var x0 = this.canvasx * 0.5 + 0.5;
        for (var i in this.point) {
            this.point[i].x = 2 * x0 - this.point[i].x;
        }
        this.point_usecheck();
    };
    Puzzle.prototype.point_reflect_UD = function () {
        var y0 = this.canvasy * 0.5 + 0.5;
        for (var i in this.point) {
            this.point[i].y = 2 * y0 - this.point[i].y;
        }
        this.point_usecheck();
    };
    Puzzle.prototype.rotate_center = function () {
        var out = this.search_center_pixel(); //ピクセルデータから中心座標を算出
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, 0);
        this.point_usecheck();
        this.redraw();
    };
    Puzzle.prototype.rotate_size = function () {
        var out = 0;
        var i = 0;
        while (out === 0 && i < 10) {
            //画像がはみ出していたらもう一度、５回まで
            out = this.search_center_pixel();
            this.width_c = this.width;
            this.height_c = this.height;
            this.canvasxy_update();
            this.canvas_size_setting();
            this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, 0);
            this.point_usecheck();
            this.redraw();
            i++;
        }
    };
    Puzzle.prototype.rotate_reset = function () {
        this.width_c = this.width0;
        this.height_c = this.height0;
        this.center_n = this.center_n0; //初期状態のcenter_nにリセット
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, 0);
        this.redraw();
    };
    Puzzle.prototype.point_usecheck = function () {
        for (var i in this.point) {
            if (this.point[i].use === -1) {
            }
            else if (this.point[i].x < this.margin ||
                this.point[i].x > this.canvasx - this.margin ||
                this.point[i].y < this.margin ||
                this.point[i].y > this.canvasy - this.margin) {
                this.point[i].use = 0;
            }
            else {
                this.point[i].use = 1;
            }
        }
    };
    Puzzle.prototype.canvasxy_update = function () {
        //space for imagesave
        this.size = parseInt(document.getElementById("nb_size3").value);
        this.canvasx = this.width_c * this.size;
        this.canvasy = this.height_c * this.size;
    };
    Puzzle.prototype.canvas_size_setting = function () {
        this.canvas.width = this.canvasx * this.resol;
        this.canvas.height = this.canvasy * this.resol;
        this.ctx.scale(this.resol, this.resol);
        this.canvas.style.width = this.canvasx.toString() + "px";
        this.canvas.style.height = this.canvasy.toString() + "px";
        this.obj.style.width = this.canvas.style.width;
        this.obj.style.height = this.canvas.style.height;
    };
    Puzzle.prototype.resizecanvas = function () {
        var resizedCanvas = document.createElement("canvas");
        var resizedContext = resizedCanvas.getContext("2d");
        var mode = this.mode[this.mode.qa].edit_mode;
        var cx = this.canvasx;
        var cy = this.canvasy;
        this.mode[this.mode.qa].edit_mode = "surface"; //選択枠削除用
        if (document.getElementById("nb_margin2").checked) {
            var obj = this.gridspace_calculate();
            var yu = obj.yu, yd = obj.yd, xl = obj.xl, xr = obj.xr;
            this.canvasx = xr - xl;
            this.canvasy = yd - yu;
            this.point_move(-xl, -yu, 0);
            this.canvas_size_setting();
        }
        this.redraw();
        var qual;
        if (document.getElementById("nb_quality1").checked) {
            qual = 1;
        }
        else {
            qual = 1.5;
        }
        var width = this.canvas.width / qual;
        resizedCanvas.width = width.toString();
        resizedCanvas.height = ((width * this.canvas.height) /
            this.canvas.width).toString();
        resizedContext.drawImage(this.canvas, 0, 0, resizedCanvas.width, resizedCanvas.height);
        var canvastext = resizedCanvas.toDataURL("image/png");
        this.mode[this.mode.qa].edit_mode = mode;
        if (document.getElementById("nb_margin2").checked) {
            this.canvasx = cx;
            this.canvasy = cy;
            this.point_move(xl, yu, 0);
            this.canvas_size_setting();
        }
        this.redraw();
        return canvastext;
    };
    Puzzle.prototype.gridspace_calculate = function () {
        this.redraw();
        // ピクセルデータから計算
        var pixels = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        var data = pixels.data;
        var textHeight = 0;
        var currentRow = -1;
        for (var i = 0, len = data.length; i < len; i += 4) {
            var r = data[i], g = data[i + 1], b = data[i + 2], alpha = data[i + 3];
            if (r != 255 || g != 255 || b != 255) {
                var yu = Math.floor(i / 4 / this.canvas.width) / this.resol;
                break;
            }
        }
        for (var i = data.length - 4; i > 0; i -= 4) {
            var r = data[i], g = data[i + 1], b = data[i + 2], alpha = data[i + 3];
            if (r != 255 || g != 255 || b != 255) {
                var yd = (Math.floor(i / 4 / this.canvas.width) + 1) / this.resol;
                break;
            }
        }
        for (var i = 0, len = data.length; i < len; i += 4) {
            var j = ((i / 4) % this.canvas.height) * this.canvas.width * 4 +
                Math.floor(i / 4 / this.canvas.height) * 4;
            var r = data[j], g = data[j + 1], b = data[j + 2], alpha = data[j + 3];
            if (r != 255 || g != 255 || b != 255) {
                var xl = ((j / 4) % this.canvas.width) / this.resol;
                break;
            }
        }
        for (var i = data.length - 4; i > 0; i -= 4) {
            var j = ((i / 4) % this.canvas.height) * this.canvas.width * 4 +
                Math.floor(i / 4 / this.canvas.height) * 4;
            var r = data[j], g = data[j + 1], b = data[j + 2], alpha = data[j + 3];
            if (r != 255 || g != 255 || b != 255) {
                var xr = (((j / 4) % this.canvas.width) + 1) / this.resol;
                break;
            }
        }
        var obj = new Object();
        obj.yu = yu;
        obj.yd = yd;
        obj.xl = xl;
        obj.xr = xr;
        return obj;
    };
    Puzzle.prototype.mode_set = function (mode) {
        this.mode[this.mode.qa].edit_mode = mode;
        //numberではサブモードが2行なので調整
        if (mode === "number") {
            document.getElementById("div_sub").style.display = "none";
        }
        else {
            document.getElementById("div_sub").style.display = "inline";
        }
        //サブ・スタイルモードボタンの表示
        this.submode_reset();
        if (document.getElementById("mode_" + mode)) {
            document.getElementById("mode_" + mode).style.display = "inline-block";
        }
        if (document.getElementById("style_" + mode)) {
            document.getElementById("style_" + mode).style.display = "inline-block";
        }
        document.getElementById("mo_" + mode).checked = true;
        this.submode_check("sub_" +
            mode +
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]);
        if (mode === "symbol") {
            this.stylemode_check("st_" +
                mode +
                (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1] % 10));
            this.stylemode_check("st_" +
                mode +
                parseInt(this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1] / 10) *
                    10);
        }
        else {
            this.stylemode_check("st_" +
                mode +
                this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1]);
        }
        if (this.mode[this.mode.qa].edit_mode === "symbol") {
            this.subsymbolmode(this.mode[this.mode.qa].symbol[0]);
        }
        else if (this.mode[this.mode.qa].edit_mode === "combi") {
            this.subcombimode(this.mode[this.mode.qa].combi[0]);
        }
        this.redraw();
    };
    Puzzle.prototype.submode_check = function (name) {
        if (document.getElementById(name)) {
            document.getElementById(name).checked = true;
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] =
                document.getElementById(name).value;
            this.cursolcheck(); //override
            this.redraw(); //盤面カーソル更新
        }
        this.type = this.type_set(); //選択する座標タイプ
    };
    Puzzle.prototype.type_set = function () {
        throw new Error("Method not implemented.");
    };
    //override
    Puzzle.prototype.cursolcheck = function () {
        return;
    };
    Puzzle.prototype.stylemode_check = function (name) {
        if (document.getElementById(name)) {
            document.getElementById(name).checked = true;
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1] = parseInt(document.getElementById(name).value);
            panel_pu.draw_panel(); //パネル更新
        }
    };
    Puzzle.prototype.subsymbolmode = function (mode) {
        this.mode[this.mode.qa].symbol[0] = mode;
        document.getElementById("symmode_content").innerHTML = mode;
        panel_pu.draw_panel();
        this.redraw();
    };
    Puzzle.prototype.subcombimode = function (mode) {
        this.mode[this.mode.qa].combi[0] = mode;
        document.getElementById("combimode_content").innerHTML = mode;
        this.type = this.type_set();
        this.redraw();
    };
    Puzzle.prototype.mode_qa = function (mode) {
        document.getElementById(mode).checked = true;
        this.mode.qa = mode;
        this.mode_set(this.mode[this.mode.qa].edit_mode);
        this.redraw(); //cursol更新用
    };
    Puzzle.prototype.mode_grid = function (mode) {
        document.getElementById(mode).checked = true;
        if (mode.slice(0, -1) === "nb_grid") {
            this.mode.grid[0] = mode.slice(-1);
        }
        else if (mode.slice(0, -1) === "nb_lat") {
            this.mode.grid[1] = mode.slice(-1);
        }
        else if (mode.slice(0, -1) === "nb_out") {
            this.mode.grid[2] = mode.slice(-1);
        }
    };
    Puzzle.prototype.submode_reset = function () {
        document.getElementById("mode_line").style.display = "none";
        document.getElementById("mode_lineE").style.display = "none";
        document.getElementById("mode_number").style.display = "none";
        document.getElementById("mode_symbol").style.display = "none";
        document.getElementById("mode_special").style.display = "none";
        document.getElementById("mode_move").style.display = "none";
        document.getElementById("mode_combi").style.display = "none";
        document.getElementById("style_surface").style.display = "none";
        document.getElementById("style_line").style.display = "none";
        document.getElementById("style_lineE").style.display = "none";
        document.getElementById("style_wall").style.display = "none";
        document.getElementById("style_number").style.display = "none";
        document.getElementById("style_symbol").style.display = "none";
        document.getElementById("style_cage").style.display = "none";
        document.getElementById("style_combi").style.display = "none";
    };
    Puzzle.prototype.reset_selectedmode = function () {
        switch (this.mode[this.mode.qa].edit_mode) {
            case "surface":
                this[this.mode.qa].surface = {};
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] != "4") {
                    this[this.mode.qa].line = {};
                    this[this.mode.qa].freeline = {};
                }
                else {
                    for (i in this[this.mode.qa].line) {
                        if (this[this.mode.qa].line[i] === 98) {
                            delete this[this.mode.qa].line[i];
                        }
                    }
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    for (i in this[this.mode.qa].lineE) {
                        if (this[this.mode.qa].lineE[i] === 98) {
                            delete this[this.mode.qa].lineE[i];
                        }
                    }
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    this[this.mode.qa].deletelineE = {};
                }
                else {
                    this[this.mode.qa].lineE = {};
                    this[this.mode.qa].freelineE = {};
                }
                break;
            case "wall":
                this[this.mode.qa].wall = {};
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] != "3") {
                    this[this.mode.qa].number = {};
                }
                else {
                    this[this.mode.qa].numberS = {};
                }
                break;
            case "symbol":
                this[this.mode.qa].symbol = {};
                break;
            case "cage":
                this[this.mode.qa].cage = {};
                break;
            case "special":
                this[this.mode.qa][this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]] = [];
                break;
        }
        this.redraw();
    };
    ///////SAVE/////////
    Puzzle.prototype.maketext = function () {
        var text = "";
        text =
            this.gridtype +
                "," +
                this.nx.toString() +
                "," +
                this.ny.toString() +
                "," +
                this.size.toString() +
                "," +
                this.theta.toString() +
                "," +
                this.reflect.toString() +
                "," +
                this.canvasx +
                "," +
                this.canvasy +
                "," +
                this.center_n +
                "," +
                this.center_n0 +
                "\n";
        text += JSON.stringify(this.space) + "\n";
        text += JSON.stringify(this.mode) + "\n";
        text += JSON.stringify(this.pu_q) + "\n";
        text += JSON.stringify(this.pu_a) + "\n";
        var list = [this.centerlist[0]];
        for (var i = 1; i < this.centerlist.length; i++) {
            list.push(this.centerlist[i] - this.centerlist[i - 1]);
        }
        text += JSON.stringify(list);
        //console.log(text);
        for (var i = 0; i < this.replace.length; i++) {
            text = text.split(this.replace[i][0]).join(this.replace[i][1]);
        }
        //console.log(text);
        var u8text = new TextEncoder().encode(text);
        var deflate = new Zlib.RawDeflate(u8text);
        var compressed = deflate.compress();
        var char8 = Array.from(compressed, function (e) { return String.fromCharCode(e); }).join("");
        var ba = window.btoa(char8);
        var url = location.href.split("?")[0];
        //console.log("save",text.length,"=>",compressed.length,"=>",ba.length);
        return url + "?m=edit&p=" + ba;
    };
    Puzzle.prototype.pu_q = function (pu_q) {
        throw new Error("Method not implemented.");
    };
    Puzzle.prototype.pu_a = function (pu_a) {
        throw new Error("Method not implemented.");
    };
    Puzzle.prototype.maketext_solve = function () {
        var text = "";
        text =
            this.gridtype +
                "," +
                this.nx.toString() +
                "," +
                this.ny.toString() +
                "," +
                this.size.toString() +
                "," +
                this.theta.toString() +
                "," +
                this.reflect.toString() +
                "," +
                this.canvasx +
                "," +
                this.canvasy +
                "," +
                this.center_n +
                "," +
                this.center_n0 +
                "\n";
        text += JSON.stringify(this.space) + "\n";
        text +=
            JSON.stringify(this.mode.grid) +
                "~" +
                JSON.stringify(this.mode["pu_a"]["edit_mode"]) +
                "~" +
                JSON.stringify(this.mode["pu_a"][this.mode["pu_a"]["edit_mode"]]) +
                "\n";
        var r = this.pu_q.command_redo.__a;
        var u = this.pu_q.command_undo.__a;
        this.pu_q.command_redo.__a = [];
        this.pu_q.command_undo.__a = [];
        text += JSON.stringify(this.pu_q) + "\n" + "\n";
        this.pu_q.command_redo.__a = r;
        this.pu_q.command_undo.__a = u;
        var list = [this.centerlist[0]];
        for (var i = 1; i < this.centerlist.length; i++) {
            list.push(this.centerlist[i] - this.centerlist[i - 1]);
        }
        text += JSON.stringify(list);
        //console.log(text);
        for (var i = 0; i < this.replace.length; i++) {
            text = text.split(this.replace[i][0]).join(this.replace[i][1]);
        }
        //console.log(text);
        var u8text = new TextEncoder().encode(text);
        var deflate = new Zlib.RawDeflate(u8text);
        var compressed = deflate.compress();
        var char8 = Array.from(compressed, function (e) { return String.fromCharCode(e); }).join("");
        var ba = window.btoa(char8);
        var url = location.href.split("?")[0];
        //console.log("save",text.length,"=>",compressed.length,"=>",ba.length);
        return url + "?m=solve&p=" + ba;
    };
    Puzzle.prototype.maketext_solve_solution = function () {
        var text_head = this.maketext_solve();
        var text;
        text = JSON.stringify(this.make_solution());
        var u8text = new TextEncoder().encode(text);
        var deflate = new Zlib.RawDeflate(u8text);
        var compressed = deflate.compress();
        var char8 = Array.from(compressed, function (e) { return String.fromCharCode(e); }).join("");
        var ba = window.btoa(char8);
        //console.log("save",text.length,"=>",compressed.length,"=>",ba.length);
        return text_head + "&a=" + ba;
    };
    Puzzle.prototype.make_solution = function () {
        var sol = [[], [], [], [], [], []];
        var pu = "pu_a";
        for (var i in this[pu].surface) {
            if (this[pu].surface[i] === 1 || this[pu].surface[i] === 4) {
                sol[0].push(i);
            }
        }
        for (var i in this[pu].symbol) {
            if (this[pu].symbol[i][0] === 2 &&
                this[pu].symbol[i][1] === "square_LL") {
                if (sol[0].indexOf(i) === -1) {
                    sol[0].push(i);
                }
            }
        }
        for (var i in this[pu].line) {
            if (this[pu].line[i] === 3) {
                sol[1].push(i + ",1");
            }
            else if (this[pu].line[i] === 30) {
                sol[1].push(i + ",2");
            }
        }
        for (var i in this[pu].lineE) {
            if (this[pu].lineE[i] === 3) {
                sol[2].push(i + ",1");
            }
            else if (this[pu].lineE[i] === 30) {
                sol[2].push(i + ",2");
            }
        }
        for (var i in this[pu].wall) {
            if (this[pu].wall[i] === 3) {
                sol[3].push(i);
            }
        }
        for (var i in this[pu].number) {
            /*if(this[pu].number[i][1]===2 && this[pu].number[i][2]==="7"){ //sudoku only one number
                    var sum = 0,a;
                    for(var j=0;j<10;j++){
                      if(this[pu].number[i][0][j]===1){
                        sum+=1;
                        a = j+1;
                      }
                    }
                    if(sum === 1){
                      sol[4].push(i+","+a);
                    }
                  }else*/
            if (!isNaN(this[pu].number[i][0]) ||
                !this[pu].number[i][0].match(/[^A-Za-z]+/)) {
                if (this[pu].number[i][1] === 2 &&
                    (this[pu].number[i][2] === "1" ||
                        this[pu].number[i][2] === "5" ||
                        this[pu].number[i][2] === "6" ||
                        this[pu].number[i][2] === "10")) {
                    sol[4].push(i + "," + this[pu].number[i][0]);
                }
            }
        }
        for (var i in this[pu].symbol) {
            switch (this[pu].symbol[i][1]) {
                case "circle_M":
                    if (this[pu].symbol[i][0] >= 1 && this[pu].symbol[i][0] <= 2) {
                        sol[5].push(i + "," + this[pu].symbol[i][0] + "A");
                    }
                    break;
                case "tri":
                    if (this[pu].symbol[i][0] >= 1 && this[pu].symbol[i][0] <= 4) {
                        sol[5].push(i + "," + this[pu].symbol[i][0] + "B");
                    }
                    break;
                case "arrow_S":
                    if (this[pu].symbol[i][0] >= 1 && this[pu].symbol[i][0] <= 8) {
                        sol[5].push(i + "," + this[pu].symbol[i][0] + "C");
                    }
                    break;
                case "battleship_B":
                    if (this[pu].symbol[i][0] >= 1 && this[pu].symbol[i][0] <= 6) {
                        sol[5].push(i + "," + this[pu].symbol[i][0] + "D");
                    }
                    break;
                case "battleship_B+":
                    if (this[pu].symbol[i][0] >= 1 && this[pu].symbol[i][0] <= 4) {
                        sol[5].push(i + "," + this[pu].symbol[i][0] + "D+");
                    }
                    break;
                case "star": //starは色を無視
                    if (this[pu].symbol[i][0] >= 1 && this[pu].symbol[i][0] <= 3) {
                        sol[5].push(i + "," + 1 + "E");
                    }
                    break;
                case "tents":
                    if (this[pu].symbol[i][0] === 2) {
                        sol[5].push(i + "," + this[pu].symbol[i][0] + "F");
                    }
                    break;
                case "math":
                case "math_G":
                    if (this[pu].symbol[i][0] === 2 || this[pu].symbol[i][0] === 3) {
                        sol[5].push(i + "," + this[pu].symbol[i][0] + "G");
                    }
                    break;
            }
        }
        for (var i = 0; i < 6; i++) {
            sol[i] = sol[i].sort();
        }
        return sol;
    };
    Puzzle.prototype.maketext_ppfile = function () {
        var text = "";
        var gridsize = "19.842";
        var fontsize = "16";
        var header = document.getElementById("savetextarea_pp").value;
        //セット
        if (header != "") {
            if (header === "Tromino") {
                text +=
                    "#リスト:0,True\n" +
                        "*Grid:11.9052,-11.9052\n" +
                        "*Skew:0,0\n" +
                        "*Offset:11.9052,-11.9052\n" +
                        "*Size:11.9052,-11.9052\n" +
                        "*Alignment:0,0\n" +
                        "*Fill:80\n" +
                        "*Stroke:100,0.25,0,1\n" +
                        "*Border:-1,2,0,1\n" +
                        ". . . 1\n" +
                        "1 1 . 1\n" +
                        "1 . . 1\n" +
                        "--------\n";
            }
            else if (header === "LITS") {
            }
            else if (header === "LITSO") {
                text +=
                    "#リスト:0,True\n" +
                        "*Grid:11.9052,-11.9052\n" +
                        "*Skew:0,0\n" +
                        "*Offset:11.9052,-11.9052\n" +
                        "*Size:11.9052,-11.9052\n" +
                        "*Alignment:0,0\n" +
                        "*Fill:80\n" +
                        "*Stroke:100,0.25,0,1\n" +
                        "*Border:-1,2,0,1\n" +
                        ". 1 1 . . . 1 . .\n" +
                        ". 1 1 . . 1 1 . .\n" +
                        ". . . . . 1 . . .\n" +
                        "1 . . . . . . . .\n" +
                        "1 . . 1 1 . . 1 .\n" +
                        "1 . . 1 . . . 1 1\n" +
                        "1 . . 1 . . . 1 .\n" +
                        "--------\n";
            }
            else if (header === "Pentomino") {
                text +=
                    "#リスト:0,True\n" +
                        "*Grid:11.9052,-11.9052\n" +
                        "*Skew:0,0\n" +
                        "*Offset:11.9052,-11.9052\n" +
                        "*Size:11.9052,-11.9052\n" +
                        "*Alignment:0,0\n" +
                        "*Fill:80\n" +
                        "*Stroke:100,0.25,0,1\n" +
                        "*Border:-1,2,0,1\n" +
                        ". . 1 . . . 1 . . 1 1 . . . .\n" +
                        ". 1 1 1 . . 1 . . 1 . . . . .\n" +
                        ". . 1 . . 1 1 . 1 1 . . . . .\n" +
                        ". . . . . . 1 . . . . . . . .\n" +
                        ". . . . . . . . . . . . . . .\n" +
                        ". 1 . . 1 1 1 . 1 1 1 . . 1 1\n" +
                        ". 1 . . 1 . 1 . . . 1 . 1 1 .\n" +
                        "1 1 1 . . . . . . . 1 . 1 . .\n" +
                        ". . . . 1 . . . . . . . . . .\n" +
                        ". 1 . . 1 . 1 1 . 1 . . 1 . .\n" +
                        "1 1 . . 1 . 1 . . 1 . . 1 1 .\n" +
                        ". 1 1 . 1 . 1 . . 1 1 . 1 1 .\n" +
                        ". . . . 1 . 1 . . . 1 . . . .\n" +
                        "--------\n";
            }
            else {
                text +=
                    "#セット:7,True\n" +
                        "*Grid:" +
                        gridsize +
                        "," +
                        gridsize +
                        "\n" +
                        "*Skew:0,0\n" +
                        "*Offset:" +
                        0 +
                        "," +
                        -gridsize +
                        "\n" +
                        "*Size:" +
                        gridsize +
                        "," +
                        gridsize +
                        "\n" +
                        "*Alignment:0,0\n" +
                        "*Fill:100\n" +
                        "*Stroke:-1,0,0,1\n" +
                        "*Font:IPAGothic,Normal,Normal,Normal," +
                        fontsize +
                        "\n" +
                        "*TextAlignment:0,0\n";
                text += header + "\n";
                text += "--------\n";
            }
        }
        //解答線
        if (!isEmpty(this.pu_a.line)) {
            text +=
                "#解答線:2,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:9.921,9.921\n" +
                    "*Stroke:80,3,0,1,1\n";
            var i1, i2, x1, x2, y1, y2;
            for (var i in this.pu_a.line) {
                i1 = Number(i.split(",")[0]);
                i2 = Number(i.split(",")[1]);
                y1 = (i1 % this.nx0) - 2;
                y2 = (i2 % this.nx0) - 2;
                x1 = parseInt(i1 / this.nx0) - 2;
                x2 = parseInt(i2 / this.nx0) - 2;
                text += x1 + "," + y1 + ";" + x2 + "," + y2 + "\n";
            }
            text += "--------\n";
        }
        //問題辺
        if (!isEmpty(this.pu_q.lineE)) {
            text +=
                "#問題辺:2,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Stroke:100,2,0,1,1\n";
            var i1, i2, x1, x2, y1, y2;
            for (var i in this.pu_q.lineE) {
                i1 = Number(i.split(",")[0]) - this.nx0 * this.ny0;
                i2 = Number(i.split(",")[1]) - this.nx0 * this.ny0;
                y1 = (i1 % this.nx0) - 1;
                y2 = (i2 % this.nx0) - 1;
                x1 = parseInt(i1 / this.nx0) - 1;
                x2 = parseInt(i2 / this.nx0) - 1;
                text += x1 + "," + y1 + ";" + x2 + "," + y2 + "\n";
            }
            text += "--------\n";
        }
        //解答辺
        if (!isEmpty(this.pu_a.lineE)) {
            text +=
                "#解答辺:2,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Stroke:100,2,0,1,1\n";
            var i1, i2, x1, x2, y1, y2;
            for (var i in this.pu_a.lineE) {
                i1 = Number(i.split(",")[0]) - this.nx0 * this.ny0;
                i2 = Number(i.split(",")[1]) - this.nx0 * this.ny0;
                y1 = (i1 % this.nx0) - 1;
                y2 = (i2 % this.nx0) - 1;
                x1 = parseInt(i1 / this.nx0) - 1;
                x2 = parseInt(i2 / this.nx0) - 1;
                text += x1 + "," + y1 + ";" + x2 + "," + y2 + "\n";
            }
            text += "--------\n";
        }
        //盤面枠
        text +=
            "#盤面枠:0,True\n" +
                "*Grid:" +
                gridsize +
                "," +
                gridsize +
                "\n" +
                "*Skew:0,0\n" +
                "*Offset:0,0\n" +
                "*Size:" +
                gridsize +
                "," +
                gridsize +
                "\n" +
                "*Alignment:0,0\n" +
                "*Fill:-1\n";
        if (this.mode.grid[0] === "1") {
            text += "*Stroke:100,0.4,0,1\n"; //実線
        }
        else if (this.mode.grid[0] === "2") {
            text += "*Stroke:100,0.4,1.804/3.1565/0.902,1\n"; //点線
        }
        else if (this.mode.grid[0] === "3") {
            text += "*Stroke:-1,0,0,1\n"; //なし
        }
        if (this.mode.grid[2] === "1") {
            text += "*Border:100,2,0,1\n"; //実線
        }
        else if (this.mode.grid[2] === "2") {
            text += "*Border:-1,0,0,1\n"; //枠なし
        }
        text += "%%盤面マス%%\n";
        text += "--------\n";
        //解答数字
        if (!isEmptycontent("pu_a", "number", 2, "1")) {
            text +=
                "#解答数字:3,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:100\n" +
                    "*Stroke:-1,0,0,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_a.number[i + j * this.nx0] &&
                        this.pu_a.number[i + j * this.nx0][2] === "1" &&
                        !isNaN(this.pu_a.number[i + j * this.nx0][0])) {
                        text += this.pu_a.number[i + j * this.nx0][0] + " ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //解答文字
        if (!isEmptycontent("pu_a", "number", 2, "1")) {
            text +=
                "#解答文字:7,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:100\n" +
                    "*Stroke:-1,0,0,1\n" +
                    "*Font:IPAGothic,Normal,Normal,Normal," +
                    fontsize +
                    "\n" +
                    "*TextAlignment:1,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_a.number[i + j * this.nx0] &&
                        this.pu_a.number[i + j * this.nx0][2] === "1" &&
                        isNaN(this.pu_a.number[i + j * this.nx0][0])) {
                        text += this.pu_a.number[i + j * this.nx0][0] + " ";
                    }
                    else {
                        text += "_ ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //問題数字
        if (!isEmptycontent("pu_q", "number", 2, "1")) {
            text +=
                "#問題数字:3,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:100\n" +
                    "*Stroke:-1,0,0,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_q.number[i + j * this.nx0] &&
                        this.pu_q.number[i + j * this.nx0][2] === "1" &&
                        !isNaN(this.pu_q.number[i + j * this.nx0][0])) {
                        text += this.pu_q.number[i + j * this.nx0][0] + " ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //問題1/4数字
        if (!isEmpty(this.pu_q.numberS)) {
            text +=
                "#問題1/4数字:3,True\n" +
                    "*Grid:" +
                    gridsize / 2 +
                    "," +
                    gridsize / 2 +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize / 2 +
                    "," +
                    gridsize / 2 +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:100\n" +
                    "*Stroke:-1,0,0,1\n";
            var k;
            for (var j = 0; j < 2 * this.ny0 - 8; j++) {
                for (var i = 0; i < 2 * this.nx0 - 8; i++) {
                    if (j % 2 === 0 && i % 2 === 0) {
                        k =
                            4 * this.nx0 * this.ny0 +
                                4 * 2 * this.nx0 +
                                8 +
                                2 * i +
                                2 * j * this.nx0;
                    }
                    else if (j % 2 === 0 && i % 2 === 1) {
                        k =
                            4 * this.nx0 * this.ny0 +
                                4 * 2 * this.nx0 +
                                8 +
                                1 +
                                2 * (i - 1) +
                                2 * j * this.nx0;
                    }
                    else if (j % 2 === 1 && i % 2 === 0) {
                        k =
                            4 * this.nx0 * this.ny0 +
                                4 * 2 * this.nx0 +
                                8 +
                                2 +
                                2 * i +
                                2 * (j - 1) * this.nx0;
                    }
                    else if (j % 2 === 1 && i % 2 === 1) {
                        k =
                            4 * this.nx0 * this.ny0 +
                                4 * 2 * this.nx0 +
                                8 +
                                3 +
                                2 * (i - 1) +
                                2 * (j - 1) * this.nx0;
                    }
                    if (this.pu_q.numberS[k] && !isNaN(this.pu_q.numberS[k][0])) {
                        text += this.pu_q.numberS[k][0] + " ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //問題文字
        if (!isEmptycontent("pu_q", "number", 2, "1")) {
            text +=
                "#問題文字:7,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:100\n" +
                    "*Stroke:-1,0,0,1\n" +
                    "*Font:IPAGothic,Normal,Normal,Normal," +
                    fontsize +
                    "\n" +
                    "*TextAlignment:1,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_q.number[i + j * this.nx0] &&
                        this.pu_q.number[i + j * this.nx0][2] === "1" &&
                        isNaN(this.pu_q.number[i + j * this.nx0][0])) {
                        text += this.pu_q.number[i + j * this.nx0][0] + " ";
                    }
                    else {
                        text += "_ ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //問題Tapa数字
        if (!isEmptycontent("pu_q", "number", 2, "4")) {
            text +=
                "#問題Tapa数字:6,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:100\n" +
                    "*Stroke:-1,0,0,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_q.number[i + j * this.nx0] &&
                        this.pu_q.number[i + j * this.nx0][2] === "4" &&
                        !isNaN(this.pu_q.number[i + j * this.nx0][0])) {
                        text += this.pu_q.number[i + j * this.nx0][0] + " ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //問題丸
        if (!isEmptycontent("pu_q", "symbol", 1, "circle_M")) {
            text +=
                "#問題丸:4,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    (gridsize - 2) +
                    "," +
                    (gridsize - 2) +
                    "\n" +
                    "*Alignment:1,1\n" +
                    "*Fill:100\n" +
                    "*Stroke:100,0.5,0,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_q.symbol[i + j * this.nx0] &&
                        this.pu_q.symbol[i + j * this.nx0][0] === 1 &&
                        this.pu_q.symbol[i + j * this.nx0][1] === "circle_M") {
                        text += "0 ";
                    }
                    else if (this.pu_q.symbol[i + j * this.nx0] &&
                        this.pu_q.symbol[i + j * this.nx0][0] === 2 &&
                        this.pu_q.symbol[i + j * this.nx0][1] === "circle_M") {
                        text += "1 ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //解答丸
        if (!isEmptycontent("pu_a", "symbol", 1, "circle_M")) {
            text +=
                "#解答丸:4,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    (gridsize - 2) +
                    "," +
                    (gridsize - 2) +
                    "\n" +
                    "*Alignment:1,1\n" +
                    "*Fill:100\n" +
                    "*Stroke:100,0.5,0,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_a.symbol[i + j * this.nx0] &&
                        this.pu_a.symbol[i + j * this.nx0][0] === 1 &&
                        this.pu_a.symbol[i + j * this.nx0][1] === "circle_M") {
                        text += "0 ";
                    }
                    else if (this.pu_a.symbol[i + j * this.nx0] &&
                        this.pu_a.symbol[i + j * this.nx0][0] === 2 &&
                        this.pu_a.symbol[i + j * this.nx0][1] === "circle_M") {
                        text += "1 ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //解答黒マス
        if (!isEmpty(this.pu_a.surface)) {
            text +=
                "#解答黒マス:0,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:80\n" +
                    "*Stroke:100,0.25,0,1\n" +
                    "*Border:-1,0,0,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_a.surface[i + j * this.nx0] &&
                        this.pu_a.surface[i + j * this.nx0] === 1) {
                        text += "1 ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //問題黒マス
        if (!isEmpty(this.pu_q.surface)) {
            text +=
                "#問題黒マス:0,True\n" +
                    "*Grid:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Skew:0,0\n" +
                    "*Offset:0,0\n" +
                    "*Size:" +
                    gridsize +
                    "," +
                    gridsize +
                    "\n" +
                    "*Alignment:0,0\n" +
                    "*Fill:100\n" +
                    "*Stroke:-1,0,0,1\n" +
                    "*Border:-1,0,0,1\n";
            for (var j = 2; j < this.ny0 - 2; j++) {
                for (var i = 2; i < this.nx0 - 2; i++) {
                    if (this.pu_q.surface[i + j * this.nx0] &&
                        (this.pu_q.surface[i + j * this.nx0] === 1 ||
                            this.pu_q.surface[i + j * this.nx0] === 4)) {
                        text += "1 ";
                    }
                    else {
                        text += ". ";
                    }
                }
                text += "\n";
            }
            text += "--------\n";
        }
        //盤面マス
        text +=
            "#盤面マス:0,True\n" +
                "*Grid:" +
                gridsize +
                "," +
                gridsize +
                "\n" +
                "*Skew:0,0\n" +
                "*Offset:0,0\n" +
                "*Size:" +
                gridsize +
                "," +
                gridsize +
                "\n" +
                "*Alignment:0,0\n" +
                "*Fill:0\n" +
                "*Stroke:-1,0,0,1\n" +
                "*Border:-1,0,0,1\n";
        for (var j = 2; j < this.ny0 - 2; j++) {
            for (var i = 2; i < this.nx0 - 2; i++) {
                if (this.centerlist.indexOf(i + j * this.nx0) != -1) {
                    text += "1 ";
                }
                else {
                    text += ". ";
                }
            }
            text += "\n";
        }
        text += "--------\n";
        return text;
    };
    Puzzle.prototype.undo = function () {
        var a = this.pu_q.command_undo.pop(); /*a[0]:list_name,a[1]:point_number,a[2]:value*/
        var pu_mode;
        if (a) {
            if (a[3]) {
                pu_mode = a[3];
            }
            else {
                pu_mode = "pu_q";
            }
            if ((a[0] === "thermo" ||
                a[0] === "arrows" ||
                a[0] === "direction" ||
                a[0] === "squareframe" ||
                a[0] === "polygon") &&
                a[1] === -1) {
                if (this[pu_mode][a[0]].length > 0) {
                    this.pu_q.command_redo.push([
                        a[0],
                        a[1],
                        this[pu_mode][a[0]].pop(),
                        pu_mode,
                    ]);
                }
            }
            else if (a[0] === "move") {
                //a[0]:move a[1]:point_from a[2]:point_to
                for (var i in a[1]) {
                    if (a[1][i] != a[2]) {
                        this[pu_mode][i][a[1][i]] = this[pu_mode][i][a[2]];
                        delete this[pu_mode][i][a[2]];
                    }
                }
                this.pu_q.command_redo.push([a[0], a[1], a[2], pu_mode]);
            }
            else {
                if (this[pu_mode][a[0]][a[1]]) {
                    //symbol etc
                    this.pu_q.command_redo.push([
                        a[0],
                        a[1],
                        this[pu_mode][a[0]][a[1]],
                        pu_mode,
                    ]);
                }
                else {
                    this.pu_q.command_redo.push([a[0], a[1], null, pu_mode]);
                }
                if (a[2]) {
                    this[pu_mode][a[0]][a[1]] = JSON.parse(a[2]); //JSON.parseでdecode
                }
                else {
                    delete this[pu_mode][a[0]][a[1]];
                }
            }
            this.redraw();
        }
    };
    Puzzle.prototype.redo = function () {
        var a = this.pu_q.command_redo.pop();
        var pu_mode;
        if (a) {
            if (a[3]) {
                pu_mode = a[3];
            }
            else {
                pu_mode = "pu_q";
            }
            if ((a[0] === "thermo" ||
                a[0] === "arrows" ||
                a[0] === "direction" ||
                a[0] === "squareframe" ||
                a[0] === "polygon") &&
                a[1] === -1) {
                this.pu_q.command_undo.push([a[0], a[1], null, pu_mode]);
                this[pu_mode][a[0]].push(a[2]);
            }
            else if (a[0] === "move") {
                //a[0]:move a[1]:point_from a[2]:point_to
                for (var i in a[1]) {
                    if (a[1][i] != a[2]) {
                        this[pu_mode][i][a[2]] = this[pu_mode][i][a[1][i]];
                        delete this[pu_mode][i][a[1][i]];
                    }
                }
                this.pu_q.command_undo.push([a[0], a[1], a[2], pu_mode]);
            }
            else {
                if (this[pu_mode][a[0]][a[1]]) {
                    this.pu_q.command_undo.push([
                        a[0],
                        a[1],
                        JSON.stringify(this[pu_mode][a[0]][a[1]]),
                        pu_mode,
                    ]);
                }
                else {
                    this.pu_q.command_undo.push([a[0], a[1], null, pu_mode]);
                }
                if (a[2]) {
                    this[pu_mode][a[0]][a[1]] = a[2];
                }
                else {
                    delete this[pu_mode][a[0]][a[1]];
                }
            }
            this.redraw();
        }
    };
    Puzzle.prototype.record = function (arr, num) {
        if ((arr === "thermo" ||
            arr === "arrows" ||
            arr === "direction" ||
            arr === "squareframe") &&
            num === -1) {
            this.pu_q.command_undo.push([arr, num, null, this.mode.qa]);
        }
        else if (arr === "move") {
            this.pu_q.command_undo.push([arr, num[0], num[1], this.mode.qa]); //num[0]:start_point num[1]:to_point
        }
        else {
            if (this.pu_q[arr][num]) {
                this.pu_q.command_undo.push([
                    arr,
                    num,
                    JSON.stringify(this.pu_q[arr][num]),
                    this.mode.qa,
                ]); //配列もまとめてJSONで記録
            }
            else {
                this.pu_q.command_undo.push([arr, num, null, this.mode.qa]);
            }
        }
        this.pu_q.command_redo = new _Stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
    };
    /////////////////////////////
    //キーイベント
    //
    /////////////////////////////
    Puzzle.prototype.key_number = function (key) {
        var number;
        var con, conA;
        var arrow, mode;
        var str_num = "1234567890";
        var str_replace = ["+-=*", "＋－＝＊"];
        if (str_replace[0].indexOf(key) != -1) {
            key = str_replace[1][str_replace[0].indexOf(key)];
        } //記号を大文字に
        if (this.mode[this.mode.qa].edit_mode === "number") {
            switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
                case "1":
                    this.record("number", this.cursol);
                    if (str_num.indexOf(key) != -1 &&
                        this[this.mode.qa].number[this.cursol]) {
                        con = parseInt(this[this.mode.qa].number[this.cursol][0], 10); //数字に変換
                        if (con >= 1 &&
                            con <= 9 &&
                            this[this.mode.qa].number[this.cursol][2] != "7") {
                            //1~9だったら2桁目へ
                            number = con.toString() + key;
                        }
                        else {
                            number = key;
                        }
                    }
                    else {
                        number = key;
                    }
                    this[this.mode.qa].number[this.cursol] = [
                        number,
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                    ];
                    break;
                case "2":
                    this.record("number", this.cursol);
                    if (this[this.mode.qa].number[this.cursol] &&
                        this[this.mode.qa].number[this.cursol][2] != "7") {
                        con = this[this.mode.qa].number[this.cursol][0];
                    }
                    else {
                        con = "";
                    }
                    if (con.slice(-2, -1) === "_") {
                        conA = parseInt(con.slice(0, -2), 10);
                        arrow = con.slice(-2);
                    }
                    else {
                        conA = parseInt(con, 10);
                        arrow = "";
                    }
                    if (str_num.indexOf(key) != -1) {
                        if (conA >= 1 && conA <= 9) {
                            //1~9だったら2桁目へ
                            number = conA.toString() + key;
                        }
                        else {
                            number = key;
                        }
                    }
                    else {
                        number = key;
                    }
                    this[this.mode.qa].number[this.cursol] = [
                        number + arrow,
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                    ];
                    break;
                case "3": //4 place
                case "9":
                    this.record("numberS", this.cursolS);
                    if (this[this.mode.qa].numberS[this.cursolS]) {
                        con = this[this.mode.qa].numberS[this.cursolS][0];
                    }
                    else {
                        con = "";
                    }
                    number = con + key;
                    this[this.mode.qa].numberS[this.cursolS] = [
                        number,
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                    ];
                    break;
                case "4": //tapa
                    if (key === ".") {
                        key = " ";
                    }
                    this.record("number", this.cursol);
                    if (this[this.mode.qa].number[this.cursol]) {
                        con = this[this.mode.qa].number[this.cursol][0];
                        mode = this[this.mode.qa].number[this.cursol][2];
                    }
                    else {
                        con = "";
                        mode = "";
                    }
                    if (mode != 2 && mode != 7) {
                        //arrowでなければ
                        if (con.length >= 0 && con.length <= 3) {
                            //3文字以内なら追加
                            number = con + key;
                        }
                        else {
                            number = con; //4文字以上ならそのまま
                        }
                    }
                    else {
                        //arrowなら上書き
                        number = key;
                    }
                    this[this.mode.qa].number[this.cursol] = [
                        number,
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                    ];
                    break;
                case "5":
                    if (this[this.mode.qa].number[this.cursol] &&
                        this[this.mode.qa].number[this.cursol][2] != "2" &&
                        this[this.mode.qa].number[this.cursol][2] != "7") {
                        con = this[this.mode.qa].number[this.cursol][0];
                    }
                    else {
                        con = "";
                    }
                    if (con.length < 10) {
                        this.record("number", this.cursol);
                        number = con + key;
                        this[this.mode.qa].number[this.cursol] = [
                            number,
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                        ];
                    }
                    break;
                case "6":
                    if (this[this.mode.qa].number[this.cursol] &&
                        this[this.mode.qa].number[this.cursol][2] != "2" &&
                        this[this.mode.qa].number[this.cursol][2] != "7") {
                        con = this[this.mode.qa].number[this.cursol][0];
                    }
                    else {
                        con = "";
                    }
                    if (con.length < 10) {
                        this.record("number", this.cursol);
                        number = con + key;
                        this[this.mode.qa].number[this.cursol] = [
                            number,
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                        ];
                    }
                    break;
                case "10": //big
                    if (this[this.mode.qa].number[this.cursol] &&
                        this[this.mode.qa].number[this.cursol][2] != "2" &&
                        this[this.mode.qa].number[this.cursol][2] != "7") {
                        con = this[this.mode.qa].number[this.cursol][0];
                    }
                    else {
                        con = "";
                    }
                    if (con.length < 10) {
                        this.record("number", this.cursol);
                        number = con + key;
                        this[this.mode.qa].number[this.cursol] = [
                            number,
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                        ];
                    }
                    break;
                case "7":
                    this.record("number", this.cursol);
                    if (this[this.mode.qa].number[this.cursol] &&
                        this[this.mode.qa].number[this.cursol][2] === "7") {
                        con = this[this.mode.qa].number[this.cursol][0];
                    }
                    else {
                        con = "";
                    }
                    number = this.onofftext(9, key, con);
                    this[this.mode.qa].number[this.cursol] = [
                        number,
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                        this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                    ];
                    break;
                case "8":
                    if (this[this.mode.qa].number[this.cursol] &&
                        this[this.mode.qa].number[this.cursol][2] != "2" &&
                        this[this.mode.qa].number[this.cursol][2] != "7") {
                        con = this[this.mode.qa].number[this.cursol][0];
                    }
                    else {
                        con = "";
                    }
                    if (con.length < 60) {
                        this.record("number", this.cursol);
                        number = con + key;
                        this[this.mode.qa].number[this.cursol] = [
                            number,
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0],
                        ];
                    }
                    break;
            }
        }
        else if (this.mode[this.mode.qa].edit_mode === "symbol") {
            if (str_num.indexOf(key) != -1) {
                if (this[this.mode.qa].symbol[this.cursol]) {
                    if (this[this.mode.qa].symbol[this.cursol][0] === parseInt(key, 10) &&
                        this[this.mode.qa].symbol[this.cursol][1] ===
                            this.mode[this.mode.qa].symbol[0]) {
                        this.key_space(); //内容が同じなら削除
                        return;
                    }
                    else {
                        con = this[this.mode.qa].symbol[this.cursol][0];
                    }
                }
                else {
                    con = "";
                }
                this.record("symbol", this.cursol);
                if (this.onoff_symbolmode_list[this.mode[this.mode.qa].symbol[0]]) {
                    //onoffモードならリスト
                    number = this.onofftext(this.onoff_symbolmode_list[this.mode[this.mode.qa].symbol[0]], key, con);
                }
                else {
                    number = parseInt(key, 10);
                }
                this[this.mode.qa].symbol[this.cursol] = [
                    number,
                    this.mode[this.mode.qa].symbol[0],
                    this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                ];
            }
        }
        this.redraw();
    };
    Puzzle.prototype.onofftext = function (n, key, data) {
        if (data.length != n) {
            data = [];
            for (var i = 0; i < n; i++) {
                data[i] = 0;
            }
        }
        var q = "1234567890".slice(0, n);
        if (q.indexOf(key) != -1) {
            var con = parseInt(key, 10);
            if (data[con - 1] === 1) {
                data[con - 1] = 0;
            }
            else {
                data[con - 1] = 1;
            }
        }
        return data;
    };
    Puzzle.prototype.key_space = function () {
        if (this.mode[this.mode.qa].edit_mode === "number") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3" ||
                this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                this.record("numberS", this.cursolS);
                delete this[this.mode.qa].numberS[this.cursolS];
            }
            else {
                this.record("number", this.cursol);
                delete this[this.mode.qa].number[this.cursol];
            }
        }
        else if (this.mode[this.mode.qa].edit_mode === "symbol") {
            this.record("symbol", this.cursol);
            delete this[this.mode.qa].symbol[this.cursol];
        }
        this.redraw();
    };
    Puzzle.prototype.key_shiftspace = function () {
        if (this.mode[this.mode.qa].edit_mode === "number" ||
            this.mode[this.mode.qa].edit_mode === "symbol") {
            if (this.mode[this.mode.qa].edit_mode === "number" &&
                (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "3" ||
                    this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9")) {
                this.record("numberS", this.cursolS);
                delete this[this.mode.qa].numberS[this.cursolS];
            }
            else {
                this.record("number", this.cursol);
                delete this[this.mode.qa].number[this.cursol];
                this.record("symbol", this.cursol);
                delete this[this.mode.qa].symbol[this.cursol];
            }
        }
        this.redraw();
    };
    Puzzle.prototype.key_backspace = function () {
        var number;
        if (this.mode[this.mode.qa].edit_mode === "number") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3" ||
                this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                //1/4
                if (this[this.mode.qa].numberS[this.cursolS]) {
                    this.record("numberS", this.cursolS);
                    number = this[this.mode.qa].numberS[this.cursolS][0].slice(0, -1);
                    this[this.mode.qa].numberS[this.cursolS][0] = number;
                }
            }
            else {
                if (this[this.mode.qa].number[this.cursol]) {
                    this.record("number", this.cursol);
                    number = this[this.mode.qa].number[this.cursol][0];
                    if (number) {
                        if (this[this.mode.qa].number[this.cursol][2] === "2") {
                            if (number.slice(-2, -1) === "_") {
                                number = number.slice(0, -2).slice(0, -1) + number.slice(-2);
                            }
                            else {
                                number = number.slice(0, -1);
                            }
                            this[this.mode.qa].number[this.cursol][0] = number;
                        }
                        else if (this[this.mode.qa].number[this.cursol][2] === "7") {
                            //候補数字
                            this.key_space();
                        }
                        else {
                            number = number.slice(0, -1);
                            this[this.mode.qa].number[this.cursol][0] = number;
                        }
                    }
                }
            }
        }
        this.redraw();
    };
    /////////////////////////////
    //マウスイベント
    //
    /////////////////////////////
    Puzzle.prototype.recalculate_num = function (x, y, num) {
        return num;
    };
    Puzzle.prototype.mouseevent = function (x, y, num) {
        num = this.recalculate_num(x, y, num); //for uniform tiling
        switch (this.mode[this.mode.qa].edit_mode) {
            case "surface":
                this.mouse_surface(x, y, num);
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    this.mouse_linefree(x, y, num);
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    this.mouse_lineX(x, y, num);
                }
                else {
                    this.mouse_line(x, y, num);
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    this.mouse_linefree(x, y, num);
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    this.mouse_lineX(x, y, num);
                }
                else {
                    this.mouse_lineE(x, y, num);
                }
                break;
            case "wall":
                this.mouse_wall(x, y, num);
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "3" ||
                    this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                    this.mouse_numberS(x, y, num);
                }
                else {
                    this.mouse_number(x, y, num);
                }
                break;
            case "symbol":
                this.mouse_symbol(x, y, num);
                break;
            case "cage":
                this.mouse_cage(x, y, num);
                break;
            case "special":
                this.mouse_special(x, y, num);
                break;
            case "board":
                this.mouse_board(x, y, num);
                break;
            case "move":
                this.mouse_move(x, y, num);
                break;
            case "combi":
                this.mouse_combi(x, y, num);
                break;
        }
    };
    //////////////////////////
    // surface
    //////////////////////////
    Puzzle.prototype.mouse_surface = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.re_surface(num);
            this.last = num;
        }
        else if (this.mouse_mode === "down_right") {
            this.drawing = true;
            this.re_surfaceR(num);
            this.last = num;
        }
        else if (this.mouse_mode === "move") {
            this.re_surfacemove(num);
            this.last = num;
        }
        else if (this.mouse_mode === "up") {
            this.drawing = false;
            this.drawing_mode = -1;
            this.last = -1;
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.drawing_mode = -1;
            this.last = -1;
        }
    };
    Puzzle.prototype.re_surface = function (num) {
        var color = this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1];
        this.record("surface", num);
        if (this[this.mode.qa].surface[num] &&
            this[this.mode.qa].surface[num] === 1 &&
            color === 1) {
            this[this.mode.qa].surface[num] = 2;
            this.drawing_mode = 2;
        }
        else if (this[this.mode.qa].surface[num] &&
            (this[this.mode.qa].surface[num] === color ||
                (this[this.mode.qa].surface[num] === 2 && color === 1))) {
            delete this[this.mode.qa].surface[num];
            this.drawing_mode = 0;
        }
        else {
            this[this.mode.qa].surface[num] = color;
            this.drawing_mode = color;
        }
        this.redraw();
    };
    Puzzle.prototype.re_surfaceR = function (num) {
        this.record("surface", num);
        if (this[this.mode.qa].surface[num] &&
            this[this.mode.qa].surface[num] === 2) {
            delete this[this.mode.qa].surface[num];
            this.drawing_mode = 0;
        }
        else {
            this[this.mode.qa].surface[num] = 2;
            this.drawing_mode = 2;
        }
        this.redraw();
    };
    Puzzle.prototype.re_surfacemove = function (num) {
        if (this.drawing) {
            if (this.drawing_mode === 0) {
                if (this[this.mode.qa].surface[num]) {
                    this.record("surface", num);
                    delete this[this.mode.qa].surface[num];
                    this.redraw();
                }
            }
            else {
                if (!this[this.mode.qa].surface[num] ||
                    this[this.mode.qa].surface[num] != this.drawing_mode) {
                    this.record("surface", num);
                    this[this.mode.qa].surface[num] = this.drawing_mode;
                    this.redraw();
                }
            }
        }
    };
    //////////////////////////
    // line
    //////////////////////////
    Puzzle.prototype.mouse_line = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.drawing_mode = 100;
            this.last = num;
        }
        else if (this.mouse_mode === "move") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] != "2" ||
                this.point[num].type === 0) {
                //対角線でないor対角線で内側
                this.re_linemove(num);
                this.last = num;
            }
        }
        else if (this.mouse_mode === "up") {
            this.drawing = false;
            this.last = -1;
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.last = -1;
        }
    };
    //line,lineE,cage_実描画
    Puzzle.prototype.re_line = function (array, num, line_style) {
        if (this[this.mode.qa][array][num] === line_style) {
            if (this.drawing_mode === 100) {
                this.record(array, num);
                delete this[this.mode.qa][array][num];
                this.drawing_mode = 0;
            }
            else if (this.drawing_mode === 0) {
                this.record(array, num);
                delete this[this.mode.qa][array][num];
            }
        }
        else {
            if (this.drawing_mode === 100) {
                this.record(array, num);
                this[this.mode.qa][array][num] = line_style;
                this.drawing_mode = line_style;
            }
            else if (this.drawing_mode === line_style) {
                this.record(array, num);
                this[this.mode.qa][array][num] = line_style;
            }
        }
    };
    Puzzle.prototype.re_linemove = function (num) {
        if (this.drawing && this.last != num) {
            var line_style = this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1];
            var array;
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "1") {
                if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                    array = "line";
                    var key = Math.min(num, this.last).toString() +
                        "," +
                        Math.max(num, this.last).toString();
                    this.re_line(array, key, line_style);
                }
            }
            else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1 ||
                    this.point[num].adjacent_dia.indexOf(parseInt(this.last)) != -1) {
                    array = "line";
                    var key = Math.min(num, this.last).toString() +
                        "," +
                        Math.max(num, this.last).toString();
                    this.re_line(array, key, line_style);
                }
            }
            else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                //centerline
                if (this.point[num].neighbor.indexOf(parseInt(this.last)) != -1) {
                    array = "line";
                    var key = Math.min(num, this.last).toString() +
                        "," +
                        Math.max(num, this.last).toString();
                    this.re_line(array, key, line_style);
                }
            }
            this.redraw();
        }
    };
    Puzzle.prototype.mouse_linefree = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.drawing_mode =
                this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1];
            this.last = num;
            this.freelinecircle_g[0] = num;
            this.redraw();
        }
        else if (this.mouse_mode === "move") {
            if (this.drawing && this.last != num) {
                this.freelinecircle_g[1] = num;
                this.redraw();
            }
        }
        else if (this.mouse_mode === "up") {
            this.re_lineup_free(num);
            this.drawing = false;
            this.freelinecircle_g = [-1, -1];
            this.last = -1;
            this.redraw();
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.freelinecircle_g = [-1, -1];
            this.last = -1;
            this.redraw();
        }
    };
    Puzzle.prototype.re_lineup_free = function (num) {
        if (num != this.last && this.last != -1) {
            var key = Math.min(num, this.last).toString() +
                "," +
                Math.max(num, this.last).toString();
            this.record("freeline", key);
            if (this[this.mode.qa].freeline[key]) {
                delete this[this.mode.qa].freeline[key];
            }
            else {
                this[this.mode.qa].freeline[key] = this.drawing_mode;
            }
        }
    };
    Puzzle.prototype.mouse_lineX = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.re_lineX(num);
        }
    };
    Puzzle.prototype.re_lineX = function (num) {
        if (this[this.mode.qa].line[num] && this[this.mode.qa].line[num] === 98) {
            //×印
            this.record("line", num);
            delete this[this.mode.qa].line[num];
        }
        else {
            this.record("line", num);
            this[this.mode.qa].line[num] = 98;
        }
        this.redraw();
    };
    //////////////////////////
    // lineE
    //////////////////////////
    Puzzle.prototype.mouse_lineE = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.drawing_mode = 100;
            this.last = num;
        }
        else if (this.mouse_mode === "move") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] != "2" ||
                this.point[num].type === 1) {
                //対角線でないor対角線で内側
                this.re_linemoveE(num);
                this.last = num;
            }
        }
        else if (this.mouse_mode === "up") {
            this.drawing = false;
            this.last = -1;
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.last = -1;
        }
    };
    Puzzle.prototype.re_linemoveE = function (num) {
        if (this.drawing && this.last != num) {
            var line_style = this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1];
            var array;
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "1") {
                if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                    array = "lineE";
                    var key = Math.min(num, this.last).toString() +
                        "," +
                        Math.max(num, this.last).toString();
                    this.re_line(array, key, line_style);
                }
            }
            else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1 ||
                    this.point[num].adjacent_dia.indexOf(parseInt(this.last)) != -1) {
                    array = "lineE";
                    var key = Math.min(num, this.last).toString() +
                        "," +
                        Math.max(num, this.last).toString();
                    this.re_line(array, key, line_style);
                }
            }
            else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                    array = "deletelineE";
                    var key = Math.min(num, this.last).toString() +
                        "," +
                        Math.max(num, this.last).toString();
                    this.re_line(array, key, 1);
                }
            }
            this.redraw();
        }
    };
    //////////////////////////
    // wall
    //////////////////////////
    Puzzle.prototype.mouse_wall = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.drawing_mode = 100;
            this.last = num;
            this.type = this.type_set();
        }
        else if (this.mouse_mode === "move") {
            this.re_wallmove(num);
            this.last = num;
        }
        else if (this.mouse_mode === "up") {
            this.drawing = false;
            this.last = -1;
            this.type = this.type_set();
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.last = -1;
            this.type = this.type_set();
        }
    };
    Puzzle.prototype.re_wallmove = function (num) {
        if (this.drawing && this.last != num) {
            var line_style = this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1];
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                //隣接していたら
                array = "wall";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.redraw();
        }
    };
    //////////////////////////
    // number
    //////////////////////////
    Puzzle.prototype.mouse_number = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.last = num;
            this.lastx = x;
            this.lasty = y;
            this.cursol = num;
            this.redraw();
        }
        else if (this.mouse_mode === "down_right") {
            this.cursol = num;
            this.redraw();
        }
        else if (this.mouse_mode === "move") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2" &&
                this.drawing) {
                this.re_numberarrow(x, y);
            }
        }
        else if (this.mouse_mode === "up") {
            this.drawing = false;
            this.last = -1;
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.last = -1;
        }
    };
    Puzzle.prototype.mouse_numberS = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.cursolS = num;
            this.redraw();
        }
        else if (this.mouse_mode === "down_right") {
            this.cursolS = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_numberarrow = function (x, y, num) {
        var arrowdirection;
        if (this.last != -1) {
            //方向取得
            if (Math.pow((x - this.lastx), 2) + Math.pow((y - this.lasty), 2) >
                Math.pow((0.3 * this.size), 2)) {
                arrowdirection = this.direction_arrow8(x, y, this.lastx, this.lasty);
            }
            else {
                return;
            }
            //内容取得
            var con;
            if (this[this.mode.qa].number[this.cursol]) {
                con = this[this.mode.qa].number[this.cursol][0];
            }
            else {
                con = "";
            }
            //上書き
            var number;
            if (arrowdirection != undefined) {
                this.record("number", this.cursol);
                if (con.slice(-2) === "_" + arrowdirection) {
                    number = con.slice(0, -2);
                }
                else if (con.slice(-2, -1) === "_") {
                    number = con.slice(0, -1) + arrowdirection;
                }
                else {
                    number = con + "_" + arrowdirection;
                }
                this[this.mode.qa].number[this.cursol] = [
                    number,
                    this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1],
                    "2",
                ];
                this.drawing = false;
                this.last = -1;
                this.redraw();
            }
        }
    };
    Puzzle.prototype.direction_arrow8 = function (x, y) { }; //override
    Puzzle.prototype.direction_arrow4 = function (x, y) { }; //override
    //////////////////////////
    // symbol
    //////////////////////////
    Puzzle.prototype.mouse_symbol = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.cursol = num;
            if (document.getElementById("panel_button").textContent === "ON" &&
                !this.onoff_symbolmode_list[this.mode[this.mode.qa].symbol[0]]) {
                if (0 <= panel_pu.edit_num && panel_pu.edit_num <= 8) {
                    this.key_number((panel_pu.edit_num + 1).toString());
                }
                else if (panel_pu.edit_num === 9) {
                    this.key_number((panel_pu.edit_num - 9).toString());
                }
                else if (panel_pu.edit_num === 11) {
                    this.key_space();
                }
            }
            this.redraw();
        }
        else if (this.mouse_mode === "down_right") {
            this.cursol = num;
            this.redraw();
        }
    };
    //////////////////////////
    // cage
    //////////////////////////
    Puzzle.prototype.mouse_cage = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.drawing_mode = 100;
            this.last = num;
        }
        else if (this.mouse_mode === "move") {
            this.re_linecage(num);
            this.last = num;
        }
        else if (this.mouse_mode === "up") {
            this.drawing = false;
            this.last = -1;
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.last = -1;
        }
    };
    Puzzle.prototype.re_linecage = function (num) {
        if (this.drawing && this.last != num) {
            var line_style = this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1];
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                //隣接していたら
                array = "cage";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.redraw();
        }
    };
    //////////////////////////
    // special
    //////////////////////////
    Puzzle.prototype.mouse_special = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                "polygon") {
                this.re_polygondown(num);
            }
            else if (this.point[num].type === 0) {
                this.re_specialdown(num, this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]);
            }
        }
        else if (this.mouse_mode === "move") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                "polygon") {
                this.re_polygonmove(num);
            }
            else if (this.drawing &&
                this.point[num].type === 0 &&
                num != this.last) {
                this.re_special(num, this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]);
            }
        }
        else if (this.mouse_mode === "up") {
            if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] !=
                "polygon") {
                if (this.point[num].use === 1) {
                    if (this.point[num].type === 0) {
                        this.re_specialup(num, this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]);
                    }
                }
                this.drawing = false;
                this.last = -1;
                this.redraw();
            }
        }
        else if (this.mouse_mode === "out") {
            this.re_specialup(this.last, this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]);
            this.drawing = false;
            this.last = -1;
            this.redraw();
        }
    };
    Puzzle.prototype.re_specialdown = function (num, arr) {
        this.record(arr, -1);
        this[this.mode.qa][arr].push([num]);
        this.drawing = true;
        this.last = num;
    };
    Puzzle.prototype.re_special = function (num, arr) {
        if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1 ||
            this.point[num].adjacent_dia.indexOf(parseInt(this.last)) != -1) {
            //隣接していたら
            if (this[this.mode.qa][arr].slice(-1)[0].slice(-2)[0] === num) {
                this[this.mode.qa][arr].slice(-1)[0].pop();
            }
            else {
                this[this.mode.qa][arr].slice(-1)[0].push(num);
            }
            this.last = num;
        }
        this.redraw();
    };
    Puzzle.prototype.re_specialup = function (num, arr) {
        if (this[this.mode.qa][arr].slice(-1)[0] &&
            this[this.mode.qa][arr].slice(-1)[0].length === 1) {
            this[this.mode.qa][arr].pop();
            for (var i = this[this.mode.qa][arr].length - 1; i >= 0; i--) {
                if (this[this.mode.qa][arr][i][0] === num) {
                    this.record(arr, i);
                    this[this.mode.qa][arr][i] = [];
                    break;
                }
            }
        }
    };
    Puzzle.prototype.re_polygonmove = function (num) {
        var arr = "polygon";
        this.freelinecircle_g[1] = num;
        if (this.drawing) {
            this[this.mode.qa][arr].slice(-1)[0][this[this.mode.qa][arr].slice(-1)[0].length - 1] = num;
        }
        this.redraw();
    };
    Puzzle.prototype.re_polygondown = function (num) {
        var arr = "polygon";
        if (!this.drawing) {
            /* //1マス目をクリックすると消える機能
                  for (var i=this[this.mode.qa][arr].length-1;i>=0;i--){
                    if(this[this.mode.qa][arr][i][0]===num){
                      this.record(arr,i);
                      this[this.mode.qa][arr][i] = [];
                      return;
                    }
                  }
                  */
            this.drawing = true;
            this.record(arr, -1);
            this[this.mode.qa][arr].push([num, num]);
        }
        else if (this.drawing) {
            if (num != this[this.mode.qa][arr].slice(-1)[0][0] &&
                num !=
                    this[this.mode.qa][arr].slice(-1)[0][this[this.mode.qa][arr].slice(-1)[0].length - 2]) {
                this[this.mode.qa][arr].slice(-1)[0].push(num);
            }
            else {
                this[this.mode.qa][arr].slice(-1)[0].pop();
                this.drawing = false;
            }
        }
    };
    //////////////////////////
    // board
    //////////////////////////
    Puzzle.prototype.mouse_board = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.drawing = true;
            this.re_board(num);
        }
        else if (this.mouse_mode === "move") {
            this.re_boardmove(num);
            this.last = num;
        }
        else if (this.mouse_mode === "up") {
            this.drawing = false;
            this.last = -1;
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.last = -1;
        }
    };
    Puzzle.prototype.re_board = function (num) {
        var index = this.centerlist.indexOf(num);
        if (index === -1) {
            this.centerlist.push(num);
            this.drawing_mode = 1;
        }
        else {
            this.centerlist.splice(index, 1);
            this.drawing_mode = 0;
        }
        this.make_frameline();
        this.redraw();
    };
    Puzzle.prototype.re_boardmove = function (num) {
        if (this.drawing && this.last != num) {
            var index = this.centerlist.indexOf(num);
            if (this.drawing_mode === 1 && index === -1) {
                this.centerlist.push(num);
            }
            else if (this.drawing_mode === 0 && index != -1) {
                this.centerlist.splice(index, 1);
            }
            this.make_frameline();
            this.redraw();
        }
    };
    //////////////////////////
    // move
    //////////////////////////
    Puzzle.prototype.mouse_move = function (x, y, num) {
        if (this.mouse_mode === "down_left") {
            this.re_movedown(num);
        }
        else if (this.mouse_mode === "move") {
            if (this.drawing) {
                this.re_movemove(num);
            }
            this.redraw();
        }
        else if (this.mouse_mode === "up") {
            if (this.last != -1) {
                this.record("move", [this.start_point, num]);
                this.drawing = false;
                this.start_point = {};
                this.last = -1;
            }
        }
        else if (this.mouse_mode === "out") {
            if (this.drawing) {
                this.record("move", [this.start_point, this.last]);
                this.drawing = false;
                this.start_point = {};
                this.last = -1;
            }
        }
    };
    Puzzle.prototype.re_movedown = function (num) {
        var array_list = {};
        if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "1") {
            array_list = ["number", "symbol"];
        }
        else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
            array_list = ["number"];
        }
        else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
            array_list = ["symbol"];
        }
        for (var _i = 0, array_list_1 = array_list; _i < array_list_1.length; _i++) {
            var array = array_list_1[_i];
            if (this[this.mode.qa][array][num]) {
                this.drawing = true;
                this.start_point[array] = num;
                this.last = num;
                this.cursol = num;
            }
        }
    };
    Puzzle.prototype.re_movemove = function (num) {
        var array_list;
        var array_list_record = [];
        var flag = 1;
        this.cursol = num;
        if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "1") {
            array_list = ["number", "symbol"];
        }
        else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
            array_list = ["number"];
        }
        else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
            array_list = ["symbol"];
        }
        for (var array in this.start_point) {
            if (this[this.mode.qa][array][num]) {
                flag = 0;
            }
        }
        if (flag === 1) {
            for (var _i = 0, array_list_2 = array_list; _i < array_list_2.length; _i++) {
                var array = array_list_2[_i];
                if (!this.start_point[array] &&
                    this[this.mode.qa][array][this.cursol]) {
                    this.start_point[array] = this.cursol;
                }
            }
            for (var array in this.start_point) {
                if (this[this.mode.qa][array][this.last]) {
                    this[this.mode.qa][array][this.cursol] =
                        this[this.mode.qa][array][this.last];
                    delete this[this.mode.qa][array][this.last];
                }
            }
            this.last = this.cursol;
        }
        this.redraw();
    };
    //////////////////////////
    // combi nation
    //////////////////////////
    Puzzle.prototype.mouse_combi = function (x, y, num) {
        switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
            case "linex":
            case "edgexoi":
            case "tents":
                num = this.coord_p_edgex(x, y);
                break;
        }
        if (this.mouse_mode === "down_left") {
            switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
                case "blpo":
                    this.re_combi_blpo(num);
                    break;
                case "blwh":
                    this.re_combi_blwh(num);
                    break;
                case "shaka":
                    this.re_combi_shaka(x, y, num);
                    break;
                case "linex":
                    this.re_combi_linex(num);
                    break;
                case "lineox":
                    this.re_combi_lineox(num);
                    break;
                case "edgexoi":
                    this.re_combi_edgexoi(num);
                    break;
                case "yajilin":
                    this.re_combi_yajilin(num);
                    break;
                case "hashi":
                    this.re_combi_hashi(num);
                    break;
                case "edgesub":
                    this.re_combi_edgesub(num);
                    break;
                case "battleship":
                    this.re_combi_battleship(num);
                    break;
                case "star":
                    this.re_combi_star(num);
                    break;
                case "tents":
                    this.re_combi_tents(num);
                    break;
                case "magnets":
                    this.re_combi_magnets(num);
                    break;
                case "arrowS":
                    this.re_combi_arrowS(x, y, num);
                    break;
                case "numfl":
                    this.re_combi_numfl(x, y, num);
                    break;
                case "alfl":
                    this.re_combi_alfl(x, y, num);
                    break;
            }
        }
        else if (this.mouse_mode === "move") {
            switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
                case "blpo":
                    this.re_combi_blpo_move(num);
                    break;
                case "blwh":
                    this.re_combi_blwh_move(num);
                    break;
                case "shaka":
                    this.re_combi_shaka_move(x, y, num);
                    break;
                case "linex":
                    this.re_combi_linex_move(num);
                    break;
                case "lineox":
                    this.re_combi_lineox_move(num);
                    break;
                case "edgexoi":
                    this.re_combi_edgexoi_move(num);
                    break;
                case "yajilin":
                    this.re_combi_yajilin_move(num);
                    break;
                case "hashi":
                    this.re_combi_hashi_move(num);
                    break;
                case "edgesub":
                    this.re_combi_edgesub_move(num);
                    break;
                case "battleship":
                    this.re_combi_battleship_move(num);
                    break;
                case "star":
                    this.re_combi_star_move(num);
                    break;
                case "tents":
                    this.re_combi_tents_move(num);
                    break;
                case "arrowS":
                    this.re_combi_arrowS_move(x, y, num);
                    break;
                case "numfl":
                    this.re_combi_numfl_move(x, y, num);
                    break;
                case "alfl":
                    this.re_combi_alfl_move(x, y, num);
                    break;
            }
        }
        else if (this.mouse_mode === "up") {
            switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
                case "blpo":
                case "blwh":
                case "linex":
                case "hashi":
                case "battleship":
                case "star":
                case "magnets":
                    this.drawing_mode = -1;
                    break;
                case "edgesub":
                    this.drawing_mode = -1;
                    this.drawing_move = -1;
                    this.last = -1;
                    break;
                case "lineox":
                    this.re_combi_lineox_up(num);
                    break;
                case "edgexoi":
                    this.re_combi_edgexoi_up(num);
                    break;
                case "yajilin":
                    this.re_combi_yajilin_up(num);
                    break;
                case "tents":
                    this.re_combi_tents_up(num);
                    break;
                case "shaka":
                    this.re_combi_shaka_up(num);
                    break;
                case "arrowS":
                    this.re_combi_arrowS_up(num);
                    break;
                case "numfl":
                    this.re_combi_numfl_up(num);
                    break;
                case "alfl":
                    this.re_combi_alfl_up(num);
                    break;
            }
        }
        else if (this.mouse_mode === "out") {
            this.drawing = false;
            this.drawing_mode = -1;
            this.last = -1;
        }
    };
    Puzzle.prototype.coord_p_edgex = function (x, y) {
        throw new Error("Method not implemented.");
    };
    Puzzle.prototype.re_combi_blpo = function (num) {
        if (!this[this.mode.qa].surface[num] && !this[this.mode.qa].symbol[num]) {
            this.record("surface", num);
            this[this.mode.qa].surface[num] = 1;
            this.drawing_mode = 1;
        }
        else if (this[this.mode.qa].surface[num] === 1) {
            this.record("surface", num);
            delete this[this.mode.qa].surface[num];
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [8, "ox_B", 2];
            this.drawing_mode = 2;
        }
        else if (this[this.mode.qa].symbol[num][0] === 8) {
            this.record("symbol", num);
            delete this[this.mode.qa].symbol[num];
            this.drawing_mode = 0;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_blpo_move = function (num) {
        if (num != this.last) {
            if (this.drawing_mode === 1) {
                if (this[this.mode.qa].symbol[num]) {
                    this.record("symbol", num);
                    delete this[this.mode.qa].symbol[num];
                }
                this.record("surface", num);
                this[this.mode.qa].surface[num] = 1;
            }
            else if (this.drawing_mode === 2) {
                if (this[this.mode.qa].surface[num]) {
                    this.record("surface", num);
                    delete this[this.mode.qa].surface[num];
                }
                this.record("symbol", num);
                this[this.mode.qa].symbol[num] = [8, "ox_B", 2];
            }
            else if (this.drawing_mode === 0) {
                if (this[this.mode.qa].surface[num]) {
                    this.record("surface", num);
                    delete this[this.mode.qa].surface[num];
                }
                if (this[this.mode.qa].symbol[num]) {
                    this.record("symbol", num);
                    delete this[this.mode.qa].symbol[num];
                }
            }
            this.last = num;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_blwh = function (num) {
        if (!this[this.mode.qa].symbol[num]) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [1, "circle_M", 2];
            this.drawing_mode = 1;
        }
        else if (this[this.mode.qa].symbol[num][0] === 1) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [2, "circle_M", 2];
            this.drawing_mode = 2;
        }
        else if (this[this.mode.qa].symbol[num][0] === 2) {
            this.record("symbol", num);
            delete this[this.mode.qa].symbol[num];
            this.drawing_mode = 0;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_blwh_move = function (num) {
        if (this.drawing_mode === 1) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [1, "circle_M", 2];
        }
        else if (this.drawing_mode === 2) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [2, "circle_M", 2];
        }
        else if (this.drawing_mode === 0) {
            if (this[this.mode.qa].symbol[num]) {
                this.record("symbol", num);
                delete this[this.mode.qa].symbol[num];
            }
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_shaka = function (x, y, num) {
        if (this.point[num].type === 0) {
            this.last = num;
            this.lastx = x;
            this.lasty = y;
            this.drawing_mode = 1;
        }
    };
    Puzzle.prototype.re_combi_shaka_move = function (x, y, num) {
        var arrowdirection;
        if (this.drawing_mode === 1) {
            if (Math.pow((x - this.lastx), 2) + Math.pow((y - this.lasty), 2) >
                Math.pow((0.3 * this.size), 2)) {
                arrowdirection = this.direction_arrow4(x, y, this.lastx, this.lasty);
            }
            else {
                return;
            }
            this.record("symbol", this.last);
            if (this[this.mode.qa].symbol[this.last] &&
                this[this.mode.qa].symbol[this.last][0] === arrowdirection &&
                this[this.mode.qa].symbol[this.last][1] === "tri") {
                delete this[this.mode.qa].symbol[this.last];
            }
            else {
                this[this.mode.qa].symbol[this.last] = [arrowdirection, "tri", 1];
            }
            this.drawing_mode = -1;
            this.last = -1;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_shaka_up = function (num) {
        if (this.point[num].type === 0 && this.last === num) {
            if (!this[this.mode.qa].symbol[num] ||
                (this[this.mode.qa].symbol[num] &&
                    this[this.mode.qa].symbol[num][1] === "tri")) {
                this.record("symbol", num);
                this[this.mode.qa].symbol[num] = [8, "ox_B", 2];
            }
            else if (this[this.mode.qa].symbol[num] &&
                this[this.mode.qa].symbol[num][0] === 8) {
                this.record("symbol", num);
                delete this[this.mode.qa].symbol[num];
            }
            this.redraw();
        }
        this.drawing_mode = -1;
        this.last = -1;
    };
    Puzzle.prototype.re_combi_linex = function (num) {
        if (this.point[num].type === 2 ||
            this.point[num].type === 3 ||
            this.point[num].type === 4) {
            if (!this[this.mode.qa].line[num]) {
                //xがない
                this.record("line", num);
                this[this.mode.qa].line[num] = 98;
            }
            else if (this[this.mode.qa].line[num] === 98) {
                //×印
                this.record("line", num);
                delete this[this.mode.qa].line[num];
            }
        }
        else {
            this.drawing_mode = 100;
            this.first = num;
            this.last = num;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_linex_move = function (num) {
        if (this.drawing_mode != -1 && this.point[num].type === 0) {
            var line_style = 3;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "line";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_lineox = function (num) {
        this.drawing_mode = 100;
        this.first = num;
        this.last = num;
    };
    Puzzle.prototype.re_combi_lineox_move = function (num) {
        if (this.drawing_mode != -1 && this.point[num].type === 0) {
            var line_style = 3;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "lineE";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_lineox_up = function (num) {
        if (this.point[num].type === 0 && this.last === num && this.first === num) {
            if (!this[this.mode.qa].symbol[num]) {
                this.record("symbol", num);
                this[this.mode.qa].symbol[num] = [1, "ox_E", 2];
            }
            else if (this[this.mode.qa].symbol[num][0] === 1) {
                this.record("symbol", num);
                this[this.mode.qa].symbol[num] = [4, "ox_E", 2];
            }
            else {
                this.record("symbol", num);
                delete this[this.mode.qa].symbol[num];
            }
        }
        this.drawing_mode = -1;
        this.first = -1;
        this.last = -1;
        this.redraw();
    };
    Puzzle.prototype.re_combi_edgexoi = function (num) {
        if (this.point[num].type === 2 ||
            this.point[num].type === 3 ||
            this.point[num].type === 4) {
            if (!this[this.mode.qa].line[num]) {
                //xがない
                this.record("line", num);
                this[this.mode.qa].line[num] = 98;
            }
            else if (this[this.mode.qa].line[num] === 98) {
                //×印
                this.record("line", num);
                delete this[this.mode.qa].line[num];
            }
        }
        else {
            this.drawing_mode = 100;
            this.first = num;
            this.last = num;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_edgexoi_move = function (num) {
        if (this.drawing_mode != -1 && this.point[num].type === 1) {
            var line_style = 3;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "lineE";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_edgexoi_up = function (num) {
        if (this.point[num].type === 0 && this.last === num && this.first === num) {
            if (!this[this.mode.qa].surface[num]) {
                this.record("surface", num);
                this[this.mode.qa].surface[num] = 7;
            }
            else if (this[this.mode.qa].surface[num] === 7) {
                this.record("surface", num);
                this[this.mode.qa].surface[num] = 2;
            }
            else {
                this.record("surface", num);
                delete this[this.mode.qa].surface[num];
            }
        }
        this.drawing_mode = -1;
        this.first = -1;
        this.last = -1;
        this.redraw();
    };
    Puzzle.prototype.re_combi_yajilin = function (num) {
        this.drawing_mode = 100;
        this.first = num;
        this.last = num;
        this.redraw();
    };
    Puzzle.prototype.re_combi_yajilin_move = function (num) {
        if (this.drawing_mode != -1 && this.point[num].type === 0) {
            var line_style = 3;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "line";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_yajilin_up = function (num) {
        if (this.point[num].type === 0 && this.last === num && this.first === num) {
            if (!this[this.mode.qa].surface[num] && !this[this.mode.qa].symbol[num]) {
                this.record("surface", num);
                this[this.mode.qa].surface[num] = 1;
            }
            else if (this[this.mode.qa].surface[num] === 1) {
                this.record("surface", num);
                delete this[this.mode.qa].surface[num];
                this.record("symbol", num);
                this[this.mode.qa].symbol[num] = [8, "ox_B", 1];
            }
            else {
                this.record("symbol", num);
                delete this[this.mode.qa].symbol[num];
            }
        }
        this.drawing_mode = -1;
        this.first = -1;
        this.last = -1;
        this.redraw();
    };
    Puzzle.prototype.re_combi_hashi = function (num) {
        this.drawing_mode = 100;
        this.last = num;
    };
    Puzzle.prototype.re_combi_hashi_move = function (num) {
        if (this.drawing_mode != -1 && this.point[num].type === 0) {
            var line_style;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "line";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                if (!this[this.mode.qa][array][key]) {
                    line_style = 3;
                }
                else if (this[this.mode.qa][array][key] === 3 ||
                    this[this.mode.qa][array][key] === 30) {
                    line_style = 30;
                }
                else {
                    line_style = 3;
                }
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_edgesub = function (num) {
        if (this.point[num].type === 0) {
            this.drawing_mode = 100;
            this.drawing_move = 0;
            this.last = num;
        }
        else if (this.point[num].type === 1) {
            this.drawing_mode = 100;
            this.drawing_move = 1;
            this.last = num;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_edgesub_move = function (num) {
        if (this.drawing_mode != -1 &&
            this.drawing_move === 0 &&
            this.point[num].type === 0) {
            var line_style = 40;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "line";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
        else if (this.drawing_mode != -1 &&
            this.drawing_move === 1 &&
            this.point[num].type === 1) {
            var line_style = 3;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "lineE";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_battleship = function (num) {
        if (!this[this.mode.qa].symbol[num] ||
            this[this.mode.qa].symbol[num][1] != "battleship_B") {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [2, "battleship_B", 2];
        }
        else if (this[this.mode.qa].symbol[num][0] === 8) {
            this.record("symbol", num);
            delete this[this.mode.qa].symbol[num];
            this.drawing_mode = 2;
        }
        else {
            var adj = [0, 0, 0, 0, 0];
            for (var i = 0; i < 4; i++) {
                if (this[this.mode.qa].symbol[this.point[num].adjacent[i]] &&
                    this[this.mode.qa].symbol[this.point[num].adjacent[i]][1] ===
                        "battleship_B" &&
                    this[this.mode.qa].symbol[this.point[num].adjacent[i]][0] <= 6) {
                    //隣がバトルシップだったら
                    adj[i] = 1;
                    adj[4] += 1;
                }
            }
            if (adj[4] === 0) {
                this.key_battleship(num, 1);
            }
            else if (adj[4] === 1) {
                if (adj[0] === 1) {
                    this.key_battleship(num, 6);
                }
                else if (adj[1] === 1) {
                    this.key_battleship(num, 5);
                }
                else if (adj[2] === 1) {
                    this.key_battleship(num, 3);
                }
                else if (adj[3] === 1) {
                    this.key_battleship(num, 4);
                }
            }
            else {
                this.key_battleship(num, 8);
            }
        }
        this.redraw();
    };
    Puzzle.prototype.key_battleship = function (num, n) {
        this.record("symbol", num);
        if (this[this.mode.qa].symbol[num] &&
            this[this.mode.qa].symbol[num][0] === n) {
            this[this.mode.qa].symbol[num] = [8, "battleship_B", 2];
            this.drawing_mode = 1;
        }
        else {
            this[this.mode.qa].symbol[num] = [n, "battleship_B", 2];
        }
    };
    Puzzle.prototype.re_combi_battleship_move = function (num) {
        if (this.drawing_mode === 1 &&
            (!this[this.mode.qa].symbol[num] ||
                this[this.mode.qa].symbol[num][0] != 8)) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [8, "battleship_B", 2];
        }
        else if (this.drawing_mode === 2 && this[this.mode.qa].symbol[num]) {
            this.record("symbol", num);
            delete this[this.mode.qa].symbol[num];
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_star = function (num) {
        if (!this[this.mode.qa].symbol[num]) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [1, "star", 2];
        }
        else if (this[this.mode.qa].symbol[num][0] === 1) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [0, "star", 2];
            this.drawing_mode = 1;
        }
        else {
            this.record("symbol", num);
            delete this[this.mode.qa].symbol[num];
            this.drawing_mode = 2;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_star_move = function (num) {
        if (this.drawing_mode === 1 &&
            (!this[this.mode.qa].symbol[num] ||
                this[this.mode.qa].symbol[num][0] != 0)) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [0, "star", 2];
        }
        else if (this.drawing_mode === 2 && this[this.mode.qa].symbol[num]) {
            this.record("symbol", num);
            delete this[this.mode.qa].symbol[num];
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_tents = function (num) {
        if (this.point[num].type === 2 ||
            this.point[num].type === 3 ||
            this.point[num].type === 4) {
            if (!this[this.mode.qa].line[num]) {
                //xがない
                this.record("line", num);
                this[this.mode.qa].line[num] = 98;
            }
            else if (this[this.mode.qa].line[num] === 98) {
                //×印
                this.record("line", num);
                delete this[this.mode.qa].line[num];
            }
        }
        else {
            this.drawing_mode = 100;
            this.first = num;
            this.last = num;
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_tents_move = function (num) {
        if (this.drawing_mode != -1 && this.point[num].type === 0) {
            var line_style = 3;
            var array;
            if (this.point[num].adjacent.indexOf(parseInt(this.last)) != -1) {
                array = "line";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.last = num;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_tents_up = function (num) {
        if (this.point[num].type === 0 && this.last === num && this.first === num) {
            if (!this[this.mode.qa].symbol[num]) {
                this.record("symbol", num);
                this[this.mode.qa].symbol[num] = [2, "tents", 2];
            }
            else if (this[this.mode.qa].symbol[num][0] === 2) {
                this.record("symbol", num);
                this[this.mode.qa].symbol[num] = [8, "ox_B", 2];
            }
            else {
                this.record("symbol", num);
                delete this[this.mode.qa].symbol[num];
            }
        }
        this.drawing_mode = -1;
        this.first = -1;
        this.last = -1;
        this.redraw();
    };
    Puzzle.prototype.re_combi_magnets = function (num) {
        if (!this[this.mode.qa].symbol[num] && !this[this.mode.qa].surface[num]) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [2, "math_G", 2];
        }
        else if (this[this.mode.qa].symbol[num] &&
            this[this.mode.qa].symbol[num][0] === 2) {
            this.record("symbol", num);
            this[this.mode.qa].symbol[num] = [3, "math_G", 2];
        }
        else if (this[this.mode.qa].symbol[num] &&
            this[this.mode.qa].symbol[num][0] === 3) {
            this.record("symbol", num);
            delete this[this.mode.qa].symbol[num];
            this.record("surface", num);
            this[this.mode.qa].surface[num] = 1;
        }
        else if (this[this.mode.qa].surface[num] &&
            this[this.mode.qa].surface[num] == 1) {
            this.record("surface", num);
            delete this[this.mode.qa].surface[num];
        }
        this.redraw();
    };
    Puzzle.prototype.re_combi_arrowS_up = function (num) {
        if (this.point[num].type === 0 && this.last === num && this.first === num) {
            if (this[this.mode.qa].symbol[this.last] &&
                this[this.mode.qa].symbol[this.last][1] === "arrow_S") {
                this.record("symbol", this.last);
                delete this[this.mode.qa].symbol[this.last];
            }
        }
        this.drawing_mode = -1;
        this.first = -1;
        this.last = -1;
        this.redraw();
    };
    Puzzle.prototype.re_combi_arrowS = function (x, y, num) {
        if (this.point[num].type === 0) {
            this.first = num;
            this.last = num;
            this.lastx = x;
            this.lasty = y;
            this.drawing_mode = 1;
        }
    };
    Puzzle.prototype.re_combi_arrowS_move = function (x, y, num) {
        if (this.drawing_mode === 1) {
            var arrowdirection;
            if (Math.pow((x - this.lastx), 2) + Math.pow((y - this.lasty), 2) >
                Math.pow((0.3 * this.size), 2)) {
                arrowdirection = this.direction_arrow8(x, y, this.lastx, this.lasty);
            }
            else {
                return;
            }
            var a = [3, 1, 5, 7, 2, 4, 8, 6];
            this.record("symbol", this.last);
            this[this.mode.qa].symbol[this.last] = [a[arrowdirection], "arrow_S", 2];
            this.drawing_mode = -1;
            this.last = -1;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_numfl_up = function (num) {
        if (this.point[num].type === 0 && this.last === num && this.first === num) {
            if (!this[this.mode.qa].number[this.last] ||
                this[this.mode.qa].number[this.last][0] != "5") {
                this.record("number", this.last);
                this[this.mode.qa].number[this.last] = ["5", 2, "1"];
            }
            else {
                this.record("number", this.last);
                delete this[this.mode.qa].number[this.last];
            }
        }
        this.drawing_mode = -1;
        this.first = -1;
        this.last = -1;
        this.redraw();
    };
    Puzzle.prototype.re_combi_numfl = function (x, y, num) {
        if (this.point[num].type === 0) {
            this.first = num;
            this.last = num;
            this.lastx = x;
            this.lasty = y;
            this.drawing_mode = 1;
        }
    };
    Puzzle.prototype.re_combi_numfl_move = function (x, y, num) {
        if (this.drawing_mode === 1) {
            var arrowdirection;
            if (Math.pow((x - this.lastx), 2) + Math.pow((y - this.lasty), 2) >
                Math.pow((0.3 * this.size), 2)) {
                arrowdirection = this.direction_num8(x, y, this.lastx, this.lasty);
            }
            else {
                return;
            }
            var a = ["4", "1", "2", "3", "6", "9", "8", "7"];
            this.record("number", this.last);
            this[this.mode.qa].number[this.last] = [a[arrowdirection], 2, "1"];
            this.drawing_mode = -1;
            this.last = -1;
            this.redraw();
        }
    };
    Puzzle.prototype.re_combi_alfl_up = function (num) {
        if (this.point[num].type === 0 && this.last === num && this.first === num) {
            if (!this[this.mode.qa].number[this.last] ||
                this[this.mode.qa].number[this.last][0] != "E") {
                this.record("number", this.last);
                this[this.mode.qa].number[this.last] = ["E", 2, "1"];
            }
            else {
                this.record("number", this.last);
                delete this[this.mode.qa].number[this.last];
            }
        }
        this.drawing_mode = -1;
        this.first = -1;
        this.last = -1;
        this.redraw();
    };
    Puzzle.prototype.re_combi_alfl = function (x, y, num) {
        if (this.point[num].type === 0) {
            this.first = num;
            this.last = num;
            this.lastx = x;
            this.lasty = y;
            this.drawing_mode = 1;
        }
    };
    Puzzle.prototype.re_combi_alfl_move = function (x, y, num) {
        if (this.drawing_mode === 1) {
            var arrowdirection;
            if (Math.pow((x - this.lastx), 2) + Math.pow((y - this.lasty), 2) >
                Math.pow((0.3 * this.size), 2)) {
                arrowdirection = this.direction_num8(x, y, this.lastx, this.lasty);
            }
            else {
                return;
            }
            var a = ["D", "A", "B", "C", "F", "-", "H", "G"];
            this.record("number", this.last);
            this[this.mode.qa].number[this.last] = [a[arrowdirection], 2, "1"];
            this.drawing_mode = -1;
            this.last = -1;
            this.redraw();
        }
    };
    Puzzle.prototype.direction_num8 = function (x, y, x0, y0) {
        var angle = (Math.atan2(y - y0, x - x0) * 360) / 2 / Math.PI;
        var a;
        if (angle < -157.5 || angle > 157.5) {
            a = 0;
        }
        else if (angle > -157.5 && angle < -112.5) {
            a = 1;
        }
        else if (angle > -112.5 && angle < -67.5) {
            a = 2;
        }
        else if (angle > -67.5 && angle < -22.5) {
            a = 3;
        }
        else if (angle > -22.5 && angle < 22.5) {
            a = 4;
        }
        else if (angle > 22.5 && angle < 67.5) {
            a = 5;
        }
        else if (angle > 67.5 && angle < 112.5) {
            a = 6;
        }
        else if (angle > 112.5 && angle < 157.5) {
            a = 7;
        }
        return a;
    };
    /////////////////////////////////
    //   draw
    /////////////////////////////////
    Puzzle.prototype.redraw = function () {
        this.flushcanvas();
        panel_pu.draw_panel();
        this.draw();
        this.set_redoundocolor();
        this.check_solution();
    };
    /*
            redraw_clip(num){
              panel_pu.draw_panel();
              this.draw_clip(num);
              this.set_redoundocolor();
              this.check_solution();
            }
          */
    Puzzle.prototype.set_redoundocolor = function () {
        if (this.pu_q.command_redo.__a.length === 0) {
            document.getElementById("tb_redo").style.color = "#ccc";
        }
        else {
            document.getElementById("tb_redo").style.color = "#000";
        }
        if (this.pu_q.command_undo.__a.length === 0) {
            document.getElementById("tb_undo").style.color = "#ccc";
        }
        else {
            document.getElementById("tb_undo").style.color = "#000";
        }
    };
    Puzzle.prototype.flushcanvas = function () {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Puzzle.prototype.draw = function () {
        return; //override
    };
    Puzzle.prototype.draw_frame = function () {
        for (var i in this.frame) {
            if (this.frame[i] && !this.pu_q.deletelineE[i]) {
                set_line_style(this.ctx, this.frame[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                this.ctx.stroke();
            }
        }
    };
    Puzzle.prototype.draw_frameBold = function () {
        /*frame-B*/
        for (var i in this.frame) {
            if (this.frame[i] === 2 && !this.pu_q.deletelineE[i]) {
                set_line_style(this.ctx, this.frame[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                this.ctx.stroke();
            }
        }
    };
    Puzzle.prototype.draw_polygonsp = function (pu) {
        for (var i = 0; i < this[pu].polygon.length; i++) {
            if (this[pu].polygon[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#000";
                this.ctx.fillStyle = "#000";
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].polygon[i][0]].x, this.point[this[pu].polygon[i][0]].y);
                for (var j = 1; j < this[pu].polygon[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].polygon[i][j]].x, this.point[this[pu].polygon[i][j]].y);
                }
                this.ctx.stroke();
                this.ctx.fill();
            }
        }
    };
    Puzzle.prototype.draw_freecircle = function () {
        /*free_circle*/
        if (((this.mode[this.mode.qa].edit_mode === "line" ||
            this.mode[this.mode.qa].edit_mode === "lineE") &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                "3") ||
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                "polygon") {
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = "rgba(0,0,0,0)";
            this.ctx.strokeStyle = "#1e90ff";
            this.ctx.lineWidth = 4;
            if (this.freelinecircle_g[0] != -1) {
                this.draw_circle(this.ctx, this.point[this.freelinecircle_g[0]].x, this.point[this.freelinecircle_g[0]].y, 0.3);
            }
            if (this.freelinecircle_g[1] != -1) {
                this.draw_circle(this.ctx, this.point[this.freelinecircle_g[1]].x, this.point[this.freelinecircle_g[1]].y, 0.3);
            }
        }
    };
    Puzzle.prototype.draw_circle = function (ctx, x, y, arg3) {
        throw new Error("Method not implemented.");
    };
    Puzzle.prototype.draw_cursol = function () {
        /*cursol*/
        if (this.mode[this.mode.qa].edit_mode === "number" ||
            this.mode[this.mode.qa].edit_mode === "symbol") {
            set_line_style(this.ctx, 99);
            if (this.mode[this.mode.qa].edit_mode === "symbol" &&
                document.getElementById("panel_button").textContent === "ON" &&
                !pu.onoff_symbolmode_list[pu.mode[this.mode.qa].symbol[0]]) {
                this.ctx.strokeStyle = "#00008b";
            }
            this.ctx.fillStyle = "rgba(0,0,0,0)";
            if (this.mode[this.mode.qa].edit_mode === "number" &&
                (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "3" ||
                    this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9")) {
                this.draw_polygon(this.ctx, this.point[this.cursolS].x, this.point[this.cursolS].y, 0.2, 4, 45);
            }
            else if (document.getElementById("edge_button").textContent === "ON") {
                this.draw_polygon(this.ctx, this.point[this.cursol].x, this.point[this.cursol].y, 0.2, 4, 45);
            }
            else {
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this.point[this.cursol].surround[0]].x, this.point[this.point[this.cursol].surround[0]].y);
                for (var j = 1; j < this.point[this.cursol].surround.length; j++) {
                    this.ctx.lineTo(this.point[this.point[this.cursol].surround[j]].x, this.point[this.point[this.cursol].surround[j]].y);
                }
                this.ctx.closePath();
                this.ctx.stroke();
                this.ctx.fill();
            }
        }
    };
    Puzzle.prototype.draw_polygon = function (ctx, x, y, arg3, arg4, arg5) {
        throw new Error("Method not implemented.");
    };
    Puzzle.prototype.check_solution = function () {
        if (this.solution) {
            var text = JSON.stringify(this.make_solution());
            if (text === this.solution && this.sol_flag === 0) {
                setTimeout(function () {
                    if (document.getElementById("english").value === "English") {
                        alert("正解です");
                    }
                    else {
                        alert("Solved.");
                    }
                }, 10);
                this.mouse_mode = "out";
                this.mouseevent(0, 0, 0);
                this.sol_flag = 1;
            }
            else if (text != this.solution && this.sol_flag === 1) {
                //答えが変わったら改めて判定
                this.sol_flag = 0;
            }
        }
    };
    return Puzzle;
}());



/***/ }),

/***/ "./src/model/PuzzleCairoPentagonal.ts":
/*!********************************************!*\
  !*** ./src/model/PuzzleCairoPentagonal.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_cairo_pentagonal": () => (/* binding */ Puzzle_cairo_pentagonal)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PuzzleTruncatedSquare */ "./src/model/PuzzleTruncatedSquare.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_cairo_pentagonal = /** @class */ (function (_super) {
    __extends(Puzzle_cairo_pentagonal, _super);
    function Puzzle_cairo_pentagonal(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, nx, ny, size, "cairo_pentagonal") || this;
        _this.gridtype = "cairo_pentagonal";
        _this.nx = nx;
        _this.ny = ny;
        _this.nx0 = _this.nx + 2;
        _this.ny0 = _this.ny + 2;
        _this.margin = -1; //for arrow of number pointing outside of the grid
        _this.width0 = _this.nx + 6;
        _this.height0 = _this.ny + 6;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.space = [];
        _this.size = size;
        _this.onoff_symbolmode_list = {
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
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_cairo_pentagonal.prototype.create_point = function () {
        var k = 0, k0;
        var nx = this.nx0;
        var ny = this.ny0;
        var r;
        var adjacent, surround, type, use, neighbor;
        var point = [];
        adjacent = [];
        surround = [];
        neighbor = [];
        //center
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                var offsetx = i * (1 + 0.5 * Math.sqrt(3)) + j * 0.5 + 0.5;
                var offsety = j * (1 + 0.5 * Math.sqrt(3)) - i * 0.5 + 0.5;
                k0 = k;
                type = 1;
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(offsetx * this.size, offsety * this.size, type, adjacent, surround, use, neighbor, [], 0);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.5 + Math.sqrt(3) / 6) * this.size, offsety * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(offsetx * this.size, (offsety + 0.5 + Math.sqrt(3) / 6) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.5) * this.size, (offsety + 0.5 + Math.sqrt(3) / 3) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.75 + Math.sqrt(3) / 4) * this.size, (offsety + 0.25 + Math.sqrt(3) / 4) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.5 + Math.sqrt(3) / 3) * this.size, (offsety - 0.5) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                type = 0;
                r = 0.5 * Math.sqrt(2);
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 90 + 45)), point[k0].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 90 + 45)), type, adjacent, surround, use, neighbor);
                    point[k0].surround = point[k0].surround.concat([k]); //pushやspliceだと全てのpointが更新されてしまう
                    point[k].surround = point[k].surround.concat([k0]);
                    k++;
                }
                r = Math.sqrt(3) / 3;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 0)), point[k0 + 1].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 0)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 1]);
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 2].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 90)), point[k0 + 2].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 90)), type, adjacent, surround, use, neighbor);
                    point[k0 + 2].surround = point[k0 + 2].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 2]);
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 3].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 30)), point[k0 + 3].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 30)), type, adjacent, surround, use, neighbor);
                    point[k0 + 3].surround = point[k0 + 3].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 3]);
                    k++;
                }
                r = 0.5 * Math.sqrt(2);
                for (var m = 0; m < 4; m++) {
                    if (m === 0) {
                        var type2 = 1;
                    }
                    else {
                        var type2 = 0;
                    }
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 4].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 90 + 15)), point[k0 + 4].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 90 + 15)), type, adjacent, surround, use, neighbor, [], type2);
                    point[k0 + 4].surround = point[k0 + 4].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 4]);
                    k++;
                }
                r = Math.sqrt(3) / 3;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 5].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 60)), point[k0 + 5].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 5].surround = point[k0 + 5].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 5]);
                    k++;
                }
                type = 2;
                r = 0.5;
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 90 + 0)), point[k0].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 90 + 0)), type, adjacent, surround, use, neighbor);
                    point[k0].neighbor = point[k0].neighbor.concat([k]);
                    if (m === 0) {
                        point[k - 17].neighbor = point[k - 17].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    else {
                        point[k - 11].neighbor = point[k - 11].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    k++;
                }
                r = Math.sqrt(3) / 6;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 60)), point[k0 + 1].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].neighbor = point[k0 + 1].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                    }
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 2].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 30)), point[k0 + 2].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 30)), type, adjacent, surround, use, neighbor);
                    point[k0 + 2].neighbor = point[k0 + 2].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                    }
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 3].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 90)), point[k0 + 3].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 90)), type, adjacent, surround, use, neighbor);
                    point[k0 + 3].neighbor = point[k0 + 3].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                    }
                    k++;
                }
                r = 0.5;
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 4].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 90 + 60)), point[k0 + 4].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 90 + 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 4].neighbor = point[k0 + 4].neighbor.concat([k]);
                    if (m === 3) {
                        point[k - 17].neighbor = point[k - 17].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    else {
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    k++;
                }
                r = Math.sqrt(3) / 6;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 5].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 120 + 0)), point[k0 + 5].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 120 + 0)), type, adjacent, surround, use, neighbor);
                    point[k0 + 5].neighbor = point[k0 + 5].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
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
                if (Math.pow((point[i].x - point[j].x), 2) + Math.pow((point[i].y - point[j].y), 2) <
                    0.01) {
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
                                }
                                else {
                                    point[k].neighbor.splice(n, 1); //あったら削除
                                }
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
        //use更新
        for (var i = 0; i < point.length; i++) {
            if (!point[i] || point[i].type != 0 || point[i].use === -1) {
                continue;
            }
            for (var k = 0; k < point[i].neighbor.length; k++) {
                point[point[i].neighbor[k]].use = 1;
            }
            for (var k = 0; k < point[i].surround.length; k++) {
                point[point[i].surround[k]].use = 1;
            }
        }
        //surround並び替え
        var s0;
        for (var i = 0; i < point.length; i++) {
            if (!point[i] || point[i].type != 0 || point[i].use === -1) {
                continue;
            }
            if (point[i].type2 === 0) {
                s0 = point[i].surround[2];
                point[i].surround[2] = point[i].surround[4];
                point[i].surround[4] = s0;
            }
            else {
                s0 = point[i].surround[3];
                point[i].surround[3] = point[i].surround[4];
                point[i].surround[4] = s0;
                point[i].type2 = 0;
            }
        }
        this.point = point;
    };
    Puzzle_cairo_pentagonal.prototype.reset_frame = function () {
        this.create_point();
        this.space = [];
        this.centerlist = [];
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].use === 1 &&
                this.point[i].type === 0) {
                this.centerlist.push(i);
            }
        }
        this.search_center();
        this.width_c = this.width;
        this.height_c = this.height;
        this.center_n0 = this.center_n;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
        this.make_frameline();
        this.cursol = this.centerlist[0];
        this.cursolS = 4 * this.nx0 * this.ny0 + 4 + 4 * this.nx0;
    };
    Puzzle_cairo_pentagonal.prototype.search_center = function () {
        var xmax = 0, xmin = 1e5;
        var ymax = 0, ymin = 1e5;
        for (var _i = 0, _a = this.centerlist; _i < _a.length; _i++) {
            var i = _a[_i];
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
        var min0, min = 10e6;
        var num = 0;
        for (var index in this.point) {
            var i_1 = parseInt(index);
            min0 = Math.pow((x - this.point[i_1].x), 2) + Math.pow((y - this.point[i_1].y), 2);
            if (min0 < min) {
                min = min0;
                num = i_1;
            }
        }
        this.center_n = Math.floor(num);
    };
    Puzzle_cairo_pentagonal.prototype.type_set = function () {
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
                }
                else {
                    type = [0, 1, 2];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [5];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                    type = [6];
                }
                else {
                    if (document.getElementById("edge_button").textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else {
                    type = [1];
                }
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "polygon") {
                    type = [1];
                }
                else {
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
    };
    Puzzle_cairo_pentagonal.prototype.recalculate_num = function (x, y, num) {
        var min0, min = 10e6;
        var num0 = 0;
        var r0 = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
        var r1 = Math.sqrt(2) - 1;
        if (this.point[num].type != 1) {
            return num;
        }
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].type === 1 &&
                this.point[i].use === 1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type2 === 0 && min0 > Math.pow((r0 * this.size), 2)) {
                        continue;
                    } //円形の内側に入っていなければ更新しない
                    if (this.point[i].type2 === 1 && min0 > Math.pow((r1 * this.size), 2)) {
                        continue;
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return parseInt(num);
    };
    Puzzle_cairo_pentagonal.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] && this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3) {
                        if (min0 > Math.pow((0.3 * this.size), 2)) {
                            continue;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return Math.floor(num);
    };
    Puzzle_cairo_pentagonal.prototype.rotate_left = function () {
        this.theta =
            (this.theta - 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, -30);
        this.redraw();
    };
    Puzzle_cairo_pentagonal.prototype.rotate_right = function () {
        this.theta =
            (this.theta + 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, +30);
        this.redraw();
    };
    ////////////////draw/////////////////////
    Puzzle_cairo_pentagonal.prototype.draw = function () {
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
    };
    Puzzle_cairo_pentagonal.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_cairo_pentagonal.prototype.rotate_theta = function (th) {
        th = th + this.theta;
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = (th / 180) * Math.PI;
        return th;
    };
    return Puzzle_cairo_pentagonal;
}(_PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__.Puzzle_truncated_square));



/***/ }),

/***/ "./src/model/PuzzleHex.ts":
/*!********************************!*\
  !*** ./src/model/PuzzleHex.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_hex": () => (/* binding */ Puzzle_hex)
/* harmony export */ });
/* harmony import */ var _Puzzle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Puzzle */ "./src/model/Puzzle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Puzzle_hex = /** @class */ (function (_super) {
    __extends(Puzzle_hex, _super);
    function Puzzle_hex(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, 'hex') || this;
        _this.nx = nx;
        _this.ny = ny;
        _this.width0 = Math.max(_this.nx * 2, _this.ny * Math.sqrt(3));
        _this.height0 = Math.max(_this.nx * 2, _this.ny * Math.sqrt(3));
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.center_n = parseInt(Math.pow((_this.nx * 3 + 1), 2) * 0.5 + (_this.nx * 3) * 0.5 * (_this.nx % 2));
        _this.center_n0 = _this.center_n;
        _this.size = size;
        _this.space = [parseInt(document.getElementById("nb_space1").value, 10)];
        _this.onoff_symbolmode_list = {
            "cross": 6,
            "arrow_cross": 6,
            "degital": 7,
            "degital_f": 7,
            "arrow_eight": 6,
            "dice": 9,
            "polyomino": 9
        };
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_hex.prototype.erase_buttons = function () {
        for (var _i = 0, _a = this.group1; _i < _a.length; _i++) {
            var i = _a[_i];
            document.getElementById(i).style.display = "none";
        }
        for (var _b = 0, _c = this.group2; _b < _c.length; _b++) {
            var i = _c[_b];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _d = 0, _e = this.group3; _d < _e.length; _d++) {
            var i = _e[_d];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _f = 0, _g = this.group4; _f < _g.length; _f++) {
            var i = _g[_f];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _h = 0, _j = this.group5; _h < _j.length; _h++) {
            var i = _j[_h];
            document.getElementById(i).style.display = "inline-block";
        }
    };
    Puzzle_hex.prototype.create_point = function () {
        var k = 0;
        var n = this.nx * 3 + 1;
        var adjacent, surround, type, use, neighbor;
        var point = [];
        //center
        type = 0;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k - n - 1 + j % 2, k - n + j % 2, k - 1, k + 1, k + n - 1 + j % 2, k + n + j % 2];
                surround = [k + Math.pow(n, 2) - n - 1 + j % 2, k + 2 * Math.pow(n, 2) - n + j % 2, k + Math.pow(n, 2) - n + j % 2, k + 2 * Math.pow(n, 2) + 1, k + Math.pow(n, 2), k + 2 * Math.pow(n, 2)];
                neighbor = [k + 3 * Math.pow(n, 2) - n + j % 2, k + 3 * Math.pow(n, 2), k + 4 * Math.pow(n, 2) - n - 1 + j % 2, k + 4 * Math.pow(n, 2), k + 5 * Math.pow(n, 2) - 1, k + 5 * Math.pow(n, 2)];
                point[k] = new Point((i + (j % 2) * 0.5 - (1 + 0.5 * ((this.nx + 1) % 2))) * this.size, (j - 1) * this.size * Math.sqrt(3) * 0.5, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        //vertex
        type = 1;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + Math.pow(n, 2), k + Math.pow(n, 2) + 1, k + Math.pow(n, 2) + n + j % 2];
                surround = [k - Math.pow(n, 2), k - Math.pow(n, 2) + n - 1 + j % 2, k - Math.pow(n, 2) + n + j % 2];
                point[k] = new Point(point[i + j * n].x, point[i + j * n].y + 2 / 3 * this.size * Math.sqrt(3) * 0.5, type, adjacent, surround, use);
                k++;
            }
        }
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k - Math.pow(n, 2) - n - (j + 1) % 2, k - Math.pow(n, 2) - 1, k - Math.pow(n, 2)];
                surround = [k - 2 * Math.pow(n, 2) - 1, k - 2 * Math.pow(n, 2), k - 2 * Math.pow(n, 2) + n - 1 + j % 2];
                point[k] = new Point(point[i + j * n].x - 0.5 * this.size, point[i + j * n].y + 1 / 3 * this.size * Math.sqrt(3) * 0.5, type, adjacent, surround, use);
                k++;
            }
        }
        //centervertex
        type = 2;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + n - 1 + j % 2, k - n + j % 2];
                surround = [];
                neighbor = [k - 3 * Math.pow(n, 2), k - 3 * Math.pow(n, 2) + n - 1 + j % 2];
                point[k] = new Point(point[i + j * n].x - 0.25 * this.size, point[i + j * n].y + this.size * Math.sqrt(3) * 0.25, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        type = 3;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + n + j % 2, k - n - 1 + j % 2];
                surround = [];
                neighbor = [k - 4 * Math.pow(n, 2), k - 4 * Math.pow(n, 2) + n + j % 2];
                point[k] = new Point(point[i + j * n].x + 0.25 * this.size, point[i + j * n].y + this.size * Math.sqrt(3) * 0.25, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        type = 4;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k - 1, k + 1];
                surround = [];
                neighbor = [k - 5 * Math.pow(n, 2), k - 5 * Math.pow(n, 2) + 1];
                point[k] = new Point(point[i + j * n].x + 0.5 * this.size, point[i + j * n].y, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        //  1/6
        var r = 1 / 6;
        type = 5;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [];
                surround = [];
                point[k] = new Point(point[i + j * n].x - r * this.size, point[i + j * n].y - r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
                point[k] = new Point(point[i + j * n].x + r * this.size, point[i + j * n].y - r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
                point[k] = new Point(point[i + j * n].x - 2 * r * this.size, point[i + j * n].y, type, adjacent, surround, use);
                k++;
                point[k] = new Point(point[i + j * n].x + 2 * r * this.size, point[i + j * n].y, type, adjacent, surround, use);
                k++;
                point[k] = new Point(point[i + j * n].x - r * this.size, point[i + j * n].y + r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
                point[k] = new Point(point[i + j * n].x + r * this.size, point[i + j * n].y + r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
            }
        }
        //  1/6
        var r = 1 / 6;
        type = 6;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                surround = [];
                adjacent = [k - 6 * (n + 1) + 4 + 6 * (j % 2), k - 4, k + 1, k + 3];
                point[k] = new Point(point[i + j * n].x - r * this.size * Math.sqrt(3), point[i + j * n].y - r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 6 * (n + 1) + 4 + 6 * (j % 2), k - 6 * (n + 1) + 8 + 6 * (j % 2), k - 1, k + 1];
                point[k] = new Point(point[i + j * n].x, point[i + j * n].y - 2 * r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 6 * (n + 1) + 8 + 6 * (j % 2), k - 1, k + 3, k + 4];
                point[k] = new Point(point[i + j * n].x + r * this.size * Math.sqrt(3), point[i + j * n].y - r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 4, k - 3, k + 1, k + 6 * (n - 1) - 2 + 6 * (j % 2)];
                point[k] = new Point(point[i + j * n].x - r * this.size * Math.sqrt(3), point[i + j * n].y + r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 1, k + 1, k + 6 * (n - 1) - 2 + 6 * (j % 2), k + 6 * (n - 1) + 2 + 6 * (j % 2)];
                point[k] = new Point(point[i + j * n].x, point[i + j * n].y + 2 * r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 3, k - 1, k + 4, k + 6 * (n - 1) + 2 + 6 * (j % 2)];
                point[k] = new Point(point[i + j * n].x + r * this.size * Math.sqrt(3), point[i + j * n].y + r * this.size, type, adjacent, surround, use);
                k++;
            }
        }
        this.point = point;
    };
    Puzzle_hex.prototype.listappend = function (centerlist) {
        var n = centerlist.length;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < 6; i++) {
                if (centerlist.indexOf(this.point[centerlist[j]].adjacent[i]) === -1) {
                    centerlist.push(this.point[centerlist[j]].adjacent[i]);
                }
            }
        }
        return centerlist;
    };
    Puzzle_hex.prototype.reset_frame = function () {
        this.create_point();
        this.space = [parseInt(document.getElementById("nb_space1").value, 10)];
        this.centerlist = [parseInt(Math.pow((this.nx * 3 + 1), 2) * 0.5 + (this.nx * 3) * 0.5 * (this.nx % 2))];
        this.cursol = this.centerlist[0];
        for (var j = 0; j < this.nx - 1 - this.space[0]; j++) {
            this.centerlist = this.listappend(this.centerlist);
        }
        this.search_center();
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move((this.canvasx * 0.5 - this.point[this.center_n].x + 0.5), (this.canvasy * 0.5 - this.point[this.center_n].y + 0.5), this.theta);
        this.make_frameline();
    };
    Puzzle_hex.prototype.type_set = function () {
        var type;
        switch (this.mode[this.mode.qa].edit_mode) {
            case "surface":
            case "board":
                type = [0];
                break;
            case "symbol":
            case "move":
                if (document.getElementById('edge_button').textContent === "OFF") {
                    type = [0];
                }
                else {
                    type = [0, 1, 2, 3, 4];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [5];
                }
                else {
                    if (document.getElementById('edge_button').textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2, 3, 4];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3, 4];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2, 3, 4];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3, 4];
                }
                else {
                    type = [1];
                }
                break;
            case "wall":
                if (this.drawing) {
                    type = [this.point[this.last].type];
                }
                else {
                    type = [2, 3, 4];
                }
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "polygon") {
                    type = [1];
                }
                else {
                    type = [0];
                }
                break;
            case "cage":
                type = [6];
                break;
            case "combi":
                switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
                    case "tents":
                    case "linex":
                        type = [0, 2, 3, 4];
                        break;
                    case "edgexoi":
                        type = [0, 1, 2, 3, 4];
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
    };
    Puzzle_hex.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3 || this.point[i].type === 4) {
                        if (min0 > Math.pow((0.7 * this.size), 2)) {
                            break;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return parseInt(num);
    };
    Puzzle_hex.prototype.rotate_left = function () {
        this.theta = (this.theta - 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(0, 0, -30);
        this.redraw();
    };
    Puzzle_hex.prototype.rotate_right = function () {
        this.theta = (this.theta + 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(0, 0, 30);
        this.redraw();
    };
    Puzzle_hex.prototype.key_arrow = function (key_code) {
        var a, b, c;
        if (parseInt(this.theta / 60) === 0) {
            b = [0, 1, 2, 3];
        }
        else if (parseInt(this.theta / 60) === 1) {
            b = [3, 0, 1, 2];
        }
        else if (parseInt(this.theta / 60) === 2) {
            b = [2, 3, 0, 1];
        }
        else if (parseInt(this.theta / 60) === 3) {
            b = [2, 3, 0, 1];
        }
        else if (parseInt(this.theta / 60) === 4) {
            b = [1, 2, 3, 0];
        }
        else if (parseInt(this.theta / 60) === 5) {
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
        if (this.mode[this.mode.qa].edit_mode === "number" || this.mode[this.mode.qa].edit_mode === "symbol") {
            if (this.mode[this.mode.qa].edit_mode === "number" && this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                /*switch(key_code){
                  case "ArrowLeft":
                    if (this.cursolSx > 0){this.cursolSx -= 1;}
                    break;
                  case "ArrowUp":
                    if (this.cursolSy > 0){this.cursolSy -= 1;}
                    break;
                  case "ArrowRight":
                    if (this.cursolSx < 2*this.nx-1){this.cursolSx += 1;}
                    break;
                  case "ArrowDown":
                    if (this.cursolSy < 2*this.ny-1){this.cursolSy += 1;}
                    break;
                }*/
            }
            else {
                switch (c) {
                    case 0:
                        a = this.cursol - 1;
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                    case 1:
                        a = this.cursol - (this.nx * 3 + 1);
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
                        a = this.cursol + (this.nx * 3 + 1);
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                }
            }
        }
        this.redraw();
    };
    Puzzle_hex.prototype.direction_arrow8 = function (x, y, x0, y0) {
        var angle = Math.atan2(y - y0, x - x0) * 360 / 2 / Math.PI + 180;
        if (this.reflect[0] === -1) {
            angle = (180 - angle + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            angle = (360 - angle + 360) % 360;
        }
        angle = (angle - this.theta + 360) % 360;
        angle -= 180;
        var a;
        if (angle < -150 || angle > 150) {
            a = 2;
        }
        else if (angle > -150 && angle < -90) {
            a = 0;
        }
        else if (angle > -90 && angle < -30) {
            a = 1;
        }
        else if (angle > -30 && angle < 30) {
            a = 3;
        }
        else if (angle > 30 && angle < 90) {
            a = 5;
        }
        else if (angle > 90 && angle < 150) {
            a = 4;
        }
        return a;
    };
    ////////////////draw/////////////////////
    Puzzle_hex.prototype.draw = function () {
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
    };
    Puzzle_hex.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                //this.ctx.fillStyle = "rgba(0,0,0,0)";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                //this.ctx.fillStyle = "rgba(0,0,0,0)";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                //this.ctx.fillStyle = "rgba(0,0,0,0)";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
            }
            else if (this.point[i].type === 6) {
                this.ctx.fillStyle = "green";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                //this.ctx.beginPath();
                //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
                //this.ctx.fill();
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_hex.prototype.draw_lattice = function () {
        if (this.mode.grid[1] === "1") {
            this.ctx.fillStyle = "#000";
            var verticelist = [];
            for (var i = 0; i < this.centerlist.length; i++) {
                for (var j = 0; j < this.point[this.centerlist[i]].surround.length; j++) {
                    verticelist.push(this.point[this.centerlist[i]].surround[j]);
                }
            }
            verticelist = Array.from(new Set(verticelist));
            for (var i = 0; i < verticelist.length; i++) {
                this.ctx.beginPath();
                this.ctx.arc(this.point[verticelist[i]].x, this.point[verticelist[i]].y, 2.1, 0, 2 * Math.PI, true);
                this.ctx.fill();
            }
        }
    };
    Puzzle_hex.prototype.draw_surface = function (pu) {
        for (var i in this[pu].surface) {
            set_surface_style(this.ctx, this[pu].surface[i]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.point[this.point[i].surround[0]].x, this.point[this.point[i].surround[0]].y);
            for (var j = 1; j < this.point[i].surround.length; j++) {
                this.ctx.lineTo(this.point[this.point[i].surround[j]].x, this.point[this.point[i].surround[j]].y);
            }
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }
    };
    Puzzle_hex.prototype.draw_polygon = function (ctx, x, y, r, n, th) {
        ctx.LineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        for (var i = 0; i < n - 1; i++) {
            th += 360 / n;
            ctx.lineTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_hex.prototype.draw_squareframe = function (pu) {
        for (var i = 0; i < this[pu].squareframe.length; i++) {
            if (this[pu].squareframe[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.5;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].squareframe[i][0]].x, this.point[this[pu].squareframe[i][0]].y);
                for (var j = 1; j < this[pu].squareframe[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].squareframe[i][j]].x, this.point[this[pu].squareframe[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_hex.prototype.draw_thermo = function (pu) {
        for (var i = 0; i < this[pu].thermo.length; i++) {
            if (this[pu].thermo[i][0]) {
                this.ctx.strokeStyle = "rgba(0,0,0,0)";
                this.ctx.fillStyle = "#ccc";
                this.draw_circle(this.ctx, this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y, 0.4);
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.4;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y);
                for (var j = 1; j < this[pu].thermo[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].thermo[i][j]].x, this.point[this[pu].thermo[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_hex.prototype.draw_arrowsp = function (pu) {
        for (var i = 0; i < this[pu].arrows.length; i++) {
            if (this[pu].arrows[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y);
                for (var j = 1; j < this[pu].arrows[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].arrows[i][j]].x, this.point[this[pu].arrows[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].arrows[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].arrows[i][j - 1]].x, this.point[this[pu].arrows[i][j - 1]].y, this.point[this[pu].arrows[i][j]].x, this.point[this[pu].arrows[i][j]].y, [-0.00001, 0, -0.3 * this.size, 0.3 * this.size]);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.lineJoin = "miter";
                this.ctx.strokeStyle = "rgba(192,192,192,1)";
                this.ctx.fillStyle = "rgba(255,255,255,1)";
                this.ctx.lineWidth = 3;
                this.draw_circle(this.ctx, this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y, 0.4);
            }
        }
    };
    Puzzle_hex.prototype.draw_direction = function (pu) {
        for (var i = 0; i < this[pu].direction.length; i++) {
            if (this[pu].direction[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#999";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].direction[i][0]].x, this.point[this[pu].direction[i][0]].y);
                for (var j = 1; j < this[pu].direction[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].direction[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].direction[i][j - 1]].x, this.point[this[pu].direction[i][j - 1]].y, this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y, [-0.00001, 0, -0.25 * this.size, 0.25 * this.size]);
                this.ctx.stroke();
                this.ctx.lineJoin = "miter";
            }
        }
    };
    Puzzle_hex.prototype.draw_line = function (pu) {
        for (var i in this[pu].line) {
            if (this[pu].line[i] === 98) {
                var r = 0.2;
                var x = this.point[i].x;
                var y = this.point[i].y;
                set_line_style(this.ctx, 98);
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
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
                }
                else if (this[pu].line[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - r / d * dy, this.point[i1].y + r / d * dx);
                    this.ctx.lineTo(this.point[i2].x - r / d * dy, this.point[i2].y + r / d * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + r / d * dy, this.point[i1].y - r / d * dx);
                    this.ctx.lineTo(this.point[i2].x + r / d * dy, this.point[i2].y - r / d * dx);
                }
                else {
                    if (this.point[i1].type === 2 || this.point[i1].type === 3 || this.point[i1].type === 4) { //for centerline
                        this.ctx.moveTo(this.point[i2].x, this.point[i2].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
                        this.ctx.stroke();
                        this.ctx.lineCap = "butt";
                    }
                    else if (this.point[i2].type === 2 || this.point[i2].type === 3 || this.point[i2].type === 4) {
                        this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
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
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
                set_line_style(this.ctx, this[pu].lineE[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                if (this[pu].lineE[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - r / d * dy, this.point[i1].y + r / d * dx);
                    this.ctx.lineTo(this.point[i2].x - r / d * dy, this.point[i2].y + r / d * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + r / d * dy, this.point[i1].y - r / d * dx);
                    this.ctx.lineTo(this.point[i2].x + r / d * dy, this.point[i2].y - r / d * dx);
                }
                else {
                    this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                    this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_hex.prototype.draw_freeline = function (pu) {
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
                var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                this.ctx.moveTo(this.point[i1].x - r / d * dy, this.point[i1].y + r / d * dx);
                this.ctx.lineTo(this.point[i2].x - r / d * dy, this.point[i2].y + r / d * dx);
                this.ctx.stroke();
                this.ctx.moveTo(this.point[i1].x + r / d * dy, this.point[i1].y - r / d * dx);
                this.ctx.lineTo(this.point[i2].x + r / d * dy, this.point[i2].y - r / d * dx);
            }
            else {
                this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
            }
            this.ctx.stroke();
        }
    };
    Puzzle_hex.prototype.draw_wall = function (pu) {
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
    };
    Puzzle_hex.prototype.draw_cage = function (pu) {
        var r = 0.16; //space between grid
        var r0 = Math.sqrt(3) / 3 - 1 / 3 - r;
        for (var i in this[pu].cage) {
            var i1 = i.split(",")[0];
            var i2 = i.split(",")[1];
            var x1, y1, x2, y2, x3 = -1, y3 = -1, th;
            if (i1 % 6 === 0) {
                th = this.rotate_theta_cage(150);
                x1 = this.point[i1].x + r * Math.cos(th) * this.size;
                y1 = this.point[i1].y - r * Math.sin(th) * this.size;
                if (i2 % 6 === 1) {
                    th = this.rotate_theta_cage(90);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                }
                else if (i2 % 6 === 3) {
                    th = this.rotate_theta_cage(210);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                }
            }
            else if (i1 % 6 === 1) {
                th = this.rotate_theta_cage(90);
                x1 = this.point[i1].x + r * Math.cos(th) * this.size;
                y1 = this.point[i1].y - r * Math.sin(th) * this.size;
                if (i2 % 6 === 2) {
                    th = this.rotate_theta_cage(30);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                }
            }
            else if (i1 % 6 === 2) {
                th = this.rotate_theta_cage(30);
                x1 = this.point[i1].x + r * Math.cos(th) * this.size;
                y1 = this.point[i1].y - r * Math.sin(th) * this.size;
                if (i2 % 6 === 0) {
                    th = this.rotate_theta_cage(150);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                    th = this.rotate_theta_cage(330);
                    x3 = x1 + r0 * Math.cos(th) * this.size;
                    y3 = y1 - r0 * Math.sin(th) * this.size;
                }
                else if (i2 % 6 === 5) {
                    th = this.rotate_theta_cage(330);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                }
            }
            else if (i1 % 6 === 3) {
                th = this.rotate_theta_cage(210);
                x1 = this.point[i1].x + r * Math.cos(th) * this.size;
                y1 = this.point[i1].y - r * Math.sin(th) * this.size;
                if (i2 % 6 === 1) {
                    th = this.rotate_theta_cage(90);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                    th = this.rotate_theta_cage(270);
                    x3 = x1 + r0 * Math.cos(th) * this.size;
                    y3 = y1 - r0 * Math.sin(th) * this.size;
                }
                else if (i2 % 6 === 4) {
                    th = this.rotate_theta_cage(270);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                }
            }
            else if (i1 % 6 === 4) {
                th = this.rotate_theta_cage(270);
                x1 = this.point[i1].x + r * Math.cos(th) * this.size;
                y1 = this.point[i1].y - r * Math.sin(th) * this.size;
                if (i2 % 6 === 0) {
                    th = this.rotate_theta_cage(150);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                    th = this.rotate_theta_cage(330);
                    x3 = x1 + r0 * Math.cos(th) * this.size;
                    y3 = y1 - r0 * Math.sin(th) * this.size;
                }
                else if (i2 % 6 === 2) {
                    th = this.rotate_theta_cage(30);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                    th = this.rotate_theta_cage(210);
                    x3 = x1 + r0 * Math.cos(th) * this.size;
                    y3 = y1 - r0 * Math.sin(th) * this.size;
                }
                else if (i2 % 6 === 5) {
                    th = this.rotate_theta_cage(330);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                }
            }
            else if (i1 % 6 === 5) {
                th = this.rotate_theta_cage(330);
                x1 = this.point[i1].x + r * Math.cos(th) * this.size;
                y1 = this.point[i1].y - r * Math.sin(th) * this.size;
                if (i2 % 6 === 1) {
                    th = this.rotate_theta_cage(90);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                    th = this.rotate_theta_cage(270);
                    x3 = x1 + r0 * Math.cos(th) * this.size;
                    y3 = y1 - r0 * Math.sin(th) * this.size;
                }
                else if (i2 % 6 === 3) {
                    th = this.rotate_theta_cage(210);
                    x2 = this.point[i2].x + r * Math.cos(th) * this.size;
                    y2 = this.point[i2].y - r * Math.sin(th) * this.size;
                    th = this.rotate_theta_cage(30);
                    x3 = x1 + r0 * Math.cos(th) * this.size;
                    y3 = y1 - r0 * Math.sin(th) * this.size;
                }
            }
            set_line_style(this.ctx, this[pu].cage[i]);
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            if (x3 != -1) {
                this.ctx.lineTo(x3, y3);
            }
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }
    };
    Puzzle_hex.prototype.draw_symbol = function (pu, layer) {
        /*symbol_layer*/
        for (var i in this[pu].symbol) {
            if (this[pu].symbol[i][2] === layer) {
                this.draw_symbol_select(this.ctx, this.point[i].x, this.point[i].y, this[pu].symbol[i][0], this[pu].symbol[i][1]);
            }
        }
    };
    Puzzle_hex.prototype.draw_number = function (pu) {
        /*number*/
        for (var i in this[pu].number) {
            switch (this[pu].number[i][2]) {
                case "1": //normal
                    this.draw_numbercircle(pu, i, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    break;
                case "2": //arrow
                    var arrowlength = 0.7;
                    this.draw_numbercircle(pu, i, 0.42);
                    set_font_style(this.ctx, (0.65 * this.size).toString(10), this[pu].number[i][1]);
                    var direction = {
                        "_0": 120,
                        "_1": 60,
                        "_2": 180,
                        "_3": 0,
                        "_4": 240,
                        "_5": 300
                    };
                    var direction = (direction[this[pu].number[i][0].slice(-2)] - this.theta + 360) % 360;
                    if (this.reflect[0] === -1) {
                        direction = (180 - direction + 360) % 360;
                    }
                    if (this.reflect[1] === -1) {
                        direction = (360 - direction + 360) % 360;
                    }
                    switch (direction) {
                        case 120:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, this.point[i].x + (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 300:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (-arrowlength * 0.25 + 0.2) * this.size, this.point[i].y + (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x + (arrowlength * 0.25 + 0.2) * this.size, this.point[i].y + (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 60:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, this.point[i].x - (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 240:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (-arrowlength * 0.25 + 0.2) * this.size, this.point[i].y + (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x - (arrowlength * 0.25 + 0.2) * this.size, this.point[i].y + (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 180:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size, this.point[i].x + (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 0:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size, this.point[i].x - (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 150:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size, this.point[i].x + (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 330:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size, this.point[i].x + (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 30:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size, this.point[i].x - (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 210:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size, this.point[i].x - (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 90:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 270:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        default:
                            set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                            this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                            break;
                    }
                    break;
                case "4": //tapa
                    this.draw_numbercircle(pu, i, 0.44);
                    if (this[pu].number[i][0].length === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 2) {
                        set_font_style(this.ctx, (0.48 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.16 * this.size, this.point[i].y - 0.15 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.18 * this.size, this.point[i].y + 0.19 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 3) {
                        set_font_style(this.ctx, (0.45 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.22 * this.size, this.point[i].y - 0.14 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.24 * this.size, this.point[i].y - 0.05 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.3 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 4) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.0 * this.size, this.point[i].y - 0.22 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x - 0.26 * this.size, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x + 0.26 * this.size, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(3, 4), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.3 * this.size, this.size * 0.8);
                    }
                    break;
                case "5": //small
                    this.draw_numbercircle(pu, i, 0.17);
                    set_font_style(this.ctx, (0.25 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.02 * this.size, this.size * 0.8);
                    break;
                case "6": //medium
                    this.draw_numbercircle(pu, i, 0.25);
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "10": //big
                    this.draw_numbercircle(pu, i, 0.36);
                    set_font_style(this.ctx, (0.6 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "7": //sudoku
                    this.draw_numbercircle(pu, i, 0.42);
                    var sum = 0, pos = 0;
                    for (var j = 0; j < 9; j++) {
                        if (this[pu].number[i][0][j] === 1) {
                            sum += 1;
                            pos = j;
                        }
                    }
                    if (sum === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text((pos + 1).toString(), this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    }
                    else {
                        set_font_style(this.ctx, (0.3 * this.size).toString(10), this[pu].number[i][1]);
                        for (var j = 0; j < 9; j++) {
                            if (this[pu].number[i][0][j] === 1) {
                                this.ctx.text((j + 1).toString(), this.point[i].x + ((j % 3 - 1) * 0.25) * this.size, this.point[i].y + (((j / 3 | 0) - 1) * 0.25 + 0.01) * this.size);
                            }
                        }
                    }
                    break;
                case "8": //long
                    if (this[pu].number[i][1] === 5) {
                        set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                        set_circle_style(this.ctx, 7);
                        this.ctx.fillRect(this.point[i].x - 0.2 * this.size, this.point[i].y - 0.25 * this.size, this.ctx.measureText(this[pu].number[i][0]).width, 0.5 * this.size);
                    }
                    set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.textAlign = "left";
                    this.ctx.text(this[pu].number[i][0], this.point[i].x - 0.2 * this.size, this.point[i].y);
                    break;
            }
        }
        for (var i in this[pu].numberS) {
            if (this[pu].numberS[i][1] === 5) {
                set_circle_style(this.ctx, 7);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
            }
            else if (this[pu].numberS[i][1] === 6) {
                set_circle_style(this.ctx, 1);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
            }
            else if (this[pu].numberS[i][1] === 7) {
                set_circle_style(this.ctx, 2);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
            }
            if (true) {
                set_font_style(this.ctx, (0.26 * this.size).toString(10), this[pu].numberS[i][1]);
                this.ctx.textAlign = "center";
                this.ctx.text(this[pu].numberS[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, 0.3 * this.size);
            }
        }
    };
    Puzzle_hex.prototype.draw_numbercircle = function (pu, i, size) {
        if (this[pu].number[i][1] === 5) {
            set_circle_style(this.ctx, 7);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
        else if (this[pu].number[i][1] === 6) {
            set_circle_style(this.ctx, 1);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
        else if (this[pu].number[i][1] === 7) {
            set_circle_style(this.ctx, 2);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
    };
    Puzzle_hex.prototype.draw_symbol_select = function (ctx, x, y, num, sym) {
        switch (sym) {
            /* figure */
            case "circle_L":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.43);
                    this.draw_circle(ctx, x, y, 0.32);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.43);
                }
                break;
            case "circle_M":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.35);
                    this.draw_circle(ctx, x, y, 0.25);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.35);
                }
                break;
            case "circle_S":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.22);
                    this.draw_circle(ctx, x, y, 0.14);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.22);
                }
                break;
            case "circle_SS":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.13);
                    this.draw_circle(ctx, x, y, 0.07);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.13);
                }
                break;
            case "square_LL":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.5, 4, 45);
                break;
            case "square_L":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.4, 4, 45);
                break;
            case "square_M":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.35, 4, 45);
                break;
            case "square_S":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.22, 4, 45);
                break;
            case "square_SS":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.13, 4, 45);
                break;
            case "triup_L":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.5, 3, 90);
                break;
            case "triup_M":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.4, 3, 90);
                break;
            case "triup_SS":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.16, 3, 90);
                break;
            case "tridown_L":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.5, 3, -90);
                break;
            case "tridown_M":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.4, 3, -90);
                break;
            case "tridown_SS":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.16, 3, -90);
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
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
                break;
            case "math_G":
                set_font_style(ctx, 0.8 * pu.size.toString(10), 2);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
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
            //case "pencils":
            //  this.draw_pencils(ctx,num,x,y);
            //  break;
        }
    };
    Puzzle_hex.prototype.draw_circle = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_hex.prototype.draw_x = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_hex.prototype.draw_ast = function (ctx, x, y, r) {
        var th;
        th = 90 + this.theta % 60;
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
        th = 30 + this.theta % 60;
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
        th = 150 + this.theta % 60;
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_hex.prototype.draw_ox = function (ctx, num, x, y) {
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
                ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * pu.size, y + r * Math.sin(45 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * pu.size, y + r * Math.sin(225 * (Math.PI / 180)) * pu.size);
                ctx.stroke();
                break;
            case 6:
                r = 0.5;
                ctx.beginPath();
                ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * pu.size, y + r * Math.sin(135 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * pu.size, y + r * Math.sin(315 * (Math.PI / 180)) * pu.size);
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
    };
    Puzzle_hex.prototype.draw_tri = function (ctx, num, x, y) {
        var r = 0.5;
        switch (num) {
            case 1:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 4:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 3:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 5:
                set_circle_style(ctx, 2);
                draw_square(ctx, x, y, r);
                break;
            case 6:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 7:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 8:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 9:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 0:
                set_circle_style(ctx, 3);
                draw_square(ctx, x, y, r);
                break;
        }
    };
    Puzzle_hex.prototype.draw_cross = function (ctx, num, x, y) {
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                var th = this.rotate_theta(i * 60 - 180);
                ctx.beginPath();
                ctx.moveTo(x + ctx.lineWidth * 0.3 * Math.cos(th), y + ctx.lineWidth * 0.3 * Math.sin(th));
                ctx.lineTo(x - 0.5 * pu.size * Math.cos(th), y - 0.5 * pu.size * Math.sin(th));
                ctx.stroke();
            }
        }
    };
    Puzzle_hex.prototype.draw_linesym = function (ctx, num, x, y) {
        var r = 0.32;
        ctx.setLineDash([]);
        ctx.lineCap = "round";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 3;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 3:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 4:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 5:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 6:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
        }
    };
    Puzzle_hex.prototype.draw_inequality = function (ctx, num, x, y) {
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
                th = this.rotate_theta((num - 1) * 60 + 45);
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 315);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.fill();
                ctx.stroke();
                break;
            /*//for square
            case 5:
              set_circle_style(ctx,10);
              ctx.beginPath();
              ctx.moveTo(x+0.07*pu.size,y+0.2*pu.size);
              ctx.lineTo(x-0.07*pu.size,y+0*pu.size);
              ctx.lineTo(x+0.07*pu.size,y-0.2*pu.size);
              ctx.stroke();
              break;*/
        }
    };
    Puzzle_hex.prototype.draw_math = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                ctx.font = 0.8 * pu.size + "px sans-serif";
                ctx.text("\u221E", x, y);
                break;
            case 2:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＋", x, y);
                break;
            case 3:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("－", x, y);
                break;
            case 4:
                ctx.text("×", x, y);
                break;
            case 5:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＊", x, y);
                break;
            case 6:
                ctx.text("÷", x, y);
                break;
            case 7:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
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
    };
    Puzzle_hex.prototype.draw_degital = function (ctx, num, x, y) {
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
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[1] === 1) {
                w1 = -(z1 + z2);
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[2] === 1) {
                w1 = z1 + z2;
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[3] === 1) {
                w1 = z1;
                w2 = 0;
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[4] === 1) {
                w1 = -(z1 + z2);
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[5] === 1) {
                w1 = z1 + z2;
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[6] === 1) {
                w1 = z1;
                w2 = 2 * (z1 + z2);
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
        }
    };
    Puzzle_hex.prototype.draw_degital_f = function (ctx, num, x, y) {
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
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 0;
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        //contents
        this.draw_degital(ctx, num, x, y);
    };
    Puzzle_hex.prototype.draw_dice = function (ctx, num, x, y) {
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_circle(ctx, x + (i % 3 - 1) * 0.25 * pu.size, y + ((i / 3 | 0) - 1) * 0.25 * pu.size, 0.09);
            }
        }
    };
    Puzzle_hex.prototype.draw_pills = function (ctx, num, x, y) {
        var r = 0.15;
        ctx.fillStyle = "#999";
        switch (num) {
            case 1:
                this.draw_circle(ctx, x, y, r);
                break;
            case 2:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                break;
            case 3:
                this.draw_circle(ctx, x - 0 * pu.size, y - 0.23 * pu.size, r);
                this.draw_circle(ctx, x + 0.23 * pu.size, y + 0.2 * pu.size, r);
                this.draw_circle(ctx, x - 0.23 * pu.size, y + 0.2 * pu.size, r);
                break;
            case 4:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x - 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y - 0.22 * pu.size, r);
                break;
            case 5:
                this.draw_circle(ctx, x, y, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y - 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y - 0.24 * pu.size, r);
                break;
        }
    };
    Puzzle_hex.prototype.draw_arrowB = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.2;
        var w2 = 0.4;
        var ri = -0.4;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_hex.prototype.draw_arrowN = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.03;
        var w2 = 0.13;
        var ri = -0.25;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_hex.prototype.draw_arrowS = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.32; //tip
        var w1 = 0.02;
        var w2 = 0.12;
        var ri = -0.2;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_hex.prototype.draw_arrowGP = function (ctx, num, x, y) {
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
            if (num <= 6) {
                th = this.rotate_theta((num - 1) * 60 - 180);
            }
            else {
                th = this.rotate_theta((num - 7) * 180 - 90);
            }
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [0, w1 * pu.size, r1 * pu.size, w1 * pu.size, r2 * pu.size, w2 * pu.size, r3 * pu.size, w3 * pu.size]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_hex.prototype.draw_arrowGP_C = function (ctx, num, x, y) {
        if (num > 0 && num <= 8) {
            var th;
            if (num <= 6) {
                th = this.rotate_theta((num - 1) * 60 - 180);
            }
            else {
                th = this.rotate_theta((num - 7) * 180 - 90);
            }
            this.draw_circle(ctx, x, y, 0.4);
            this.draw_arrowGP(ctx, num, x + 0.6 * pu.size * Math.cos(th), y + 0.6 * pu.size * Math.sin(th));
        }
    };
    Puzzle_hex.prototype.draw_arrowShort = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.3; //tip
        var w1 = 0.15;
        var w2 = 0.31;
        var ri = -0.33;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_hex.prototype.draw_arrowtri = function (ctx, num, x, y) {
        var len1 = 0.25; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0;
        var w2 = 0.35;
        var ri = 0;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_hex.prototype.draw_arrow = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 6) {
            th = this.rotate_theta((num - 1) * 60 - 180);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [0, w1 * pu.size, ri * pu.size, w1 * pu.size, ri * pu.size, w2 * pu.size]);
            ctx.fill();
            ctx.stroke();
        }
        else if (num >= 7 && num <= 8) {
            th = this.rotate_theta((num - 7) * 180 - 90);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [0, w1 * pu.size, ri * pu.size, w1 * pu.size, ri * pu.size, w2 * pu.size]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_hex.prototype.draw_arrowcross = function (ctx, num, x, y) {
        var w1 = 0.025;
        var w2 = 0.12;
        var len1 = 0.5 * w1; //nemoto
        var len2 = 0.45; //tip
        var ri = -0.18;
        var th;
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                th = this.rotate_theta(i * 60 - 180);
                ctx.beginPath();
                ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [0, w1 * pu.size, ri * pu.size, w1 * pu.size, ri * pu.size, w2 * pu.size]);
                ctx.fill();
            }
        }
    };
    Puzzle_hex.prototype.draw_arroweight = function (ctx, num, x, y) {
        var len1 = -0.2; //nemoto
        var len2 = 0.45; //tip
        var w1 = 0.025;
        var w2 = 0.10;
        var ri = -0.15;
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                this.draw_arrow(ctx, i + 1, x, y, len1, len2, w1, w2, ri);
            }
        }
    };
    Puzzle_hex.prototype.draw_kakuro = function (ctx, num, x, y) {
        var th = this.rotate_theta(90) * 180 / Math.PI;
        switch (num) {
            case 1:
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "rgba(255,255,255,0)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, 0.5 * 2 / Math.sqrt(3), 6, th);
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, 0.5 * 2 / Math.sqrt(3));
                break;
            case 2:
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "rgba(255,255,255,0)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, 0.5 * 2 / Math.sqrt(3), 6, th);
                break;
            case 3:
                ctx.fillStyle = "#ccc";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, 0.5 * 2 / Math.sqrt(3), 6, th);
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, 0.5 * 2 / Math.sqrt(3));
                break;
            case 4:
                ctx.fillStyle = "#ccc";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, 0.5 * 2 / Math.sqrt(3), 6, th);
                break;
            case 5:
                ctx.fillStyle = "#fff";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, 0.5 * 2 / Math.sqrt(3), 6, th);
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, 0.5 * 2 / Math.sqrt(3));
                break;
            case 6:
                ctx.fillStyle = "#fff";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, 0.5 * 2 / Math.sqrt(3), 6, th);
                break;
        }
    };
    Puzzle_hex.prototype.draw_compass = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                var r = 0.5;
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, r * 2 / Math.sqrt(3));
                break;
            case 2:
                var r = 0.33;
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, r * 2 / Math.sqrt(3));
                break;
            case 3:
                var r = 0.5;
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, r * 2 / Math.sqrt(3));
                break;
        }
    };
    Puzzle_hex.prototype.draw_tents = function (ctx, num, x, y) {
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
                ctx.moveTo(x - r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0) * pu.size);
                //ctx.arc(x,y-0.1*pu.size,0.3*pu.size,0,2*Math.PI,false);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0.2) * pu.size);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
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
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0. * pu.size, y + 0.37 * pu.size, x + 0.3 * pu.size, y - 0.2 * pu.size);
                ctx.stroke();
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0. * pu.size, y - 0.37 * pu.size, x + 0.3 * pu.size, y + 0.2 * pu.size);
                ctx.stroke();
                break;
            case 4:
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                ctx.text("～", x, y - 0.11 * pu.size);
                ctx.text("～", x, y + 0.09 * pu.size);
                ctx.text("～", x, y + 0.29 * pu.size);
                break;
        }
    };
    Puzzle_hex.prototype.draw_star = function (ctx, num, x, y) {
        var r1 = 0.38;
        var r2 = 0.382 * r1;
        switch (num) {
            case 1:
                ctx.fillStyle = "#fff";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 2:
                ctx.fillStyle = "#000"; //"#009826";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 3:
                ctx.fillStyle = "#999";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
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
                ctx.strokeStyle = "#999";
                ctx.lineWidth = 1;
                this.draw_x(ctx, x, y, r);
                break;
        }
    };
    Puzzle_hex.prototype.draw_star0 = function (ctx, x, y, r1, r2, n) {
        var th1 = 90;
        var th2 = th1 + 180 / n;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
        ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        for (var i = 0; i < n; i++) {
            th1 += 360 / n;
            th2 += 360 / n;
            ctx.lineTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
            ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        }
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_hex.prototype.draw_battleship = function (ctx, num, x, y) {
        var r = 0.4;
        var th;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.stroke();
                break;
            case 2:
                th = this.rotate_theta(45) * 180 / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 3:
                th = this.rotate_theta(105) * 180 / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 4:
                th = this.rotate_theta(165) * 180 / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 5:
                this.draw_battleship_tip(ctx, x, y, 0);
                break;
            case 6:
                this.draw_battleship_tip(ctx, x, y, 60);
                break;
            case 7:
                this.draw_battleship_tip(ctx, x, y, 120);
                break;
            case 8:
                this.draw_battleship_tip(ctx, x, y, 180);
                break;
            case 9:
                this.draw_battleship_tip(ctx, x, y, 240);
                break;
            case 0:
                this.draw_battleship_tip(ctx, x, y, 300);
                break;
        }
    };
    Puzzle_hex.prototype.draw_battleship_tip = function (ctx, x, y, th) {
        var r = 0.35;
        th = this.rotate_theta(th);
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, Math.PI * 0.5 + th, Math.PI * 1.5 + th, false);
        ctx.moveTo(x + r * pu.size * Math.sin(th), y - r * pu.size * Math.cos(th));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + 45 / 180 * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + 45 / 180 * Math.PI));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + 135 / 180 * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + 135 / 180 * Math.PI));
        ctx.lineTo(x + r * pu.size * Math.sin(th + Math.PI), y - r * pu.size * Math.cos(th + Math.PI));
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_hex.prototype.draw_angleloop = function (ctx, num, x, y) {
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
    };
    Puzzle_hex.prototype.draw_firefly = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.09;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                var th = this.rotate_theta((num - 1) * 60 - 180);
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 2;
                this.draw_circle(ctx, x - r1 * pu.size * Math.cos(th), y - r1 * pu.size * Math.sin(th), r2);
                break;
            case 7:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
        }
    };
    Puzzle_hex.prototype.draw_sun_moon = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.34;
        switch (num) {
            case 1:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.arc(x, y, r1 * pu.size, -0.34 * Math.PI, 0.73 * Math.PI, false);
                ctx.arc(x - 0.12 * pu.size, y - 0.08 * pu.size, r2 * pu.size, 0.67 * Math.PI, -0.28 * Math.PI, true);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_hex.prototype.draw_pencils = function (ctx, num, x, y) {
        var r = 0.2;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.lineJoin = "bevel";
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x + 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x + 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 3:
                ctx.beginPath();
                ctx.moveTo(x - 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                ctx.beginPath();
                ctx.moveTo(x - 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_hex.prototype.draw_sudokuetc = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                var r = 0.14;
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.fillStyle = "#ccc";
                this.draw_polygon(ctx, x - r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                ctx.fillStyle = "#666";
                this.draw_polygon(ctx, x - r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
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
                ctx.moveTo(x, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y);
                ctx.lineTo(x, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                var r = 0.2 * pu.size;
                var w = 1.8 * pu.size;
                var h = 0.8 * pu.size;
                x = x - 0.40 * pu.size;
                y = y - 0.40 * pu.size;
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
                var r = 0.2 * pu.size;
                var w = 0.8 * pu.size;
                var h = 1.8 * pu.size;
                x = x - 0.40 * pu.size;
                y = y - 0.40 * pu.size;
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
    };
    Puzzle_hex.prototype.draw_polyomino = function (ctx, num, x, y) {
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(200,200,200,1)";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1.2;
        ctx.lineCap = "butt";
        var r = 0.25;
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_polygon(ctx, x + (i % 3 - 1) * r * pu.size, y + ((i / 3 | 0) - 1) * r * pu.size, r * 0.5 * Math.sqrt(2), 4, 45);
            }
        }
    };
    Puzzle_hex.prototype.rotate_theta = function (th) {
        th = (th + this.theta);
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = th / 180 * Math.PI;
        return th;
    };
    Puzzle_hex.prototype.rotate_theta_cage = function (th) {
        th = (th - this.theta);
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = th / 180 * Math.PI;
        return th;
    };
    return Puzzle_hex;
}(_Puzzle__WEBPACK_IMPORTED_MODULE_0__.Puzzle));



/***/ }),

/***/ "./src/model/PuzzleIso.ts":
/*!********************************!*\
  !*** ./src/model/PuzzleIso.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_iso": () => (/* binding */ Puzzle_iso)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PuzzleTruncatedSquare */ "./src/model/PuzzleTruncatedSquare.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_iso = /** @class */ (function (_super) {
    __extends(Puzzle_iso, _super);
    function Puzzle_iso(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, nx, ny, size, "iso") || this;
        _this.gridtype = "iso";
        _this.nx = nx;
        _this.ny = ny;
        _this.nx0 = _this.nx;
        _this.ny0 = _this.ny;
        _this.margin = -1; //for arrow of number pointing outside of the grid
        _this.width0 = _this.nx + 6;
        _this.height0 = _this.ny + 6;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.space = [];
        _this.size = size;
        _this.onoff_symbolmode_list = {
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
        _this.reset();
        _this.erase_buttons();
        document.getElementById("sub_lineE2_lb").style.display = "inline-block";
        return _this;
    }
    Puzzle_iso.prototype.create_point = function () {
        var k = 0, k0;
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
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(offsetx * this.size, (offsety - 0.5) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                offsetx = -j * 0.5 * Math.sqrt(3);
                offsety = i - j * 0.5;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx - Math.sqrt(3) / 4) * this.size, (offsety + 0.25) * this.size, type, adjacent, surround, use, neighbor, [], 2);
                k++;
                offsetx = j * 0.5 * Math.sqrt(3);
                offsety = i - j * 0.5;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + Math.sqrt(3) / 4) * this.size, (offsety + 0.25) * this.size, type, adjacent, surround, use, neighbor, [], 3);
                k++;
                type = 1;
                r1 = 0.5 * Math.sqrt(3);
                r2 = 0.5;
                for (var m = 0; m < 2; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x +
                        r1 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 0)), point[k0].y +
                        r1 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 0)), type, adjacent, surround, use, neighbor);
                    point[k0].surround = point[k0].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0]);
                    if (m === 0) {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
                    }
                    else {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
                    }
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x +
                        r2 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 90)), point[k0].y +
                        r2 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 90)), type, adjacent, surround, use, neighbor);
                    point[k0].surround = point[k0].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0]);
                    if (m === 0) {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
                    }
                    else {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
                    }
                    k++;
                }
                for (var m = 0; m < 2; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x +
                        r1 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 60)), point[k0 + 1].y +
                        r1 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 1]);
                    if (m === 0) {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
                    }
                    else {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
                    }
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x +
                        r2 *
                            this.size *
                            Math.cos(((2 * Math.PI) / 360) * (m * 180 + 150)), point[k0 + 1].y +
                        r2 *
                            this.size *
                            Math.sin(((2 * Math.PI) / 360) * (m * 180 + 150)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 1]);
                    if (m === 0) {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
                    }
                    else {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
                    }
                    k++;
                }
                for (var m = 0; m < 2; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 2].x +
                        r1 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 - 60)), point[k0 + 2].y +
                        r1 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 - 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 2].surround = point[k0 + 2].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 2]);
                    if (m === 0) {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
                    }
                    else {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
                    }
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 2].x +
                        r2 * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 180 + 30)), point[k0 + 2].y +
                        r2 * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 180 + 30)), type, adjacent, surround, use, neighbor);
                    point[k0 + 2].surround = point[k0 + 2].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 2]);
                    if (m === 0) {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k + 2]);
                    }
                    else {
                        point[k].adjacent_dia = point[k].adjacent_dia.concat([k - 2]);
                    }
                    k++;
                }
                type = 2;
                r1 = 0.5;
                angle = [30, 150, 210, 330];
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x +
                        r1 * this.size * Math.cos(((2 * Math.PI) / 360) * angle[m]), point[k0].y +
                        r1 * this.size * Math.sin(((2 * Math.PI) / 360) * angle[m]), type, adjacent, surround, use, neighbor);
                    point[k0].neighbor = point[k0].neighbor.concat([k]);
                    if (m === 3) {
                        point[k - 15].neighbor = point[k - 15].neighbor.concat([k]);
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                    }
                    else {
                        point[k - 11].neighbor = point[k - 11].neighbor.concat([k]);
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                    }
                    k++;
                }
                angle = [30, 90, 210, 270];
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x +
                        r1 * this.size * Math.cos(((2 * Math.PI) / 360) * angle[m]), point[k0 + 1].y +
                        r1 * this.size * Math.sin(((2 * Math.PI) / 360) * angle[m]), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].neighbor = point[k0 + 1].neighbor.concat([k]);
                    if (m === 0) {
                        point[k - 9].neighbor = point[k - 9].neighbor.concat([k]);
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                    }
                    else {
                        point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                    }
                    k++;
                }
                angle = [-30, 90, 150, 270];
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 2].x +
                        r1 * this.size * Math.cos(((2 * Math.PI) / 360) * angle[m]), point[k0 + 2].y +
                        r1 * this.size * Math.sin(((2 * Math.PI) / 360) * angle[m]), type, adjacent, surround, use, neighbor);
                    point[k0 + 2].neighbor = point[k0 + 2].neighbor.concat([k]);
                    if (m === 3) {
                        point[k - 15].neighbor = point[k - 15].neighbor.concat([k]);
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                    }
                    else {
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
                if (Math.pow((point[i].x - point[j].x), 2) + Math.pow((point[i].y - point[j].y), 2) <
                    0.01) {
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
                                }
                                else {
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
                        if (point[i].adjacent_dia.indexOf(point[j].adjacent_dia[n]) === -1) {
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
    };
    Puzzle_iso.prototype.reset_frame = function () {
        this.create_point();
        this.space = [];
        this.centerlist = [];
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].use === 1 &&
                this.point[i].type === 0) {
                this.centerlist.push(i);
            }
        }
        this.search_center();
        this.width_c = this.width;
        this.height_c = this.height;
        this.center_n0 = this.center_n;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
        this.make_frameline();
        this.cursol = this.centerlist[0];
        this.cursolS = 4 * this.nx0 * this.ny0 + 4 + 4 * this.nx0;
    };
    Puzzle_iso.prototype.search_center = function () {
        var xmax = 0, xmin = 1e5;
        var ymax = 0, ymin = 1e5;
        for (var _i = 0, _a = this.centerlist; _i < _a.length; _i++) {
            var i = _a[_i];
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
        var min0, min = 10e6;
        var num = 0;
        for (var index in this.point) {
            var i_1 = parseInt(i_1);
            min0 = Math.pow((x - this.point[i_1].x), 2) + Math.pow((y - this.point[i_1].y), 2);
            if (min0 < min) {
                min = min0;
                num = i_1;
            }
        }
        this.center_n = Math.floor(num);
    };
    Puzzle_iso.prototype.type_set = function () {
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
                }
                else {
                    type = [0, 1, 2];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [5];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                    type = [6];
                }
                else {
                    if (document.getElementById("edge_button").textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else {
                    type = [1];
                }
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "polygon") {
                    type = [1];
                }
                else {
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
    };
    Puzzle_iso.prototype.recalculate_num = function (x, y, num) {
        var min0, min = 10e6;
        var num0 = 0;
        var r0 = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
        var r1 = Math.sqrt(2) - 1;
        if (this.point[num].type != 1) {
            return num;
        }
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].type === 1 &&
                this.point[i].use === 1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type2 === 0 && min0 > Math.pow((r0 * this.size), 2)) {
                        continue;
                    } //円形の内側に入っていなければ更新しない
                    if (this.point[i].type2 === 1 && min0 > Math.pow((r1 * this.size), 2)) {
                        continue;
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return parseInt(num);
    };
    Puzzle_iso.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] && this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3) {
                        if (min0 > Math.pow((0.3 * this.size), 2)) {
                            continue;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return Math.floor(num);
    };
    Puzzle_iso.prototype.rotate_left = function () {
        this.theta =
            (this.theta - 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, -30);
        this.redraw();
    };
    Puzzle_iso.prototype.rotate_right = function () {
        this.theta =
            (this.theta + 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, +30);
        this.redraw();
    };
    Puzzle_iso.prototype.direction_arrow8 = function (x, y, x0, y0) {
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
        }
        else if (angle > -120 && angle < -60) {
            a = 1;
        }
        else if (angle > -60 && angle < 0) {
            a = 2;
        }
        else if (angle > 0 && angle < 60) {
            a = 3;
        }
        else if (angle > 60 && angle < 120) {
            a = 4;
        }
        else if (angle > 120) {
            a = 5;
        }
        return a;
    };
    ////////////////draw/////////////////////
    Puzzle_iso.prototype.draw = function () {
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
    };
    Puzzle_iso.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_iso.prototype.draw_line = function (pu) {
        for (var i in this[pu].line) {
            if (this[pu].line[i] === 98) {
                var r = 0.2;
                var x = this.point[i].x;
                var y = this.point[i].y;
                set_line_style(this.ctx, 98);
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
                set_line_style(this.ctx, this[pu].line[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                var i3;
                //search neighbor
                for (var j = 0; j < 4; j++) {
                    if (this.point[i2].neighbor.indexOf(this.point[i1].neighbor[j]) != -1) {
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
                }
                else if (this[pu].line[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    if (this.point[i1].type === 2 || this.point[i1].type === 3) {
                        //for centerline
                        this.ctx.moveTo(this.point[i2].x, this.point[i2].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
                        this.ctx.stroke();
                        this.ctx.lineCap = "butt";
                    }
                    else if (this.point[i2].type === 2 || this.point[i2].type === 3) {
                        this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
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
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
                set_line_style(this.ctx, this[pu].lineE[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                if (this[pu].lineE[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                    this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_iso.prototype.draw_number = function (pu) {
        /*number*/
        for (var i in this[pu].number) {
            switch (this[pu].number[i][2]) {
                case "1": //normal
                    this.draw_numbercircle(pu, i, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    break;
                case "2": //arrow
                    var arrowlength = 0.7;
                    this.draw_numbercircle(pu, i, 0.42);
                    set_font_style(this.ctx, (0.65 * this.size).toString(10), this[pu].number[i][1]);
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
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, this.point[i].x + (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 300:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (-arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x + (arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 60:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, this.point[i].x - (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 240:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (-arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x - (arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 180:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size, this.point[i].x + (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 0:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size, this.point[i].x - (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 150:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x +
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size, this.point[i].x +
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 330:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x +
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size, this.point[i].x +
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 30:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x -
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size, this.point[i].x -
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 210:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x -
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size, this.point[i].x -
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 90:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 270:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        default:
                            set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                            this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                            break;
                    }
                    break;
                case "4": //tapa
                    this.draw_numbercircle(pu, i, 0.44);
                    if (this[pu].number[i][0].length === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 2) {
                        set_font_style(this.ctx, (0.48 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.16 * this.size, this.point[i].y - 0.15 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.18 * this.size, this.point[i].y + 0.19 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 3) {
                        set_font_style(this.ctx, (0.45 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.22 * this.size, this.point[i].y - 0.14 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.24 * this.size, this.point[i].y - 0.05 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.3 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 4) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.0 * this.size, this.point[i].y - 0.22 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x - 0.26 * this.size, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x + 0.26 * this.size, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(3, 4), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.3 * this.size, this.size * 0.8);
                    }
                    break;
                case "5": //small
                    this.draw_numbercircle(pu, i, 0.17);
                    set_font_style(this.ctx, (0.25 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.02 * this.size, this.size * 0.8);
                    break;
                case "6": //medium
                    this.draw_numbercircle(pu, i, 0.25);
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "7": //sudoku
                    this.draw_numbercircle(pu, i, 0.42);
                    var sum = 0, pos = 0;
                    for (var j = 0; j < 9; j++) {
                        if (this[pu].number[i][0][j] === 1) {
                            sum += 1;
                            pos = j;
                        }
                    }
                    if (sum === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text((pos + 1).toString(), this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    }
                    else {
                        set_font_style(this.ctx, (0.3 * this.size).toString(10), this[pu].number[i][1]);
                        for (var j = 0; j < 9; j++) {
                            if (this[pu].number[i][0][j] === 1) {
                                this.ctx.text((j + 1).toString(), this.point[i].x + ((j % 3) - 1) * 0.25 * this.size, this.point[i].y +
                                    ((((j / 3) | 0) - 1) * 0.25 + 0.01) * this.size);
                            }
                        }
                    }
                    break;
                case "8": //long
                    if (this[pu].number[i][1] === 5) {
                        set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                        set_circle_style(this.ctx, 7);
                        this.ctx.fillRect(this.point[i].x - 0.2 * this.size, this.point[i].y - 0.25 * this.size, this.ctx.measureText(this[pu].number[i][0]).width, 0.5 * this.size);
                    }
                    set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.textAlign = "left";
                    this.ctx.text(this[pu].number[i][0], this.point[i].x - 0.2 * this.size, this.point[i].y);
                    break;
            }
        }
        for (var i in this[pu].numberS) {
            if (this[pu].numberS[i][1] === 5) {
                set_circle_style(this.ctx, 7);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
            }
            else if (this[pu].numberS[i][1] === 6) {
                set_circle_style(this.ctx, 1);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
            }
            else if (this[pu].numberS[i][1] === 7) {
                set_circle_style(this.ctx, 2);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.15);
            }
            if (true) {
                set_font_style(this.ctx, (0.26 * this.size).toString(10), this[pu].numberS[i][1]);
                this.ctx.textAlign = "center";
                this.ctx.text(this[pu].numberS[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, 0.3 * this.size);
            }
        }
    };
    Puzzle_iso.prototype.draw_cross = function (ctx, num, x, y) {
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                var th = this.rotate_theta(i * 60 - 150);
                ctx.beginPath();
                ctx.moveTo(x + ctx.lineWidth * 0.3 * Math.cos(th), y + ctx.lineWidth * 0.3 * Math.sin(th));
                ctx.lineTo(x - 0.5 * pu.size * Math.cos(th), y - 0.5 * pu.size * Math.sin(th));
                ctx.stroke();
            }
        }
    };
    Puzzle_iso.prototype.draw_inequality = function (ctx, num, x, y) {
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
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 210);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 345);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.fill();
                ctx.stroke();
                break;
        }
    };
    Puzzle_iso.prototype.draw_arrowGP = function (ctx, num, x, y) {
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
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                r1 * pu.size,
                w1 * pu.size,
                r2 * pu.size,
                w2 * pu.size,
                r3 * pu.size,
                w3 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_iso.prototype.draw_arrowGP_C = function (ctx, num, x, y) {
        if (num > 0 && num <= 6) {
            var th = this.rotate_theta((num - 1) * 60 - 150);
            this.draw_circle(ctx, x, y, 0.35);
            this.draw_arrowGP(ctx, num, x + 0.5 * pu.size * Math.cos(th), y + 0.5 * pu.size * Math.sin(th));
        }
    };
    Puzzle_iso.prototype.draw_arrow = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 6) {
            th = this.rotate_theta((num - 1) * 60 - 150);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_iso.prototype.draw_arrowcross = function (ctx, num, x, y) {
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
                ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
            }
        }
    };
    Puzzle_iso.prototype.draw_arroweight = function (ctx, num, x, y) {
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
    };
    Puzzle_iso.prototype.rotate_theta = function (th) {
        th = th + this.theta;
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = (th / 180) * Math.PI;
        return th;
    };
    return Puzzle_iso;
}(_PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__.Puzzle_truncated_square));



/***/ }),

/***/ "./src/model/PuzzlePyramid.ts":
/*!************************************!*\
  !*** ./src/model/PuzzlePyramid.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_pyramid": () => (/* binding */ Puzzle_pyramid)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _Puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Puzzle */ "./src/model/Puzzle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_pyramid = /** @class */ (function (_super) {
    __extends(Puzzle_pyramid, _super);
    function Puzzle_pyramid(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, "pyramid") || this;
        _this.nx = nx;
        _this.ny = ny;
        _this.nx0 = _this.nx + 4;
        _this.ny0 = _this.ny + 4;
        _this.margin = -1; //for arrow of number pointing outside of the grid
        _this.top_n = Math.floor(_this.nx0 * 2.5);
        _this.width0 = _this.nx + 1;
        _this.height0 = _this.ny + 1;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.space = [parseInt(document.getElementById("nb_space1")["value"], 10)];
        _this.size = size;
        _this.onoff_symbolmode_list = {
            cross: 6,
            arrow_cross: 6,
            degital: 7,
            degital_f: 7,
            arrow_eight: 6,
            dice: 9,
            polyomino: 9,
        };
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_pyramid.prototype.erase_buttons = function () {
        for (var _i = 0, _a = this.group1; _i < _a.length; _i++) {
            var i = _a[_i];
            document.getElementById(i).style.display = "none";
        }
        for (var _b = 0, _c = this.group2; _b < _c.length; _b++) {
            var i = _c[_b];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _d = 0, _e = this.group3; _d < _e.length; _d++) {
            var i = _e[_d];
            document.getElementById(i).style.display = "none";
        }
        for (var _f = 0, _g = this.group4; _f < _g.length; _f++) {
            var i = _g[_f];
            document.getElementById(i).style.display = "none";
        }
        for (var _h = 0, _j = this.group5; _h < _j.length; _h++) {
            var i = _j[_h];
            document.getElementById(i).style.display = "inline-block";
        }
    };
    Puzzle_pyramid.prototype.create_point = function () {
        var k = 0;
        var nx = this.nx0;
        var ny = this.ny0;
        var adjacent, surround, type, use;
        var point = [];
        //center
        type = 0;
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [
                    k - nx - 1 + (j % 2),
                    k - nx + (j % 2),
                    k - 1,
                    k + 1,
                    k + nx - 1 + (j % 2),
                    k + nx + (j % 2),
                ];
                surround = [
                    k + nx * ny - 1,
                    k + 2 * nx * ny - nx - 1 + (j % 2),
                    k + nx * ny,
                    k + 2 * nx * ny,
                    k + nx * ny + nx - 1 + (j % 2),
                    k + 2 * nx * ny - 1,
                ];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((i + 0.5 + (j % 2) * 0.5) * this.size, (j + 0.5) * this.size, type, adjacent, surround, use);
                k++;
            }
        }
        //vertex
        type = 1;
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [
                    k + nx * ny - nx - 1 + (j % 2),
                    k + nx * ny - nx + (j % 2),
                    k + nx * ny,
                ];
                surround = [k + nx * ny - 2 * nx]; //for wall
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + 0.5 * this.size, point[i + j * nx].y - 0.5 * this.size, type, adjacent, surround, use);
                k++;
            }
        }
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [
                    k - nx * ny,
                    k - nx * ny + nx - 1 + (j % 2),
                    k - nx * ny + nx + (j % 2),
                ];
                surround = [k - nx * ny + 2 * nx]; //for wall
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + 0.5 * this.size, point[i + j * nx].y + 0.5 * this.size, type, adjacent, surround, use);
                k++;
            }
        }
        //centervertex
        type = 2;
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [];
                surround = [k - 1, k + 1]; //for wall
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + 0.5 * this.size, point[i + j * nx].y, type, adjacent, surround, use);
                k++;
            }
        }
        type = 3;
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [];
                surround = [];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x - 0.25 * this.size, point[i + j * nx].y + 0.5 * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [];
                surround = [];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + 0.25 * this.size, point[i + j * nx].y + 0.5 * this.size, type, adjacent, surround, use);
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
                }
                else {
                    use = 1;
                }
                surround = [];
                adjacent = [];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x - r * this.size, point[i + j * nx].y - r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + r * this.size, point[i + j * nx].y - r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x - r * this.size, point[i + j * nx].y + r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + r * this.size, point[i + j * nx].y + r * this.size, type, adjacent, surround, use);
                k++;
            }
        }
        /*
            //  compass
            var r = 0.3;
            type = 5;
            for (var j=0; j<ny; j++){
              for (var i=0; i<nx; i++){
                if(i===0||i===nx-1||j===0||j===ny-1){use=-1;}else{use=1;}
                adjacent = [];
                surround = [];
                point[k] = new Point(point[i+j*nx].x-0*this.size,point[i+j*nx].y-r*this.size,type,adjacent,surround,use);
                k++;
                point[k] = new Point(point[i+j*nx].x+r*this.size,point[i+j*nx].y-0*this.size,type,adjacent,surround,use);
                k++;
                point[k] = new Point(point[i+j*nx].x-r*this.size,point[i+j*nx].y+0*this.size,type,adjacent,surround,use);
                k++;
                point[k] = new Point(point[i+j*nx].x+0*this.size,point[i+j*nx].y+r*this.size,type,adjacent,surround,use);
                k++;
              }
            }
            */
        this.point = point;
    };
    Puzzle_pyramid.prototype.listappend = function (centerlist) {
        var n = centerlist.length;
        for (var j = 0; j < n; j++) {
            if (centerlist.indexOf(this.point[centerlist[j]].adjacent[4]) === -1) {
                centerlist.push(this.point[centerlist[j]].adjacent[4]);
            }
            if (centerlist.indexOf(this.point[centerlist[j]].adjacent[5]) === -1) {
                centerlist.push(this.point[centerlist[j]].adjacent[5]);
            }
        }
        return centerlist;
    };
    Puzzle_pyramid.prototype.reset_frame = function () {
        this.create_point();
        this.space = [parseInt(document.getElementById("nb_space1")["value"], 10)];
        this.centerlist = [this.top_n + this.nx0 * 2 * this.space[0]];
        for (var j = 0; j < this.nx - 1 - 2 * this.space[0]; j++) {
            this.centerlist = this.listappend(this.centerlist);
        }
        this.search_center();
        this.center_n0 = this.center_n;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
        this.make_frameline();
        this.cursol = this.centerlist[0];
        this.cursolS = 6 * this.nx0 * this.ny0 + 10 * this.nx0 - 4;
    };
    Puzzle_pyramid.prototype.type_set = function () {
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
                }
                else {
                    type = [0, 1, 2, 3];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [4];
                }
                else {
                    if (document.getElementById("edge_button").textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2, 3];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3];
                }
                else {
                    type = [1];
                }
                break;
            case "wall":
                if (this.drawing) {
                    type = [this.point[this.last].type];
                }
                else {
                    type = [1, 2];
                }
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "polygon") {
                    type = [1];
                }
                else {
                    type = [0];
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
    };
    Puzzle_pyramid.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3) {
                        if (min0 > Math.pow((0.7 * this.size), 2)) {
                            break;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return Math.floor(num);
    };
    Puzzle_pyramid.prototype.rotate_left = function () {
        this.theta =
            (this.theta - 90 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, -90);
        this.redraw();
    };
    Puzzle_pyramid.prototype.rotate_right = function () {
        this.theta =
            (this.theta + 90 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, +90);
        this.redraw();
    };
    Puzzle_pyramid.prototype.cursolcheck = function () {
        if (this.mode[this.mode.qa].edit_mode === "number" &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
            if (this.cursolS > 8 * this.nx0 * this.ny0) {
                this.cursolS -= 4 * this.nx0 * this.ny0;
            }
        }
        else if (this.mode[this.mode.qa].edit_mode === "number" &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
            if (this.cursolS < 8 * this.nx0 * this.ny0) {
                this.cursolS += 4 * this.nx0 * this.ny0;
            }
        }
    };
    Puzzle_pyramid.prototype.key_arrow = function (key_code) {
        var a, b, c;
        if (this.theta === 0) {
            b = [0, 1, 2, 3];
        }
        else if (this.theta === 90) {
            b = [3, 0, 1, 2];
        }
        else if (this.theta === 180) {
            b = [2, 3, 0, 1];
        }
        else if (this.theta === 270) {
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
        if (this.mode[this.mode.qa].edit_mode === "number" ||
            this.mode[this.mode.qa].edit_mode === "symbol") {
            if (this.mode[this.mode.qa].edit_mode === "number" &&
                this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
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
            }
            else {
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
    };
    Puzzle_pyramid.prototype.direction_arrow8 = function (x, y, x0, y0) {
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
        if (angle < -150 || angle > 150) {
            a = 2;
        }
        else if (angle > -150 && angle < -90) {
            a = 0;
        }
        else if (angle > -90 && angle < -30) {
            a = 1;
        }
        else if (angle > -30 && angle < 30) {
            a = 3;
        }
        else if (angle > 30 && angle < 90) {
            a = 5;
        }
        else if (angle > 90 && angle < 150) {
            a = 4;
        }
        return a;
    };
    ////////////////override/////////////////////
    Puzzle_pyramid.prototype.re_wallmove = function (num) {
        if (this.drawing && this.last != num) {
            var line_style = this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][1];
            var array;
            if (this.point[num].surround.indexOf(parseInt(this.last)) != -1) {
                //隣接していたら //adjacent -> surround
                array = "wall";
                var key = Math.min(num, this.last).toString() +
                    "," +
                    Math.max(num, this.last).toString();
                this.re_line(array, key, line_style);
            }
            this.redraw();
        }
    };
    ////////////////draw/////////////////////
    Puzzle_pyramid.prototype.draw = function () {
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
        //this.draw_cage("pu_q");
        //this.draw_cage("pu_a");
        this.draw_number("pu_q");
        this.draw_number("pu_a");
        this.draw_cursol();
        this.draw_freecircle();
        //this.draw_point();
    };
    Puzzle_pyramid.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_pyramid.prototype.draw_lattice = function () {
        if (this.mode.grid[1] === "1") {
            this.ctx.fillStyle = "#000";
            var verticelist = [];
            for (var i = 0; i < this.centerlist.length; i++) {
                for (var _i = 0, _a = [0, 2, 3, 5]; _i < _a.length; _i++) {
                    var j = _a[_i];
                    verticelist.push(this.point[this.centerlist[i]].surround[j]);
                }
                if (this.centerlist.indexOf(this.point[this.centerlist[i]].surround[0]) !=
                    -1 ||
                    this.centerlist.indexOf(this.point[this.centerlist[i]].surround[1]) !=
                        -1) {
                    verticelist.push(this.point[this.centerlist[i]].surround[1]);
                }
                if (this.centerlist.indexOf(this.point[this.centerlist[i]].surround[4]) !=
                    -1 ||
                    this.centerlist.indexOf(this.point[this.centerlist[i]].surround[5]) !=
                        -1) {
                    verticelist.push(this.point[this.centerlist[i]].surround[4]);
                }
            }
        }
        verticelist = Array.from(new Set(verticelist));
        for (var i = 0; i < verticelist.length; i++) {
            this.ctx.beginPath();
            this.ctx.arc(this.point[verticelist[i]].x, this.point[verticelist[i]].y, 2.1, 0, 2 * Math.PI, true);
            this.ctx.fill();
        }
    };
    Puzzle_pyramid.prototype.draw_surface = function (pu) {
        for (var i in this[pu].surface) {
            set_surface_style(this.ctx, this[pu].surface[i]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.point[this.point[i].surround[0]].x, this.point[this.point[i].surround[0]].y);
            for (var j = 1; j < this.point[i].surround.length; j++) {
                this.ctx.lineTo(this.point[this.point[i].surround[j]].x, this.point[this.point[i].surround[j]].y);
            }
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }
    };
    Puzzle_pyramid.prototype.draw_polygon = function (ctx, x, y, r, n, th) {
        ctx.LineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        for (var i = 0; i < n - 1; i++) {
            th += 360 / n;
            ctx.lineTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_pyramid.prototype.draw_squareframe = function (pu) {
        for (var i = 0; i < this[pu].squareframe.length; i++) {
            if (this[pu].squareframe[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.8;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].squareframe[i][0]].x, this.point[this[pu].squareframe[i][0]].y);
                for (var j = 1; j < this[pu].squareframe[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].squareframe[i][j]].x, this.point[this[pu].squareframe[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_pyramid.prototype.draw_thermo = function (pu) {
        for (var i = 0; i < this[pu].thermo.length; i++) {
            if (this[pu].thermo[i][0]) {
                this.ctx.strokeStyle = "rgba(0,0,0,0)";
                this.ctx.fillStyle = "#ccc";
                this.draw_circle(this.ctx, this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y, 0.4);
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.4;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y);
                for (var j = 1; j < this[pu].thermo[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].thermo[i][j]].x, this.point[this[pu].thermo[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_pyramid.prototype.draw_arrowsp = function (pu) {
        for (var i = 0; i < this[pu].arrows.length; i++) {
            if (this[pu].arrows[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y);
                for (var j = 1; j < this[pu].arrows[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].arrows[i][j]].x, this.point[this[pu].arrows[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].arrows[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].arrows[i][j - 1]].x, this.point[this[pu].arrows[i][j - 1]].y, this.point[this[pu].arrows[i][j]].x, this.point[this[pu].arrows[i][j]].y, [-0.00001, 0, -0.3 * this.size, 0.3 * this.size]);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.lineJoin = "miter";
                this.ctx.strokeStyle = "rgba(192,192,192,1)";
                this.ctx.fillStyle = "rgba(255,255,255,1)";
                this.ctx.lineWidth = 3;
                this.draw_circle(this.ctx, this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y, 0.4);
            }
        }
    };
    Puzzle_pyramid.prototype.draw_direction = function (pu) {
        for (var i = 0; i < this[pu].direction.length; i++) {
            if (this[pu].direction[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#999";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].direction[i][0]].x, this.point[this[pu].direction[i][0]].y);
                for (var j = 1; j < this[pu].direction[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].direction[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].direction[i][j - 1]].x, this.point[this[pu].direction[i][j - 1]].y, this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y, [-0.00001, 0, -0.25 * this.size, 0.25 * this.size]);
                this.ctx.stroke();
                this.ctx.lineJoin = "miter";
            }
        }
    };
    Puzzle_pyramid.prototype.draw_line = function (pu) {
        for (var i in this[pu].line) {
            if (this[pu].line[i] === 98) {
                var r = 0.2;
                var x = this.point[i].x;
                var y = this.point[i].y;
                set_line_style(this.ctx, 98);
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
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
                }
                else if (this[pu].line[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
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
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
                set_line_style(this.ctx, this[pu].lineE[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                if (this[pu].lineE[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                    this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_pyramid.prototype.draw_freeline = function (pu) {
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
                var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                this.ctx.stroke();
                this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
            }
            else {
                this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
            }
            this.ctx.stroke();
        }
    };
    Puzzle_pyramid.prototype.draw_wall = function (pu) {
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
    };
    Puzzle_pyramid.prototype.draw_symbol = function (pu, layer) {
        /*symbol_layer*/
        for (var i in this[pu].symbol) {
            if (this[pu].symbol[i][2] === layer) {
                this.draw_symbol_select(this.ctx, this.point[i].x, this.point[i].y, this[pu].symbol[i][0], this[pu].symbol[i][1]);
            }
        }
    };
    Puzzle_pyramid.prototype.draw_number = function (pu) {
        /*number*/
        for (var i in this[pu].number) {
            switch (this[pu].number[i][2]) {
                case "1": //normal
                    this.draw_numbercircle(pu, i, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    break;
                case "2": //arrow
                    var arrowlength = 0.7;
                    this.draw_numbercircle(pu, i, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                    var direction = {
                        _0: 120,
                        _1: 60,
                        _2: 180,
                        _3: 0,
                        _4: 240,
                        _5: 300,
                    };
                    var direction = (direction[this[pu].number[i][0].slice(-2)] - this.theta + 360) %
                        360;
                    if (this.reflect[0] === -1) {
                        direction = (180 - direction + 360) % 360;
                    }
                    if (this.reflect[1] === -1) {
                        direction = (360 - direction + 360) % 360;
                    }
                    switch (direction) {
                        case 120:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, this.point[i].x + (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 300:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (-arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x + (arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 60:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, this.point[i].x - (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 240:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.1 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (-arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x - (arrowlength * 0.25 + 0.2) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 180:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size, this.point[i].x + (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 0:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.3) * this.size, this.point[i].x - (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 150:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x +
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size, this.point[i].x +
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 330:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x +
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size, this.point[i].x +
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 30:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x -
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.2) * this.size, this.point[i].x -
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.1) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 210:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x -
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.15) * this.size, this.point[i].x -
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.15) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.15) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 90:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 270:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.25) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        default:
                            set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                            this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                            break;
                    }
                    break;
                case "4": //tapa
                    this.draw_numbercircle(pu, i, 0.44);
                    if (this[pu].number[i][0].length === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 2) {
                        set_font_style(this.ctx, (0.48 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.16 * this.size, this.point[i].y - 0.15 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.18 * this.size, this.point[i].y + 0.19 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 3) {
                        set_font_style(this.ctx, (0.45 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.22 * this.size, this.point[i].y - 0.14 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.24 * this.size, this.point[i].y - 0.05 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.3 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 4) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.0 * this.size, this.point[i].y - 0.22 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x - 0.26 * this.size, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x + 0.26 * this.size, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(3, 4), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.3 * this.size, this.size * 0.8);
                    }
                    break;
                case "5": //small
                    this.draw_numbercircle(pu, i, 0.17);
                    set_font_style(this.ctx, (0.25 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.02 * this.size, this.size * 0.8);
                    break;
                case "6": //medium
                    this.draw_numbercircle(pu, i, 0.25);
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "10": //big
                    this.draw_numbercircle(pu, i, 0.36);
                    set_font_style(this.ctx, (0.6 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "7": //sudoku
                    this.draw_numbercircle(pu, i, 0.42);
                    var sum = 0, pos = 0;
                    for (var j = 0; j < 9; j++) {
                        if (this[pu].number[i][0][j] === 1) {
                            sum += 1;
                            pos = j;
                        }
                    }
                    if (sum === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text((pos + 1).toString(), this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    }
                    else {
                        set_font_style(this.ctx, (0.3 * this.size).toString(10), this[pu].number[i][1]);
                        for (var j = 0; j < 9; j++) {
                            if (this[pu].number[i][0][j] === 1) {
                                this.ctx.text((j + 1).toString(), this.point[i].x + ((j % 3) - 1) * 0.25 * this.size, this.point[i].y +
                                    ((((j / 3) | 0) - 1) * 0.25 + 0.01) * this.size);
                            }
                        }
                    }
                    break;
                case "8": //long
                    if (this[pu].number[i][1] === 5) {
                        set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                        set_circle_style(this.ctx, 7);
                        this.ctx.fillRect(this.point[i].x - 0.2 * this.size, this.point[i].y - 0.25 * this.size, this.ctx.measureText(this[pu].number[i][0]).width, 0.5 * this.size);
                    }
                    set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.textAlign = "left";
                    this.ctx.text(this[pu].number[i][0], this.point[i].x - 0.2 * this.size, this.point[i].y);
                    break;
            }
        }
        for (var i in this[pu].numberS) {
            if (this[pu].numberS[i][1] === 5) {
                set_circle_style(this.ctx, 7);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
            }
            else if (this[pu].numberS[i][1] === 6) {
                set_circle_style(this.ctx, 1);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
            }
            else if (this[pu].numberS[i][1] === 7) {
                set_circle_style(this.ctx, 2);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
            }
            if (true) {
                set_font_style(this.ctx, (0.32 * this.size).toString(10), this[pu].numberS[i][1]);
                this.ctx.textAlign = "center";
                this.ctx.text(this[pu].numberS[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, 0.3 * this.size);
            }
        }
    };
    Puzzle_pyramid.prototype.draw_numbercircle = function (pu, i, size) {
        if (this[pu].number[i][1] === 5) {
            set_circle_style(this.ctx, 7);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
        else if (this[pu].number[i][1] === 6) {
            set_circle_style(this.ctx, 1);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
        else if (this[pu].number[i][1] === 7) {
            set_circle_style(this.ctx, 2);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
    };
    Puzzle_pyramid.prototype.draw_symbol_select = function (ctx, x, y, num, sym) {
        switch (sym) {
            /* figure */
            case "circle_L":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.43);
                    this.draw_circle(ctx, x, y, 0.32);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.43);
                }
                break;
            case "circle_M":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.35);
                    this.draw_circle(ctx, x, y, 0.25);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.35);
                }
                break;
            case "circle_S":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.22);
                    this.draw_circle(ctx, x, y, 0.14);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.22);
                }
                break;
            case "circle_SS":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.11);
                    this.draw_circle(ctx, x, y, 0.06);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.11);
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
                this.draw_polygon(ctx, x, y, 0.11 * Math.sqrt(2), 4, 45);
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
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
                break;
            case "math_G":
                set_font_style(ctx, 0.8 * pu.size.toString(10), 2);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
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
        }
    };
    Puzzle_pyramid.prototype.draw_circle = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_pyramid.prototype.draw_x = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_pyramid.prototype.draw_ast = function (ctx, x, y, r) {
        var th;
        th = 45 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
        th = 135 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_pyramid.prototype.draw_slash = function (ctx, x, y, r) {
        var th;
        th = 45 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_pyramid.prototype.draw_ox = function (ctx, num, x, y) {
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
                ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * pu.size, y + r * Math.sin(45 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * pu.size, y + r * Math.sin(225 * (Math.PI / 180)) * pu.size);
                ctx.stroke();
                break;
            case 6:
                r = 0.5;
                ctx.beginPath();
                ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * pu.size, y + r * Math.sin(135 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * pu.size, y + r * Math.sin(315 * (Math.PI / 180)) * pu.size);
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
    };
    Puzzle_pyramid.prototype.draw_tri = function (ctx, num, x, y) {
        var r = 0.5;
        switch (num) {
            case 1:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 4:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 3:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 5:
                set_circle_style(ctx, 2);
                this.draw_polygon(ctx, x, y, r * Math.sqrt(2), 4, 45);
                break;
            case 6:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 7:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 8:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 9:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 0:
                set_circle_style(ctx, 3);
                this.draw_polygon(ctx, x, y, r * Math.sqrt(2), 4, 45);
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_cross = function (ctx, num, x, y) {
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                var th = this.rotate_theta(i * 60 - 180);
                ctx.beginPath();
                ctx.moveTo(x + ctx.lineWidth * 0.3 * Math.cos(th), y + ctx.lineWidth * 0.3 * Math.sin(th));
                ctx.lineTo(x - 0.5 * pu.size * Math.cos(th), y - 0.5 * pu.size * Math.sin(th));
                ctx.stroke();
            }
        }
    };
    Puzzle_pyramid.prototype.draw_linesym = function (ctx, num, x, y) {
        var r = 0.32;
        ctx.setLineDash([]);
        ctx.lineCap = "round";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 3;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 3:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 4:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 5:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 6:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_inequality = function (ctx, num, x, y) {
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
                th = this.rotate_theta((num - 1) * 60 + 45);
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 315);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.fill();
                ctx.stroke();
                break;
            case 7:
                ctx.beginPath();
                th = this.rotate_theta(90 + 45);
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta(90 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta(90 + 315);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.fill();
                ctx.stroke();
                break;
            case 8:
                ctx.beginPath();
                th = this.rotate_theta(270 + 45);
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta(270 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta(270 + 315);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.fill();
                ctx.stroke();
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_math = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                ctx.font = 0.8 * pu.size + "px sans-serif";
                ctx.text("\u221E", x, y);
                break;
            case 2:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＋", x, y);
                break;
            case 3:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("－", x, y);
                break;
            case 4:
                ctx.text("×", x, y);
                break;
            case 5:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＊", x, y);
                break;
            case 6:
                ctx.text("÷", x, y);
                break;
            case 7:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
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
    };
    Puzzle_pyramid.prototype.draw_degital = function (ctx, num, x, y) {
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
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[1] === 1) {
                w1 = -(z1 + z2);
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[2] === 1) {
                w1 = z1 + z2;
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[3] === 1) {
                w1 = z1;
                w2 = 0;
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[4] === 1) {
                w1 = -(z1 + z2);
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[5] === 1) {
                w1 = z1 + z2;
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[6] === 1) {
                w1 = z1;
                w2 = 2 * (z1 + z2);
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
        }
    };
    Puzzle_pyramid.prototype.draw_degital_f = function (ctx, num, x, y) {
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
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 0;
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        //contents
        this.draw_degital(ctx, num, x, y);
    };
    Puzzle_pyramid.prototype.draw_dice = function (ctx, num, x, y) {
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_circle(ctx, x + ((i % 3) - 1) * 0.25 * pu.size, y + (((i / 3) | 0) - 1) * 0.25 * pu.size, 0.09);
            }
        }
    };
    Puzzle_pyramid.prototype.draw_pills = function (ctx, num, x, y) {
        var r = 0.15;
        ctx.fillStyle = "#999";
        switch (num) {
            case 1:
                this.draw_circle(ctx, x, y, r);
                break;
            case 2:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                break;
            case 3:
                this.draw_circle(ctx, x - 0 * pu.size, y - 0.23 * pu.size, r);
                this.draw_circle(ctx, x + 0.23 * pu.size, y + 0.2 * pu.size, r);
                this.draw_circle(ctx, x - 0.23 * pu.size, y + 0.2 * pu.size, r);
                break;
            case 4:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x - 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y - 0.22 * pu.size, r);
                break;
            case 5:
                this.draw_circle(ctx, x, y, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y - 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y - 0.24 * pu.size, r);
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_arrowB = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.2;
        var w2 = 0.4;
        var ri = -0.4;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_pyramid.prototype.draw_arrowN = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.03;
        var w2 = 0.13;
        var ri = -0.25;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_pyramid.prototype.draw_arrowS = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.32; //tip
        var w1 = 0.02;
        var w2 = 0.12;
        var ri = -0.2;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_pyramid.prototype.draw_arrowGP = function (ctx, num, x, y) {
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
            if (num <= 6) {
                th = this.rotate_theta((num - 1) * 60 - 180);
            }
            else {
                th = this.rotate_theta((num - 7) * 180 - 90);
            }
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                r1 * pu.size,
                w1 * pu.size,
                r2 * pu.size,
                w2 * pu.size,
                r3 * pu.size,
                w3 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_pyramid.prototype.draw_arrowGP_C = function (ctx, num, x, y) {
        if (num > 0 && num <= 8) {
            var th;
            if (num <= 6) {
                th = this.rotate_theta((num - 1) * 60 - 180);
            }
            else {
                th = this.rotate_theta((num - 7) * 180 - 90);
            }
            this.draw_circle(ctx, x, y, 0.4);
            this.draw_arrowGP(ctx, num, x + 0.6 * pu.size * Math.cos(th), y + 0.6 * pu.size * Math.sin(th));
        }
    };
    Puzzle_pyramid.prototype.draw_arrowShort = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.3; //tip
        var w1 = 0.15;
        var w2 = 0.31;
        var ri = -0.33;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_pyramid.prototype.draw_arrowtri = function (ctx, num, x, y) {
        var len1 = 0.25; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0;
        var w2 = 0.35;
        var ri = 0;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_pyramid.prototype.draw_arrow = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 6) {
            th = this.rotate_theta((num - 1) * 60 - 180);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
        else if (num >= 7 && num <= 8) {
            th = this.rotate_theta((num - 7) * 180 - 90);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_pyramid.prototype.draw_arrowcross = function (ctx, num, x, y) {
        var w1 = 0.025;
        var w2 = 0.12;
        var len1 = 0.5 * w1; //nemoto
        var len2 = 0.45; //tip
        var ri = -0.18;
        var th;
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                th = this.rotate_theta(i * 60 - 180);
                ctx.beginPath();
                ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
            }
        }
    };
    Puzzle_pyramid.prototype.draw_arroweight = function (ctx, num, x, y) {
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
    };
    Puzzle_pyramid.prototype.draw_kakuro = function (ctx, num, x, y) {
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
    };
    Puzzle_pyramid.prototype.draw_compass = function (ctx, num, x, y) {
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
    };
    Puzzle_pyramid.prototype.draw_tents = function (ctx, num, x, y) {
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
                ctx.moveTo(x - r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0) * pu.size);
                //ctx.arc(x,y-0.1*pu.size,0.3*pu.size,0,2*Math.PI,false);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0.2) * pu.size);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
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
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y + 0.37 * pu.size, x + 0.3 * pu.size, y - 0.2 * pu.size);
                ctx.stroke();
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y - 0.37 * pu.size, x + 0.3 * pu.size, y + 0.2 * pu.size);
                ctx.stroke();
                break;
            case 4:
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                ctx.text("～", x, y - 0.11 * pu.size);
                ctx.text("～", x, y + 0.09 * pu.size);
                ctx.text("～", x, y + 0.29 * pu.size);
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_star = function (ctx, num, x, y) {
        var r1 = 0.38;
        var r2 = 0.382 * r1;
        switch (num) {
            case 1:
                ctx.fillStyle = "#fff";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 2:
                ctx.fillStyle = "#000"; //"#009826";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 3:
                ctx.fillStyle = "#999";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
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
                ctx.strokeStyle = "#999";
                ctx.lineWidth = 1;
                this.draw_x(ctx, x, y, r);
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_star0 = function (ctx, x, y, r1, r2, n) {
        var th1 = 90;
        var th2 = th1 + 180 / n;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
        ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        for (var i = 0; i < n; i++) {
            th1 += 360 / n;
            th2 += 360 / n;
            ctx.lineTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
            ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        }
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_pyramid.prototype.draw_battleship = function (ctx, num, x, y) {
        var r = 0.4;
        var th;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.stroke();
                break;
            case 2:
                th = (this.rotate_theta(45) * 180) / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 3:
                th = (this.rotate_theta(105) * 180) / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 4:
                th = (this.rotate_theta(165) * 180) / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 5:
                this.draw_battleship_tip(ctx, x, y, 0);
                break;
            case 6:
                this.draw_battleship_tip(ctx, x, y, 60);
                break;
            case 7:
                this.draw_battleship_tip(ctx, x, y, 120);
                break;
            case 8:
                this.draw_battleship_tip(ctx, x, y, 180);
                break;
            case 9:
                this.draw_battleship_tip(ctx, x, y, 240);
                break;
            case 0:
                this.draw_battleship_tip(ctx, x, y, 300);
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_battleship_tip = function (ctx, x, y, th) {
        var r = 0.36;
        th = this.rotate_theta(th);
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, Math.PI * 0.5 + th, Math.PI * 1.5 + th, false);
        ctx.moveTo(x + r * pu.size * Math.sin(th), y - r * pu.size * Math.cos(th));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + (45 / 180) * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + (45 / 180) * Math.PI));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + (135 / 180) * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + (135 / 180) * Math.PI));
        ctx.lineTo(x + r * pu.size * Math.sin(th + Math.PI), y - r * pu.size * Math.cos(th + Math.PI));
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_pyramid.prototype.draw_angleloop = function (ctx, num, x, y) {
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
    };
    Puzzle_pyramid.prototype.draw_firefly = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.09;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                var th = this.rotate_theta((num - 1) * 60 - 180);
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 2;
                this.draw_circle(ctx, x - r1 * pu.size * Math.cos(th), y - r1 * pu.size * Math.sin(th), r2);
                break;
            case 7:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_sun_moon = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.34;
        switch (num) {
            case 1:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.arc(x, y, r1 * pu.size, -0.34 * Math.PI, 0.73 * Math.PI, false);
                ctx.arc(x - 0.12 * pu.size, y - 0.08 * pu.size, r2 * pu.size, 0.67 * Math.PI, -0.28 * Math.PI, true);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_pencils = function (ctx, num, x, y) {
        var r = 0.2;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.lineJoin = "bevel";
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x + 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x + 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 3:
                ctx.beginPath();
                ctx.moveTo(x - 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                ctx.beginPath();
                ctx.moveTo(x - 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_pyramid.prototype.draw_sudokuetc = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                var r = 0.14;
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.fillStyle = "#ccc";
                this.draw_polygon(ctx, x - r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                ctx.fillStyle = "#666";
                this.draw_polygon(ctx, x - r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
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
                ctx.moveTo(x, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y);
                ctx.lineTo(x, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                var r = 0.2 * pu.size;
                var w = 1.8 * pu.size;
                var h = 0.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
                var r = 0.2 * pu.size;
                var w = 0.8 * pu.size;
                var h = 1.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
    };
    Puzzle_pyramid.prototype.draw_polyomino = function (ctx, num, x, y) {
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(200,200,200,1)";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1.2;
        ctx.lineCap = "butt";
        var r = 0.25;
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_polygon(ctx, x + ((i % 3) - 1) * r * pu.size, y + (((i / 3) | 0) - 1) * r * pu.size, r * 0.5 * Math.sqrt(2), 4, 45);
            }
        }
    };
    Puzzle_pyramid.prototype.rotate_theta = function (th) {
        th = th + this.theta;
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = (th / 180) * Math.PI;
        return th;
    };
    return Puzzle_pyramid;
}(_Puzzle__WEBPACK_IMPORTED_MODULE_1__.Puzzle));



/***/ }),

/***/ "./src/model/PuzzleSnubSquare.ts":
/*!***************************************!*\
  !*** ./src/model/PuzzleSnubSquare.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_snub_square": () => (/* binding */ Puzzle_snub_square)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PuzzleTruncatedSquare */ "./src/model/PuzzleTruncatedSquare.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_snub_square = /** @class */ (function (_super) {
    __extends(Puzzle_snub_square, _super);
    function Puzzle_snub_square(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, "snub_square") || this;
        _this.gridtype = 'snub_square';
        _this.nx = nx;
        _this.ny = ny;
        _this.nx0 = _this.nx + 2;
        _this.ny0 = _this.ny + 2;
        _this.margin = -1; //for arrow of number pointing outside of the grid
        _this.width0 = _this.nx + 6;
        _this.height0 = _this.ny + 6;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.space = [];
        _this.size = size;
        _this.onoff_symbolmode_list = {
            "cross": 4,
            "arrow_cross": 4,
            "arrow_fourtip": 4,
            "degital": 7,
            "degital_f": 7,
            "arrow_eight": 8,
            "arrow_fouredge_B": 8,
            "arrow_fouredge_G": 8,
            "arrow_fouredge_E": 8,
            "dice": 9,
            "polyomino": 9
        };
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_snub_square.prototype.create_point = function () {
        var k = 0, k0;
        var nx = this.nx0;
        var ny = this.ny0;
        var r;
        var adjacent, surround, type, use, neighbor;
        var point = [];
        adjacent = [];
        surround = [];
        neighbor = [];
        //center
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                var offsetx = i * (1 + 0.5 * Math.sqrt(3)) + j * 0.5 + 0.5;
                var offsety = j * (1 + 0.5 * Math.sqrt(3)) - i * 0.5 + 0.5;
                k0 = k;
                type = 0;
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(offsetx * this.size, (offsety) * this.size, type, adjacent, surround, use, neighbor, [], 0);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.5 + Math.sqrt(3) / 6) * this.size, (offsety) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx) * this.size, (offsety + 0.5 + Math.sqrt(3) / 6) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.5) * this.size, (offsety + 0.5 + Math.sqrt(3) / 3) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.75 + Math.sqrt(3) / 4) * this.size, (offsety + 0.25 + Math.sqrt(3) / 4) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((offsetx + 0.5 + Math.sqrt(3) / 3) * this.size, (offsety - 0.5) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                type = 1;
                r = 0.5 * Math.sqrt(2);
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 90 + 45)), point[k0].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 90 + 45)), type, adjacent, surround, use, neighbor);
                    point[k0].surround = point[k0].surround.concat([k]); //pushやspliceだと全てのpointが更新されてしまう
                    point[k].surround = point[k].surround.concat([k0]);
                    k++;
                }
                r = Math.sqrt(3) / 3;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 0)), point[k0 + 1].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 0)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 1]);
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 2].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 90)), point[k0 + 2].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 90)), type, adjacent, surround, use, neighbor);
                    point[k0 + 2].surround = point[k0 + 2].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 2]);
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 3].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 30)), point[k0 + 3].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 30)), type, adjacent, surround, use, neighbor);
                    point[k0 + 3].surround = point[k0 + 3].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 3]);
                    k++;
                }
                r = 0.5 * Math.sqrt(2);
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 4].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 90 + 15)), point[k0 + 4].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 90 + 15)), type, adjacent, surround, use, neighbor);
                    point[k0 + 4].surround = point[k0 + 4].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 4]);
                    k++;
                }
                r = Math.sqrt(3) / 3;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 5].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 60)), point[k0 + 5].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 5].surround = point[k0 + 5].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 5]);
                    k++;
                }
                type = 2;
                r = 0.5;
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 90 + 0)), point[k0].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 90 + 0)), type, adjacent, surround, use, neighbor);
                    point[k0].neighbor = point[k0].neighbor.concat([k]);
                    if (m === 0) {
                        point[k - 17].neighbor = point[k - 17].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    else {
                        point[k - 11].neighbor = point[k - 11].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    k++;
                }
                r = Math.sqrt(3) / 6;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 60)), point[k0 + 1].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].neighbor = point[k0 + 1].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                    }
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 2].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 30)), point[k0 + 2].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 30)), type, adjacent, surround, use, neighbor);
                    point[k0 + 2].neighbor = point[k0 + 2].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                    }
                    k++;
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 3].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 90)), point[k0 + 3].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 90)), type, adjacent, surround, use, neighbor);
                    point[k0 + 3].neighbor = point[k0 + 3].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                    }
                    k++;
                }
                r = 0.5;
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 4].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 90 + 60)), point[k0 + 4].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 90 + 60)), type, adjacent, surround, use, neighbor);
                    point[k0 + 4].neighbor = point[k0 + 4].neighbor.concat([k]);
                    if (m === 3) {
                        point[k - 17].neighbor = point[k - 17].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    else {
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                    }
                    k++;
                }
                r = Math.sqrt(3) / 6;
                for (var m = 0; m < 3; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 5].x + r * this.size * Math.cos(2 * Math.PI / 360 * (m * 120 + 0)), point[k0 + 5].y + r * this.size * Math.sin(2 * Math.PI / 360 * (m * 120 + 0)), type, adjacent, surround, use, neighbor);
                    point[k0 + 5].neighbor = point[k0 + 5].neighbor.concat([k]);
                    if (m === 2) {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 22].neighbor = point[k - 22].neighbor.concat([k]);
                    }
                    else {
                        point[k - 20].neighbor = point[k - 20].neighbor.concat([k]);
                        point[k - 19].neighbor = point[k - 19].neighbor.concat([k]);
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
            ;
            for (var j = i + 1; j < point.length; j++) {
                if (!point[j]) {
                    continue;
                }
                ;
                if (Math.pow((point[i].x - point[j].x), 2) + Math.pow((point[i].y - point[j].y), 2) < 0.01) {
                    //surround,neighbor置換
                    for (var k = 0; k < point.length; k++) {
                        if (!point[k]) {
                            continue;
                        }
                        ;
                        for (var n = 0; n < point[k].surround.length; n++) {
                            if (point[k].surround[n] === j) {
                                point[k].surround.splice(n, 1, i);
                            }
                        }
                        for (var n = 0; n < point[k].neighbor.length; n++) {
                            if (point[k].neighbor[n] === j) {
                                if (point[k].neighbor.indexOf(i) === -1) {
                                    point[k].neighbor.splice(n, 1, i); //無ければ置き換え
                                }
                                else {
                                    point[k].neighbor.splice(n, 1); //あったら削除
                                }
                            }
                        }
                    }
                    for (var n = 0; n < point[j].surround.length; n++) { //削除された点のsurroundを移し替え
                        if (point[i].surround.indexOf(point[j].surround[n]) === -1) {
                            point[i].surround = point[i].surround.concat([point[j].surround[n]]);
                        }
                    }
                    for (var n = 0; n < point[j].neighbor.length; n++) { //削除された点のneighborを移し替え
                        if (point[i].neighbor.indexOf(point[j].neighbor[n]) === -1) {
                            point[i].neighbor = point[i].neighbor.concat([point[j].neighbor[n]]);
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
            ;
            for (var j = i + 1; j < point.length; j++) {
                if (!point[j] || point[j].type != 0) {
                    continue;
                }
                ;
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
            ;
            for (var j = i + 1; j < point.length; j++) {
                if (!point[j] || point[j].type != 1) {
                    continue;
                }
                ;
                for (var k = 0; k < point[i].neighbor.length; k++) {
                    if (point[j].neighbor.indexOf(point[i].neighbor[k]) != -1) {
                        point[i].adjacent = point[i].adjacent.concat([j]);
                        point[j].adjacent = point[j].adjacent.concat([i]);
                    }
                }
            }
        }
        //use更新
        for (var i = 0; i < point.length; i++) {
            if (!point[i] || point[i].type != 0 || point[i].use === -1) {
                continue;
            }
            ;
            for (var k = 0; k < point[i].neighbor.length; k++) {
                point[point[i].neighbor[k]].use = 1;
            }
            for (var k = 0; k < point[i].surround.length; k++) {
                point[point[i].surround[k]].use = 1;
            }
        }
        this.point = point;
    };
    Puzzle_snub_square.prototype.reset_frame = function () {
        this.create_point();
        this.space = [];
        this.centerlist = [];
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] && this.point[i].use === 1 && this.point[i].type === 0) {
                this.centerlist.push(i);
            }
        }
        this.search_center();
        this.width_c = this.width;
        this.height_c = this.height;
        this.center_n0 = this.center_n;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move((this.canvasx * 0.5 - this.point[this.center_n].x + 0.5), (this.canvasy * 0.5 - this.point[this.center_n].y + 0.5), this.theta);
        this.make_frameline();
        this.cursol = this.centerlist[0];
        this.cursolS = 4 * (this.nx0) * (this.ny0) + 4 + 4 * (this.nx0);
    };
    Puzzle_snub_square.prototype.search_center = function () {
        var xmax = 0, xmin = 1e5;
        var ymax = 0, ymin = 1e5;
        for (var _i = 0, _a = this.centerlist; _i < _a.length; _i++) {
            var i = _a[_i];
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
        var min0, min = 10e6;
        var num = 0;
        for (var i in this.point) {
            min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
            if (min0 < min) {
                min = min0;
                num = i;
            }
        }
        this.center_n = parseInt(num);
    };
    Puzzle_snub_square.prototype.type_set = function () {
        var type;
        switch (this.mode[this.mode.qa].edit_mode) {
            case "surface":
            case "board":
                type = [0];
                break;
            case "symbol":
            case "move":
                if (document.getElementById('edge_button').textContent === "OFF") {
                    type = [0];
                }
                else {
                    type = [0, 1, 2];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [5];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                    type = [6];
                }
                else {
                    if (document.getElementById('edge_button').textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else {
                    type = [1];
                }
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "polygon") {
                    type = [1];
                }
                else {
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
    };
    Puzzle_snub_square.prototype.recalculate_num = function (x, y, num) {
        var min0, min = 10e6;
        var num0 = 0;
        var r0 = 0.5 * Math.sqrt(2) / Math.cos(2 * Math.PI / 360 * 22.5);
        var r1 = Math.sqrt(2) - 1;
        if (this.point[num].type != 1) {
            return num;
        }
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] && this.point[i].type === 1 && this.point[i].use === 1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type2 === 0 && min0 > Math.pow((r0 * this.size), 2)) {
                        continue;
                    } //円形の内側に入っていなければ更新しない
                    if (this.point[i].type2 === 1 && min0 > Math.pow((r1 * this.size), 2)) {
                        continue;
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return parseInt(num);
    };
    Puzzle_snub_square.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] && this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3) {
                        if (min0 > Math.pow((0.3 * this.size), 2)) {
                            continue;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return parseInt(num);
    };
    Puzzle_snub_square.prototype.rotate_left = function () {
        this.theta = (this.theta - 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, -30);
        this.redraw();
    };
    Puzzle_snub_square.prototype.rotate_right = function () {
        this.theta = (this.theta + 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, +30);
        this.redraw();
    };
    ////////////////draw/////////////////////
    Puzzle_snub_square.prototype.draw = function () {
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
    };
    Puzzle_snub_square.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_snub_square.prototype.rotate_theta = function (th) {
        th = (th + this.theta);
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = th / 180 * Math.PI;
        return th;
    };
    return Puzzle_snub_square;
}(_PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__.Puzzle_truncated_square));



/***/ }),

/***/ "./src/model/PuzzleSquare.ts":
/*!***********************************!*\
  !*** ./src/model/PuzzleSquare.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_square": () => (/* binding */ Puzzle_square)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _Puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Puzzle */ "./src/model/Puzzle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_square = /** @class */ (function (_super) {
    __extends(Puzzle_square, _super);
    function Puzzle_square(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, "square") || this;
        _this.nx = nx;
        _this.ny = ny;
        _this.nx0 = _this.nx + 4;
        _this.ny0 = _this.ny + 4;
        _this.margin = -1; //for arrow of number pointing outside of the grid
        _this.width0 = _this.nx + 1;
        _this.height0 = _this.ny + 1;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.space = [
            parseInt(document.getElementById("nb_space1")['value'], 10),
            parseInt(document.getElementById("nb_space2")['value'], 10),
            parseInt(document.getElementById("nb_space3")['value'], 10),
            parseInt(document.getElementById("nb_space4")['value'], 10),
        ];
        _this.size = size;
        _this.onoff_symbolmode_list = {
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
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_square.prototype.erase_buttons = function () {
        for (var _i = 0, _a = this.group1; _i < _a.length; _i++) {
            var i = _a[_i];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _b = 0, _c = this.group2; _b < _c.length; _b++) {
            var i = _c[_b];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _d = 0, _e = this.group3; _d < _e.length; _d++) {
            var i = _e[_d];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _f = 0, _g = this.group4; _f < _g.length; _f++) {
            var i = _g[_f];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _h = 0, _j = this.group5; _h < _j.length; _h++) {
            var i = _j[_h];
            document.getElementById(i).style.display = "inline-block";
        }
    };
    Puzzle_square.prototype.create_point = function () {
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
                }
                else {
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
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((i + 0.5) * this.size, (j + 0.5) * this.size, type, adjacent, surround, use, neighbor, adjacent_dia);
                k++;
            }
        }
        //vertex
        type = 1;
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k - nx, k - 1, k + 1, k + nx];
                adjacent_dia = [k - nx - 1, k - nx + 1, k + nx - 1, k + nx + 1];
                surround = [];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + 0.5 * this.size, point[i + j * nx].y + 0.5 * this.size, type, adjacent, surround, use, [], adjacent_dia);
                k++;
            }
        }
        //centervertex
        type = 2;
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + nx, k - nx];
                surround = [];
                neighbor = [k - 2 * nx * ny, k - 2 * nx * ny + nx];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x, point[i + j * nx].y + 0.5 * this.size, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        type = 3;
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + 1, k - 1];
                surround = [];
                neighbor = [k - 3 * nx * ny, k - 3 * nx * ny + 1];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + 0.5 * this.size, point[i + j * nx].y, type, adjacent, surround, use, neighbor);
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
                }
                else {
                    use = 1;
                }
                surround = [];
                adjacent = [k - 4 * nx + 2, k - 3, k + 1, k + 2];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x - r * this.size, point[i + j * nx].y - r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 4 * nx + 2, k - 1, k + 3, k + 2];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + r * this.size, point[i + j * nx].y - r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 2, k - 3, k + 1, k + 4 * nx - 2];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x - r * this.size, point[i + j * nx].y + r * this.size, type, adjacent, surround, use);
                k++;
                adjacent = [k - 2, k - 1, k + 3, k + 4 * nx - 2];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + r * this.size, point[i + j * nx].y + r * this.size, type, adjacent, surround, use);
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
                }
                else {
                    use = 1;
                }
                adjacent = [];
                surround = [];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x - 0 * this.size, point[i + j * nx].y - r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + r * this.size, point[i + j * nx].y - 0 * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x - r * this.size, point[i + j * nx].y + 0 * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * nx].x + 0 * this.size, point[i + j * nx].y + r * this.size, type, adjacent, surround, use);
                k++;
            }
        }
        this.point = point;
    };
    Puzzle_square.prototype.reset_frame = function () {
        this.create_point();
        this.space = [
            parseInt(document.getElementById("nb_space1")['value'], 10),
            parseInt(document.getElementById("nb_space2")['value'], 10),
            parseInt(document.getElementById("nb_space3")['value'], 10),
            parseInt(document.getElementById("nb_space4")['value'], 10),
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
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
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
    };
    Puzzle_square.prototype.type_set = function () {
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
                }
                else {
                    type = [0, 1, 2, 3];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [4];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                    type = [5];
                }
                else {
                    if (document.getElementById("edge_button").textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2, 3];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2, 3];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else {
                    type = [1];
                }
                break;
            case "wall":
                if (this.drawing) {
                    type = [this.point[this.last].type];
                }
                else {
                    type = [2, 3];
                }
                break;
            case "cage":
                type = [4];
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "polygon") {
                    type = [1];
                }
                else {
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
    };
    Puzzle_square.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3) {
                        if (min0 > Math.pow((0.3 * this.size), 2)) {
                            break;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return Math.floor(num);
    };
    Puzzle_square.prototype.rotate_left = function () {
        this.theta =
            (this.theta - 90 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, -90);
        this.redraw();
    };
    Puzzle_square.prototype.rotate_right = function () {
        this.theta =
            (this.theta + 90 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, +90);
        this.redraw();
    };
    Puzzle_square.prototype.cursolcheck = function () {
        if (this.mode[this.mode.qa].edit_mode === "number" &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
            if (this.cursolS > 8 * this.nx0 * this.ny0) {
                this.cursolS -= 4 * this.nx0 * this.ny0;
            }
        }
        else if (this.mode[this.mode.qa].edit_mode === "number" &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
            if (this.cursolS < 8 * this.nx0 * this.ny0) {
                this.cursolS += 4 * this.nx0 * this.ny0;
            }
        }
    };
    Puzzle_square.prototype.key_arrow = function (key_code) {
        var a, b, c;
        if (this.theta === 0) {
            b = [0, 1, 2, 3];
        }
        else if (this.theta === 90) {
            b = [3, 0, 1, 2];
        }
        else if (this.theta === 180) {
            b = [2, 3, 0, 1];
        }
        else if (this.theta === 270) {
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
        if (this.mode[this.mode.qa].edit_mode === "number" ||
            this.mode[this.mode.qa].edit_mode === "symbol") {
            if (this.mode[this.mode.qa].edit_mode === "number" &&
                this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
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
            }
            else if (this.mode[this.mode.qa].edit_mode === "number" &&
                this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
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
            }
            else {
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
    };
    Puzzle_square.prototype.direction_arrow8 = function (x, y, x0, y0) {
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
        }
        else if (angle > -157.5 && angle < -112.5) {
            a = 4;
        }
        else if (angle > -112.5 && angle < -67.5) {
            a = 0;
        }
        else if (angle > -67.5 && angle < -22.5) {
            a = 5;
        }
        else if (angle > -22.5 && angle < 22.5) {
            a = 2;
        }
        else if (angle > 22.5 && angle < 67.5) {
            a = 7;
        }
        else if (angle > 67.5 && angle < 112.5) {
            a = 3;
        }
        else if (angle > 112.5 && angle < 157.5) {
            a = 6;
        }
        return a;
    };
    Puzzle_square.prototype.direction_arrow4 = function (x, y, x0, y0) {
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
        }
        else if (angle >= -90 && angle < 0) {
            a = 4;
        }
        else if (angle >= 0 && angle < 90) {
            a = 3;
        }
        else if (angle >= 90 && angle <= 180) {
            a = 2;
        }
        return a;
    };
    ////////////////draw/////////////////////
    Puzzle_square.prototype.draw = function () {
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
    };
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
    Puzzle_square.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_square.prototype.draw_lattice = function () {
        if (this.mode.grid[1] === "1") {
            this.ctx.fillStyle = "#000";
            var verticelist = [];
            for (var i = 0; i < this.centerlist.length; i++) {
                for (var j = 0; j < this.point[this.centerlist[i]].surround.length; j++) {
                    verticelist.push(this.point[this.centerlist[i]].surround[j]);
                }
            }
            verticelist = Array.from(new Set(verticelist));
            for (var i = 0; i < verticelist.length; i++) {
                this.ctx.beginPath();
                this.ctx.arc(this.point[verticelist[i]].x, this.point[verticelist[i]].y, 2.1, 0, 2 * Math.PI, true);
                this.ctx.fill();
            }
        }
    };
    Puzzle_square.prototype.draw_surface = function (pu, num) {
        if (num === void 0) { num = ""; }
        if (num) {
            var keys = [], key0 = num + "";
            if (this[pu].surface[key0]) {
                keys.push(key0);
            }
            for (var i = 0; i < this.point[num].adjacent.length; i++) {
                key0 = this.point[num].adjacent[i] + "";
                if (keys.indexOf(key0) === -1 && this[pu].surface[key0]) {
                    keys.push(key0);
                }
            }
        }
        else {
            var keys = Object.keys(this[pu].surface);
        }
        for (var k = 0; k < keys.length; k++) {
            var i = keys[k];
            set_surface_style(this.ctx, this[pu].surface[i]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.point[this.point[i].surround[0]].x, this.point[this.point[i].surround[0]].y);
            for (var j = 1; j < this.point[i].surround.length; j++) {
                this.ctx.lineTo(this.point[this.point[i].surround[j]].x, this.point[this.point[i].surround[j]].y);
            }
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_polygon = function (ctx, x, y, r, n, th) {
        ctx.LineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        for (var i = 0; i < n - 1; i++) {
            th += 360 / n;
            ctx.lineTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_squareframe = function (pu) {
        for (var i = 0; i < this[pu].squareframe.length; i++) {
            if (this[pu].squareframe[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.8;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].squareframe[i][0]].x, this.point[this[pu].squareframe[i][0]].y);
                for (var j = 1; j < this[pu].squareframe[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].squareframe[i][j]].x, this.point[this[pu].squareframe[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_square.prototype.draw_thermo = function (pu) {
        for (var i = 0; i < this[pu].thermo.length; i++) {
            if (this[pu].thermo[i][0]) {
                this.ctx.strokeStyle = "rgba(0,0,0,0)";
                this.ctx.fillStyle = "#ccc";
                this.draw_circle(this.ctx, this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y, 0.4);
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.4;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y);
                for (var j = 1; j < this[pu].thermo[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].thermo[i][j]].x, this.point[this[pu].thermo[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_square.prototype.draw_arrowsp = function (pu) {
        for (var i = 0; i < this[pu].arrows.length; i++) {
            if (this[pu].arrows[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y);
                for (var j = 1; j < this[pu].arrows[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].arrows[i][j]].x, this.point[this[pu].arrows[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].arrows[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].arrows[i][j - 1]].x, this.point[this[pu].arrows[i][j - 1]].y, this.point[this[pu].arrows[i][j]].x +
                    (this.point[this[pu].arrows[i][j]].x -
                        this.point[this[pu].arrows[i][j - 1]].x) *
                        0.2, this.point[this[pu].arrows[i][j]].y +
                    (this.point[this[pu].arrows[i][j]].y -
                        this.point[this[pu].arrows[i][j - 1]].y) *
                        0.2, [-0.00001, 0, -0.3 * this.size, 0.3 * this.size]);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.lineJoin = "miter";
                this.ctx.strokeStyle = "rgba(192,192,192,1)";
                this.ctx.fillStyle = "rgba(255,255,255,1)";
                this.ctx.lineWidth = 3;
                this.draw_circle(this.ctx, this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y, 0.4);
            }
        }
    };
    Puzzle_square.prototype.draw_direction = function (pu) {
        for (var i = 0; i < this[pu].direction.length; i++) {
            if (this[pu].direction[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#999";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].direction[i][0]].x, this.point[this[pu].direction[i][0]].y);
                for (var j = 1; j < this[pu].direction[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].direction[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].direction[i][j - 1]].x, this.point[this[pu].direction[i][j - 1]].y, this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y, [-0.00001, 0, -0.25 * this.size, 0.25 * this.size]);
                this.ctx.stroke();
                this.ctx.lineJoin = "miter";
            }
        }
    };
    Puzzle_square.prototype.draw_line = function (pu) {
        for (var i in this[pu].line) {
            if (this[pu].line[i] === 98) {
                var r = 0.2;
                var x = this.point[i].x;
                var y = this.point[i].y;
                set_line_style(this.ctx, 98);
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
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
                }
                else if (this[pu].line[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    if (this.point[i1].type === 2 || this.point[i1].type === 3) {
                        //for centerline
                        this.ctx.moveTo(this.point[i2].x, this.point[i2].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
                        this.ctx.stroke();
                        this.ctx.lineCap = "butt";
                    }
                    else if (this.point[i2].type === 2 || this.point[i2].type === 3) {
                        this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
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
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
                set_line_style(this.ctx, this[pu].lineE[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                if (this[pu].lineE[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                    this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_square.prototype.draw_freeline = function (pu) {
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
                var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                this.ctx.stroke();
                this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
            }
            else {
                this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
            }
            this.ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_wall = function (pu) {
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
    };
    Puzzle_square.prototype.draw_cage = function (pu) {
        var r = 0.16; //space between grid
        var a = [0, 1, 2, 3], c;
        if (this.theta === 90) {
            a = [2, 0, 3, 1];
        }
        else if (this.theta === 180) {
            a = [3, 2, 1, 0];
        }
        else if (this.theta === 270) {
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
            var i1 = parseInt(i.split(",")[0]);
            var i2 = parseInt(i.split(",")[1]);
            var x1, y1, x2, y2;
            if (i1 % 4 === a[0]) {
                x1 = this.point[i1].x - r * this.size;
                y1 = this.point[i1].y - r * this.size;
            }
            else if (i1 % 4 === a[1]) {
                x1 = this.point[i1].x + r * this.size;
                y1 = this.point[i1].y - r * this.size;
            }
            else if (i1 % 4 === a[2]) {
                x1 = this.point[i1].x - r * this.size;
                y1 = this.point[i1].y + r * this.size;
            }
            else if (i1 % 4 === a[3]) {
                x1 = this.point[i1].x + r * this.size;
                y1 = this.point[i1].y + r * this.size;
            }
            if (i2 % 4 === a[0]) {
                x2 = this.point[i2].x - r * this.size;
                y2 = this.point[i2].y - r * this.size;
            }
            else if (i2 % 4 === a[1]) {
                x2 = this.point[i2].x + r * this.size;
                y2 = this.point[i2].y - r * this.size;
            }
            else if (i2 % 4 === a[2]) {
                x2 = this.point[i2].x - r * this.size;
                y2 = this.point[i2].y + r * this.size;
            }
            else if (i2 % 4 === a[3]) {
                x2 = this.point[i2].x + r * this.size;
                y2 = this.point[i2].y + r * this.size;
            }
            if (i1 % 4 === 3 || i2 % 4 === 0) {
                set_line_style(this.ctx, this[pu].cage[i] + 100);
            }
            else {
                set_line_style(this.ctx, this[pu].cage[i]);
            }
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_symbol = function (pu, layer) {
        /*symbol_layer*/
        var p_x, p_y;
        for (var i in this[pu].symbol) {
            if (i.slice(-1) === "E") {
                //辺モードでの重ね書き
                p_x = this.point[i.slice(0, -1)].x;
                p_y = this.point[i.slice(0, -1)].y;
            }
            else {
                p_x = this.point[i].x;
                p_y = this.point[i].y;
            }
            if (this[pu].symbol[i][2] === layer) {
                this.draw_symbol_select(this.ctx, p_x, p_y, this[pu].symbol[i][0], this[pu].symbol[i][1]);
            }
        }
    };
    Puzzle_square.prototype.draw_number = function (pu) {
        /*number*/
        var p_x, p_y;
        for (var i in this[pu].number) {
            if (i.slice(-1) === "E") {
                //辺モードでの重ね書き
                p_x = this.point[i.slice(0, -1)].x;
                p_y = this.point[i.slice(0, -1)].y;
            }
            else {
                p_x = this.point[i].x;
                p_y = this.point[i].y;
            }
            switch (this[pu].number[i][2]) {
                case "1": //normal
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.06 * this.size, this.size * 0.8);
                    break;
                case "2": //arrow
                    var arrowlength = 0.7;
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
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
                    var direction = (direction[this[pu].number[i][0].slice(-2)] - this.theta + 360) %
                        360;
                    if (this.reflect[0] === -1) {
                        direction = (180 - direction + 360) % 360;
                    }
                    if (this.reflect[1] === -1) {
                        direction = (360 - direction + 360) % 360;
                    }
                    switch (direction) {
                        case 180:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.0 * this.size, p_y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.5 + 0.0) * this.size, p_y + (arrowlength * 0.0 - 0.3) * this.size, p_x + (-arrowlength * 0.5 + 0.0) * this.size, p_y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 0:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.0 * this.size, p_y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x - (arrowlength * 0.5 + 0.0) * this.size, p_y + (arrowlength * 0.0 - 0.3) * this.size, p_x - (-arrowlength * 0.5 + 0.0) * this.size, p_y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 90:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.1 * this.size, p_y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.0 + 0.3) * this.size, p_y + (arrowlength * 0.5 - 0.0) * this.size, p_x + (-arrowlength * 0.0 + 0.3) * this.size, p_y + (-arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 270:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.1 * this.size, p_y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.0 + 0.3) * this.size, p_y + (-arrowlength * 0.5 - 0.0) * this.size, p_x + (-arrowlength * 0.0 + 0.3) * this.size, p_y + (arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 45:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (-arrowlength * 0.35 - 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, p_x + (arrowlength * 0.35 - 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 225:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.35 - 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, p_x + (-arrowlength * 0.35 - 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 135:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.35 + 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, p_x + (-arrowlength * 0.35 + 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 315:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (-arrowlength * 0.35 + 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, p_x + (arrowlength * 0.35 + 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        default:
                            set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                            this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.06 * this.size, this.size * 0.8);
                            break;
                    }
                    break;
                case "4": //tapa
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.44);
                    if (this[pu].number[i][0].length === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.06 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 2) {
                        set_font_style(this.ctx, (0.48 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), p_x - 0.16 * this.size, p_y - 0.15 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), p_x + 0.18 * this.size, p_y + 0.19 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 3) {
                        set_font_style(this.ctx, (0.45 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), p_x - 0.22 * this.size, p_y - 0.14 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), p_x + 0.24 * this.size, p_y - 0.05 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), p_x - 0.0 * this.size, p_y + 0.3 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 4) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), p_x - 0.0 * this.size, p_y - 0.22 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), p_x - 0.26 * this.size, p_y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), p_x + 0.26 * this.size, p_y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(3, 4), p_x - 0.0 * this.size, p_y + 0.3 * this.size, this.size * 0.8);
                    }
                    break;
                case "5": //small
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.17);
                    set_font_style(this.ctx, (0.25 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.02 * this.size, this.size * 0.8);
                    break;
                case "6": //medium
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.25);
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "10": //big
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.36);
                    set_font_style(this.ctx, (0.6 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "7": //sudoku
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
                    set_font_style(this.ctx, (0.3 * this.size).toString(10), this[pu].number[i][1]);
                    for (var j = 0; j < 9; j++) {
                        if (this[pu].number[i][0][j] === 1) {
                            this.ctx.text((j + 1).toString(), p_x + ((j % 3) - 1) * 0.28 * this.size, p_y + ((((j / 3) | 0) - 1) * 0.28 + 0.02) * this.size);
                        }
                    }
                    break;
                case "8": //long
                    if (this[pu].number[i][1] === 5) {
                        set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                        set_circle_style(this.ctx, 7);
                        this.ctx.fillRect(p_x - 0.2 * this.size, p_y - 0.25 * this.size, this.ctx.measureText(this[pu].number[i][0]).width, 0.5 * this.size);
                    }
                    set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.textAlign = "left";
                    this.ctx.text(this[pu].number[i][0], p_x - 0.2 * this.size, p_y);
                    break;
            }
        }
        for (var i in this[pu].numberS) {
            if (this[pu].numberS[i][1] === 5) {
                set_circle_style(this.ctx, 7);
                this.draw_polygon(this.ctx, this.point[i].x, this.point[i].y, 0.27, 4, 45);
            }
            else if (this[pu].numberS[i][1] === 6) {
                set_circle_style(this.ctx, 1);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
            }
            else if (this[pu].numberS[i][1] === 7) {
                set_circle_style(this.ctx, 2);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
            }
            if (true) {
                //(this[pu].numberS[i][0].length <= 2 ){
                set_font_style(this.ctx, (0.32 * this.size).toString(10), this[pu].numberS[i][1]);
                this.ctx.textAlign = "center";
                this.ctx.text(this[pu].numberS[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, this.size * 0.48);
                //}else{
                //  set_font_style(this.ctx,0.28*this.size.toString(10),this[pu].numberS[i][1]);
                //  this.ctx.textAlign = "left";
                //  this.ctx.text(this[pu].numberS[i][0],this.point[i].x-0.15*this.size,this.point[i].y+0.03*this.size,this.size*0.8);
            }
        }
    };
    Puzzle_square.prototype.draw_numbercircle = function (pu, i, p_x, p_y, size) {
        if (this[pu].number[i][1] === 5) {
            set_circle_style(this.ctx, 7);
            this.draw_circle(this.ctx, p_x, p_y, size);
        }
        else if (this[pu].number[i][1] === 6) {
            set_circle_style(this.ctx, 1);
            this.draw_circle(this.ctx, p_x, p_y, size);
        }
        else if (this[pu].number[i][1] === 7) {
            set_circle_style(this.ctx, 2);
            this.draw_circle(this.ctx, p_x, p_y, size);
        }
    };
    Puzzle_square.prototype.draw_symbol_select = function (ctx, x, y, num, sym) {
        switch (sym) {
            /* figure */
            case "circle_L":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.43);
                    this.draw_circle(ctx, x, y, 0.32);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.43);
                }
                break;
            case "circle_M":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.35);
                    this.draw_circle(ctx, x, y, 0.25);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.35);
                }
                break;
            case "circle_S":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.22);
                    this.draw_circle(ctx, x, y, 0.14);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.22);
                }
                break;
            case "circle_SS":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.13);
                    this.draw_circle(ctx, x, y, 0.07);
                }
                else {
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
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
                break;
            case "math_G":
                set_font_style(ctx, 0.8 * pu.size.toString(10), 2);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
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
    };
    Puzzle_square.prototype.draw_circle = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_x = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_ast = function (ctx, x, y, r) {
        var th;
        th = 45 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
        th = 135 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_slash = function (ctx, x, y, r) {
        var th;
        th = 45 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_ox = function (ctx, num, x, y) {
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
                ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * pu.size, y + r * Math.sin(45 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * pu.size, y + r * Math.sin(225 * (Math.PI / 180)) * pu.size);
                ctx.stroke();
                break;
            case 6:
                r = 0.5;
                ctx.beginPath();
                ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * pu.size, y + r * Math.sin(135 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * pu.size, y + r * Math.sin(315 * (Math.PI / 180)) * pu.size);
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
    };
    Puzzle_square.prototype.draw_tri = function (ctx, num, x, y) {
        var r = 0.5, th;
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
                set_circle_style(ctx, 2);
                th = this.rotate_theta(-90 * (num - 1));
                ctx.beginPath();
                ctx.moveTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th - Math.PI * 0.75), y + Math.sqrt(2) * r * pu.size * Math.sin(th - Math.PI * 0.75));
                ctx.lineTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th - Math.PI * 0.25), y + Math.sqrt(2) * r * pu.size * Math.sin(th - Math.PI * 0.25));
                ctx.lineTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th + Math.PI * 0.75), y + Math.sqrt(2) * r * pu.size * Math.sin(th + Math.PI * 0.75));
                ctx.lineTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th - Math.PI * 0.75), y + Math.sqrt(2) * r * pu.size * Math.sin(th - Math.PI * 0.75));
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
                ctx.moveTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th - Math.PI * 0.75), y + Math.sqrt(2) * r * pu.size * Math.sin(th - Math.PI * 0.75));
                ctx.lineTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th - Math.PI * 0.25), y + Math.sqrt(2) * r * pu.size * Math.sin(th - Math.PI * 0.25));
                ctx.lineTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th + Math.PI * 0.75), y + Math.sqrt(2) * r * pu.size * Math.sin(th + Math.PI * 0.75));
                ctx.lineTo(x + Math.sqrt(2) * r * pu.size * Math.cos(th - Math.PI * 0.75), y + Math.sqrt(2) * r * pu.size * Math.sin(th - Math.PI * 0.75));
                ctx.fill();
                break;
            case 0:
                set_circle_style(ctx, 3);
                ctx.fillStyle = "#999";
                this.draw_polygon(ctx, x, y, r * Math.sqrt(2), 4, 45);
                break;
        }
    };
    Puzzle_square.prototype.draw_cross = function (ctx, num, x, y) {
        for (var i = 0; i < 4; i++) {
            if (num[i] === 1) {
                var th = this.rotate_theta(i * 90 - 180);
                ctx.beginPath();
                ctx.moveTo(x + ctx.lineWidth * 0.3 * Math.cos(th), y + ctx.lineWidth * 0.3 * Math.sin(th));
                ctx.lineTo(x - 0.5 * pu.size * Math.cos(th), y - 0.5 * pu.size * Math.sin(th));
                ctx.stroke();
            }
        }
    };
    Puzzle_square.prototype.draw_linesym = function (ctx, num, x, y) {
        var r = 0.32;
        ctx.setLineDash([]);
        ctx.lineCap = "round";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 3;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 3:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 4:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 5:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 6:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
        }
    };
    Puzzle_square.prototype.draw_inequality = function (ctx, num, x, y) {
        var th;
        var len = 0.14;
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
                ctx.beginPath();
                th = this.rotate_theta((num - 1) * 90 + 45);
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 315);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
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
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 280);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.stroke();
                break;
        }
    };
    Puzzle_square.prototype.draw_math = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                ctx.font = 0.8 * pu.size + "px sans-serif";
                ctx.text("\u221E", x, y);
                break;
            case 2:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＋", x, y);
                break;
            case 3:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("－", x, y);
                break;
            case 4:
                ctx.text("×", x, y);
                break;
            case 5:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＊", x, y);
                break;
            case 6:
                ctx.text("÷", x, y);
                break;
            case 7:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
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
    };
    Puzzle_square.prototype.draw_degital = function (ctx, num, x, y) {
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
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[1] === 1) {
                w1 = -(z1 + z2);
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[2] === 1) {
                w1 = z1 + z2;
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[3] === 1) {
                w1 = z1;
                w2 = 0;
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[4] === 1) {
                w1 = -(z1 + z2);
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[5] === 1) {
                w1 = z1 + z2;
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[6] === 1) {
                w1 = z1;
                w2 = 2 * (z1 + z2);
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
        }
    };
    Puzzle_square.prototype.draw_degital_f = function (ctx, num, x, y) {
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
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 0;
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        //contents
        this.draw_degital(ctx, num, x, y);
    };
    Puzzle_square.prototype.draw_dice = function (ctx, num, x, y) {
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_circle(ctx, x + ((i % 3) - 1) * 0.25 * pu.size, y + (((i / 3) | 0) - 1) * 0.25 * pu.size, 0.09);
            }
        }
    };
    Puzzle_square.prototype.draw_pills = function (ctx, num, x, y) {
        var r = 0.15;
        ctx.fillStyle = "#999";
        switch (num) {
            case 1:
                this.draw_circle(ctx, x, y, r);
                break;
            case 2:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                break;
            case 3:
                this.draw_circle(ctx, x - 0 * pu.size, y - 0.23 * pu.size, r);
                this.draw_circle(ctx, x + 0.23 * pu.size, y + 0.2 * pu.size, r);
                this.draw_circle(ctx, x - 0.23 * pu.size, y + 0.2 * pu.size, r);
                break;
            case 4:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x - 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y - 0.22 * pu.size, r);
                break;
            case 5:
                this.draw_circle(ctx, x, y, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y - 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y - 0.24 * pu.size, r);
                break;
        }
    };
    Puzzle_square.prototype.draw_arrowB = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.2;
        var w2 = 0.4;
        var ri = -0.4;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_square.prototype.draw_arrowN = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.03;
        var w2 = 0.13;
        var ri = -0.25;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_square.prototype.draw_arrowS = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.32; //tip
        var w1 = 0.02;
        var w2 = 0.12;
        var ri = -0.2;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_square.prototype.draw_arrowGP = function (ctx, num, x, y) {
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
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                r1 * pu.size,
                w1 * pu.size,
                r2 * pu.size,
                w2 * pu.size,
                r3 * pu.size,
                w3 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_arrowGP_C = function (ctx, num, x, y) {
        if (num > 0 && num <= 8) {
            this.draw_circle(ctx, x, y, 0.4);
            var th = this.rotate_theta((num - 1) * 45 - 180);
            this.draw_arrowGP(ctx, num, x + 0.6 * pu.size * Math.cos(th), y + 0.6 * pu.size * Math.sin(th));
        }
    };
    Puzzle_square.prototype.draw_arrowShort = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.3; //tip
        var w1 = 0.15;
        var w2 = 0.31;
        var ri = -0.33;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_square.prototype.draw_arrowtri = function (ctx, num, x, y) {
        var len1 = 0.25; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0;
        var w2 = 0.35;
        var ri = 0;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_square.prototype.draw_arrow = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 8) {
            th = this.rotate_theta((num - 1) * 45 - 180);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_arrowcross = function (ctx, num, x, y) {
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
                ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
            }
        }
    };
    Puzzle_square.prototype.draw_arroweight = function (ctx, num, x, y) {
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
    };
    Puzzle_square.prototype.draw_arrow8 = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num === 2 || num === 4 || num === 6 || num === 8) {
            len1 *= 1.3;
            len2 *= 1.2;
        }
        if (num > 0 && num <= 8) {
            th = this.rotate_theta((num - 1) * 45 - 180);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_arrowfourtip = function (ctx, num, x, y) {
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
    };
    Puzzle_square.prototype.draw_arrow4 = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 4) {
            th = this.rotate_theta((num - 1) * 90);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_arrowfouredge = function (ctx, num, x, y) {
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
                ctx.arrow(x +
                    len1 * pu.size * Math.cos(th1 + Math.PI * t1) +
                    0.1 * pu.size * Math.cos(th2), y +
                    len1 * pu.size * Math.sin(th1 + Math.PI * t1) +
                    0.1 * pu.size * Math.sin(th2), x +
                    len2 * pu.size * Math.cos(th1 + Math.PI * t2) -
                    0.05 * pu.size * Math.cos(th2), y +
                    len2 * pu.size * Math.sin(th1 + Math.PI * t2) -
                    0.05 * pu.size * Math.sin(th2), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
                ctx.stroke();
            }
        }
        for (var i = 4; i < 8; i++) {
            if (num[i] === 1) {
                th1 = this.rotate_theta(225 + 90 * i);
                th2 = this.rotate_theta(90 * i);
                ctx.beginPath();
                ctx.arrow(x +
                    len2 * pu.size * Math.cos(th1 + Math.PI * t2) -
                    0.1 * pu.size * Math.cos(th2), y +
                    len2 * pu.size * Math.sin(th1 + Math.PI * t2) -
                    0.1 * pu.size * Math.sin(th2), x +
                    len1 * pu.size * Math.cos(th1 + Math.PI * t1) +
                    0.05 * pu.size * Math.cos(th2), y +
                    len1 * pu.size * Math.sin(th1 + Math.PI * t1) +
                    0.05 * pu.size * Math.sin(th2), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
                ctx.stroke();
            }
        }
    };
    Puzzle_square.prototype.draw_kakuro = function (ctx, num, x, y) {
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
    };
    Puzzle_square.prototype.draw_compass = function (ctx, num, x, y) {
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
    };
    Puzzle_square.prototype.draw_tents = function (ctx, num, x, y) {
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
                ctx.moveTo(x - r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0) * pu.size);
                //ctx.arc(x,y-0.1*pu.size,0.3*pu.size,0,2*Math.PI,false);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0.2) * pu.size);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
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
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y + 0.37 * pu.size, x + 0.3 * pu.size, y - 0.2 * pu.size);
                ctx.stroke();
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y - 0.37 * pu.size, x + 0.3 * pu.size, y + 0.2 * pu.size);
                ctx.stroke();
                break;
            case 4:
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                ctx.text("～", x, y - 0.11 * pu.size);
                ctx.text("～", x, y + 0.09 * pu.size);
                ctx.text("～", x, y + 0.29 * pu.size);
                break;
            /*
                      case 4: //cactus
                        ctx.setLineDash([]);
                        ctx.lineCap = "butt";
                        ctx.strokeStyle = "rgba(0,0,0,0)";
                        ctx.fillStyle = "rgba(1,1,1,1)";
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(x-0.1*pu.size,y+0.4*pu.size);
                        ctx.lineTo(x-0.1*pu.size,y+0.2*pu.size);
                        ctx.lineTo(x-0.35*pu.size,y+0.2*pu.size);
                        ctx.lineTo(x-0.35*pu.size,y-0.2*pu.size);
                        ctx.lineTo(x-0.2*pu.size,y-0.2*pu.size);
                        ctx.lineTo(x-0.2*pu.size,y+0.05*pu.size);
                        ctx.lineTo(x-0.1*pu.size,y+0.05*pu.size);
                        ctx.lineTo(x-0.1*pu.size,y-0.45*pu.size);
                        ctx.lineTo(x+0.1*pu.size,y-0.45*pu.size);
                        ctx.lineTo(x+0.1*pu.size,y-0.1*pu.size);
                        ctx.lineTo(x+0.2*pu.size,y-0.1*pu.size);
                        ctx.lineTo(x+0.2*pu.size,y-0.3*pu.size);
                        ctx.lineTo(x+0.35*pu.size,y-0.3*pu.size);
                        ctx.lineTo(x+0.35*pu.size,y+0.05*pu.size);
                        ctx.lineTo(x+0.1*pu.size,y+0.05*pu.size);
                        ctx.lineTo(x+0.1*pu.size,y+0.4*pu.size);
                        ctx.stroke();
                        ctx.fill();
                        break;
                        */
        }
    };
    Puzzle_square.prototype.draw_star = function (ctx, num, x, y) {
        var r1 = 0.38;
        var r2 = 0.382 * r1;
        switch (num) {
            case 1:
                ctx.fillStyle = "#fff";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 2:
                ctx.fillStyle = "#000"; //"#009826";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 3:
                ctx.fillStyle = "#999";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
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
    };
    Puzzle_square.prototype.draw_star0 = function (ctx, x, y, r1, r2, n) {
        var th1 = 90;
        var th2 = th1 + 180 / n;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
        ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        for (var i = 0; i < n; i++) {
            th1 += 360 / n;
            th2 += 360 / n;
            ctx.lineTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
            ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        }
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_battleship = function (ctx, num, x, y) {
        var r = 0.4;
        var th;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
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
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                ctx.text("～", x, y - 0.11 * pu.size);
                ctx.text("～", x, y + 0.09 * pu.size);
                ctx.text("～", x, y + 0.29 * pu.size);
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
    };
    Puzzle_square.prototype.draw_battleship_tip = function (ctx, x, y, th) {
        var r = 0.36;
        th = this.rotate_theta(th);
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, Math.PI * 0.5 + th, Math.PI * 1.5 + th, false);
        ctx.moveTo(x + r * pu.size * Math.sin(th), y - r * pu.size * Math.cos(th));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + (45 / 180) * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + (45 / 180) * Math.PI));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + (135 / 180) * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + (135 / 180) * Math.PI));
        ctx.lineTo(x + r * pu.size * Math.sin(th + Math.PI), y - r * pu.size * Math.cos(th + Math.PI));
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_battleshipplus = function (ctx, num, x, y) {
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
    };
    Puzzle_square.prototype.draw_battleship_tipplus = function (ctx, x, y, th) {
        var r = 0.36;
        th = this.rotate_theta(th);
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, Math.PI * 0.5 + th, Math.PI * 1.0 + th, false);
        ctx.moveTo(x - r * pu.size * Math.sin(th), y + r * pu.size * Math.cos(th));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(-th + (45 / 180) * Math.PI), y + r * Math.sqrt(2) * pu.size * Math.cos(-th + (45 / 180) * Math.PI));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(-th + (135 / 180) * Math.PI), y + r * Math.sqrt(2) * pu.size * Math.cos(-th + (135 / 180) * Math.PI));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(-th + (225 / 180) * Math.PI), y + r * Math.sqrt(2) * pu.size * Math.cos(-th + (225 / 180) * Math.PI));
        ctx.lineTo(x - r * pu.size * Math.sin(-th + 0.5 * Math.PI), y - r * pu.size * Math.cos(-th + 0.5 * Math.PI));
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_square.prototype.draw_angleloop = function (ctx, num, x, y) {
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
    };
    Puzzle_square.prototype.draw_firefly = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.09;
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
                this.draw_circle(ctx, x - r1 * pu.size * Math.cos(th), y - r1 * pu.size * Math.sin(th), r2);
                break;
            case 5:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
        }
    };
    Puzzle_square.prototype.draw_sun_moon = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.34;
        switch (num) {
            case 1:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.arc(x, y, r1 * pu.size, -0.34 * Math.PI, 0.73 * Math.PI, false);
                ctx.arc(x - 0.12 * pu.size, y - 0.08 * pu.size, r2 * pu.size, 0.67 * Math.PI, -0.28 * Math.PI, true);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_square.prototype.draw_pencils = function (ctx, num, x, y) {
        var r = 0.2, th;
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
                ctx.moveTo(x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(th + Math.PI * 0.25), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(th + Math.PI * 0.25));
                ctx.lineTo(x, y);
                ctx.lineTo(x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(th - Math.PI * 0.25), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(th - Math.PI * 0.25));
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + Math.sqrt(2) * 0.25 * pu.size * Math.cos(th + Math.PI * 0.25), y + Math.sqrt(2) * 0.25 * pu.size * Math.sin(th + Math.PI * 0.25));
                ctx.lineTo(x, y);
                ctx.lineTo(x + Math.sqrt(2) * 0.25 * pu.size * Math.cos(th - Math.PI * 0.25), y + Math.sqrt(2) * 0.25 * pu.size * Math.sin(th - Math.PI * 0.25));
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_square.prototype.draw_slovak = function (ctx, num, x, y) {
        var r = 0.09, h = 0.37;
        switch (num) {
            case 1:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y + h * pu.size, r);
                break;
            case 2:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x - 0.2 * pu.size, y + h * pu.size, r);
                this.draw_circle(ctx, x + 0.2 * pu.size, y + h * pu.size, r);
                break;
            case 3:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x - 0.25 * pu.size, y + h * pu.size, r);
                this.draw_circle(ctx, x + 0.0 * pu.size, y + h * pu.size, r);
                this.draw_circle(ctx, x + 0.25 * pu.size, y + h * pu.size, r);
                break;
            case 4:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x - 0.36 * pu.size, y + h * pu.size, r);
                this.draw_circle(ctx, x - 0.12 * pu.size, y + h * pu.size, r);
                this.draw_circle(ctx, x + 0.12 * pu.size, y + h * pu.size, r);
                this.draw_circle(ctx, x + 0.36 * pu.size, y + h * pu.size, r);
                break;
            case 5:
                set_font_style(ctx, 0.35 * pu.size.toString(10), 1);
                ctx.text("?", x, y + h * pu.size);
                break;
        }
    };
    Puzzle_square.prototype.draw_sudokuetc = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                var r = 0.14;
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.fillStyle = "#ccc";
                this.draw_polygon(ctx, x - r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                ctx.fillStyle = "#666";
                this.draw_polygon(ctx, x - r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
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
                ctx.moveTo(x, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y);
                ctx.lineTo(x, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                var r = 0.2 * pu.size;
                var w = 1.8 * pu.size;
                var h = 0.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
                var r = 0.2 * pu.size;
                var w = 0.8 * pu.size;
                var h = 1.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
                var r = 0.2 * pu.size;
                var w = 2.8 * pu.size;
                var h = 0.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
                var r = 0.2 * pu.size;
                var w = 0.8 * pu.size;
                var h = 2.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
    };
    Puzzle_square.prototype.draw_arc = function (ctx, num, x, y) {
        var r = 0.2, th;
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
                ctx.moveTo(x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(th + Math.PI * 0.25), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(th + Math.PI * 0.25));
                ctx.arcTo(x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(th - Math.PI * 0.25), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(th - Math.PI * 0.25), x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(th - Math.PI * 0.75), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(th - Math.PI * 0.75), pu.size);
                ctx.stroke();
                break;
            case 5:
            case 6:
                ctx.beginPath();
                th = this.rotate_theta(90 * (num - 5));
                ctx.moveTo(x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(th + Math.PI * 0.25), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(th + Math.PI * 0.25));
                ctx.lineTo(x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(th - Math.PI * 0.75), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(th - Math.PI * 0.75));
                ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_darts = function (ctx, num, x, y) {
        set_circle_style(ctx, 9);
        if ((1 <= num, num <= 4)) {
            for (var i = 1; i <= num; i++) {
                this.draw_circle(ctx, x, y, Math.sqrt(2) * 0.5 * (2 * i - 1));
            }
        }
        for (var i = 0; i <= 3; i++) {
            ctx.beginPath();
            ctx.moveTo(x + Math.sqrt(2) * 0.5 * pu.size * Math.cos(Math.PI * 0.5 * i), y + Math.sqrt(2) * 0.5 * pu.size * Math.sin(Math.PI * 0.5 * i));
            ctx.lineTo(x +
                Math.sqrt(2) *
                    0.5 *
                    pu.size *
                    Math.cos(Math.PI * 0.5 * i) *
                    (2 * num - 1), y +
                Math.sqrt(2) *
                    0.5 *
                    pu.size *
                    Math.sin(Math.PI * 0.5 * i) *
                    (2 * num - 1));
            ctx.stroke();
        }
    };
    Puzzle_square.prototype.draw_spans = function (ctx, num, x, y) {
        var h = 0.15;
        switch (num) {
            case 1:
                set_circle_style(ctx, 8);
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(x + 0.5 * pu.size, y - h * pu.size);
                ctx.lineTo(x + 0.5 * pu.size, y + h * pu.size);
                ctx.lineTo(x + h * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x - h * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x - 0.5 * pu.size, y + h * pu.size);
                ctx.lineTo(x - 0.5 * pu.size, y - h * pu.size);
                ctx.lineTo(x - h * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x + h * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x + 0.5 * pu.size, y - h * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
        }
    };
    Puzzle_square.prototype.draw_neighbors = function (ctx, num, x, y) {
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
    };
    Puzzle_square.prototype.draw_polyomino = function (ctx, num, x, y) {
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(200,200,200,1)";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1.2;
        ctx.lineCap = "butt";
        var r = 0.25;
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_polygon(ctx, x + ((i % 3) - 1) * r * pu.size, y + (((i / 3) | 0) - 1) * r * pu.size, r * 0.5 * Math.sqrt(2), 4, 45);
            }
        }
    };
    Puzzle_square.prototype.rotate_theta = function (th) {
        th = th + this.theta;
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = (th / 180) * Math.PI;
        return th;
    };
    return Puzzle_square;
}(_Puzzle__WEBPACK_IMPORTED_MODULE_1__.Puzzle));



/***/ }),

/***/ "./src/model/PuzzleTetrakisSquare.ts":
/*!*******************************************!*\
  !*** ./src/model/PuzzleTetrakisSquare.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_tetrakis_square": () => (/* binding */ Puzzle_tetrakis_square)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PuzzleTruncatedSquare */ "./src/model/PuzzleTruncatedSquare.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_tetrakis_square = /** @class */ (function (_super) {
    __extends(Puzzle_tetrakis_square, _super);
    function Puzzle_tetrakis_square(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, nx, ny, size, "tetrakis_square") || this;
        _this.gridtype = "tetrakis_square";
        _this.nx = nx;
        _this.ny = ny;
        _this.nx0 = _this.nx + 2;
        _this.ny0 = _this.ny * 2 + 2;
        _this.margin = -1; //for arrow of number pointing outside of the grid
        _this.width0 = _this.nx + 6;
        _this.height0 = _this.ny;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.space = [];
        _this.size = size;
        _this.onoff_symbolmode_list = {
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
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_tetrakis_square.prototype.create_point = function () {
        var k = 0, k0;
        var nx = this.nx0;
        var ny = this.ny0;
        var r;
        var adjacent, surround, type, use, neighbor;
        var point = [];
        adjacent = [];
        surround = [];
        neighbor = [];
        //center
        for (var i = 0; i < nx; i++) {
            for (var j = 0; j < ny; j++) {
                k0 = k;
                type = 1;
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((i * 2 + (j % 2) + 0.5) * this.size, (j + 0.5) * this.size, type, adjacent, surround, use, neighbor, [], 0);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((i * 2 + (j % 2) + 1.5) * this.size, (j + 0.5) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                type = 0;
                r = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
                for (var m = 0; m < 8; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 45 + 22.5)), point[k0].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 45 + 22.5)), type, adjacent, surround, use, neighbor);
                    point[k0].surround = point[k0].surround.concat([k]); //pushやspliceだと全てのpointが更新されてしまう
                    point[k].surround = point[k].surround.concat([k0]);
                    k++;
                }
                r = Math.sqrt(2) - 1;
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 90 + 45)), point[k0 + 1].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 90 + 45)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
                    point[k].surround = point[k].surround.concat([k0 + 1]);
                    k++;
                }
                //type = 2-4;
                r = 0.5 * Math.sqrt(2);
                for (var m = 0; m < 8; m++) {
                    if (m % 2 === 0) {
                        type = 2;
                    }
                    else {
                        type = 3;
                    }
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x + r * this.size * Math.cos(((2 * Math.PI) / 8) * m), point[k0].y + r * this.size * Math.sin(((2 * Math.PI) / 8) * m), type, adjacent, surround, use, neighbor);
                    point[k0].neighbor = point[k0].neighbor.concat([k]); //pushやspliceだとpointが全て更新されてしまう
                    if (m === 0) {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 5].neighbor = point[k - 5].neighbor.concat([k]);
                    }
                    else {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
                    }
                    k++;
                }
                type = 2;
                r = 1 - 0.5 * Math.sqrt(2);
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x + r * this.size * Math.cos(((2 * Math.PI) / 4) * m), point[k0 + 1].y + r * this.size * Math.sin(((2 * Math.PI) / 4) * m), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].neighbor = point[k0 + 1].neighbor.concat([k]);
                    if (m === 0) {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 9].neighbor = point[k - 9].neighbor.concat([k]);
                    }
                    else {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
                    }
                    k++;
                }
                type = 4;
                r = 0.5;
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x + r * this.size * Math.cos(((2 * Math.PI) / 4) * m), point[k0 + 1].y + r * this.size * Math.sin(((2 * Math.PI) / 4) * m), type, adjacent, surround, use, neighbor);
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
                if (Math.pow((point[i].x - point[j].x), 2) + Math.pow((point[i].y - point[j].y), 2) <
                    0.01) {
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
                                }
                                else {
                                    point[k].neighbor.splice(n, 1); //あったら削除
                                }
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
        //use更新
        for (var i = 0; i < point.length; i++) {
            if (!point[i] || point[i].type != 0 || point[i].use === -1) {
                continue;
            }
            for (var k = 0; k < point[i].neighbor.length; k++) {
                point[point[i].neighbor[k]].use = 1;
            }
            for (var k = 0; k < point[i].surround.length; k++) {
                point[point[i].surround[k]].use = 1;
            }
        }
        this.point = point;
    };
    Puzzle_tetrakis_square.prototype.reset_frame = function () {
        this.create_point();
        this.space = [];
        this.centerlist = [];
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].use === 1 &&
                this.point[i].type === 0) {
                this.centerlist.push(i);
            }
        }
        this.search_center();
        this.width_c = this.width;
        this.height_c = this.height;
        this.center_n0 = this.center_n;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
        this.make_frameline();
        this.cursol = this.centerlist[0];
        this.cursolS = 4 * this.nx0 * this.ny0 + 4 + 4 * this.nx0;
    };
    Puzzle_tetrakis_square.prototype.search_center = function () {
        var xmax = 0, xmin = 1e5;
        var ymax = 0, ymin = 1e5;
        for (var _i = 0, _a = this.centerlist; _i < _a.length; _i++) {
            var i = _a[_i];
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
        var min0, min = 10e6;
        var num = 0;
        for (var i_1 in this.point) {
            min0 = Math.pow((x - this.point[i_1].x), 2) + Math.pow((y - this.point[i_1].y), 2);
            if (min0 < min) {
                min = min0;
                num = parseInt(i_1);
            }
        }
        this.center_n = Math.floor(num);
    };
    Puzzle_tetrakis_square.prototype.type_set = function () {
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
                }
                else {
                    type = [0, 1, 3, 4];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [5];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                    type = [6];
                }
                else {
                    if (document.getElementById("edge_button").textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 3, 4];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [3, 4];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2, 3];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [3, 4];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else {
                    type = [1];
                }
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "polygon") {
                    type = [1];
                }
                else {
                    type = [0, 1];
                }
                break;
            case "combi":
                switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
                    case "tents":
                    case "linex":
                        type = [0, 3, 4];
                        break;
                    case "edgexoi":
                        type = [0, 1, 3, 4];
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
    };
    Puzzle_tetrakis_square.prototype.recalculate_num = function (x, y, num) {
        var min0, min = 10e6;
        var num0 = 0;
        var r0 = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
        var r1 = Math.sqrt(2) - 1;
        if (this.point[num].type != 1) {
            return num;
        }
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].type === 1 &&
                this.point[i].use === 1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type2 === 0 && min0 > Math.pow((r0 * this.size), 2)) {
                        continue;
                    } //円形の内側に入っていなければ更新しない
                    if (this.point[i].type2 === 1 && min0 > Math.pow((r1 * this.size), 2)) {
                        continue;
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return parseInt(num);
    };
    Puzzle_tetrakis_square.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] && this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3) {
                        if (min0 > Math.pow((0.3 * this.size), 2)) {
                            continue;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return Math.floor(num);
    };
    Puzzle_tetrakis_square.prototype.rotate_left = function () {
        this.theta =
            (this.theta - 45 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, -45);
        this.redraw();
    };
    Puzzle_tetrakis_square.prototype.rotate_right = function () {
        this.theta =
            (this.theta + 45 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, +45);
        this.redraw();
    };
    ////////////////draw/////////////////////
    Puzzle_tetrakis_square.prototype.draw = function () {
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
    };
    Puzzle_tetrakis_square.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_tetrakis_square.prototype.rotate_theta = function (th) {
        th = th + this.theta;
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = (th / 180) * Math.PI;
        return th;
    };
    return Puzzle_tetrakis_square;
}(_PuzzleTruncatedSquare__WEBPACK_IMPORTED_MODULE_1__.Puzzle_truncated_square));



/***/ }),

/***/ "./src/model/PuzzleTri.ts":
/*!********************************!*\
  !*** ./src/model/PuzzleTri.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_tri": () => (/* binding */ Puzzle_tri)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _Puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Puzzle */ "./src/model/Puzzle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_tri = /** @class */ (function (_super) {
    __extends(Puzzle_tri, _super);
    function Puzzle_tri(nx, ny, size) {
        var _this = 
        //盤面情報
        _super.call(this, "tri") || this;
        _this.nx = nx;
        _this.ny = ny;
        _this.n0 = Math.floor((_this.nx * 4) / 3 + 4);
        _this.margin = 10;
        _this.size = size;
        _this.space = [parseInt(document.getElementById("nb_space1")['value'], 10)];
        _this.top_n = Math.floor(Math.pow(_this.n0, 2) + _this.n0 * 2.5) - 1;
        _this.width0 = _this.nx + 1;
        _this.height0 = _this.ny * Math.sqrt(3) * 0.5 + 1;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.onoff_symbolmode_list = {
            cross: 6,
            arrow_cross: 6,
            degital: 7,
            degital_f: 7,
            arrow_eight: 6,
            dice: 9,
            polyomino: 9,
        };
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_tri.prototype.erase_buttons = function () {
        for (var _i = 0, _a = this.group1; _i < _a.length; _i++) {
            var i = _a[_i];
            document.getElementById(i).style.display = "none";
        }
        for (var _b = 0, _c = this.group2; _b < _c.length; _b++) {
            var i = _c[_b];
            document.getElementById(i).style.display = "none";
        }
        for (var _d = 0, _e = this.group3; _d < _e.length; _d++) {
            var i = _e[_d];
            document.getElementById(i).style.display = "inline-block";
        }
        for (var _f = 0, _g = this.group4; _f < _g.length; _f++) {
            var i = _g[_f];
            document.getElementById(i).style.display = "none";
        }
        for (var _h = 0, _j = this.group5; _h < _j.length; _h++) {
            var i = _j[_h];
            document.getElementById(i).style.display = "inline-block";
        }
    };
    Puzzle_tri.prototype.create_point = function () {
        var k = 0;
        var n = this.n0;
        var adjacent, surround, type, use, neighbor;
        var point = [];
        //center
        type = 1;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [
                    k - n - 1 + (j % 2),
                    k - n + (j % 2),
                    k - 1,
                    k + 1,
                    k + n - 1 + (j % 2),
                    k + n + (j % 2),
                ];
                surround = [
                    k + Math.pow(n, 2) - n - 1 + (j % 2),
                    k + 2 * Math.pow(n, 2) - n + (j % 2),
                    k + Math.pow(n, 2) - n + (j % 2),
                    k + 2 * Math.pow(n, 2) + 1,
                    k + Math.pow(n, 2),
                    k + 2 * Math.pow(n, 2),
                ];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((i + (j % 2) * 0.5 - (1 + 0.5 * ((this.nx + 1) % 2))) * this.size, (j - 1) * this.size * Math.sqrt(3) * 0.5, type, adjacent, surround, use);
                k++;
            }
        }
        //vertex
        type = 0;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + Math.pow(n, 2), k + Math.pow(n, 2) + 1, k + Math.pow(n, 2) + n + (j % 2)];
                surround = [
                    k - Math.pow(n, 2),
                    k - Math.pow(n, 2) + n - 1 + (j % 2),
                    k - Math.pow(n, 2) + n + (j % 2),
                ];
                neighbor = [
                    k + 2 * Math.pow(n, 2),
                    k + 3 * Math.pow(n, 2),
                    k + 4 * Math.pow(n, 2) + n - 1 + (j % 2),
                ];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x, point[i + j * n].y + (2 / 3) * this.size * Math.sqrt(3) * 0.5, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k - Math.pow(n, 2) - n - ((j + 1) % 2), k - Math.pow(n, 2) - 1, k - Math.pow(n, 2)];
                surround = [
                    k - 2 * Math.pow(n, 2) - 1,
                    k - 2 * Math.pow(n, 2),
                    k - 2 * Math.pow(n, 2) + n - 1 + (j % 2),
                ];
                neighbor = [k + Math.pow(n, 2), k + 2 * Math.pow(n, 2) - 1, k + 3 * Math.pow(n, 2) - 1];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x - 0.5 * this.size, point[i + j * n].y + (1 / 3) * this.size * Math.sqrt(3) * 0.5, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        //centervertex
        type = 2;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + n - 1 + (j % 2), k - n + (j % 2)];
                surround = [];
                neighbor = [k - 2 * Math.pow(n, 2), k - Math.pow(n, 2)];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x - 0.25 * this.size, point[i + j * n].y + this.size * Math.sqrt(3) * 0.25, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        type = 3;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k + n + (j % 2), k - n - 1 + (j % 2)];
                surround = [];
                neighbor = [k - 3 * Math.pow(n, 2), k - 2 * Math.pow(n, 2) + 1];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x + 0.25 * this.size, point[i + j * n].y + this.size * Math.sqrt(3) * 0.25, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        type = 4;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [k - 1, k + 1];
                surround = [];
                neighbor = [k - 4 * Math.pow(n, 2) - n + (j % 2), k - 3 * Math.pow(n, 2) + 1];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x + 0.5 * this.size, point[i + j * n].y, type, adjacent, surround, use, neighbor);
                k++;
            }
        }
        //  1/6
        var r = 0.16;
        type = 5;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [];
                surround = [];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x - r * this.size, point[i + j * n].y - r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x + r * this.size, point[i + j * n].y - r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x - 2 * r * this.size, point[i + j * n].y, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x + 2 * r * this.size, point[i + j * n].y, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x - r * this.size, point[i + j * n].y + r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x + r * this.size, point[i + j * n].y + r * this.size * Math.sqrt(3), type, adjacent, surround, use);
                k++;
            }
        }
        //  1/6
        var r = 0.16;
        type = 6;
        for (var j = 0; j < n; j++) {
            for (var i = 0; i < n; i++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                adjacent = [];
                surround = [];
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x - r * this.size * Math.sqrt(3), point[i + j * n].y - r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x + r * this.size * Math.sqrt(3), point[i + j * n].y - r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x, point[i + j * n].y - 2 * r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x, point[i + j * n].y + 2 * r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x - r * this.size * Math.sqrt(3), point[i + j * n].y + r * this.size, type, adjacent, surround, use);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[i + j * n].x + r * this.size * Math.sqrt(3), point[i + j * n].y + r * this.size, type, adjacent, surround, use);
                k++;
            }
        }
        this.point = point;
    };
    Puzzle_tri.prototype.listappend = function (centerlist) {
        var n = centerlist.length;
        for (var j = 0; j < n; j++) {
            if (centerlist[j] < 2 * Math.pow(this.n0, 2) &&
                centerlist.indexOf(this.point[centerlist[j]].adjacent[2]) === -1) {
                centerlist.push(this.point[centerlist[j]].adjacent[2]);
            }
            else if (centerlist[j] > 2 * Math.pow(this.n0, 2)) {
                if (centerlist.indexOf(this.point[centerlist[j]].adjacent[1]) === -1) {
                    centerlist.push(this.point[centerlist[j]].adjacent[1]);
                }
                if (centerlist.indexOf(this.point[centerlist[j]].adjacent[2]) === -1) {
                    centerlist.push(this.point[centerlist[j]].adjacent[2]);
                }
            }
        }
        return centerlist;
    };
    Puzzle_tri.prototype.reset_frame = function () {
        this.create_point();
        this.space = [parseInt(document.getElementById("nb_space1")['value'], 10)];
        this.centerlist = [this.top_n + 2 * this.n0 * this.space[0]];
        this.cursol = this.centerlist[0];
        this.cursolS = 0;
        for (var j = 0; j < (this.nx - 1 - 3 * this.space[0]) * 2; j++) {
            this.centerlist = this.listappend(this.centerlist);
        }
        this.search_center();
        this.center_n0 = this.center_n;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
        this.make_frameline();
    };
    Puzzle_tri.prototype.type_set = function () {
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
                }
                else {
                    type = [0, 1, 2, 3, 4];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [];
                }
                else {
                    if (document.getElementById("edge_button").textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2, 3, 4];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3, 4];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2, 3, 4];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2, 3, 4];
                }
                else {
                    type = [1];
                }
                break;
            case "wall":
                if (this.drawing) {
                    type = [this.point[this.last].type];
                }
                else {
                    type = [2, 3, 4];
                }
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "polygon") {
                    type = [1];
                }
                else {
                    type = [0];
                }
                break;
            case "cage":
                type = [];
                break;
            case "combi":
                switch (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0]) {
                    case "tents":
                    case "linex":
                        type = [0, 2, 3, 4];
                        break;
                    case "edgexoi":
                        type = [0, 1, 2, 3, 4];
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
    };
    Puzzle_tri.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 ||
                        this.point[i].type === 3 ||
                        this.point[i].type === 4) {
                        if (min0 > Math.pow((0.7 * this.size), 2)) {
                            break;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return Math.floor(num);
    };
    Puzzle_tri.prototype.rotate_left = function () {
        this.theta =
            (this.theta - 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(0, 0, -30);
        this.redraw();
    };
    Puzzle_tri.prototype.rotate_right = function () {
        this.theta =
            (this.theta + 30 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(0, 0, 30);
        this.redraw();
    };
    Puzzle_tri.prototype.key_arrow = function (key_code) {
        var a, b, c;
        if (this.theta === 0) {
            b = [0, 1, 2, 3];
        }
        else if (this.theta === 90) {
            b = [3, 0, 1, 2];
        }
        else if (this.theta === 180) {
            b = [2, 3, 0, 1];
        }
        else if (this.theta === 270) {
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
        if (this.mode[this.mode.qa].edit_mode === "number" ||
            this.mode[this.mode.qa].edit_mode === "symbol") {
            if (Math.floor(this.cursol / Math.pow(this.n0, 2)) === 1) {
                switch (c) {
                    case 0:
                        a = this.point[this.cursol].adjacent[0];
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                    case 1:
                        break;
                    case 2:
                        a = this.point[this.cursol].adjacent[1];
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                    case 3:
                        a = this.point[this.cursol].adjacent[2];
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                }
            }
            else if (Math.floor(this.cursol / Math.pow(this.n0, 2)) === 2) {
                switch (c) {
                    case 0:
                        a = this.point[this.cursol].adjacent[1];
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                    case 1:
                        a = this.point[this.cursol].adjacent[0];
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                    case 2:
                        a = this.point[this.cursol].adjacent[2];
                        if (this.point[a].use === 1) {
                            this.cursol = a;
                        }
                        break;
                    case 3:
                        break;
                }
            }
        }
        this.redraw();
    };
    Puzzle_tri.prototype.direction_arrow8 = function (x, y, x0, y0) {
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
        if (angle < -150 || angle > 150) {
            a = 2;
        }
        else if (angle > -150 && angle < -90) {
            a = 0;
        }
        else if (angle > -90 && angle < -30) {
            a = 1;
        }
        else if (angle > -30 && angle < 30) {
            a = 3;
        }
        else if (angle > 30 && angle < 90) {
            a = 5;
        }
        else if (angle > 90 && angle < 150) {
            a = 4;
        }
        return a;
    };
    ////////////////draw/////////////////////
    Puzzle_tri.prototype.draw = function () {
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
        //this.draw_wall("pu_q");
        //this.draw_wall("pu_a");
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
        //this.draw_cage("pu_q");
        //this.draw_cage("pu_a");
        this.draw_number("pu_q");
        this.draw_number("pu_a");
        this.draw_cursol();
        this.draw_freecircle();
        //this.draw_point();
    };
    Puzzle_tri.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 6) {
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_tri.prototype.draw_lattice = function () {
        if (this.mode.grid[1] === "1") {
            this.ctx.fillStyle = "#000";
            var verticelist = [];
            for (var i = 0; i < this.centerlist.length; i++) {
                for (var j = 0; j < this.point[this.centerlist[i]].surround.length; j++) {
                    verticelist.push(this.point[this.centerlist[i]].surround[j]);
                }
            }
            verticelist = Array.from(new Set(verticelist));
            for (var i = 0; i < verticelist.length; i++) {
                this.ctx.beginPath();
                this.ctx.arc(this.point[verticelist[i]].x, this.point[verticelist[i]].y, 3, 0, 2 * Math.PI, true);
                this.ctx.fill();
            }
        }
    };
    Puzzle_tri.prototype.draw_surface = function (pu) {
        for (var i in this[pu].surface) {
            set_surface_style(this.ctx, this[pu].surface[i]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.point[this.point[i].surround[0]].x, this.point[this.point[i].surround[0]].y);
            for (var j = 1; j < this.point[i].surround.length; j++) {
                this.ctx.lineTo(this.point[this.point[i].surround[j]].x, this.point[this.point[i].surround[j]].y);
            }
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }
    };
    Puzzle_tri.prototype.draw_polygon = function (ctx, x, y, r, n, th) {
        ctx.LineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        for (var i = 0; i < n - 1; i++) {
            th += 360 / n;
            ctx.lineTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_tri.prototype.draw_squareframe = function (pu) {
        for (var i = 0; i < this[pu].squareframe.length; i++) {
            if (this[pu].squareframe[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.4;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].squareframe[i][0]].x, this.point[this[pu].squareframe[i][0]].y);
                for (var j = 1; j < this[pu].squareframe[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].squareframe[i][j]].x, this.point[this[pu].squareframe[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_tri.prototype.draw_thermo = function (pu) {
        for (var i = 0; i < this[pu].thermo.length; i++) {
            if (this[pu].thermo[i][0]) {
                this.ctx.strokeStyle = "rgba(0,0,0,0)";
                this.ctx.fillStyle = "#ccc";
                this.draw_circle(this.ctx, this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y, 0.25);
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = this.size * 0.27;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].thermo[i][0]].x, this.point[this[pu].thermo[i][0]].y);
                for (var j = 1; j < this[pu].thermo[i].length; j++) {
                    this.ctx.lineTo(this.point[this[pu].thermo[i][j]].x, this.point[this[pu].thermo[i][j]].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_tri.prototype.draw_arrowsp = function (pu) {
        for (var i = 0; i < this[pu].arrows.length; i++) {
            if (this[pu].arrows[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#ccc";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y);
                for (var j = 1; j < this[pu].arrows[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].arrows[i][j]].x, this.point[this[pu].arrows[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].arrows[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].arrows[i][j - 1]].x, this.point[this[pu].arrows[i][j - 1]].y, this.point[this[pu].arrows[i][j]].x, this.point[this[pu].arrows[i][j]].y, [-0.00001, 0, -0.2 * this.size, 0.2 * this.size]);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.lineJoin = "miter";
                this.ctx.strokeStyle = "rgba(192,192,192,1)";
                this.ctx.fillStyle = "rgba(255,255,255,1)";
                this.ctx.lineWidth = 3;
                this.draw_circle(this.ctx, this.point[this[pu].arrows[i][0]].x, this.point[this[pu].arrows[i][0]].y, 0.23);
            }
        }
    };
    Puzzle_tri.prototype.draw_direction = function (pu) {
        for (var i = 0; i < this[pu].direction.length; i++) {
            if (this[pu].direction[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#999";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].direction[i][0]].x, this.point[this[pu].direction[i][0]].y);
                for (var j = 1; j < this[pu].direction[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].direction[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].direction[i][j - 1]].x, this.point[this[pu].direction[i][j - 1]].y, this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y, [-0.00001, 0, -0.2 * this.size, 0.2 * this.size]);
                this.ctx.stroke();
                this.ctx.lineJoin = "miter";
            }
        }
    };
    Puzzle_tri.prototype.draw_line = function (pu) {
        for (var i in this[pu].line) {
            if (this[pu].line[i] === 98) {
                var r = 0.2;
                var x = this.point[i].x;
                var y = this.point[i].y;
                set_line_style(this.ctx, 98);
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
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
                }
                else if (this[pu].line[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    if (this.point[i1].type === 2 ||
                        this.point[i1].type === 3 ||
                        this.point[i1].type === 4) {
                        //for centerline
                        this.ctx.moveTo(this.point[i2].x, this.point[i2].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
                        this.ctx.stroke();
                        this.ctx.lineCap = "butt";
                    }
                    else if (this.point[i2].type === 2 ||
                        this.point[i2].type === 3 ||
                        this.point[i2].type === 4) {
                        this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
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
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
                set_line_style(this.ctx, this[pu].lineE[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                if (this[pu].lineE[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                    this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_tri.prototype.draw_freeline = function (pu) {
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
                var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                this.ctx.stroke();
                this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
            }
            else {
                this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
            }
            this.ctx.stroke();
        }
    };
    Puzzle_tri.prototype.draw_wall = function (pu) {
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
    };
    Puzzle_tri.prototype.draw_symbol = function (pu, layer) {
        /*symbol_layer*/
        for (var i in this[pu].symbol) {
            if (this[pu].symbol[i][2] === layer) {
                this.draw_symbol_select(this.ctx, this.point[i].x, this.point[i].y, this[pu].symbol[i][0], this[pu].symbol[i][1]);
            }
        }
    };
    Puzzle_tri.prototype.draw_number = function (pu) {
        /*number*/
        for (var i in this[pu].number) {
            switch (this[pu].number[i][2]) {
                case "1": //normal
                    this.draw_numbercircle(pu, i, 0.25);
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                    break;
                case "2": //arrow
                    var arrowlength = 0.4;
                    var fontsize = 0.7;
                    this.draw_numbercircle(pu, i, 0.42);
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    var direction = {
                        _0: 120,
                        _1: 60,
                        _2: 180,
                        _3: 0,
                        _4: 240,
                        _5: 300,
                    };
                    var direction = (direction[this[pu].number[i][0].slice(-2)] - this.theta + 360) %
                        360;
                    if (this.reflect[0] === -1) {
                        direction = (180 - direction + 360) % 360;
                    }
                    if (this.reflect[1] === -1) {
                        direction = (360 - direction + 360) % 360;
                    }
                    switch (direction) {
                        case 120:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.05 * this.size, this.point[i].y + 0.05 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x + (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 300:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.05 * this.size, this.point[i].y + 0.05 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x + (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 60:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.05 * this.size, this.point[i].y + 0.05 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x - (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 240:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.05 * this.size, this.point[i].y + 0.05 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (-arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (-arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, this.point[i].x - (arrowlength * 0.25 + 0.15) * this.size, this.point[i].y +
                                (arrowlength * 0.25 * Math.sqrt(3) - 0.1) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 180:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.1 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.15) * this.size, this.point[i].x + (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.15) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 0:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.0 * this.size, this.point[i].y + 0.1 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x - (arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (arrowlength * 0.0 - 0.15) * this.size, this.point[i].x - (-arrowlength * 0.5 + 0.0) * this.size, this.point[i].y + (-arrowlength * 0.0 - 0.15) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 150:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.05 * this.size, this.point[i].y + 0.1 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x +
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.12) * this.size, this.point[i].x +
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.12) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 330:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.05 * this.size, this.point[i].y + 0.1 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x +
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.12) * this.size, this.point[i].x +
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.12) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 30:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.05 * this.size, this.point[i].y + 0.1 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x -
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.12) * this.size, this.point[i].x -
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.12) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 210:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x + 0.05 * this.size, this.point[i].y + 0.1 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x -
                                (-arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (-arrowlength * 0.25 - 0.12) * this.size, this.point[i].x -
                                (arrowlength * 0.25 * Math.sqrt(3) + 0.05) * this.size, this.point[i].y + (arrowlength * 0.25 - 0.12) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 90:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.15) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 270:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), this.point[i].x - 0.1 * this.size, this.point[i].y + 0.05 * this.size, this.size * fontsize);
                            this.ctx.beginPath();
                            this.ctx.arrow(this.point[i].x + (arrowlength * 0.0 + 0.15) * this.size, this.point[i].y + (-arrowlength * 0.5 - 0.0) * this.size, this.point[i].x + (-arrowlength * 0.0 + 0.15) * this.size, this.point[i].y + (arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.15 * this.size, 1, -0.15 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        default:
                            set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                            this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                            break;
                    }
                    break;
                case "4": //tapa
                    this.draw_numbercircle(pu, i, 0.25);
                    if (this[pu].number[i][0].length === 1) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.04 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 2) {
                        set_font_style(this.ctx, (0.3 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.1 * this.size, this.point[i].y - 0.1 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.1 * this.size, this.point[i].y + 0.1 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 3) {
                        set_font_style(this.ctx, (0.3 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.12 * this.size, this.point[i].y - 0.1 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x + 0.12 * this.size, this.point[i].y - 0.05 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.15 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 4) {
                        set_font_style(this.ctx, (0.25 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), this.point[i].x - 0.0 * this.size, this.point[i].y - 0.13 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), this.point[i].x - 0.15 * this.size, this.point[i].y + 0.02 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), this.point[i].x + 0.15 * this.size, this.point[i].y + 0.02 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(3, 4), this.point[i].x - 0.0 * this.size, this.point[i].y + 0.17 * this.size, this.size * 0.8);
                    }
                    break;
                case "5": //small
                    this.draw_numbercircle(pu, i, 0.17);
                    set_font_style(this.ctx, (0.28 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.02 * this.size, this.size * 0.8);
                    break;
                case "6": //middle
                    this.draw_numbercircle(pu, i, 0.22);
                    set_font_style(this.ctx, (0.32 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], this.point[i].x, this.point[i].y + 0.02 * this.size, this.size * 0.8);
                    break;
                case "7": //sudoku
                    this.draw_numbercircle(pu, i, 0.25);
                    var sum = 0, pos = 0;
                    for (var j = 0; j < 9; j++) {
                        if (this[pu].number[i][0][j] === 1) {
                            sum += 1;
                            pos = j;
                        }
                    }
                    if (sum === 1) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text((pos + 1).toString(), this.point[i].x, this.point[i].y + 0.06 * this.size, this.size * 0.8);
                    }
                    else {
                        set_font_style(this.ctx, (0.2 * this.size).toString(10), this[pu].number[i][1]);
                        for (var j = 0; j < 9; j++) {
                            if (this[pu].number[i][0][j] === 1) {
                                this.ctx.text((j + 1).toString(), this.point[i].x + ((j % 3) - 1) * 0.15 * this.size, this.point[i].y +
                                    ((((j / 3) | 0) - 1) * 0.15 + 0.01) * this.size);
                            }
                        }
                    }
                    break;
                case "8": //long
                    if (this[pu].number[i][1] === 5) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        set_circle_style(this.ctx, 7);
                        this.ctx.fillRect(this.point[i].x - 0.2 * this.size, this.point[i].y - 0.25 * this.size, this.ctx.measureText(this[pu].number[i][0]).width, 0.5 * this.size);
                    }
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.textAlign = "left";
                    this.ctx.text(this[pu].number[i][0], this.point[i].x - 0.2 * this.size, this.point[i].y);
                    break;
            }
        }
        /*
        for(var i in this[pu].numberS){
            if(this[pu].numberS[i][1]===5){
              set_circle_style(this.ctx,7);
              this.draw_circle(this.ctx,this.point[i].x,this.point[i].y,0.15);
            }else if(this[pu].numberS[i][1]===6){
              set_circle_style(this.ctx,1);
              this.draw_circle(this.ctx,this.point[i].x,this.point[i].y,0.15);
            }else if(this[pu].numberS[i][1]===7){
              set_circle_style(this.ctx,2);
              this.draw_circle(this.ctx,this.point[i].x,this.point[i].y,0.15);
            }
            if (this[pu].numberS[i][0].length <= 2 ){
              set_font_style(this.ctx,0.25*this.size.toString(10),this[pu].numberS[i][1]);
              this.ctx.textAlign = "center";
              this.ctx.text(this[pu].numberS[i][0],this.point[i].x,this.point[i].y+0.03*this.size);
            }else{
              set_font_style(this.ctx,0.25*this.size.toString(10),this[pu].numberS[i][1]);
              this.ctx.textAlign = "left";
              this.ctx.text(this[pu].numberS[i][0],this.point[i].x-0.15*this.size,this.point[i].y+0.03*this.size);
            }
        }*/
    };
    Puzzle_tri.prototype.draw_numbercircle = function (pu, i, size) {
        if (this[pu].number[i][1] === 5) {
            set_circle_style(this.ctx, 7);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
        else if (this[pu].number[i][1] === 6) {
            set_circle_style(this.ctx, 1);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
        else if (this[pu].number[i][1] === 7) {
            set_circle_style(this.ctx, 2);
            this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, size);
        }
    };
    Puzzle_tri.prototype.draw_freecircle = function () {
        //override
        /*free_circle*/
        if (((this.mode[this.mode.qa].edit_mode === "line" ||
            this.mode[this.mode.qa].edit_mode === "lineE") &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                "3") ||
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                "polygon") {
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = "rgba(0,0,0,0)";
            this.ctx.strokeStyle = "#1e90ff";
            this.ctx.lineWidth = 4;
            if (this.freelinecircle_g[0] != -1) {
                this.draw_circle(this.ctx, this.point[this.freelinecircle_g[0]].x, this.point[this.freelinecircle_g[0]].y, 0.25); //0.3->0.25
            }
            if (this.freelinecircle_g[1] != -1) {
                this.draw_circle(this.ctx, this.point[this.freelinecircle_g[1]].x, this.point[this.freelinecircle_g[1]].y, 0.25);
            }
        }
    };
    Puzzle_tri.prototype.draw_symbol_select = function (ctx, x, y, num, sym) {
        switch (sym) {
            /* figure */
            case "circle_L":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.25);
                    this.draw_circle(ctx, x, y, 0.2);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.25);
                }
                break;
            case "circle_M":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.2);
                    this.draw_circle(ctx, x, y, 0.15);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.2);
                }
                break;
            case "circle_S":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.13);
                    this.draw_circle(ctx, x, y, 0.09);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.13);
                }
                break;
            case "circle_SS":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.1);
                    this.draw_circle(ctx, x, y, 0.06);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.1);
                }
                break;
            case "square_LL":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.5, 4, 45);
                break;
            case "square_L":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.4, 4, 45);
                break;
            case "square_M":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.3, 4, 45);
                break;
            case "square_S":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.22, 4, 45);
                break;
            case "square_SS":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.13, 4, 45);
                break;
            case "triup_L":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.5, 3, 90);
                break;
            case "triup_M":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.4, 3, 90);
                break;
            case "triup_SS":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.16, 3, 90);
                break;
            case "tridown_L":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.5, 3, -90);
                break;
            case "tridown_M":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.4, 3, -90);
                break;
            case "tridown_SS":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.16, 3, -90);
                break;
            case "diamond_L":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.43, 4, 0);
                break;
            case "diamond_M":
                set_circle_style(ctx, num);
                this.draw_polygon(ctx, x, y, 0.25, 4, 0);
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
                set_font_style(ctx, 0.4 * pu.size.toString(10), 1);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
                break;
            case "math_G":
                set_font_style(ctx, 0.4 * pu.size.toString(10), 2);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
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
            /*
            case "pills":
              set_circle_style(ctx,3);
              this.draw_pills(ctx,num,x,y);
              break;
      */
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
            //case "pencils":
            //  this.draw_pencils(ctx,num,x,y);
            //  break;
        }
    };
    Puzzle_tri.prototype.draw_circle = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_tri.prototype.draw_x = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_tri.prototype.draw_ast = function (ctx, x, y, r) {
        var th;
        th = 90 + (this.theta % 60);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
        th = 30 + (this.theta % 60);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
        th = 150 + (this.theta % 60);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_tri.prototype.draw_ox = function (ctx, num, x, y) {
        var r = 0.2;
        switch (num) {
            case 1:
                this.draw_circle(ctx, x, y, r);
                break;
            case 2:
                this.draw_polygon(ctx, x, y, 0.22, 3, 90);
                break;
            case 3:
                this.draw_polygon(ctx, x, y, 0.22, 4, 45);
                break;
            case 4:
                this.draw_x(ctx, x, y, r);
                break;
            case 5:
                r = 0.2;
                ctx.beginPath();
                ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * pu.size, y + r * Math.sin(45 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * pu.size, y + r * Math.sin(225 * (Math.PI / 180)) * pu.size);
                ctx.stroke();
                break;
            case 6:
                r = 0.2;
                ctx.beginPath();
                ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * pu.size, y + r * Math.sin(135 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * pu.size, y + r * Math.sin(315 * (Math.PI / 180)) * pu.size);
                ctx.stroke();
                break;
            case 7:
                this.draw_x(ctx, x, y, 0.2);
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
                r = 0.15;
                this.draw_circle(ctx, x, y, r);
                this.draw_x(ctx, x, y, 0.25);
                break;
        }
    };
    Puzzle_tri.prototype.draw_tri = function (ctx, num, x, y) {
        var r = 0.4;
        switch (num) {
            case 1:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 4:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 3:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 5:
                set_circle_style(ctx, 2);
                draw_square(ctx, x, y, r);
                break;
            case 6:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 7:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 8:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.fill();
                break;
            case 9:
                set_circle_style(ctx, 3);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.fill();
                break;
            case 0:
                set_circle_style(ctx, 3);
                draw_square(ctx, x, y, r);
                break;
        }
    };
    Puzzle_tri.prototype.draw_cross = function (ctx, num, x, y) {
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                var th = this.rotate_theta((i - 1) * 60 - 30 + 180);
                ctx.beginPath();
                ctx.moveTo(x + ((ctx.lineWidth * Math.sqrt(6)) / 6) * Math.cos(th), y + (Math.pow(ctx.lineWidth, Math.sqrt(3)) / 6) * Math.sin(th));
                ctx.lineTo(x - (Math.sqrt(3) / 6) * pu.size * Math.cos(th), y - (Math.sqrt(3) / 6) * pu.size * Math.sin(th));
                ctx.stroke();
            }
        }
    };
    Puzzle_tri.prototype.draw_linesym = function (ctx, num, x, y) {
        var r = 0.32;
        ctx.setLineDash([]);
        ctx.lineCap = "round";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 3;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 3:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 4:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 5:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 6:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
        }
    };
    Puzzle_tri.prototype.draw_inequality = function (ctx, num, x, y) {
        var th;
        var len = 0.1;
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                ctx.beginPath();
                th = this.rotate_theta((num - 1) * 60 + 75);
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 210);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 60 + 345);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.fill();
                ctx.stroke();
                break;
            /*//for square
            case 5:
              set_circle_style(ctx,10);
              ctx.beginPath();
              ctx.moveTo(x+0.07*pu.size,y+0.2*pu.size);
              ctx.lineTo(x-0.07*pu.size,y+0*pu.size);
              ctx.lineTo(x+0.07*pu.size,y-0.2*pu.size);
              ctx.stroke();
              break;*/
        }
    };
    Puzzle_tri.prototype.draw_math = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                ctx.font = 0.4 * pu.size + "px sans-serif";
                ctx.text("\u221E", x, y);
                break;
            case 2:
                ctx.text("＋", x, y);
                break;
            case 3:
                ctx.text("－", x, y);
                break;
            case 4:
                ctx.text("×", x, y);
                break;
            case 5:
                ctx.text("＊", x, y);
                break;
            case 6:
                ctx.text("÷", x, y);
                break;
            case 7:
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
    };
    Puzzle_tri.prototype.draw_degital = function (ctx, num, x, y) {
        set_circle_style(ctx, 2);
        var w1, w2, w3, w4, z1, z2;
        z1 = 0.1;
        z2 = 0.01;
        w3 = 0.033;
        w4 = 0.033;
        for (var i = 0; i < 7; i++) {
            if (num[0] === 1) {
                w1 = z1;
                w2 = -2 * (z1 + z2);
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[1] === 1) {
                w1 = -(z1 + z2);
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[2] === 1) {
                w1 = z1 + z2;
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[3] === 1) {
                w1 = z1;
                w2 = 0;
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[4] === 1) {
                w1 = -(z1 + z2);
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[5] === 1) {
                w1 = z1 + z2;
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[6] === 1) {
                w1 = z1;
                w2 = 2 * (z1 + z2);
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
        }
    };
    Puzzle_tri.prototype.draw_degital_f = function (ctx, num, x, y) {
        set_circle_style(ctx, 3);
        var w1, w2, w3, w4, z1, z2;
        z1 = 0.1;
        z2 = 0.01;
        w3 = 0.033;
        w4 = 0.033;
        //frame
        w1 = z1;
        w2 = -2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 0;
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        //contents
        this.draw_degital(ctx, num, x, y);
    };
    Puzzle_tri.prototype.draw_dice = function (ctx, num, x, y) {
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_circle(ctx, x + ((i % 3) - 1) * 0.25 * pu.size, y + (((i / 3) | 0) - 1) * 0.25 * pu.size, 0.09);
            }
        }
    };
    Puzzle_tri.prototype.draw_pills = function (ctx, num, x, y) {
        var r = 0.1;
        ctx.fillStyle = "#999";
        switch (num) {
            case 1:
                this.draw_circle(ctx, x, y, r);
                break;
            case 2:
                this.draw_circle(ctx, x - 0.12 * pu.size, y - 0.12 * pu.size, r);
                this.draw_circle(ctx, x + 0.12 * pu.size, y + 0.12 * pu.size, r);
                break;
            case 3:
                this.draw_circle(ctx, x - 0 * pu.size, y - 0.12 * pu.size, r);
                this.draw_circle(ctx, x + 0.12 * pu.size, y + 0.1 * pu.size, r);
                this.draw_circle(ctx, x - 0.12 * pu.size, y + 0.1 * pu.size, r);
                break;
            case 4:
                this.draw_circle(ctx, x - 0.12 * pu.size, y - 0.12 * pu.size, r);
                this.draw_circle(ctx, x + 0.12 * pu.size, y + 0.12 * pu.size, r);
                this.draw_circle(ctx, x - 0.12 * pu.size, y + 0.12 * pu.size, r);
                this.draw_circle(ctx, x + 0.12 * pu.size, y - 0.12 * pu.size, r);
                break;
            case 5:
                this.draw_circle(ctx, x, y, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y - 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y - 0.24 * pu.size, r);
                break;
        }
    };
    Puzzle_tri.prototype.draw_arrowB = function (ctx, num, x, y) {
        var len1 = 0.2; //nemoto
        var len2 = 0.25; //tip
        var w1 = 0.1;
        var w2 = 0.2;
        var ri = -0.2;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_tri.prototype.draw_arrowN = function (ctx, num, x, y) {
        var len1 = 0.2; //nemoto
        var len2 = 0.25; //tip
        var w1 = 0.02;
        var w2 = 0.1;
        var ri = -0.15;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_tri.prototype.draw_arrowS = function (ctx, num, x, y) {
        var len1 = 0.2; //nemoto
        var len2 = 0.2; //tip
        var w1 = 0.02;
        var w2 = 0.08;
        var ri = -0.12;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_tri.prototype.draw_arrowGP = function (ctx, num, x, y) {
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
            if (num <= 6) {
                th = this.rotate_theta((num - 1) * 60 - 180);
            }
            else {
                th = this.rotate_theta((num - 7) * 180 - 90);
            }
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                r1 * pu.size,
                w1 * pu.size,
                r2 * pu.size,
                w2 * pu.size,
                r3 * pu.size,
                w3 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_tri.prototype.draw_arrowGP_C = function (ctx, num, x, y) {
        if (num > 0 && num <= 8) {
            var th;
            if (num <= 6) {
                th = this.rotate_theta((num - 1) * 60 - 180);
            }
            else {
                th = this.rotate_theta((num - 7) * 180 - 90);
            }
            this.draw_circle(ctx, x, y, 0.3);
            this.draw_arrowGP(ctx, num, x + 0.5 * pu.size * Math.cos(th), y + 0.5 * pu.size * Math.sin(th));
        }
    };
    Puzzle_tri.prototype.draw_arrowShort = function (ctx, num, x, y) {
        var len1 = 0.2; //nemoto
        var len2 = 0.2; //tip
        var w1 = 0.1;
        var w2 = 0.21;
        var ri = -0.25;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_tri.prototype.draw_arrowtri = function (ctx, num, x, y) {
        var len1 = 0.15; //nemoto
        var len2 = 0.25; //tip
        var w1 = 0;
        var w2 = 0.2;
        var ri = 0;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_tri.prototype.draw_arrow = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 6) {
            th = this.rotate_theta((num - 1) * 60 - 180);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
        else if (num >= 7 && num <= 8) {
            th = this.rotate_theta((num - 7) * 180 - 90);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_tri.prototype.draw_arrowcross = function (ctx, num, x, y) {
        var w1 = 0.025;
        var w2 = 0.08;
        var len1 = 0.5 * w1; //nemoto
        var len2 = 0.3; //tip
        var ri = -0.13;
        var th;
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                th = this.rotate_theta(i * 60 - 180);
                ctx.beginPath();
                ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
            }
        }
    };
    Puzzle_tri.prototype.draw_arroweight = function (ctx, num, x, y) {
        var len1 = -0.15; //nemoto
        var len2 = 0.3; //tip
        var w1 = 0.025;
        var w2 = 0.06;
        var ri = -0.08;
        for (var i = 0; i < 6; i++) {
            if (num[i] === 1) {
                this.draw_arrow(ctx, i + 1, x, y, len1, len2, w1, w2, ri);
            }
        }
    };
    Puzzle_tri.prototype.draw_kakuro = function (ctx, num, x, y) {
        var th = (this.rotate_theta(90) * 180) / Math.PI;
        switch (num) {
            case 1:
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "rgba(255,255,255,0)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, (0.5 * 2) / Math.sqrt(3), 6, th);
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, (0.5 * 2) / Math.sqrt(3));
                break;
            case 2:
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "rgba(255,255,255,0)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, (0.5 * 2) / Math.sqrt(3), 6, th);
                break;
            case 3:
                ctx.fillStyle = "#ccc";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, (0.5 * 2) / Math.sqrt(3), 6, th);
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, (0.5 * 2) / Math.sqrt(3));
                break;
            case 4:
                ctx.fillStyle = "#ccc";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, (0.5 * 2) / Math.sqrt(3), 6, th);
                break;
            case 5:
                ctx.fillStyle = "#fff";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, (0.5 * 2) / Math.sqrt(3), 6, th);
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, (0.5 * 2) / Math.sqrt(3));
                break;
            case 6:
                ctx.fillStyle = "#fff";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 1;
                this.draw_polygon(ctx, x, y, (0.5 * 2) / Math.sqrt(3), 6, th);
                break;
        }
    };
    Puzzle_tri.prototype.draw_compass = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                var r = 0.5;
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, (r * 2) / Math.sqrt(3));
                break;
            case 2:
                var r = 0.33;
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, (r * 2) / Math.sqrt(3));
                break;
            case 3:
                var r = 0.5;
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 1;
                this.draw_ast(ctx, x, y, (r * 2) / Math.sqrt(3));
                break;
        }
    };
    Puzzle_tri.prototype.draw_tents = function (ctx, num, x, y) {
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
                ctx.moveTo(x - r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0) * pu.size);
                //ctx.arc(x,y-0.1*pu.size,0.3*pu.size,0,2*Math.PI,false);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0.2) * pu.size);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
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
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y + 0.37 * pu.size, x + 0.3 * pu.size, y - 0.2 * pu.size);
                ctx.stroke();
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y - 0.37 * pu.size, x + 0.3 * pu.size, y + 0.2 * pu.size);
                ctx.stroke();
                break;
            case 4:
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                ctx.text("～", x, y - 0.11 * pu.size);
                ctx.text("～", x, y + 0.09 * pu.size);
                ctx.text("～", x, y + 0.29 * pu.size);
                break;
        }
    };
    Puzzle_tri.prototype.draw_star = function (ctx, num, x, y) {
        var r1 = 0.38;
        var r2 = 0.382 * r1;
        switch (num) {
            case 1:
                ctx.fillStyle = "#fff";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 2:
                ctx.fillStyle = "#000"; //"#009826";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 3:
                ctx.fillStyle = "#999";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
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
                ctx.strokeStyle = "#999";
                ctx.lineWidth = 1;
                this.draw_x(ctx, x, y, r);
                break;
        }
    };
    Puzzle_tri.prototype.draw_star0 = function (ctx, x, y, r1, r2, n) {
        var th1 = 90;
        var th2 = th1 + 180 / n;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
        ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        for (var i = 0; i < n; i++) {
            th1 += 360 / n;
            th2 += 360 / n;
            ctx.lineTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
            ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        }
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_tri.prototype.draw_battleship = function (ctx, num, x, y) {
        var r = 0.4;
        var th;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.stroke();
                break;
            case 2:
                th = (this.rotate_theta(45) * 180) / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 3:
                th = (this.rotate_theta(105) * 180) / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 4:
                th = (this.rotate_theta(165) * 180) / Math.PI;
                this.draw_polygon(ctx, x, y, 0.47, 4, th);
                break;
            case 5:
                this.draw_battleship_tip(ctx, x, y, 0);
                break;
            case 6:
                this.draw_battleship_tip(ctx, x, y, 60);
                break;
            case 7:
                this.draw_battleship_tip(ctx, x, y, 120);
                break;
            case 8:
                this.draw_battleship_tip(ctx, x, y, 180);
                break;
            case 9:
                this.draw_battleship_tip(ctx, x, y, 240);
                break;
            case 0:
                this.draw_battleship_tip(ctx, x, y, 300);
                break;
        }
    };
    Puzzle_tri.prototype.draw_battleship_tip = function (ctx, x, y, th) {
        var r = 0.35;
        th = this.rotate_theta(th);
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, Math.PI * 0.5 + th, Math.PI * 1.5 + th, false);
        ctx.moveTo(x + r * pu.size * Math.sin(th), y - r * pu.size * Math.cos(th));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + (45 / 180) * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + (45 / 180) * Math.PI));
        ctx.lineTo(x + r * Math.sqrt(2) * pu.size * Math.sin(th + (135 / 180) * Math.PI), y - r * Math.sqrt(2) * pu.size * Math.cos(th + (135 / 180) * Math.PI));
        ctx.lineTo(x + r * pu.size * Math.sin(th + Math.PI), y - r * pu.size * Math.cos(th + Math.PI));
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_tri.prototype.draw_angleloop = function (ctx, num, x, y) {
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
    };
    Puzzle_tri.prototype.draw_firefly = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.09;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                var th = this.rotate_theta((num - 1) * 60 - 180);
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 2;
                this.draw_circle(ctx, x - r1 * pu.size * Math.cos(th), y - r1 * pu.size * Math.sin(th), r2);
                break;
            case 7:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
        }
    };
    Puzzle_tri.prototype.draw_sun_moon = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.34;
        switch (num) {
            case 1:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.arc(x, y, r1 * pu.size, -0.34 * Math.PI, 0.73 * Math.PI, false);
                ctx.arc(x - 0.12 * pu.size, y - 0.08 * pu.size, r2 * pu.size, 0.67 * Math.PI, -0.28 * Math.PI, true);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_tri.prototype.draw_pencils = function (ctx, num, x, y) {
        var r = 0.2;
        ctx.setLineDash([]);
        ctx.lineCap = "butt";
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.lineJoin = "bevel";
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x + 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x + 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y + r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 3:
                ctx.beginPath();
                ctx.moveTo(x - 0.5 * pu.size, y + 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y + r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x - r * pu.size, y - r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                ctx.beginPath();
                ctx.moveTo(x - 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 0.5 * pu.size, y - 0.5 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x, y);
                ctx.lineTo(x + r * pu.size, y - r * pu.size);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_tri.prototype.draw_sudokuetc = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                var r = 0.14;
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.fillStyle = "#ccc";
                this.draw_polygon(ctx, x - r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                ctx.fillStyle = "#666";
                this.draw_polygon(ctx, x - r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
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
                ctx.moveTo(x, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y);
                ctx.lineTo(x, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                var r = 0.2 * pu.size;
                var w = 1.8 * pu.size;
                var h = 0.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
                var r = 0.2 * pu.size;
                var w = 0.8 * pu.size;
                var h = 1.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
    };
    Puzzle_tri.prototype.draw_polyomino = function (ctx, num, x, y) {
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(200,200,200,1)";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1.2;
        ctx.lineCap = "butt";
        var r = 0.25;
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_polygon(ctx, x + ((i % 3) - 1) * r * pu.size, y + (((i / 3) | 0) - 1) * r * pu.size, r * 0.5 * Math.sqrt(2), 4, 45);
            }
        }
    };
    Puzzle_tri.prototype.rotate_theta = function (th) {
        th = th + this.theta;
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = (th / 180) * Math.PI;
        return th;
    };
    return Puzzle_tri;
}(_Puzzle__WEBPACK_IMPORTED_MODULE_1__.Puzzle));



/***/ }),

/***/ "./src/model/PuzzleTruncatedSquare.ts":
/*!********************************************!*\
  !*** ./src/model/PuzzleTruncatedSquare.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Puzzle_truncated_square": () => (/* binding */ Puzzle_truncated_square)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/model/Point.ts");
/* harmony import */ var _Puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Puzzle */ "./src/model/Puzzle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Puzzle_truncated_square = /** @class */ (function (_super) {
    __extends(Puzzle_truncated_square, _super);
    function Puzzle_truncated_square(nx, ny, size, gridtype) {
        if (gridtype === void 0) { gridtype = "truncated_square"; }
        var _this = 
        //盤面情報
        _super.call(this, gridtype) || this;
        _this.nx = nx;
        _this.ny = ny;
        _this.nx0 = _this.nx + 2;
        _this.ny0 = _this.ny * 2 + 2;
        _this.margin = -1; //for arrow of number pointing outside of the grid
        _this.width0 = _this.nx + 6;
        _this.height0 = _this.ny;
        _this.width_c = _this.width0;
        _this.height_c = _this.height0;
        _this.width = _this.width_c;
        _this.height = _this.height_c;
        _this.canvasx = _this.width_c * _this.size;
        _this.canvasy = _this.height_c * _this.size;
        _this.space = [];
        _this.size = size;
        _this.onoff_symbolmode_list = {
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
        _this.reset();
        _this.erase_buttons();
        return _this;
    }
    Puzzle_truncated_square.prototype.erase_buttons = function () {
        for (var _i = 0, _a = this.group1; _i < _a.length; _i++) {
            var i = _a[_i];
            document.getElementById(i).style.display = "none";
        }
        for (var _b = 0, _c = this.group2; _b < _c.length; _b++) {
            var i = _c[_b];
            document.getElementById(i).style.display = "none";
        }
        for (var _d = 0, _e = this.group3; _d < _e.length; _d++) {
            var i = _e[_d];
            document.getElementById(i).style.display = "none";
        }
        for (var _f = 0, _g = this.group4; _f < _g.length; _f++) {
            var i = _g[_f];
            document.getElementById(i).style.display = "none";
        }
        for (var _h = 0, _j = this.group5; _h < _j.length; _h++) {
            var i = _j[_h];
            document.getElementById(i).style.display = "none";
        }
    };
    Puzzle_truncated_square.prototype.create_point = function () {
        var k = 0, k0;
        var nx = this.nx0;
        var ny = this.ny0;
        var r;
        var adjacent, surround, type, use, neighbor;
        var point = [];
        adjacent = [];
        surround = [];
        neighbor = [];
        //center
        for (var j = 0; j < ny; j++) {
            for (var i = 0; i < nx; i++) {
                k0 = k;
                type = 0;
                if (i === 0 || i === nx - 1 || j === 0 || j === ny - 1) {
                    use = -1;
                }
                else {
                    use = 1;
                }
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((i * 2 + (j % 2) + 0.5) * this.size, (j + 0.5) * this.size, type, adjacent, surround, use, neighbor, [], 0);
                k++;
                point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point((i * 2 + (j % 2) + 1.5) * this.size, (j + 0.5) * this.size, type, adjacent, surround, use, neighbor, [], 1);
                k++;
                type = 1;
                r = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
                for (var m = 0; m < 8; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 45 + 22.5)), point[k0].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 45 + 22.5)), type, adjacent, surround, use, neighbor);
                    point[k0].surround = point[k0].surround.concat([k]); //pushやspliceだと全てのpointが更新されてしまう
                    k++;
                }
                r = Math.sqrt(2) - 1;
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x +
                        r * this.size * Math.cos(((2 * Math.PI) / 360) * (m * 90 + 45)), point[k0 + 1].y +
                        r * this.size * Math.sin(((2 * Math.PI) / 360) * (m * 90 + 45)), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].surround = point[k0 + 1].surround.concat([k]);
                    k++;
                }
                type = 2;
                r = 0.5 * Math.sqrt(2);
                for (var m = 0; m < 8; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0].x + r * this.size * Math.cos(((2 * Math.PI) / 8) * m), point[k0].y + r * this.size * Math.sin(((2 * Math.PI) / 8) * m), type, adjacent, surround, use, neighbor);
                    point[k0].neighbor = point[k0].neighbor.concat([k]); //pushやspliceだとpointが全て更新されてしまう
                    if (m === 0) {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 5].neighbor = point[k - 5].neighbor.concat([k]);
                    }
                    else {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
                    }
                    k++;
                }
                r = 1 - 0.5 * Math.sqrt(2);
                for (var m = 0; m < 4; m++) {
                    point[k] = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(point[k0 + 1].x + r * this.size * Math.cos(((2 * Math.PI) / 4) * m), point[k0 + 1].y + r * this.size * Math.sin(((2 * Math.PI) / 4) * m), type, adjacent, surround, use, neighbor);
                    point[k0 + 1].neighbor = point[k0 + 1].neighbor.concat([k]);
                    if (m === 0) {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 9].neighbor = point[k - 9].neighbor.concat([k]);
                    }
                    else {
                        point[k - 12].neighbor = point[k - 12].neighbor.concat([k]);
                        point[k - 13].neighbor = point[k - 13].neighbor.concat([k]);
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
                if (Math.pow((point[i].x - point[j].x), 2) + Math.pow((point[i].y - point[j].y), 2) <
                    0.01) {
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
                                }
                                else {
                                    point[k].neighbor.splice(n, 1); //あったら削除
                                }
                            }
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
                    if (point[i].use === -1 && point[j].use === 1) {
                        point[i].use = 1;
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
    };
    Puzzle_truncated_square.prototype.reset_frame = function () {
        this.create_point();
        this.space = [];
        this.centerlist = [];
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].use === 1 &&
                this.point[i].type === 0) {
                this.centerlist.push(i);
            }
        }
        this.search_center();
        this.width_c = this.width;
        this.height_c = this.height;
        this.center_n0 = this.center_n;
        this.canvasxy_update();
        this.canvas_size_setting();
        this.point_move(this.canvasx * 0.5 - this.point[this.center_n].x + 0.5, this.canvasy * 0.5 - this.point[this.center_n].y + 0.5, this.theta);
        this.make_frameline();
        this.cursol = this.centerlist[0];
        this.cursolS = 4 * this.nx0 * this.ny0 + 4 + 4 * this.nx0;
    };
    Puzzle_truncated_square.prototype.search_center = function () {
        var xmax = 0, xmin = 1e5;
        var ymax = 0, ymin = 1e5;
        for (var _i = 0, _a = this.centerlist; _i < _a.length; _i++) {
            var i = _a[_i];
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
        var min0, min = 10e6;
        var num = 0;
        for (var i_1 in this.point) {
            min0 = Math.pow((x - this.point[i_1].x), 2) + Math.pow((y - this.point[i_1].y), 2);
            if (min0 < min) {
                min = min0;
                num = parseInt(i_1);
            }
        }
        this.center_n = Math.floor(num);
    };
    Puzzle_truncated_square.prototype.type_set = function () {
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
                }
                else {
                    type = [0, 1, 2];
                }
                break;
            case "number":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
                    type = [4];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
                    type = [5];
                }
                else {
                    if (document.getElementById("edge_button").textContent === "OFF") {
                        type = [0];
                    }
                    else {
                        type = [0, 1, 2];
                    }
                }
                break;
            case "line":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "5") {
                    type = [0, 2];
                }
                else {
                    type = [0];
                }
                break;
            case "lineE":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "4") {
                    type = [2];
                }
                else if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "2") {
                    type = [0, 1];
                }
                else {
                    type = [1];
                }
                break;
            case "wall":
                if (this.drawing) {
                    type = [this.point[this.last].type];
                }
                else {
                    type = [2];
                }
                break;
            case "cage":
                type = [4];
                break;
            case "special":
                if (this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] ===
                    "polygon") {
                    type = [1];
                }
                else {
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
    };
    Puzzle_truncated_square.prototype.recalculate_num = function (x, y, num) {
        var min0, min = 10e6;
        var num0 = 0;
        var r0 = (0.5 * Math.sqrt(2)) / Math.cos(((2 * Math.PI) / 360) * 22.5);
        var r1 = Math.sqrt(2) - 1;
        if (this.point[num].type != 0) {
            return num;
        }
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] &&
                this.point[i].type === 0 &&
                this.point[i].use === 1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type2 === 0 && min0 > Math.pow((r0 * this.size), 2)) {
                        continue;
                    } //円形の内側に入っていなければ更新しない
                    if (this.point[i].type2 === 1 && min0 > Math.pow((r1 * this.size), 2)) {
                        continue;
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return parseInt(num);
    };
    Puzzle_truncated_square.prototype.coord_p_edgex = function (x, y) {
        var min0, min = 10e6;
        var num = 0;
        for (var i = 0; i < this.point.length; i++) {
            if (this.point[i] && this.type.indexOf(this.point[i].type) != -1) {
                min0 = Math.pow((x - this.point[i].x), 2) + Math.pow((y - this.point[i].y), 2);
                if (min0 < min) {
                    if (this.point[i].type === 2 || this.point[i].type === 3) {
                        if (min0 > Math.pow((0.3 * this.size), 2)) {
                            continue;
                        }
                    }
                    min = min0;
                    num = i;
                }
            }
        }
        return Math.floor(num);
    };
    Puzzle_truncated_square.prototype.rotate_left = function () {
        this.theta =
            (this.theta - 45 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, -45);
        this.redraw();
    };
    Puzzle_truncated_square.prototype.rotate_right = function () {
        this.theta =
            (this.theta + 45 * this.reflect[0] * this.reflect[1] + 360) % 360;
        this.point_move(0, 0, +45);
        this.redraw();
    };
    Puzzle_truncated_square.prototype.cursolcheck = function () {
        if (this.mode[this.mode.qa].edit_mode === "number" &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "3") {
            if (this.cursolS > 8 * this.nx0 * this.ny0) {
                this.cursolS -= 4 * this.nx0 * this.ny0;
            }
        }
        else if (this.mode[this.mode.qa].edit_mode === "number" &&
            this.mode[this.mode.qa][this.mode[this.mode.qa].edit_mode][0] === "9") {
            if (this.cursolS < 8 * this.nx0 * this.ny0) {
                this.cursolS += 4 * this.nx0 * this.ny0;
            }
        }
    };
    Puzzle_truncated_square.prototype.key_arrow = function (key_code) { };
    Puzzle_truncated_square.prototype.direction_arrow8 = function (x, y, x0, y0) {
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
        }
        else if (angle > -157.5 && angle < -112.5) {
            a = 4;
        }
        else if (angle > -112.5 && angle < -67.5) {
            a = 0;
        }
        else if (angle > -67.5 && angle < -22.5) {
            a = 5;
        }
        else if (angle > -22.5 && angle < 22.5) {
            a = 2;
        }
        else if (angle > 22.5 && angle < 67.5) {
            a = 7;
        }
        else if (angle > 67.5 && angle < 112.5) {
            a = 3;
        }
        else if (angle > 112.5 && angle < 157.5) {
            a = 6;
        }
        return a;
    };
    ////////////////draw/////////////////////
    Puzzle_truncated_square.prototype.draw = function () {
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
    };
    Puzzle_truncated_square.prototype.draw_point = function () {
        set_font_style(this.ctx, (0.2 * this.size).toString(), 1);
        for (var i in this.point) {
            if (this.point[i].type === 0) {
                this.ctx.fillStyle = "#000";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 1) {
                this.ctx.fillStyle = "blue";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
            }
            else if (this.point[i].type === 2) {
                this.ctx.fillStyle = "red";
                if (this.point[i].use === 1) {
                    this.ctx.text(i, this.point[i].x, this.point[i].y, 0.8 * this.size);
                }
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 3) {
                this.ctx.fillStyle = "orange";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 4) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            else if (this.point[i].type === 5) {
                this.ctx.fillStyle = "green";
                //this.ctx.text(i,this.point[i].x,this.point[i].y,0.8*this.size);
                this.ctx.fillStyle = "rgba(0,0,0,0)";
            }
            this.ctx.beginPath();
            //this.ctx.arc(this.point[i].x,this.point[i].y,2.5,0,2*Math.PI,true);
            this.ctx.fill();
        }
    };
    Puzzle_truncated_square.prototype.draw_lattice = function () {
        if (this.mode.grid[1] === "1") {
            this.ctx.fillStyle = "#000";
            var verticelist = [];
            for (var i = 0; i < this.centerlist.length; i++) {
                for (var j = 0; j < this.point[this.centerlist[i]].surround.length; j++) {
                    verticelist.push(this.point[this.centerlist[i]].surround[j]);
                }
            }
            verticelist = Array.from(new Set(verticelist));
            for (var i = 0; i < verticelist.length; i++) {
                this.ctx.beginPath();
                this.ctx.arc(this.point[verticelist[i]].x, this.point[verticelist[i]].y, 2.1, 0, 2 * Math.PI, true);
                this.ctx.fill();
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_surface = function (pu, num) {
        if (num === void 0) { num = ""; }
        if (num) {
            var keys = [], key0 = num + "";
            if (this[pu].surface[key0]) {
                keys.push(key0);
            }
            for (var i = 0; i < this.point[num].adjacent.length; i++) {
                key0 = this.point[num].adjacent[i] + "";
                if (keys.indexOf(key0) === -1 && this[pu].surface[key0]) {
                    keys.push(key0);
                }
            }
        }
        else {
            var keys = Object.keys(this[pu].surface);
        }
        for (var k = 0; k < keys.length; k++) {
            var i = keys[k];
            set_surface_style(this.ctx, this[pu].surface[i]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.point[this.point[i].surround[0]].x, this.point[this.point[i].surround[0]].y);
            for (var j = 1; j < this.point[i].surround.length; j++) {
                this.ctx.lineTo(this.point[this.point[i].surround[j]].x, this.point[this.point[i].surround[j]].y);
            }
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }
    };
    Puzzle_truncated_square.prototype.draw_polygon = function (ctx, x, y, r, n, th) {
        ctx.LineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        for (var i = 0; i < n - 1; i++) {
            th += 360 / n;
            ctx.lineTo(x - r * Math.cos(th * (Math.PI / 180)) * this.size, y - r * Math.sin(th * (Math.PI / 180)) * this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_truncated_square.prototype.draw_direction = function (pu) {
        for (var i = 0; i < this[pu].direction.length; i++) {
            if (this[pu].direction[i][0]) {
                this.ctx.setLineDash([]);
                this.ctx.lineCap = "square";
                this.ctx.strokeStyle = "#999";
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(this.point[this[pu].direction[i][0]].x, this.point[this[pu].direction[i][0]].y);
                for (var j = 1; j < this[pu].direction[i].length - 1; j++) {
                    this.ctx.lineTo(this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y);
                }
                this.ctx.stroke();
                j = this[pu].direction[i].length - 1;
                this.ctx.lineJoin = "bevel";
                this.ctx.beginPath();
                this.ctx.arrow(this.point[this[pu].direction[i][j - 1]].x, this.point[this[pu].direction[i][j - 1]].y, this.point[this[pu].direction[i][j]].x, this.point[this[pu].direction[i][j]].y, [-0.00001, 0, -0.25 * this.size, 0.25 * this.size]);
                this.ctx.stroke();
                this.ctx.lineJoin = "miter";
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_line = function (pu) {
        for (var i in this[pu].line) {
            if (this[pu].line[i] === 98) {
                var r = 0.2;
                var x = this.point[i].x;
                var y = this.point[i].y;
                set_line_style(this.ctx, 98);
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
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
                }
                else if (this[pu].line[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    if (this.point[i1].type === 2 || this.point[i1].type === 3) {
                        //for centerline
                        this.ctx.moveTo(this.point[i2].x, this.point[i2].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
                        this.ctx.stroke();
                        this.ctx.lineCap = "butt";
                    }
                    else if (this.point[i2].type === 2 || this.point[i2].type === 3) {
                        this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                        this.ctx.lineTo((this.point[i1].x + this.point[i2].x) * 0.5, (this.point[i1].y + this.point[i2].y) * 0.5);
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
                this.ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
                this.ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
                this.ctx.stroke();
            }
            else {
                set_line_style(this.ctx, this[pu].lineE[i]);
                var i1 = i.split(",")[0];
                var i2 = i.split(",")[1];
                this.ctx.beginPath();
                if (this[pu].lineE[i] === 30) {
                    var r = 0.15 * this.size;
                    var dx = this.point[i1].x - this.point[i2].x;
                    var dy = this.point[i1].y - this.point[i2].y;
                    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                    this.ctx.stroke();
                    this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                    this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
                }
                else {
                    this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                    this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
                }
                this.ctx.stroke();
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_freeline = function (pu) {
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
                var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                this.ctx.moveTo(this.point[i1].x - (r / d) * dy, this.point[i1].y + (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x - (r / d) * dy, this.point[i2].y + (r / d) * dx);
                this.ctx.stroke();
                this.ctx.moveTo(this.point[i1].x + (r / d) * dy, this.point[i1].y - (r / d) * dx);
                this.ctx.lineTo(this.point[i2].x + (r / d) * dy, this.point[i2].y - (r / d) * dx);
            }
            else {
                this.ctx.moveTo(this.point[i1].x, this.point[i1].y);
                this.ctx.lineTo(this.point[i2].x, this.point[i2].y);
            }
            this.ctx.stroke();
        }
    };
    Puzzle_truncated_square.prototype.draw_wall = function (pu) {
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
    };
    Puzzle_truncated_square.prototype.draw_symbol = function (pu, layer) {
        /*symbol_layer*/
        var p_x, p_y;
        for (var i in this[pu].symbol) {
            if (i.slice(-1) === "E") {
                //辺モードでの重ね書き
                p_x = this.point[i.slice(0, -1)].x;
                p_y = this.point[i.slice(0, -1)].y;
            }
            else {
                p_x = this.point[i].x;
                p_y = this.point[i].y;
            }
            if (this[pu].symbol[i][2] === layer) {
                this.draw_symbol_select(this.ctx, p_x, p_y, this[pu].symbol[i][0], this[pu].symbol[i][1]);
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_number = function (pu) {
        /*number*/
        var p_x, p_y;
        for (var i in this[pu].number) {
            if (i.slice(-1) === "E") {
                //辺モードでの重ね書き
                p_x = this.point[i.slice(0, -1)].x;
                p_y = this.point[i.slice(0, -1)].y;
            }
            else {
                p_x = this.point[i].x;
                p_y = this.point[i].y;
            }
            switch (this[pu].number[i][2]) {
                case "1": //normal
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.06 * this.size, this.size * 0.8);
                    break;
                case "2": //arrow
                    var arrowlength = 0.7;
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
                    set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
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
                    var direction = (direction[this[pu].number[i][0].slice(-2)] - this.theta + 360) %
                        360;
                    if (this.reflect[0] === -1) {
                        direction = (180 - direction + 360) % 360;
                    }
                    if (this.reflect[1] === -1) {
                        direction = (360 - direction + 360) % 360;
                    }
                    switch (direction) {
                        case 180:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.0 * this.size, p_y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.5 + 0.0) * this.size, p_y + (arrowlength * 0.0 - 0.3) * this.size, p_x + (-arrowlength * 0.5 + 0.0) * this.size, p_y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 0:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.0 * this.size, p_y + 0.15 * this.size, this.size * 0.8);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x - (arrowlength * 0.5 + 0.0) * this.size, p_y + (arrowlength * 0.0 - 0.3) * this.size, p_x - (-arrowlength * 0.5 + 0.0) * this.size, p_y + (-arrowlength * 0.0 - 0.3) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 90:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.1 * this.size, p_y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.0 + 0.3) * this.size, p_y + (arrowlength * 0.5 - 0.0) * this.size, p_x + (-arrowlength * 0.0 + 0.3) * this.size, p_y + (-arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 270:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.1 * this.size, p_y + 0.05 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.0 + 0.3) * this.size, p_y + (-arrowlength * 0.5 - 0.0) * this.size, p_x + (-arrowlength * 0.0 + 0.3) * this.size, p_y + (arrowlength * 0.5 - 0.0) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 45:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (-arrowlength * 0.35 - 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, p_x + (arrowlength * 0.35 - 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 225:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x + 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.35 - 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, p_x + (-arrowlength * 0.35 - 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 135:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (arrowlength * 0.35 + 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, p_x + (-arrowlength * 0.35 + 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        case 315:
                            this.ctx.text(this[pu].number[i][0].slice(0, -2), p_x - 0.05 * this.size, p_y + 0.15 * this.size, this.size * 0.7);
                            this.ctx.beginPath();
                            this.ctx.arrow(p_x + (-arrowlength * 0.35 + 0.2) * this.size, p_y + (-arrowlength * 0.35 - 0.2) * this.size, p_x + (arrowlength * 0.35 + 0.2) * this.size, p_y + (arrowlength * 0.35 - 0.2) * this.size, [0, 1, -0.25 * this.size, 1, -0.25 * this.size, 3]);
                            this.ctx.stroke();
                            this.ctx.fill();
                            break;
                        default:
                            set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                            this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.06 * this.size, this.size * 0.8);
                            break;
                    }
                    break;
                case "4": //tapa
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.44);
                    if (this[pu].number[i][0].length === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.06 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 2) {
                        set_font_style(this.ctx, (0.48 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), p_x - 0.16 * this.size, p_y - 0.15 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), p_x + 0.18 * this.size, p_y + 0.19 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 3) {
                        set_font_style(this.ctx, (0.45 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), p_x - 0.22 * this.size, p_y - 0.14 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), p_x + 0.24 * this.size, p_y - 0.05 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), p_x - 0.0 * this.size, p_y + 0.3 * this.size, this.size * 0.8);
                    }
                    else if (this[pu].number[i][0].length === 4) {
                        set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text(this[pu].number[i][0].slice(0, 1), p_x - 0.0 * this.size, p_y - 0.22 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(1, 2), p_x - 0.26 * this.size, p_y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(2, 3), p_x + 0.26 * this.size, p_y + 0.04 * this.size, this.size * 0.8);
                        this.ctx.text(this[pu].number[i][0].slice(3, 4), p_x - 0.0 * this.size, p_y + 0.3 * this.size, this.size * 0.8);
                    }
                    break;
                case "5": //small
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.17);
                    set_font_style(this.ctx, (0.25 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.02 * this.size, this.size * 0.8);
                    break;
                case "6": //medium
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.25);
                    set_font_style(this.ctx, (0.4 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.text(this[pu].number[i][0], p_x, p_y + 0.03 * this.size, this.size * 0.8);
                    break;
                case "7": //sudoku
                    this.draw_numbercircle(pu, i, p_x, p_y, 0.42);
                    var sum = 0, pos = 0;
                    for (var j = 0; j < 9; j++) {
                        if (this[pu].number[i][0][j] === 1) {
                            sum += 1;
                            pos = j;
                        }
                    }
                    if (sum === 1) {
                        set_font_style(this.ctx, (0.7 * this.size).toString(10), this[pu].number[i][1]);
                        this.ctx.text((pos + 1).toString(), p_x, p_y + 0.06 * this.size, this.size * 0.8);
                    }
                    else {
                        set_font_style(this.ctx, (0.3 * this.size).toString(10), this[pu].number[i][1]);
                        for (var j = 0; j < 9; j++) {
                            if (this[pu].number[i][0][j] === 1) {
                                this.ctx.text((j + 1).toString(), p_x + ((j % 3) - 1) * 0.28 * this.size, p_y + ((((j / 3) | 0) - 1) * 0.28 + 0.02) * this.size);
                            }
                        }
                    }
                    break;
                case "8": //long
                    if (this[pu].number[i][1] === 5) {
                        set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                        set_circle_style(this.ctx, 7);
                        this.ctx.fillRect(p_x - 0.2 * this.size, p_y - 0.25 * this.size, this.ctx.measureText(this[pu].number[i][0]).width, 0.5 * this.size);
                    }
                    set_font_style(this.ctx, (0.5 * this.size).toString(10), this[pu].number[i][1]);
                    this.ctx.textAlign = "left";
                    this.ctx.text(this[pu].number[i][0], p_x - 0.2 * this.size, p_y);
                    break;
            }
        }
        for (var i in this[pu].numberS) {
            if (this[pu].numberS[i][1] === 5) {
                set_circle_style(this.ctx, 7);
                this.draw_polygon(this.ctx, this.point[i].x, this.point[i].y, 0.27, 4, 45);
            }
            else if (this[pu].numberS[i][1] === 6) {
                set_circle_style(this.ctx, 1);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
            }
            else if (this[pu].numberS[i][1] === 7) {
                set_circle_style(this.ctx, 2);
                this.draw_circle(this.ctx, this.point[i].x, this.point[i].y, 0.18);
            }
            if (true) {
                //(this[pu].numberS[i][0].length <= 2 ){
                set_font_style(this.ctx, (0.32 * this.size).toString(10), this[pu].numberS[i][1]);
                this.ctx.textAlign = "center";
                this.ctx.text(this[pu].numberS[i][0], this.point[i].x, this.point[i].y + 0.03 * this.size, this.size * 0.48);
                //}else{
                //  set_font_style(this.ctx,0.28*this.size.toString(10),this[pu].numberS[i][1]);
                //  this.ctx.textAlign = "left";
                //  this.ctx.text(this[pu].numberS[i][0],this.point[i].x-0.15*this.size,this.point[i].y+0.03*this.size,this.size*0.8);
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_numbercircle = function (pu, i, p_x, p_y, size) {
        if (this[pu].number[i][1] === 5) {
            set_circle_style(this.ctx, 7);
            this.draw_circle(this.ctx, p_x, p_y, size);
        }
        else if (this[pu].number[i][1] === 6) {
            set_circle_style(this.ctx, 1);
            this.draw_circle(this.ctx, p_x, p_y, size);
        }
        else if (this[pu].number[i][1] === 7) {
            set_circle_style(this.ctx, 2);
            this.draw_circle(this.ctx, p_x, p_y, size);
        }
    };
    Puzzle_truncated_square.prototype.draw_symbol_select = function (ctx, x, y, num, sym) {
        switch (sym) {
            /* figure */
            case "circle_L":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.43);
                    this.draw_circle(ctx, x, y, 0.32);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.43);
                }
                break;
            case "circle_M":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.35);
                    this.draw_circle(ctx, x, y, 0.25);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.35);
                }
                break;
            case "circle_S":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.22);
                    this.draw_circle(ctx, x, y, 0.14);
                }
                else {
                    set_circle_style(ctx, num);
                    this.draw_circle(ctx, x, y, 0.22);
                }
                break;
            case "circle_SS":
                if (num === 0) {
                    set_circle_style(ctx, 1);
                    this.draw_circle(ctx, x, y, 0.13);
                    this.draw_circle(ctx, x, y, 0.07);
                }
                else {
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
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
                break;
            case "math_G":
                set_font_style(ctx, 0.8 * pu.size.toString(10), 2);
                this.draw_math(ctx, num, x, y + 0.05 * pu.size);
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
        }
    };
    Puzzle_truncated_square.prototype.draw_circle = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r * pu.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_truncated_square.prototype.draw_x = function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * this.size, y + r * Math.sin(45 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * this.size, y + r * Math.sin(225 * (Math.PI / 180)) * this.size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * this.size, y + r * Math.sin(135 * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * this.size, y + r * Math.sin(315 * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_truncated_square.prototype.draw_ast = function (ctx, x, y, r) {
        var th;
        th = 45 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
        th = 135 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_truncated_square.prototype.draw_slash = function (ctx, x, y, r) {
        var th;
        th = 45 + (this.theta % 180);
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(th * (Math.PI / 180)) * this.size, y + r * Math.sin(th * (Math.PI / 180)) * this.size);
        ctx.lineTo(x + r * Math.cos((th + 180) * (Math.PI / 180)) * this.size, y + r * Math.sin((th + 180) * (Math.PI / 180)) * this.size);
        ctx.stroke();
    };
    Puzzle_truncated_square.prototype.draw_ox = function (ctx, num, x, y) {
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
                ctx.moveTo(x + r * Math.cos(45 * (Math.PI / 180)) * pu.size, y + r * Math.sin(45 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(225 * (Math.PI / 180)) * pu.size, y + r * Math.sin(225 * (Math.PI / 180)) * pu.size);
                ctx.stroke();
                break;
            case 6:
                r = 0.5;
                ctx.beginPath();
                ctx.moveTo(x + r * Math.cos(135 * (Math.PI / 180)) * pu.size, y + r * Math.sin(135 * (Math.PI / 180)) * pu.size);
                ctx.lineTo(x + r * Math.cos(315 * (Math.PI / 180)) * pu.size, y + r * Math.sin(315 * (Math.PI / 180)) * pu.size);
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
    };
    Puzzle_truncated_square.prototype.draw_cross = function (ctx, num, x, y) {
        for (var i = 0; i < 4; i++) {
            if (num[i] === 1) {
                var th = this.rotate_theta(i * 90 - 180);
                ctx.beginPath();
                ctx.moveTo(x + ctx.lineWidth * 0.3 * Math.cos(th), y + ctx.lineWidth * 0.3 * Math.sin(th));
                ctx.lineTo(x - 0.5 * pu.size * Math.cos(th), y - 0.5 * pu.size * Math.sin(th));
                ctx.stroke();
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_linesym = function (ctx, num, x, y) {
        var r = 0.32;
        ctx.setLineDash([]);
        ctx.lineCap = "round";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 3;
        switch (num) {
            case 1:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 3:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 4:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 5:
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - 0 * pu.size);
                ctx.lineTo(x + r * pu.size, y + 0 * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - 0 * pu.size, y - r * pu.size);
                ctx.lineTo(x + 0 * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
            case 6:
                r = r / Math.sqrt(2);
                ctx.beginPath();
                ctx.moveTo(x - r * pu.size, y - r * pu.size);
                ctx.lineTo(x + r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + r * pu.size, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y + r * pu.size);
                ctx.closePath();
                ctx.stroke();
                break;
        }
    };
    Puzzle_truncated_square.prototype.draw_inequality = function (ctx, num, x, y) {
        var th;
        var len = 0.14;
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
                ctx.beginPath();
                th = this.rotate_theta((num - 1) * 90 + 45);
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 315);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
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
                ctx.moveTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 180);
                ctx.lineTo(x + len * pu.size * Math.cos(th), y + len * pu.size * Math.sin(th));
                th = this.rotate_theta((num - 1) * 90 + 280);
                ctx.lineTo(x + len * Math.sqrt(2) * pu.size * Math.cos(th), y + len * Math.sqrt(2) * pu.size * Math.sin(th));
                ctx.stroke();
                break;
        }
    };
    Puzzle_truncated_square.prototype.draw_math = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                ctx.font = 0.8 * pu.size + "px sans-serif";
                ctx.text("\u221E", x, y);
                break;
            case 2:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＋", x, y);
                break;
            case 3:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("－", x, y);
                break;
            case 4:
                ctx.text("×", x, y);
                break;
            case 5:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
                ctx.text("＊", x, y);
                break;
            case 6:
                ctx.text("÷", x, y);
                break;
            case 7:
                ctx.font = 0.7 * pu.size + "px Helvetica,Arial";
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
    };
    Puzzle_truncated_square.prototype.draw_degital = function (ctx, num, x, y) {
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
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[1] === 1) {
                w1 = -(z1 + z2);
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[2] === 1) {
                w1 = z1 + z2;
                w2 = -2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[3] === 1) {
                w1 = z1;
                w2 = 0;
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[4] === 1) {
                w1 = -(z1 + z2);
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[5] === 1) {
                w1 = z1 + z2;
                w2 = 2 * z1;
                ctx.beginPath();
                ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
            if (num[6] === 1) {
                w1 = z1;
                w2 = 2 * (z1 + z2);
                ctx.beginPath();
                ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
                ctx.fill();
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_degital_f = function (ctx, num, x, y) {
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
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = -2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y - 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 0;
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = -(z1 + z2);
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1 + z2;
        w2 = 2 * z1;
        ctx.beginPath();
        ctx.arrow(x + w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + 2 * z2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        w1 = z1;
        w2 = 2 * (z1 + z2);
        ctx.beginPath();
        ctx.arrow(x - w1 * pu.size, y + w2 * pu.size, x + w1 * pu.size, y + w2 * pu.size, [w3 * pu.size, w4 * pu.size, -w3 * pu.size, w4 * pu.size]);
        ctx.stroke();
        ctx.fill();
        //contents
        this.draw_degital(ctx, num, x, y);
    };
    Puzzle_truncated_square.prototype.draw_dice = function (ctx, num, x, y) {
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_circle(ctx, x + ((i % 3) - 1) * 0.25 * pu.size, y + (((i / 3) | 0) - 1) * 0.25 * pu.size, 0.09);
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_pills = function (ctx, num, x, y) {
        var r = 0.15;
        ctx.fillStyle = "#999";
        switch (num) {
            case 1:
                this.draw_circle(ctx, x, y, r);
                break;
            case 2:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                break;
            case 3:
                this.draw_circle(ctx, x - 0 * pu.size, y - 0.23 * pu.size, r);
                this.draw_circle(ctx, x + 0.23 * pu.size, y + 0.2 * pu.size, r);
                this.draw_circle(ctx, x - 0.23 * pu.size, y + 0.2 * pu.size, r);
                break;
            case 4:
                this.draw_circle(ctx, x - 0.22 * pu.size, y - 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x - 0.22 * pu.size, y + 0.22 * pu.size, r);
                this.draw_circle(ctx, x + 0.22 * pu.size, y - 0.22 * pu.size, r);
                break;
            case 5:
                this.draw_circle(ctx, x, y, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y - 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x - 0.24 * pu.size, y + 0.24 * pu.size, r);
                this.draw_circle(ctx, x + 0.24 * pu.size, y - 0.24 * pu.size, r);
                break;
        }
    };
    Puzzle_truncated_square.prototype.draw_arrowB = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.2;
        var w2 = 0.4;
        var ri = -0.4;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_truncated_square.prototype.draw_arrowN = function (ctx, num, x, y) {
        var len1 = 0.38; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0.03;
        var w2 = 0.13;
        var ri = -0.25;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_truncated_square.prototype.draw_arrowS = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.32; //tip
        var w1 = 0.02;
        var w2 = 0.12;
        var ri = -0.2;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_truncated_square.prototype.draw_arrowGP = function (ctx, num, x, y) {
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
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                r1 * pu.size,
                w1 * pu.size,
                r2 * pu.size,
                w2 * pu.size,
                r3 * pu.size,
                w3 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_truncated_square.prototype.draw_arrowShort = function (ctx, num, x, y) {
        var len1 = 0.3; //nemoto
        var len2 = 0.3; //tip
        var w1 = 0.15;
        var w2 = 0.31;
        var ri = -0.33;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_truncated_square.prototype.draw_arrowtri = function (ctx, num, x, y) {
        var len1 = 0.25; //nemoto
        var len2 = 0.4; //tip
        var w1 = 0;
        var w2 = 0.35;
        var ri = 0;
        this.draw_arrow(ctx, num, x, y, len1, len2, w1, w2, ri);
    };
    Puzzle_truncated_square.prototype.draw_arrow = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 8) {
            th = this.rotate_theta((num - 1) * 45 - 180);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_truncated_square.prototype.draw_arrowcross = function (ctx, num, x, y) {
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
                ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_arroweight = function (ctx, num, x, y) {
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
    };
    Puzzle_truncated_square.prototype.draw_arrow8 = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num === 2 || num === 4 || num === 6 || num === 8) {
            len1 *= 1.3;
            len2 *= 1.2;
        }
        if (num > 0 && num <= 8) {
            th = this.rotate_theta((num - 1) * 45 - 180);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_truncated_square.prototype.draw_arrowfourtip = function (ctx, num, x, y) {
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
    };
    Puzzle_truncated_square.prototype.draw_arrow4 = function (ctx, num, x, y, len1, len2, w1, w2, ri) {
        var th;
        if (num > 0 && num <= 4) {
            th = this.rotate_theta((num - 1) * 90);
            ctx.beginPath();
            ctx.arrow(x - len1 * pu.size * Math.cos(th), y - len1 * pu.size * Math.sin(th), x + len2 * pu.size * Math.cos(th), y + len2 * pu.size * Math.sin(th), [
                0,
                w1 * pu.size,
                ri * pu.size,
                w1 * pu.size,
                ri * pu.size,
                w2 * pu.size,
            ]);
            ctx.fill();
            ctx.stroke();
        }
    };
    Puzzle_truncated_square.prototype.draw_arrowfouredge = function (ctx, num, x, y) {
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
                ctx.arrow(x +
                    len1 * pu.size * Math.cos(th1 + Math.PI * t1) +
                    0.1 * pu.size * Math.cos(th2), y +
                    len1 * pu.size * Math.sin(th1 + Math.PI * t1) +
                    0.1 * pu.size * Math.sin(th2), x +
                    len2 * pu.size * Math.cos(th1 + Math.PI * t2) -
                    0.05 * pu.size * Math.cos(th2), y +
                    len2 * pu.size * Math.sin(th1 + Math.PI * t2) -
                    0.05 * pu.size * Math.sin(th2), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
                ctx.stroke();
            }
        }
        for (var i = 4; i < 8; i++) {
            if (num[i] === 1) {
                th1 = this.rotate_theta(225 + 90 * i);
                th2 = this.rotate_theta(90 * i);
                ctx.beginPath();
                ctx.arrow(x +
                    len2 * pu.size * Math.cos(th1 + Math.PI * t2) -
                    0.1 * pu.size * Math.cos(th2), y +
                    len2 * pu.size * Math.sin(th1 + Math.PI * t2) -
                    0.1 * pu.size * Math.sin(th2), x +
                    len1 * pu.size * Math.cos(th1 + Math.PI * t1) +
                    0.05 * pu.size * Math.cos(th2), y +
                    len1 * pu.size * Math.sin(th1 + Math.PI * t1) +
                    0.05 * pu.size * Math.sin(th2), [
                    0,
                    w1 * pu.size,
                    ri * pu.size,
                    w1 * pu.size,
                    ri * pu.size,
                    w2 * pu.size,
                ]);
                ctx.fill();
                ctx.stroke();
            }
        }
    };
    Puzzle_truncated_square.prototype.draw_tents = function (ctx, num, x, y) {
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
                ctx.moveTo(x - r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y);
                ctx.lineTo(x + r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y + r2 * pu.size);
                ctx.lineTo(x - r1 * pu.size, y);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0) * pu.size);
                //ctx.arc(x,y-0.1*pu.size,0.3*pu.size,0,2*Math.PI,false);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) + 0.2) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) + 0.2) * pu.size);
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
                ctx.moveTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(330 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(330 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r1 * Math.cos(90 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(90 * (Math.PI / 180)) - 0.1) * pu.size);
                ctx.lineTo(x - r2 * Math.cos(210 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(210 * (Math.PI / 180)) - 0.1) * pu.size);
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
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y + 0.37 * pu.size, x + 0.3 * pu.size, y - 0.2 * pu.size);
                ctx.stroke();
                ctx.moveTo(x - 0.35 * pu.size, y);
                ctx.quadraticCurveTo(x - 0 * pu.size, y - 0.37 * pu.size, x + 0.3 * pu.size, y + 0.2 * pu.size);
                ctx.stroke();
                break;
            case 4:
                set_font_style(ctx, 0.8 * pu.size.toString(10), 1);
                ctx.text("～", x, y - 0.11 * pu.size);
                ctx.text("～", x, y + 0.09 * pu.size);
                ctx.text("～", x, y + 0.29 * pu.size);
                break;
        }
    };
    Puzzle_truncated_square.prototype.draw_star = function (ctx, num, x, y) {
        var r1 = 0.38;
        var r2 = 0.382 * r1;
        switch (num) {
            case 1:
                ctx.fillStyle = "#fff";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 2:
                ctx.fillStyle = "#000"; //"#009826";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
                break;
            case 3:
                ctx.fillStyle = "#999";
                ctx.setLineDash([]);
                ctx.lineCap = "butt";
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineWidth = 1;
                this.draw_star0(ctx, x, y + 0.03 * pu.size, r1, r2, 5);
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
    };
    Puzzle_truncated_square.prototype.draw_star0 = function (ctx, x, y, r1, r2, n) {
        var th1 = 90;
        var th2 = th1 + 180 / n;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
        ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        for (var i = 0; i < n; i++) {
            th1 += 360 / n;
            th2 += 360 / n;
            ctx.lineTo(x - r1 * Math.cos(th1 * (Math.PI / 180)) * pu.size, y - (r1 * Math.sin(th1 * (Math.PI / 180)) - 0) * pu.size);
            ctx.lineTo(x - r2 * Math.cos(th2 * (Math.PI / 180)) * pu.size, y - (r2 * Math.sin(th2 * (Math.PI / 180)) - 0) * pu.size);
        }
        ctx.fill();
        ctx.stroke();
    };
    Puzzle_truncated_square.prototype.draw_angleloop = function (ctx, num, x, y) {
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
    };
    Puzzle_truncated_square.prototype.draw_firefly = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.09;
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
                this.draw_circle(ctx, x - r1 * pu.size * Math.cos(th), y - r1 * pu.size * Math.sin(th), r2);
                break;
            case 5:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
        }
    };
    Puzzle_truncated_square.prototype.draw_sun_moon = function (ctx, num, x, y) {
        var r1 = 0.36, r2 = 0.34;
        switch (num) {
            case 1:
                set_circle_style(ctx, 1);
                this.draw_circle(ctx, x, y, r1);
                break;
            case 2:
                set_circle_style(ctx, 2);
                ctx.beginPath();
                ctx.arc(x, y, r1 * pu.size, -0.34 * Math.PI, 0.73 * Math.PI, false);
                ctx.arc(x - 0.12 * pu.size, y - 0.08 * pu.size, r2 * pu.size, 0.67 * Math.PI, -0.28 * Math.PI, true);
                ctx.closePath();
                ctx.fill();
                break;
        }
    };
    Puzzle_truncated_square.prototype.draw_sudokuetc = function (ctx, num, x, y) {
        switch (num) {
            case 1:
                var r = 0.14;
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.fillStyle = "#ccc";
                this.draw_polygon(ctx, x - r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                ctx.fillStyle = "#666";
                this.draw_polygon(ctx, x - r * pu.size, y - r * pu.size, r * Math.sqrt(2), 4, 45);
                this.draw_polygon(ctx, x + r * pu.size, y + r * pu.size, r * Math.sqrt(2), 4, 45);
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
                ctx.moveTo(x, y + r * pu.size);
                ctx.lineTo(x + r * pu.size, y);
                ctx.lineTo(x, y - r * pu.size);
                ctx.lineTo(x - r * pu.size, y);
                ctx.closePath();
                ctx.fill();
                break;
            case 4:
                var r = 0.2 * pu.size;
                var w = 1.8 * pu.size;
                var h = 0.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
                var r = 0.2 * pu.size;
                var w = 0.8 * pu.size;
                var h = 1.8 * pu.size;
                x = x - 0.4 * pu.size;
                y = y - 0.4 * pu.size;
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
    };
    Puzzle_truncated_square.prototype.draw_polyomino = function (ctx, num, x, y) {
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(200,200,200,1)";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1.2;
        ctx.lineCap = "butt";
        var r = 0.25;
        for (var i = 0; i < 9; i++) {
            if (num[i] === 1) {
                this.draw_polygon(ctx, x + ((i % 3) - 1) * r * pu.size, y + (((i / 3) | 0) - 1) * r * pu.size, r * 0.5 * Math.sqrt(2), 4, 45);
            }
        }
    };
    Puzzle_truncated_square.prototype.rotate_theta = function (th) {
        th = th + this.theta;
        if (this.reflect[0] === -1) {
            th = (180 - th + 360) % 360;
        }
        if (this.reflect[1] === -1) {
            th = (360 - th + 360) % 360;
        }
        th = (th / 180) * Math.PI;
        return th;
    };
    return Puzzle_truncated_square;
}(_Puzzle__WEBPACK_IMPORTED_MODULE_1__.Puzzle));



/***/ }),

/***/ "./src/model/Stack.ts":
/*!****************************!*\
  !*** ./src/model/Stack.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
var Stack = /** @class */ (function () {
    function Stack() {
        this.__a = [];
    }
    Stack.prototype.set = function (list) {
        this.__a = list;
    };
    Stack.prototype.push = function (o) {
        if (this.__a.length > 1000) {
            this.__a.shift();
        }
        this.__a.push(o);
    };
    Stack.prototype.pop = function () {
        if (this.__a.length > 0) {
            return this.__a.pop();
        }
        return null;
    };
    Stack.prototype.size = function () {
        return this.__a.length;
    };
    Stack.prototype.toString = function () {
        return '[' + this.__a.join(',') + ']';
    };
    return Stack;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_boot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/boot */ "./src/general/boot.ts");
/* harmony import */ var _main_Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/Control */ "./src/main/Control.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State */ "./src/State.ts");



var state = new _State__WEBPACK_IMPORTED_MODULE_2__.State();
window.onload = function () {
    var canvas = document.createElement("canvas");
    (0,_general_boot__WEBPACK_IMPORTED_MODULE_0__.boot)(state);
    document.addEventListener("beforeunload", function (eve) {
        if (document.getElementById("english")["value"] === "English") {
            eve["returnValue"] = "ページを移動します";
        }
        else {
            eve["returnValue"] = "Move page.";
        }
    }, { passive: false });
    /*
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        ondown_key = "touchstart";
        onup_key = "touchend";
        onmove_key = "touchmove";
        onleave_key = "touchmove";
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        ondown_key = "touchstart";
        onup_key = "touchend";
        onmove_key = "touchmove";
        onleave_key = "touchmove";
    } else {
        ondown_key = "mousedown";
        onup_key = "mouseup";
        onmove_key = "mousemove";
        onleave_key = "mouseleave";
    }
    */
    var checkms = 0; //hover event用一時変数
    var statedController = function (func) {
        return function (e) {
            func(state.pu, canvas, e);
        };
    };
    //canvas
    canvas.addEventListener("touchend", statedController(_main_Control__WEBPACK_IMPORTED_MODULE_1__.onUp), { passive: false });
    canvas.addEventListener("mouseup", statedController(_main_Control__WEBPACK_IMPORTED_MODULE_1__.onUp), { passive: false });
    canvas.addEventListener("touchmove", statedController(_main_Control__WEBPACK_IMPORTED_MODULE_1__.onMove), { passive: false });
    canvas.addEventListener("mousemove", statedController(_main_Control__WEBPACK_IMPORTED_MODULE_1__.onMove), { passive: false });
    canvas.addEventListener("mouseout", statedController(_main_Control__WEBPACK_IMPORTED_MODULE_1__.onOut), { passive: false });
    canvas.addEventListener("contextmenu", statedController(_main_Control__WEBPACK_IMPORTED_MODULE_1__.onContextmenu), { passive: false });
    document.addEventListener("keydown", statedController(_main_Control__WEBPACK_IMPORTED_MODULE_1__.onKeyDown), { passive: false });
    var count_undo = 0;
    var count_redo = 0;
    var timer;
    var undo_button = document.getElementById("tb_undo");
    var redo_button = document.getElementById("tb_redo");
    undo_button.addEventListener("touchstart", undoDown, { passive: false });
    undo_button.addEventListener("mousedown", undoDown, { passive: false });
    undo_button.addEventListener("touchend", undoUp, { passive: false });
    undo_button.addEventListener("mouseup", undoUp, { passive: false });
    undo_button.addEventListener("touchend", undoLeave, { passive: false });
    undo_button.addEventListener("mouseleave", undoLeave, { passive: false });
    undo_button.addEventListener("contextmenu", offcontext, { passive: false });
    redo_button.addEventListener("touchstart", redoDown, { passive: false });
    redo_button.addEventListener("mousedown", redoDown, { passive: false });
    redo_button.addEventListener("touchend", redoUp, { passive: false });
    redo_button.addEventListener("mouseup", redoUp, { passive: false });
    redo_button.addEventListener("touchend", redoLeave, { passive: false });
    redo_button.addEventListener("mouseleave", redoLeave, { passive: false });
    redo_button.addEventListener("contextmenu", offcontext, { passive: false });
    function offcontext(e) {
        e.preventDefault();
    }
    function undoDown(e) {
        e.preventDefault();
        undo_button.classList.add("active");
        count_redo = 0;
        new_timer = setInterval(function () {
            count_undo++;
            if (count_undo > 5) {
                pu.undo();
            }
        }, 25);
        if (new_timer !== timer) {
            clearInterval(timer);
            count = 0;
        }
        timer = new_timer;
    }
    function undoUp(e) {
        e.preventDefault();
        undo_button.classList.remove("active");
        if (count_undo) {
            clearInterval(timer);
            count_undo = 0;
        }
    }
    function undoLeave(e) {
        e.preventDefault();
        undo_button.classList.remove("active");
        clearInterval(timer);
        count_undo = 0;
    }
    function redoDown(e) {
        e.preventDefault();
        redo_button.classList.add("active");
        count_undo = 0;
        new_timer = setInterval(function () {
            count_redo++;
            if (count_redo > 5) {
                pu.redo();
            }
        }, 25);
        if (new_timer !== timer) {
            clearInterval(timer);
            count = 0;
        }
        timer = new_timer;
    }
    function redoUp(e) {
        e.preventDefault();
        if (count_redo) {
            redo_button.classList.remove("active");
            clearInterval(timer);
            count_redo = 0;
        }
    }
    function redoLeave(e) {
        e.preventDefault();
        redo_button.classList.remove("active");
        clearInterval(timer);
        count_redo = 0;
    }
    //クリックイベント
    document.addEventListener("touchstart", window_click, { passive: false });
    document.addEventListener("mousedown", window_click, { passive: false });
    function window_click(e) {
        //modalwindow
        if (e.target.className === "modal") {
            document.getElementById(e.target.id).style.display = "none";
            e.preventDefault();
        }
        switch (e.target.id) {
            //canvas
            case "canvas":
                document.getElementById("inputtext").blur(); //テキストボックスからフォーカスを外す
                onDown(e);
                if (checkms === 0) {
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
                ResetCheck();
                break;
            case "tb_delete":
                DeleteCheck();
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
                f_mdown(e);
                if (checkms === 0) {
                    e.preventDefault();
                }
                break;
            //savetext
            case "address_edit":
                savetext_edit();
                e.preventDefault();
                break;
            case "address_solve":
                savetext_solve();
                e.preventDefault();
                break;
            case "expansion":
                expansion();
                e.preventDefault();
                break;
            case "pp_file":
                make_ppfile();
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
                savetext_withsolution();
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
                document.getElementById("nb_margin1").checked = true;
                e.preventDefault();
                break;
            case "nb_margin2_lb":
                document.getElementById("nb_margin2").checked = true;
                e.preventDefault();
                break;
            case "saveimagename":
                return;
            //case "closeBtn_image1":
            //  saveimage_window();
            //  break;
            case "closeBtn_image2":
                saveimage_download();
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
                CreateCheck();
                e.preventDefault();
                break;
            case "closeBtn_nb2":
                newgrid();
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
                newgrid_r();
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
                panel_onoff();
                e.preventDefault();
                break;
            case "edge_button":
                edge_onoff();
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
            checkms = 1;
            pu.subsymbolmode(e.target.id.slice(3));
            e.preventDefault();
            //シンボルホバーetc
        }
        else if (e.target.id.slice(0, 2) === "ms") {
            checkms = 1;
            return;
        }
        else if (checkms === 1) {
            checkms = 0;
            return;
        }
    }
    //panel(drag_window)
    var x_window;
    var y_window;
    function mdown(e) {
        var elements = document.getElementById("float-key-header");
        elements.classList.add("drag");
        if (e.type === "mousedown") {
            var event = e;
        }
        else {
            var event = e.changedTouches[0];
        }
        x_window = event.pageX - elements.offsetLeft;
        y_window = event.pageY - elements.offsetTop;
        var drag = document.getElementsByClassName("drag")[0];
        document.body.addEventListener("touchmove", mmove, { passive: false });
        document.body.addEventListener("mousemove", mmove, { passive: false });
    }
    function mmove(e) {
        var drag = document.getElementsByClassName("drag")[0];
        var body = document.getElementById("float-key-body");
        if (e.type === "mousemove") {
            var event = e;
        }
        else {
            var event = e.changedTouches[0];
        }
        e.preventDefault();
        drag.style.top = event.pageY - y_window + "px";
        drag.style.left = event.pageX - x_window + "px";
        body.style.top = event.pageY - y_window + "px";
        body.style.left = event.pageX - x_window + "px";
        drag.addEventListener("touchend", mup, { passive: false });
        drag.addEventListener("mouseup", mup, { passive: false });
        document.body.addEventListener("touchleave", mup, { passive: false });
        document.body.addEventListener("mouseleave", mup, { passive: false });
    }
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];
        if (drag) {
            document.body.removeEventListener("touchmove", mmove, { passive: false });
            document.body.removeEventListener("mousemove", mmove, { passive: false });
            drag.removeEventListener("touchend", mup, { passive: false });
            drag.removeEventListener("mouseup", mup, { passive: false });
            drag.classList.remove("drag");
        }
    }
    //パネル入力設定
    var float_canvas = document.getElementById("float-canvas");
    function f_mdown(e) {
        if (e.type === "mousedown") {
            var event = e;
            var xf = event.offsetX;
            var yf = event.offsetY;
        }
        else {
            var float_canvas = document.getElementById("float-canvas");
            var event = e.changedTouches[0];
            var xf = event.pageX -
                (float_canvas.getBoundingClientRect().x -
                    document.documentElement.getBoundingClientRect().left);
            var yf = event.pageY -
                (float_canvas.getBoundingClientRect().y -
                    document.documentElement.getBoundingClientRect().top);
        }
        var sizef = panel_pu.sizef;
        var numxf = Math.floor(xf / (sizef + 3));
        var numyf = Math.floor(yf / (sizef + 3));
        var n = numxf + numyf * panel_pu.nxf;
        var paneletc = [
            "ja_K",
            "ja_H",
            "Kan",
            "Rome",
            "Greek",
            "Cyrillic",
            "europe",
            "Chess",
            "card",
        ];
        if (pu.mode[pu.mode.qa].edit_mode === "symbol") {
            panel_pu.edit_num = n;
            if (document.getElementById("panel_button").textContent === "ON" &&
                pu.onoff_symbolmode_list[pu.mode[pu.mode.qa].symbol[0]]) {
                if (0 <= panel_pu.edit_num && panel_pu.edit_num <= 8) {
                    pu.key_number((panel_pu.edit_num + 1).toString());
                }
                else if (panel_pu.edit_num === 9) {
                    pu.key_number(0);
                }
                else if (panel_pu.edit_num === 11) {
                    pu.key_space();
                }
            }
            panel_pu.draw_panel();
        }
        else if (panel_pu.panelmode === "number") {
            if (0 <= n && n <= 9) {
                pu.key_number(panel_pu.cont[n].toString());
            }
            else if (n === 10) {
                pu.key_backspace();
            }
            else if (n === 11) {
                pu.key_space();
            }
        }
        else if (panel_pu.panelmode === "alphabet" ||
            panel_pu.panelmode === "alphabet_s") {
            if (0 <= n && n <= 27) {
                pu.key_number(panel_pu.cont[n].toString());
            }
            else if (n === 28) {
                pu.key_number(" ");
            }
            else if (n >= 29) {
                pu.key_space();
            }
        }
        else if (panel_pu.panelmode === "key_symbol") {
            if (panel_pu.cont[n] && panel_pu.cont[n] != " ") {
                pu.key_number(panel_pu.cont[n]);
            }
            else if (panel_pu.cont[n] === " ") {
                pu.key_space();
            }
        }
        else if (paneletc.indexOf(panel_pu.panelmode) != -1) {
            if (panel_pu.cont[n] && panel_pu.cont[n] != "　") {
                pu.key_number(panel_pu.cont[n]);
            }
            else if (panel_pu.cont[n] === "　") {
                pu.key_space();
            }
        }
    }
};

})();

/******/ })()
;
//# sourceMappingURL=ts.js.map