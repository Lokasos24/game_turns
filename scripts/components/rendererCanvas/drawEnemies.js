import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawEnemiesUnits({enemiesPositions}, ctx){
    enemiesPositions.forEach(({y,x}) => {
        ctx.fillStyle = 'red'
        ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE,TILE_SIZE,TILE_SIZE)
    })
}