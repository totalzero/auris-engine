import Mobile from "./obj/Mobile";

export default class Player extends Mobile {
 protected _exp: number = 0
 protected _skillPoints: number = 100
 protected _maxSkillPoints: number = 100   
 protected _maxHP:number = 100
protected _money: number = 0

 get Experience(): number {
     return this._exp
 }

 set Experience(exp: number) {
     this._exp = exp
 }

 get SkillPoints(): number {
     return this._skillPoints
 }

 set SkillPoints(sp: number) {
     this._skillPoints = sp
 }

 get MaxSkillPoints(): number {
     return this._maxSkillPoints
 }

 set MaxSkillPoints(sp) {
     this._maxSkillPoints = sp
 }

 get MaxHP(): number {
     return this._maxHP
 }

 set MaxHP(mhp: number) {
     this._maxHP = mhp
 }

get Money(): number {
    return this._money
}

set Money(money: number) {
    this._money = money
}
}