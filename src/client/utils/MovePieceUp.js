import { EMPTY } from '../../server/constants/cell-types';
import { cloneDeep} from 'lodash';

export const movePieceUp = (piece, step) => {
  // avoid state mutation, while cloning
  //(copy) clone piece and update the vertical position, rotation
  return Object.assign(cloneDeep(piece), {
    y:
      Math.max(piece.y - step, -piece.blocks.findIndex(row => row.some(cell => cell !== EMPTY))) ||
      0,
  });
};
