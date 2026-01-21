import { changeScenes } from "../../services/changeScenes/changeScene.js"
import { mapsUrls } from "../../constants/globalConsts.js"
import dataFetchs from "../../services/dataFetching/fetch.js"

export async function onDialogEnd(gameState) {
    const newGameMode = gameState.history.onEnd.mode
    const currentMapUrl = mapsUrls[gameState.currentGameLevel]
    const newMapToBeat = await dataFetchs(currentMapUrl)

    changeScenes(gameState, newGameMode, newMapToBeat)
}