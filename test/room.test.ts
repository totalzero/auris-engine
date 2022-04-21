import Room from "../src/obj/Room"
import { Floors } from "../src/obj/Floors"

const loc = new Room()  

function newRoom(): Room {
  return new Room()
}

test('after initialisation Room.Name field should be not defined', () => {
  
  expect(loc.Name.length).toBe(0)
})

test('after initialisation room.Description should be not defined', () => {
    expect(loc.Description.length).toBe(0)
})

test('after initialisation Room.Objects should be empty', () => {
  expect(loc.Objects.length).toBe(0)
})

test('after initialisation Room.Exits["east"] should be undefined', () => {
  expect(loc.Exits["east"]).toBeUndefined
})

test('after initialisation Room.Floors value has been none', () => {
  expect(loc.Floors[0][2]).toBe("NONE")
})

test('ttests set room.Name', () => {
  const rm = newRoom()
  rm.Name = "nazwa"
  expect(rm.Name).toBe("nazwa")
})

test('set new description to Room.Description', () => {
  const rm = newRoom()
  const desc = "to jest jakas tam opisownia"
  rm.Description = desc
  expect(rm.Description).toBe(desc)
})

test('test check validate arguments in room set floor', () => {
  const rm = newRoom()
  expect(() => {
  rm.Floors = [
    [Floors.grass, Floors.grass, Floors.grass]
  ]}).toThrow()
})

test('set valid parameters to Room.Floors', () => {
  const fl: Floors[][] = [
    [Floors.grass, Floors.none, Floors.stone],
    [Floors.grass, Floors.none, Floors.stone],
    [Floors.grass, Floors.stone, Floors.none]
  ]

  const rm = newRoom()
  rm.Floors = fl
  expect(rm.Floors).toBe(fl)
})

test('checking set exit to room', () => {
  const rm = newRoom()
rm.Exits.north = new Room()
expect(rm.Exits.north).toBeDefined()
})