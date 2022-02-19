import { Puzzle } from "../model/Puzzle";

export type UndoState = {
  count_undo: number;
  count_redo: number;
  timer: number;
  undo_button: HTMLButtonElement;
  redo_button: HTMLButtonElement;
  pu: Puzzle;
};

export const undoDown = (undoState: UndoState, e: TouchEvent | MouseEvent) => {
  e.preventDefault();
  undoState.undo_button.classList.add("active");
  undoState.count_redo = 0;
  const new_timer = window.setInterval(() => {
    undoState.count_undo++;
    if (undoState.count_undo > 5) {
      undoState.pu.undo();
    }
  }, 25);
  if (new_timer !== undoState.timer) {
    clearInterval(undoState.timer);
    undoState.count_redo = 0;
  }
  undoState.timer = new_timer;
};

export const undoUp = (undoState: UndoState, e: TouchEvent | MouseEvent) => {
  e.preventDefault();
  undoState.undo_button.classList.remove("active");
  if (undoState.count_undo) {
    clearInterval(undoState.timer);
    undoState.count_undo = 0;
  }
};

export const undoLeave = (undoState: UndoState, e: TouchEvent | MouseEvent) => {
  e.preventDefault();
  undoState.undo_button.classList.remove("active");
  clearInterval(undoState.timer);
  undoState.count_undo = 0;
};

export const redoDown = (undoState: UndoState, e: TouchEvent | MouseEvent) => {
  e.preventDefault();
  undoState.redo_button.classList.add("active");
  undoState.count_undo = 0;
  const new_timer = window.setInterval(() => {
    undoState.count_redo++;
    if (undoState.count_redo > 5) {
      undoState.pu.redo();
    }
  }, 25);
  if (new_timer !== undoState.timer) {
    clearInterval(undoState.timer);
    undoState.count_undo = 0;
  }
  undoState.timer = new_timer;
};

export const redoUp = (undoState: UndoState, e: TouchEvent | MouseEvent) => {
  e.preventDefault();
  if (undoState.count_redo) {
    undoState.redo_button.classList.remove("active");
    clearInterval(undoState.timer);
    undoState.count_redo = 0;
  }
};

export const redoLeave = (undoState: UndoState, e: TouchEvent | MouseEvent) => {
  e.preventDefault();
  undoState.redo_button.classList.remove("active");
  clearInterval(undoState.timer);
  undoState.count_redo = 0;
};
