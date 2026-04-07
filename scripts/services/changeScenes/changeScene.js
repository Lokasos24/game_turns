import dataFetchs from "../dataFetching/fetch.js"
import { historyUrls } from "../../constants/globalConsts.js"
import renderApp from "../../components/renderApp.js"
import { initCharactersPositions } from "../characters/defineCharactersPositions.js"
import { MODE } from "../../constants/globalConsts.js"

async function loadHistory(gameState) {
    const url = historyUrls[gameState.currentHistory]
    const historyData = await dataFetchs(url)
    return historyData
}

export async function changeScenes(gameState, newGameMode, mapToBeat) {
    const historyData = await loadHistory(gameState)

    gameState.mode = newGameMode || 'STORY'
    gameState.history = historyData
    gameState.world.currentLevel = mapToBeat
    gameState.currentDialog = 0
    if(MODE.GAMEPLAY.includes(gameState.mode)){
        gameState.world.turn = 0
        gameState.world.phase = 'PLAYER'
    }
    initCharactersPositions(gameState)
    renderApp(gameState)
}