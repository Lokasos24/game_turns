import dataFetchs from "../dataFetching/fetch.js"
import { historyUrls } from "../../constants/globalConsts.js"
import renderApp from "../../components/renderApp.js"

export async function changeScenes(gameState, newGameMode, mapToBeat) {
    const url = historyUrls[gameState.currentHistory]
    const historyData = await dataFetchs(url)

    gameState.mode = newGameMode || 'STORY'
    gameState.history = historyData
    gameState.currentLevel = mapToBeat
    gameState.currentDialog = 0
    renderApp(gameState)
}