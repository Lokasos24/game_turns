import { renderCanvas } from "./components/renders/renderCanvas.js"
import { moveSelectorInput, setupDialogInput } from "./inputs/keyboardHandlers.js"
import { stateGame } from "./services/gameStates.js"
import { changeScenes } from "./services/changeScenes/changeScene.js"
import { renderUi } from "./components/renders/renderUI.js"
import { gameLoop } from "./core/gameLoop.js"
import { initAllEvents } from "./utils/initEventBus.js"

function keyWords(gameState) {
    setupDialogInput(gameState)
    moveSelectorInput(gameState)
}

async function renderChanges(gameState) {
    renderCanvas(gameState)
    renderUi(gameState)
}

async function main() {
    const gameState = await stateGame()
    await changeScenes(gameState)
    renderChanges(gameState)
    keyWords(gameState)
    initAllEvents()
    gameLoop(gameState)
}

main()