'use strict';

class Game {
  constructor(id, awayTeam, homeTeam, startTime, desc) {
    this.gameId = id;
    this.awayTeamId = awayTeam;
    this.homeTeamId = homeTeam;
    this.startTime = startTime;
    this.description = desc;
  }

  formatDateTime(dateTime) {
    return '';
  }

  set homeTeamName(homeTeamName) {
    this.homeTeamName = homeTeamName;
  }

  set awayTeamName(awayTeamName) {
    this.awayTeamName = awayTeamName;
  }

  set weather(weather) {
    this.weather = weather;
  }

  set arenaType(isDome) {
    this.isDome = isDome;
  }
}

module.exports = Game;
