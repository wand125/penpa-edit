import { boot } from "./general/boot";
import {
  onMove,
  onUp,
  onContextmenu,
  onKeyDown,
  onOut,
  onDown,
} from "./main/Control";
import {
  redoDown,
  redoLeave,
  redoUp,
  undoDown,
  undoLeave,
  undoUp,
} from "./main/Undo";
import { window_click } from "./main/WindowClick";
import { State } from "./State";

const state = new State();

window.onload = () => {
  const canvas = document.createElement("canvas");

  boot(state);

  document.addEventListener(
    "beforeunload",
    (eve) => {
      if (document.getElementById("english")["value"] === "English") {
        return "ページを移動します";
      } else {
        return "Move page.";
      }
    },
    { passive: false }
  );

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

  const statedController = (func) => {
    return (e) => {
      func(state.pu, canvas, e);
    };
  };

  //canvas
  canvas.addEventListener("touchend", statedController(onUp), {
    passive: false,
  });
  canvas.addEventListener("mouseup", statedController(onUp), {
    passive: false,
  });
  canvas.addEventListener("touchmove", statedController(onMove), {
    passive: false,
  });
  canvas.addEventListener("mousemove", statedController(onMove), {
    passive: false,
  });
  canvas.addEventListener("mouseout", statedController(onOut), {
    passive: false,
  });
  canvas.addEventListener("contextmenu", statedController(onContextmenu), {
    passive: false,
  });
  document.addEventListener("keydown", statedController(onKeyDown), {
    passive: false,
  });

  const redoController = (func) => {
    return (e) => {
      func(undoState, e);
    };
  };
  const undoState = {
    count_undo: 0,
    count_redo: 0,
    timer: -1,
    undo_button: document.getElementById("tb_undo"),
    redo_button: document.getElementById("tb_redo"),
    pu: state.pu,
  };

  const { undo_button, redo_button } = undoState;
  undo_button.addEventListener("touchstart", redoController(undoDown), {
    passive: false,
  });
  undo_button.addEventListener("mousedown", redoController(undoDown), {
    passive: false,
  });
  undo_button.addEventListener("touchend", redoController(undoUp), {
    passive: false,
  });
  undo_button.addEventListener("mouseup", redoController(undoUp), {
    passive: false,
  });
  undo_button.addEventListener("touchend", redoController(undoLeave), {
    passive: false,
  });
  undo_button.addEventListener("mouseleave", redoController(undoLeave), {
    passive: false,
  });

  undo_button.addEventListener("contextmenu", offcontext, { passive: false });
  redo_button.addEventListener("touchstart", redoController(redoDown), {
    passive: false,
  });
  redo_button.addEventListener("mousedown", redoController(redoDown), {
    passive: false,
  });
  redo_button.addEventListener("touchend", redoController(redoUp), {
    passive: false,
  });
  redo_button.addEventListener("mouseup", redoController(redoUp), {
    passive: false,
  });
  redo_button.addEventListener("touchend", redoController(redoLeave), {
    passive: false,
  });
  redo_button.addEventListener("mouseleave", redoController(redoLeave), {
    passive: false,
  });

  redo_button.addEventListener("contextmenu", offcontext, { passive: false });

  function offcontext(e) {
    e.preventDefault();
  }

  //クリックイベント
  document.addEventListener("touchstart", (e) => window_click(state, e), { passive: false });
  document.addEventListener("mousedown", (e) => window_click(state, e), { passive: false });
};
