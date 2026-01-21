import { renderCanvas } from "./components/renderCanvas.js"
import { setupDialogInput } from "./dom/keyboardHandlers.js"
import { stateGame } from "./services/gameStates.js"
import { changeScenes } from "./services/changeScenes/changeScene.js"
import { renderUi } from "./components/renderUI.js"

function keyWords(updateGameState) {
    setupDialogInput(updateGameState)
}

async function renderChanges(updateGameState) {
    renderCanvas(updateGameState)
    renderUi(updateGameState)
}

async function main() {
    const gameState = await stateGame()
    const updateGameState = await changeScenes(gameState)
    renderChanges(updateGameState)
    keyWords(updateGameState)
    // function loop(gameState){
    //     startGame(gameState)
    // }
    // requestAnimationFrame(loop)
}

main()