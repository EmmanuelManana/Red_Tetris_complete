import { cloneDeep} from 'lodash';

export const movePieceDown = (piece) => {
  // avoid state mutation, while cloning
  //clone piece and update the vertical position
  return Object.assign(cloneDeep(piece), {
    y: piece.y + 1,
  });
};

