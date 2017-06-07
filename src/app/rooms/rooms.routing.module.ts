import {RouterModule,Routes} from "@angular/router"
import {NgModule} from "@angular/core"

import {RoomsComponent} from "./rooms.component"
import {RoomFormComponent} from "./form/form.component"
import {RoomListComponent} from "./list/list.component"

import {LoginGuard} from "../services/login-guard.service"
import {DirtyFormGuard} from "../services/dirty-form-guard.service"

const routes:Routes = [
    {
        path:"rooms/:id",
        redirectTo:"rooms/:id/list",
        pathMatch:"full"
    },
    {
        path:"rooms/:id",
        component:RoomsComponent,
        canActivateChild:[LoginGuard],
        children:[
            {
                path:"form",
                component:RoomFormComponent,
                canDeactivate:[DirtyFormGuard]
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