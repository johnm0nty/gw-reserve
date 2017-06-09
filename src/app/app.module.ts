import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {FormsModule} from "@angular/forms"

import {AppRoutingModule,routedComponents as mainAppRoutedComponents} from "./app.routing.module"
import {RoomsModule} from "./rooms/rooms.module"

import {AppComponent} from "./app.component"
import {NavComponent} from "./nav/nav.component"

import {LoginService} from "./services/login.service"
import {NavService} from "./services/nav.service"
import {RoomsService} from "./services/rooms.service";
import { ExerciseChildComponent } from './exercises/exercise-child/exercise-child.component'

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        RoomsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        mainAppRoutedComponents,
        ExerciseChildComponent
    ],
    providers: [
        LoginService,
        NavService,
        RoomsService
    ],
    bootstrap:[AppComponent]
})
export class AppModule {}