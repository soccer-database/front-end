"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArsenalPlayer_1 = require("./ArsenalPlayer");
const team_overview_1 = require("./team_overview");
const arsenalPlayers = ArsenalPlayer_1.teams;
const positions = [...new Set(arsenalPlayers.map((player) => player.position))]
    .map((position, i) => ({ id: i, name: position }));
const playersForTeam = arsenalPlayers.map((player) => (Object.assign(Object.assign({}, player), { position: positions.find(position => position.name === player.position), dateOfBirth: new Date(player.dateOfBirth) })));
playersForTeam.forEach(player => {
    var _a;
    const players = (_a = team_overview_1.leagues[0].teams.find((team) => team.shortName === player.teamName)) === null || _a === void 0 ? void 0 : _a.players;
    players.push(player);
});
console.log(JSON.stringify(team_overview_1.leagues));
