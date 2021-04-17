'use strict';

class Player {
  constructor(id, name, pos, capSalary, regSalary, status, fpp, oppRank, teamId, teamName, isCaptain=false) {
    this.playerId = id;
    this.name = name;
    this.position = pos;
    this.captainSalary = capSalary;
    this.regularSalary = regSalary;
    this.status = status;
    this.projectedPoints = fpp;
    this.opponentRank = oppRank;
    this.teamId = teamId;
    this.teamName = teamName;
    this.isCaptain = isCaptain;
  }

  set captainStatus(isCaptain) {
    this.isCaptain = isCaptain;
  }

  toString() {
    return `${this.name} : ${this.team} : ${this.sala}`
  }
}
