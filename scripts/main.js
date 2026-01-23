import { renderCanvas } from "./components/renderCanvas.js"
import { moveSelectorInput, setupDialogInput } from "./inputs/keyboardHandlers.js"
import { stateGame } from "./services/gameStates.js"
import { changeScenes } from "./services/changeScenes/changeScene.js"
import { renderUi } from "./components/renderUI.js"
import { gameLoop } from "./core/gameLoop.js"

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
    gameLoop(gameState)
}

main()