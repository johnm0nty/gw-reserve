import {Injectable} from "@angular/core"
import {CanDeactivate} from "@angular/router"

export interface DirtyCanDeactivate {
    dirtyCanDeactivate: () => boolean
}

@Injectable ()
export class DirtyFormGuard implements CanDeactivate<DirtyCanDeactivate> {
    canDeactivate (component: DirtyCanDeactivate) {
        return component.dirtyCanDeactivate()
    }
}