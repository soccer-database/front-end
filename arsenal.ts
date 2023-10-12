import {teams} from "./ArsenalPlayer"
import {leagues} from "./team_overview"
const arsenalPlayers = teams;

interface Team {
    name: string
    fullName: string,
    nickname: string,
    shortName: string,
    founded: Date,
    ground: Ground,
    owner: string,
    manager: string
    players: Player[]
}

interface Player {
    teamName ?: string,
    name: string,
    position: Position,
    squadNumber: number,
    nationality: string,
    dateOfBirth: Date,
    img: string
}

interface Position {
    id?: number
    name: string
}

interface Ground {
    name: string,
    latitude: number,
    longitude: number,
    capacity: number
}

const positions: Position[] = ([...new Set(arsenalPlayers.map((player: { position: any }) => player.position))] as string[])
.map((position: string, i: number) => ({ id: i, name: position }))

const playersForTeam: Player[] = arsenalPlayers.map((player: { position: string; dateOfBirth: string | number | Date }) => ({ ...player, position: positions.find(position => position.name === player.position), dateOfBirth: new Date(player.dateOfBirth) })) as Player[]

playersForTeam.forEach(player=> {
    const players = leagues[0].teams.find((team: { shortName: string })=>team.shortName === player.teamName)?.players as Player[]
    players.push(player)

})

console.log(JSON.stringify(leagues))