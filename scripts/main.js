import { renderCanvas } from "./components/renderCanvas.js"
import { stateGame } from "./services/gameStates.js"

function keyWords() {

}

function renderChanges(gameState) {
    renderCanvas(gameState)
}

async function main() {
    const gameState = await stateGame()
    keyWords()
    renderChanges(gameState)
    // requestAnimationFrame(main)
}

main()