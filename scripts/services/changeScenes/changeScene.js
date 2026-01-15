import dataFetchs from "../dataFetching/fetch.js"

export async function changeScenes(gameState) {
    const url = "scripts/assets/history/chapter1.json"
    const historyData = await dataFetchs(url)
    gameState.mode = "STORY"
    gameState.history = historyData
}