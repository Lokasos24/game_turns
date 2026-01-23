import renderApp from "../components/renderApp.js"

export function gameLoop(gameState) {
    if (!gameState.history) return

    let lastTime = 0

    function loop(timeStamp) {
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp

        update(gameState, deltaTime)
        renderApp(gameState)
        requestAnimationFrame(loop)
    }

    loop()
}

function update(gameState, deltaTime) {

}