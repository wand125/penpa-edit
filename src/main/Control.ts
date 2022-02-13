import { duplicate } from "../general/duplicate";

const coord_point = (pu, canvas, e) => {
  let x = e.pageX - canvas.offsetLeft;
  let y = e.pageY - canvas.offsetTop;
  let min0 = 10e6;
  let min = 10e6;
  let num = 0;
  //const startTime = performance.now();
  for (let i = 0; i < pu.point.length; i++) {
    if (pu.point[i] && pu.type.indexOf(pu.point[i].type) != -1) {
      min0 = (x - pu.point[i].x) ** 2 + (y - pu.point[i].y) ** 2;
      if (min0 < min) {
        min = min0;
        num = i;
      }
    }
  }
  //const endTime = performance.now();
  //console.log(endTime - startTime);
  num = Math.floor(num);
  return { x, y, num };
};

export const onDown = (pu, canvas, e) => {
  if (e.type === "mousedown") {
    var event = e;
  } else {
    var event = e.changedTouches[0];
    e.preventDefault(); //mouseとtouchが両方起動する時、touchのみ
  }
  const obj = coord_point(pu, canvas, event);
  const x = obj.x;
  const y = obj.y;
  const num = obj.num;
  if (pu.point[num].use === 1) {
    if (event.button === 2) {
      pu.mouse_mode = "down_right";
      pu.mouseevent(x, y, num);
    } else {
      //左クリックorタップ
      pu.mouse_mode = "down_left";
      pu.mouseevent(x, y, num);
    }
  }
};

export const onUp = (pu, canvas, e) => {
  if (e.type === "mouseup") {
    var event = e;
  } else {
    var event = e.changedTouches[0];
    e.preventDefault(); //mouseとtouchが両方起動する時、touchのみ
  }
  var obj = coord_point(pu, canvas, event);
  var x = obj.x,
    y = obj.y,
    num = obj.num;
  pu.mouse_mode = "up";
  pu.mouseevent(x, y, num);
};

export const onMove = (pu, canvas, e) => {
  if (e.type === "mousemove") {
    var event = e;
  } else {
    var event = e.changedTouches[0];
  }
  e.preventDefault();
  var obj = coord_point(pu, canvas, event);
  var x = obj.x,
    y = obj.y,
    num = obj.num;
  if (pu.point[num].use === 1) {
    pu.mouse_mode = "move";
    pu.mouseevent(x, y, num);
  }
};

export const onOut = (pu, e) => {
  pu.mouse_mode = "out";
  pu.mouseevent(0, 0, 0);
  return;
};

export const onContextmenu = (pu, e) => {
  //右クリック
  e.preventDefault();
};

export const onKeyDown = (pu, e) => {
  if (
    e.target.type === "number" ||
    e.target.type === "text" ||
    e.target.id == "savetextarea_pp" ||
    e.target.id == "inputtext"
  ) {
    //入力フォーム用
  } else {
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
    } else if (key === "F3") {
      pu.mode_qa("pu_a");
      event.returnValue = false;
    }
    if (
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "ArrowUp" ||
      key === "ArrowDown"
    ) {
      //arrow
      pu.key_arrow(key);
      event.returnValue = false;
    }

    if (!ctrl_key) {
      if (shift_key && key === " ") {
        pu.key_number(key);
        event.returnValue = false;
      } else if (
        str_num.indexOf(key) != -1 ||
        str_alph_low.indexOf(key) != -1 ||
        str_alph_up.indexOf(key) != -1 ||
        str_sym.indexOf(key) != -1
      ) {
        pu.key_number(key);
      } else if (key === " ") {
        pu.key_space();
        event.returnValue = false;
      } else if (key === "Backspace") {
        pu.key_backspace();
        event.returnValue = false;
      }
    }

    if (ctrl_key) {
      switch (key) {
        case "d": //Ctrl+d
        case "D":
          duplicate(pu);
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
