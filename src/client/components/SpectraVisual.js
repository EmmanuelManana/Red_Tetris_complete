import React from 'react';
import classNames from 'classnames';
import { Board } from './Board';
import { PLAYING } from '../constants/PlayerStatuses';
import '../styles/SpectraVisual.scss'

const SpectraVisual = ({ player, participants }) => {
  return (
    <header id="spectrums-visual-container">

      <div className="spectrums-visual">
        {participants.map(({ id, name, status, score, boardSpectrum }) => {
          const className = classNames(
            'spectrum',
            { 'player': id === player.id },
            { 'opponent': id !== player.id },
            { 'active': status === PLAYING }
          );
          return (
            <div className={className} key={id}>
              <Board blocks={boardSpectrum} />
              <div className="score">
                {name}:
                {score}
                <span className="tooltip-text">{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export { SpectraVisual }