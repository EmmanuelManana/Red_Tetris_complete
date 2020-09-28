import React from 'react';
import classNames from 'classnames';
import { Board } from './Board.js';
import { PLAYING } from '../constants/PlayerStatuses';

import '../styles/MainBoard.scss'

const MainBoard = ({ playerStatus, blocks }) => {
  const className = classNames({ 'active': playerStatus === PLAYING });
  return (
    <section id="main-board" className={className}>
      <Board blocks={blocks} />
    </section>
  );
};

export { MainBoard };
