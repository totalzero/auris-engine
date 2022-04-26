import Player from "../src/Player";

function newPlayer(): Player {
    return new Player()
}

test('after initialise player.experience should be 0', () => {
    expect(newPlayer().Experience).toBe(0)
})

test('set Player.experience', () => {
    const player = newPlayer()
    player.Experience = 100
  expect(player.Experience).toBe(100)  
})

test('after initialise Player.SkillPoints should be 100', () => {
    expect(newPlayer().SkillPoints).toBe(100)
})

test('set player.skillPoints', () => {
    const player = newPlayer()
    player.SkillPoints = 10
    expect(player.SkillPoints).toBe(10)
})

test('after initialise player.MaxSkillPoints should be 100', () => {
    expect(newPlayer().MaxSkillPoints).toBe(100)
})

test('set player.MaxSkillPoints', () => {
  const player = newPlayer()  
  player.MaxSkillPoints = 110
  expect(player.MaxSkillPoints).toBe(110)
})

test('after initialisation player.maxHP should be 100', () => {
    expect(newPlayer().MaxHP).toBe(100)
})

test('after initialisation player.Money should be 0', () => {
    expect(newPlayer().Money).toBe(0)
})

test('set player.Money', () => {
    const player = newPlayer()
    player.Money = 100
    expect(player.Money).toBe(100)
})