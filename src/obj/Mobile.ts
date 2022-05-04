import GameObj from "./GameObj";
import Item from "./Item";

export default class Mobile extends GameObj {

protected _equipment: Item[] = []
protected _hp: number = 100

get Equipment(): Item[] {
    return this._equipment
}

addEquipment(... items: Item[]) {
    for (let element of items) 
    this.Equipment.push(element)
}

removeEquipment(item: Item) {
    let arr = []
    for (let element of this._equipment) {
        if (element != item)
        arr.push(element)
    }
    this._equipment = arr
}

get HP(): number {
    return this._hp
}

set HP(hp: number) {
    this._hp = hp
}

goNorth() {
if (this.Y < 2)
this.Y += 1
}

goSouth() {
if (this.Y > 0)
this.Y -= 1
}

goEast() {
if (this.X < 2)
this.X += 1
}

goWest() {
 if (this.X > 0)   
 this.X -= 1
}

Update(){}
}