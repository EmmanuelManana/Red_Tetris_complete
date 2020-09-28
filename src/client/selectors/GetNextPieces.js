import { renderPieceOnBoard } from '../utils/RenderPieceOnBoard.js';
import { EMPTY } from '../../server/constants/cell-types';
import { cloneDeep } from 'lodash';

const SIDE_LENGTH = 4;

const createEmptyBlocks = (rows, columns) => {
  return Array.from(Array(rows), () => new Array(columns).fill(EMPTY));
};

const getNormalizedPieceBlocks = (blocks) => {
  const normalizedBlocks = createEmptyBlocks(SIDE_LENGTH, SIDE_LENGTH);

  //filter non-empty blocks, fetch the tetromoni
  const clearedBlocks = blocks.filter(row => row.some(cell => cell !== EMPTY));

  // avoid state mutation, then clone(copy)
  // filter pice before render
  const piece = Object.assign(
    {
      blocks: cloneDeep(clearedBlocks),
    },
    {
      y: Math.floor((normalizedBlocks.length - clearedBlocks.length) / 2),
      x: Math.ceil((normalizedBlocks[0].length - clearedBlocks[0].length) / 2),
    }
  );

  // pass only the shape
  return renderPieceOnBoard(piece, normalizedBlocks);
};

export const getNextPieces = ({ nextPieces }) => {
  return nextPieces.map(({ blocks }) => getNormalizedPieceBlocks(blocks));
};


