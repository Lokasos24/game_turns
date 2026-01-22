import { renderApp } from "../services/gameStates.js"
import { update } from "../services/gameStates.js"

export function gameLoop(gameState) {
    if (!gameState.history) return

    let lastTime = 0

    function loop(timeStamp) {
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp

        update(gameState, deltaTime)
        renderApp()
        requestAnimationFrame(loop)
    }

    loop()
}