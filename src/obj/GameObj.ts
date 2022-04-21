export default abstract class GameObj {
 private _name: string = ""
private _desc: string = ""
private _x: number = 0
private _y: number = 0

get Name(): string {
    return this._name
}

set Name(name: string) {
    this._name = name
}

get Description(): string {
    return this._desc
}

set Description(desc: string) {
    this._desc = desc
}

get X(): number {
    return this._x
}

set X(x: number) {
    this._x = x
}

get Y():number {
    return this._y
}

set Y(y:number) {
    this._y = y
}
}