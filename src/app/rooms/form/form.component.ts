import {Component} from "@angular/core"

import {DirtyCanDeactivate} from "../../services/dirty-form-guard.service"

@Component({
    selector:"gw-room-form",
    templateUrl:"./form.html"
})
export class RoomFormComponent implements DirtyCanDeactivate {
    dirtyCanDeactivate() {
        return confirm("Do you want to leave?")
    }
}