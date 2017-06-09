import {Component, OnInit} from "@angular/core"
import {ActivatedRoute} from "@angular/router"

@Component ({
    selector:"gw-exercises",
    templateUrl:"exercises.html"
})
export class ExerciseComponent implements OnInit {
    public record: string    
    public loginNeeded: boolean

    constructor (private activatedRoute: ActivatedRoute) {}

    ngOnInit () {
        this.activatedRoute.fragment.subscribe(fragment => this.loginNeeded = fragment == "login-needed")
        this.record = "Geekwise Angular Class"
    }

    onChildEdited (record) {
        this.record = record + " received by parent"
        alert("record received")
    }
}