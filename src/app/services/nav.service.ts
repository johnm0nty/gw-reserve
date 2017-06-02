import {Injectable} from "@angular/core"

import {NavItem} from "../interfaces/navItem"

@Injectable()
export class NavService {
    private navigationItems: NavItem[] = []

    public getNavigation () {
        return this.navigationItems
    }

    public addNavigationItem (item:NavItem) {
        this.navigationItems.push(item)
    }
}