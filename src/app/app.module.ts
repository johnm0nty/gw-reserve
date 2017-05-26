import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"

import {AppComponent} from "./app.component"
import {ExerciseComponent} from "./exercises/exercises.component"
import {LoginComponent} from "./login/login.component"
import {NavComponent} from "./nav/nav.component"

@NgModule ({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ExerciseComponent,
        LoginComponent,
        NavComponent
    ],
    bootstrap:[AppComponent]
})
export class AppModule {}