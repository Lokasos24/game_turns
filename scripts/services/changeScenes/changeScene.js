import dataFetchs from "../dataFetching/fetch.js"
import { historyUrls } from "../../constants/globalConsts.js"

export async function changeScenes(gameState, newGameMode, mapToBeat) {
    const url = historyUrls[gameState.currentHistory]
    const historyData = await dataFetchs(url)

    const newGameState = {
        ...gameState,
        mode: newGameMode || 'STORY',
        history: historyData,
        currentLevel: mapToBeat,
        currentDialog: 0,
    }

    return newGameState
}