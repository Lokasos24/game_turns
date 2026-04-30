import dataFetchs from "../dataFetching/fetch.js"
import { Enemies } from "./createEnemis.js"

export async function processEnemies(){
    const url = 'scripts/assets/gameData/enemies.json'
    const data = await dataFetchs(url)
    return data
}

export async function addEnemies(gameState){
    const data = await processEnemies()
    if(!data || !gameState.world.enemies || !gameState.world.currentLevel) return
    const {world} = gameState
    const {currentLevel} = world
    currentLevel.enemiesPositions.forEach((unit, i) => {
        const allEnemies = data["enemies"]
        const obtainStats = allEnemies[unit.type]
        gameState.world.enemies.push(new Enemies(unit.type, unit.lvl, obtainStats, unit.x, unit.y))
    })
}