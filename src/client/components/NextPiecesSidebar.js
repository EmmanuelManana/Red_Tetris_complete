import React from 'react';
import { Board } from './Board';
import '../styles/NextPiecesSidebar.scss'


const NextPiecesSidebar = ({ pieces }) => {
  return (
    <aside id="next-pieces-sidebar">
      {pieces.map((blocks, index) => (
        <div className="next-piece" key={index}>
          <Board blocks={blocks} />
        </div>
      ))}
    </aside>
  );
};

export { NextPiecesSidebar };
