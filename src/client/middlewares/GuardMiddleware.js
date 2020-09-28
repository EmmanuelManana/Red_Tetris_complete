import * as actionType from '../constants/AllActionTypes';
import * as pieceMovementsType from '../constants/PieceMovementsTypes';
import { PLAYING } from '../constants/PlayerStatuses';
import { FALLING } from '../constants/PieceStatuses';

const GuardMiddleWare = ({ getState }) => {
  return next => action => {

    // inactive status return.
    const state = getState();
    if (action.type !== actionType.UPDATE_STATE && state.status !== PLAYING) {
      return;
    }

    // no state, no moving peices,  return;
    if (
      Object.values(pieceMovementsType).includes(action.type) &&
      (!state.activePiece || state.activePiece.status !== FALLING)
    ) {
      return;
    }

    return next(action);
  };
};

export { GuardMiddleWare };
