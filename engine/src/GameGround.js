"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameGround = void 0;
class GameGround {
    constructor(player, room) {
        this._player = player;
        this._actualRoom = room;
        GameGround._game = this;
    }
    static getActual() {
        return this._game;
    }
    Update() {
    }
    changeRoom(room) {
        this._actualRoom = room;
    }
    pickupItem(item) {
        this._player.addEquipment(item);
        this._actualRoom.removeObject(item);
    }
    dropItem(item) {
        this._player.removeEquipment(item);
        item.X = this._player.X;
        item.Y = this._player.Y;
        this._actualRoom.AddObject(item);
    }
    movePlayer(direction) {
        switch (direction) {
            case 'n':
                this._player.goNorth();
                break;
            case 's':
                this._player.goSouth();
                break;
            case 'e':
                this._player.goEast();
                break;
            case 'w':
                this._player.goWest();
                break;
        }
    }
}
exports.GameGround = GameGround;
