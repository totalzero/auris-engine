import GameObj from "./GameObj";

export default class Item extends GameObj {
 protected _value: number = 0   
 

 get Value(): number {
     return this._value
 }

 set Value(value: number) {
     this._value = value
 }
}