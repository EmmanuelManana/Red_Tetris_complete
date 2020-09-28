import { store } from '../store';
import {
  dropPieceDown,
  movePieceDown,
  movePieceLeft,
  movePieceRight,
  rotatePiece,
  putPiece,
  finishGame,
} from '../actions';
import { PLAYING, FINISHED } from '../constants/PlayerStatuses';
import { FALLING, PLACED, CANNOT_BE_PLACED } from '../constants/PieceStatuses';
import { cloneDeep as clone, isEqual } from 'lodash';

let interval;
let activePiece;

const  stateListener = () => {
  const state = store.getState();

  if (state.status === PLAYING && !interval) {
    interval = setInterval(() => {
      store.dispatch(movePieceDown());
    }, 1500);
  }

  if (state.status === FINISHED && interval) {
    clearInterval(interval);
    interval = null;
  }

  if (
    state.activePiece &&
    state.activePiece.status !== FALLING &&
    !isEqual(activePiece, state.activePiece)
  ) {
    const { status } = state.activePiece;

    if (status === PLACED) {
      store.dispatch(putPiece(state.activePiece));
    } else if (status === CANNOT_BE_PLACED) {
      store.dispatch(finishGame());
    }

    activePiece = clone(state.activePiece);
  }
}

const handler = {
  ArrowUp: rotatePiece,
  ArrowRight: movePieceRight,
  ArrowDown: movePieceDown,
  ArrowLeft: movePieceLeft,
  Space: dropPieceDown,
};

const  keyPressListener = (event) => {
  // prevent default key press behavior = "refresh"

  event.preventDefault();
  if (!['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Space'].includes(event.code)) {
    return;
  }

 // speed up the block on the down key-press
  if (event.code === 'ArrowDown') {
    clearInterval(interval);
    interval = setInterval(() => {
      store.dispatch(movePieceDown());
    }, 1000);
  }

  store.dispatch(handler[event.code]());
}

export { stateListener, keyPressListener };
