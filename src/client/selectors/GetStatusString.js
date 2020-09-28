import converter from 'number-to-words';
import { PENDING, RUNNING, COMPLETED } from '../constants/GameStatuses.js';
import { PLAYING } from '../constants/PlayerStatuses';

const getStatusString = ({ gameStatus, id: playerId, playersList }) => {
  switch (gameStatus) {
    case PENDING: {
      if (playersList.length === 1) {
        return "There's only You in The Room";
      } else {
        return `${playersList.length} players joined!`;
      }
    }

    case RUNNING: {
      const player = playersList.find(({ id }) => id === playerId);

      if (player.status === PLAYING) {
        return 'Game In Progress';
      } else {
        const playingOpponents = playersList.filter(({ status }) => status === PLAYING);

        if (playingOpponents.length === 1) {
          return 'There Are People or A Person still Playing';
        } else {
          return `${playingOpponents.length} opponents are still playing the game`;
        }
      }
    }

    case COMPLETED: {
      const player = playersList.find(({ id }) => id === playerId);

      if (player.position === 0) {
        return 'You won the game';
      } else {
        return ` You Came ${converter.toOrdinal(player.position + 1)}`;
      }
    }
  }
};

export { getStatusString };
