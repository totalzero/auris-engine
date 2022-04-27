import { Floors } from "./obj/Floors";
import Room from "./obj/Room";
import Player from "./Player";

export class GameGround {
 _player: Player   
 _actualRoom: Room

 constructor(player: Player, room: Room) {
     this._player = player
     this._actualRoom = room
 }

 Update() {

 }

 changeRoom(room: Room) {

 }

 movePlayer(direction: 'n' | 's' | 'e' | 'w') {
     switch(direction) {

     }
 }

 
}


export interface OutputStructure {

}