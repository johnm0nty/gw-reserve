import {Injectable} from "@angular/core"
import {CanActivateChild, Router} from "@angular/router"

import {LoginService} from "./login.service"

@Injectable ()
export class LoginGuard implements CanActivateChild {
    constructor (private loginService: LoginService, private router:Router) {}

    canActivateChild () {
        if (!this.loginService.getLoggedInUser()) {
            this.router.navigate([""], {fragment: "login-needed"})
        }

        return true
    }
}