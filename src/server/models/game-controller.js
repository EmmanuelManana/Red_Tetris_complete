import { UserError } from '../errors/user-error';
import { GameError } from '../errors/game-error';
import { isUndefined } from 'lodash';
import { logger } from '../logger';

export class GameController {
  constructor() {
    this.games = new Map();
  }

  addGame(game) {
    if (this.isGameExists(game.roomName)) {
      throw new GameError(`A game with name ${game.roomName}, already exist`);
    }

    this.games.set(game.roomName, game);

    logger.info(`the room ${game.roomName} has been added`, {
      room: game.roomName,
    });
  }

  isGameExists(roomName) {
    return this.games.has(roomName);
  }

  getGame(roomName) {
    return this.games.get(roomName);
  }

  removeGame(roomName) {
    this.games.delete(roomName);

    logger.info(`the room ${game.roomName} has been removed`, {
      roomName,
    });
  }

  authPlayer(player) {
    if (isUndefined(player) || !this.isGameExists(player.roomName)) {
      throw new UserError('Invalid Input');
    }
    return true;
  }

  authAdmin(player) {
    this.authPlayer(player);
    if (!player.isAdmin) {
      throw new UserError('permission: user must be -sudo');
    }
    return true;
  }
}
