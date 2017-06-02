import {Component} from "@angular/core"
import {CommonModule} from "@angular/common"

import {RoomsService} from "../services/rooms.service"

@Component ({
    selector:"gw-nav",
    templateUrl:"nav.html"
})
export class NavComponent {
    constructor (private roomsService: RoomsService) {}
}