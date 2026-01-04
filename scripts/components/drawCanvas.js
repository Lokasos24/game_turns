export function draw(gameState){
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    const canvasWidth = 260 * 2
    const canvasHeight = 260 * 2

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    ctx.fillStyle = 'blue'
    ctx.fillRect(gameState.characters[0].drawX, gameState.characters[0].drawY, 10, 10)
}