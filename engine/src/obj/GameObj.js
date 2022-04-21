"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameObj {
    constructor() {
        this._name = "";
        this._desc = "";
        this._x = 0;
        this._y = 0;
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
    get Description() {
        return this._desc;
    }
    set Description(desc) {
        this._desc = desc;
    }
    get X() {
        return this._x;
    }
    set X(x) {
        this._x = x;
    }
    get Y() {
        return this._y;
    }
    set Y(y) {
        this._y = y;
    }
}
exports.default = GameObj;
