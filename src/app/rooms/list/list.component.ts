import {Component, Input} from "@angular/core"

@Component({
    selector:"gw-room-list",
    templateUrl:"./list.html"
})
export class RoomListComponent {
    @Input () id:string
}