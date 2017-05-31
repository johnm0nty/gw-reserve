import {RouterModule,Routes} from "@angular/router"
import {NgModule} from "@angular/core"

import {RoomsComponent} from "./rooms.component"
import {RoomFormComponent} from "./form/form.component"
import {RoomListComponent} from "./list/list.component"

const routes:Routes = [
    {
        path:"rooms/:id",
        component:RoomsComponent,

        children:[
            {
                path:"form",
                component:RoomFormComponent
            },
            {
                path:"list",
                component:RoomListComponent
            }
        ]
    }
]

@NgModule ({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RoomRoutingModule {}
export const routedComponents = [RoomsComponent,RoomFormComponent,RoomListComponent]