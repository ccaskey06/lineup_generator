'use strict';

class DraftGroup {
  constructor(id, gameTypeId, gameCount, sport, games, players) {
    this.draftGroupId = id;
    this.gameTypeId = gameTypeId;
    this.gameCount = gameCount;
    this.sport = sport;
    this.games = games;
    this.players = players;
  }
}

module.exports = DraftGroup;
