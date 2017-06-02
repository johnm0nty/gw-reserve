import {Room} from "../interfaces/room"

export class RoomsService {
    rooms: Room[] = this.fetchRooms()

    fetchRooms ():Room[] {
        return [
            {name: "Halo", picture: ""},
            {name: "SimCity", picture: ""},
            {name: "Sonic", picture: ""},
            {name: "StarFox", picture: ""},
            {name: "Zelda", picture: ""}
        ]
    }
}