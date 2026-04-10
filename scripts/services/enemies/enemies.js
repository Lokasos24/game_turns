import dataFetchs from "../dataFetching/fetch.js"

export async function processEnemies(){
    const url = 'scripts/assets/gameData/enemies.json'
    const data = await dataFetchs(url)
    return data
}

export function addEnemies(gameState, dataEnemies){
    if(!dataEnemies) return
    gameState.world.enemies = dataEnemies
}