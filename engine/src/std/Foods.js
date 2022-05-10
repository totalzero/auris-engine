"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../obj/Item"));
const Player_1 = __importDefault(require("./Player"));
class Foods extends Item_1.default {
    constructor() {
        super();
        this._mod = 1;
        this._use = () => {
            if (Player_1.default.Instance) {
                Player_1.default.Instance.HP += this._mod;
            }
        };
    }
}
exports.default = Foods;
