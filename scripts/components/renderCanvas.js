import { drawCharacters } from "./drawsInCanvas/drawCharacters.js"
import { drawMap } from "./drawsInCanvas/drawMap.js"

export function renderCanvas(gameState){
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const TILE_SIZE = 32

    const canvasWidth = 320 * 2
    const canvasHeight = 320 * 2

    canvas.width = canvasWidth
    canvas.height = canvasHeight
    ctx.fillRect(0,0, canvasWidth, canvasHeight)

    const level = gameState.currentLevel

    if(!level) return

    const map = gameState.currentLevel.map
    const characters = gameState.playerState.characters
    drawMap(map, ctx, TILE_SIZE)

    drawCharacters(map, characters, ctx, TILE_SIZE)
}