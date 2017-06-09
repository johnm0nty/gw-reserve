import {NgModule} from "@angular/core"
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"

import {RoomRoutingModule, routedComponents} from "./rooms.routing.module"

@NgModule ({
    imports:[
        RoomRoutingModule,
        FormsModule,
        CommonModule
    ],
    declarations:[routedComponents]
})
export class RoomsModule {}