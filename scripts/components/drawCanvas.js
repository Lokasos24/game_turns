export function draw(gameState){
    console.log(gameState)
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    const canvasWidth = 400 * 2
    const canvasHeight = 320 * 2

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    const stateGame = gameState.currentLevel

    if(!stateGame){
        ctx.fillStyle = 'blue'
        ctx.fillRect(gameState.playerState.characters[0].drawX, gameState.playerState.characters[0].drawY, 10, 10)
    }
}