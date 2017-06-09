import {Component, OnInit, ViewChild} from "@angular/core"
import {NgForm} from "@angular/forms"

import {DirtyCanDeactivate} from "../../services/dirty-form-guard.service"

@Component({
    selector:"gw-room-form",
    templateUrl:"./form.html"
})
export class RoomFormComponent implements DirtyCanDeactivate, OnInit {
    reasons: string[]

    @ViewChild("myForm") myForm: NgForm

    dirtyCanDeactivate() {
        return this.myForm.dirty && !this.myForm.submitted ? confirm("You have unsaved work. Discard?") : true
    }

    ngOnInit () {
        this.reasons = ["SCRUM","INTERVIEW"]
    }

    onRoomSubmission (myForm: NgForm) {
        console.log(myForm)
    }
}