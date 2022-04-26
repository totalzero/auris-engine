"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mobile_1 = __importDefault(require("./obj/Mobile"));
class Player extends Mobile_1.default {
    constructor() {
        super(...arguments);
        this._exp = 0;
        this._skillPoints = 100;
        this._maxSkillPoints = 100;
        this._maxHP = 100;
        this._money = 0;
    }
    get Experience() {
        return this._exp;
    }
    set Experience(exp) {
        this._exp = exp;
    }
    get SkillPoints() {
        return this._skillPoints;
    }
    set SkillPoints(sp) {
        this._skillPoints = sp;
    }
    get MaxSkillPoints() {
        return this._maxSkillPoints;
    }
    set MaxSkillPoints(sp) {
        this._maxSkillPoints = sp;
    }
    get MaxHP() {
        return this._maxHP;
    }
    set MaxHP(mhp) {
        this._maxHP = mhp;
    }
    get Money() {
        return this._money;
    }
    set Money(money) {
        this._money = money;
    }
}
exports.default = Player;
