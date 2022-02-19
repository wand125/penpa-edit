//panel(drag_window)
var x_window;
var y_window;

const mdown = (e) => {
  var elements = document.getElementById("float-key-header");
  elements.classList.add("drag");

  let event;
  if (e.type === "mousedown") {
    event = e;
  } else {
    event = e.changedTouches[0];
  }

  x_window = event.pageX - elements.offsetLeft;
  y_window = event.pageY - elements.offsetTop;
  const drag = document.getElementsByClassName("drag")[0];
  document.body.addEventListener("touchmove", mmove, { passive: false });
  document.body.addEventListener("mousemove", mmove, { passive: false });
};

const mmove = (e) => {
  var drag = document.getElementsByClassName("drag")[0] as HTMLElement;
  var body = document.getElementById("float-key-body");
  if (e.type === "mousemove") {
    var event = e;
  } else {
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
};

function mup(e) {
  const drag = document.getElementsByClassName("drag")[0];
  if (drag) {
    document.body.removeEventListener("touchmove", mmove);
    document.body.removeEventListener("mousemove", mmove);
    drag.removeEventListener("touchend", mup);
    drag.removeEventListener("mouseup", mup);
    drag.classList.remove("drag");
  }
}

//パネル入力設定

const f_mdown = (pu, panel_pu, e) => {
  const float_canvas = document.getElementById("float-canvas");
  let xf: number, yf: number;
  if (e.type === "mousedown") {
    var event = e;
    xf = event.offsetX;
    yf = event.offsetY;
  } else {
    var event = e.changedTouches[0];
    xf =
      event.pageX -
      (float_canvas.getBoundingClientRect().x -
        document.documentElement.getBoundingClientRect().left);
    yf =
      event.pageY -
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
    if (
      document.getElementById("panel_button").textContent === "ON" &&
      pu.onoff_symbolmode_list[pu.mode[pu.mode.qa].symbol[0]]
    ) {
      if (0 <= panel_pu.edit_num && panel_pu.edit_num <= 8) {
        pu.key_number((panel_pu.edit_num + 1).toString());
      } else if (panel_pu.edit_num === 9) {
        pu.key_number(0);
      } else if (panel_pu.edit_num === 11) {
        pu.key_space();
      }
    }
    panel_pu.draw_panel();
  } else if (panel_pu.panelmode === "number") {
    if (0 <= n && n <= 9) {
      pu.key_number(panel_pu.cont[n].toString());
    } else if (n === 10) {
      pu.key_backspace();
    } else if (n === 11) {
      pu.key_space();
    }
  } else if (
    panel_pu.panelmode === "alphabet" ||
    panel_pu.panelmode === "alphabet_s"
  ) {
    if (0 <= n && n <= 27) {
      pu.key_number(panel_pu.cont[n].toString());
    } else if (n === 28) {
      pu.key_number(" ");
    } else if (n >= 29) {
      pu.key_space();
    }
  } else if (panel_pu.panelmode === "key_symbol") {
    if (panel_pu.cont[n] && panel_pu.cont[n] != " ") {
      pu.key_number(panel_pu.cont[n]);
    } else if (panel_pu.cont[n] === " ") {
      pu.key_space();
    }
  } else if (paneletc.indexOf(panel_pu.panelmode) != -1) {
    if (panel_pu.cont[n] && panel_pu.cont[n] != "　") {
      pu.key_number(panel_pu.cont[n]);
    } else if (panel_pu.cont[n] === "　") {
      pu.key_space();
    }
  }
};
