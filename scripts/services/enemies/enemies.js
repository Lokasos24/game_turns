import dataFetchs from "../dataFetching/fetch.js"

export async function processEnemies(){
    const url = 'scripts/assets/gameData/enemies.json'
    const data = await dataFetchs(url)
    return data
}

export async function addEnemies(gameState){
    const data = await processEnemies()
    if(!data || !gameState.world.enemies) return
    gameState.world.enemies = data
}

export function defineEnemiesPositions(gameState, history){
    if(!history.enemiesPositions || !gameState.world.currentLevel) return
}