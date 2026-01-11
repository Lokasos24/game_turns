import { drawMap } from "./drawsInCanvas/drawMap.js"

export function draw(gameState){
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const TILE_SIZE = 32

    const canvasWidth = 400 * 2
    const canvasHeight = 320 * 2

    canvas.width = canvasWidth
    canvas.height = canvasHeight
    console.log(gameState)

    const stateGame = gameState.currentLevel

    if(!stateGame) return
    
    const map = gameState.currentLevel.map
    drawMap(map, ctx, TILE_SIZE)
}