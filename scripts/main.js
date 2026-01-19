import { renderCanvas } from "./components/renderCanvas.js"
import { pressEnterToChangeDialog } from "./dom/changeDialog.js"
import { stateGame } from "./services/gameStates.js"

function keyWords(gameState) {
    pressEnterToChangeDialog(gameState)
}

function renderChanges(gameState) {
    renderCanvas(gameState)
}

async function main() {
    const gameState = await stateGame()
    renderChanges(gameState)
    keyWords(gameState)
    // function loop(gameState){
    //     startGame(gameState)
    // }
    // requestAnimationFrame(loop)
}

main()