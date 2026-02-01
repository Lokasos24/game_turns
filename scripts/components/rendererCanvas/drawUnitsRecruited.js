import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawPlayerUnits({ units }, ctx) {
    units.forEach(({ drawX, drawY }) => {
        ctx.fillStyle = 'blue'
        ctx.fillRect(drawX * TILE_SIZE, drawY * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    })
}