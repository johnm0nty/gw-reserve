import {Component, OnInit} from "@angular/core"
import {ActivatedRoute} from "@angular/router"

import "rxjs/add/operator/map"

@Component ({
    selector:"gw-rooms",
    templateUrl:"rooms.html"
})
export class RoomsComponent implements OnInit {
    id:string

    constructor(private activatedRoute:ActivatedRoute) {}

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params["id"]
        this.activatedRoute.params
            .map(response => response["id"])
            .subscribe(response => this.id = response)
    }
}