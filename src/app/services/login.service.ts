import {Injectable} from "@angular/core"

import {User} from "../interfaces/user"

@Injectable()
export class LoginService {
    private loggedInUser:User

    constructor () {
        this.loggedInUser = null
    }

    public getLoggedInUser (): User {
        return this.loggedInUser
    }

    public login () {
        // perform a fake, synchronous login for the time being
        this.loggedInUser = {
            displayName: "Josh R. Dunlavy",
            photoURL: "https://avatars3.githubusercontent.com/u/6346817?v=3&s=460"
        }
    }

    public logout () {
        this.loggedInUser = null
    }
}