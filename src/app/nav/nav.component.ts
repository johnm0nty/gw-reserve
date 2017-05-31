import {Component} from "@angular/core"
import {CommonModule} from "@angular/common"

@Component ({
    selector:"gw-nav",
    templateUrl:"nav.html"
})
export class NavComponent {
    listOfRooms:string[] = ["Halo","SimCity","Sonic","StarFox","Zelda"]
}