"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameObj_1 = __importDefault(require("./GameObj"));
class Item extends GameObj_1.default {
    constructor() {
        super(...arguments);
        this._value = 0;
    }
    get Value() {
        return this._value;
    }
    set Value(value) {
        this._value = value;
    }
}
exports.default = Item;
