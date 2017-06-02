import {Component} from "@angular/core"

import {LoginService} from "../services/login.service"

@Component ({
    selector:"gw-login",
    templateUrl:"login.html"
})
export class LoginComponent {
    constructor (private loginService: LoginService) {}
}