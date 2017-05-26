import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {FormsModule} from "@angular/forms"

import {AppRoutingModule,routedComponents as mainAppRoutedComponents} from "./app.routing.module"
import {RoomsModule} from "./rooms/rooms.module"

import {AppComponent} from "./app.component"
import {NavComponent} from "./nav/nav.component"

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
        mainAppRoutedComponents
    ],
    bootstrap:[AppComponent]
})
export class AppModule {}