"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameObj_1 = __importDefault(require("./GameObj"));
class Mobile extends GameObj_1.default {
    constructor() {
        super(...arguments);
        this._equipment = [];
        this._hp = 100;
    }
    get Equipment() {
        return this._equipment;
    }
    addEquipment(...items) {
        for (let element of items)
            this.Equipment.push(element);
    }
    removeEquipment(item) {
        let arr = [];
        for (let element of this._equipment) {
            if (element != item)
                arr.push(element);
        }
        this._equipment = arr;
    }
    get HP() {
        return this._hp;
    }
    set HP(hp) {
        this._hp = hp;
    }
    goNorth() {
        if (this.Y < 2)
            this.Y += 1;
    }
    goSouth() {
        if (this.Y > 0)
            this.Y -= 1;
    }
    goEast() {
        if (this.X < 2)
            this.X += 1;
    }
    goWest() {
        if (this.X > 0)
            this.X -= 1;
    }
}
exports.default = Mobile;
