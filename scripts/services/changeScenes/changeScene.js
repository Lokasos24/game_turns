import dataFetchs from "../dataFetching/fetch.js"
import { historyUrls } from "../../constants/globalConsts.js"
import renderApp from "../../components/renderApp.js"
import { initCharactersPositions } from "../characters/defineCharactersPositions.js"

async function loadHistory(gameState) {
    const url = historyUrls[gameState.currentHistory]
    const historyData = await dataFetchs(url)
    return historyData
}

export async function changeScenes(gameState, newGameMode, mapToBeat) {
    const historyData = await loadHistory(gameState)

    gameState.mode = newGameMode || 'STORY'
    gameState.history = historyData
    gameState.currentLevel = mapToBeat
    gameState.currentDialog = 0
    initCharactersPositions(gameState)
    renderApp(gameState)
}