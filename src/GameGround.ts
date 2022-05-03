import { Floors } from "./obj/Floors";
import Item from "./obj/Item";
import Room from "./obj/Room";
import Player from "./Player";

export abstract class GameGround {
 protected _player: Player   
 protected _actualRoom: Room
protected static _game: GameGround

 constructor(player: Player, room: Room) {
     this._player = player
     this._actualRoom = room
 GameGround._game = this
 }

static getActual(): GameGround {
return this._game
}

 Update() {

 }

 changeRoom(room: Room) {
this._actualRoom = room
 }

 pickupItem(item: Item) {
this._player.addEquipment(item)    
this._actualRoom.removeObject(item)
}

dropItem(item: Item) {
    this._player.removeEquipment(item)
    item.X = this._player.X
    item.Y = this._player.Y
    this._actualRoom.AddObject(item)
}
abstract Fighting(): void
 movePlayer(direction: 'n' | 's' | 'e' | 'w') {
     switch(direction) {
case 'n':
    this._player.goNorth()
    break

    case 's':
        this._player.goSouth()
        break

        case 'e':
            this._player.goEast()
            break

            case 'w':
                this._player.goWest()
                break
     }
 }

abstract Output(): object
}
