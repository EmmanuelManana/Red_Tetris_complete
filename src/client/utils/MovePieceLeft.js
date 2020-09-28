import { cloneDeep} from 'lodash';

export const movePieceLeft = piece => {
  // avoid state mutation, while cloning
  //clone piece and update the horizonal position
  return Object.assign(cloneDeep(piece), {
    x: piece.x - 1,
  });
};
