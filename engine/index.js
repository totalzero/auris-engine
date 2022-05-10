const GameObj = require('./src/obj/GameObj')
const Room = require('./src/obj/Room')
const Mobile = require('./src/obj/Mobile')
const Item = require('./src/obj/Item')
const Skill = require('./src/obj/Skill')

const Armor = require('./src/std/Armor')
const Foods = require('./src/std/Foods')
const Helmet = require('./src/std/Helmet')
const Monster = require('./src/std/Monster')
const Npc = require('./src/std/Npc')
const Player = require('./src/std/Player')
const Shoes = require('./src/std/Shoes')
const Weapon = require('./src/std/Weapon')

const Attack = require('./src/Attack')
const GameLoop = require('./src/GameLoop')
const Random = require('./src/random')

const AurisEngine = {}
AurisEngine.OBJ = {
    GameObj,
    Item,
    Mobile,
 Room,
 Skill   
}

AurisEngine.STD = {
    Player,
Npc,
Monster,
    Foods,
    Armor,
    Helmet,
    Shoes,
    Weapon,
}

AurisEngine.Utilities = {
Attack,
GameLoop,
Random
}

Exports.AurisEngine = AurisEngine