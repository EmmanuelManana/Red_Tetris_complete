import React from 'react';
import { MainBoard } from './MainBoard';
import { StatisticsSidebar } from './StatisticsSidebar';
import { NextPiecesSidebar } from './NextPiecesSidebar';
import { StatusLine } from './StatusBar';
import { WAITING } from '../constants/PlayerStatuses';
import { SpectraVisual } from './SpectraVisual';

export const GameScreen = ({ player, board, participants, statistics, nextPieces, statusString }) => 
  (
    <>
      <StatusLine status={statusString} /> 
      <main>

        {player.status !== WAITING && <NextPiecesSidebar pieces={nextPieces} />}
        <MainBoard playerStatus={player.status} blocks={board} />
        {player.status !== WAITING && <StatisticsSidebar statistics={statistics} />}
        
      </main>
      <SpectraVisual participants={participants} player={player} />
    </>
  );
