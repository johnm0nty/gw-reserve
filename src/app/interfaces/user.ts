export class User {
    displayName: string
    photoURL: string
    // permit against excess property checking
    [propName: string]: any
}