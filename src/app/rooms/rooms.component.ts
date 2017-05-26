import {Component, OnInit} from "@angular/core"
import {ActivatedRoute} from "@angular/router"

@Component ({
    selector:"gw-rooms",
    templateUrl:"rooms.html"
})
export class RoomsComponent implements OnInit {
    public id:number
    constructor(private activatedRoute:ActivatedRoute) {}

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params["id"]
    }
}