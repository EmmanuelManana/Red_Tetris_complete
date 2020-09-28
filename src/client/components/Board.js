import React from 'react';
import '../styles/Board.scss'
import { Cell } from './Cell';

//pass a 2D array.
export const Board = ({ blocks }) => (
  <div className="board">

    {blocks.map((row, y) => (
      <div className="row" key={y}>

        {row.map((cellType, x) => (
          <Cell type={cellType} key={x} />
        ))}
        
      </div>
    ))}

  </div>
);
