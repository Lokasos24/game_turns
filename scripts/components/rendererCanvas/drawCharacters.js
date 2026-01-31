import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawCharacters({ units }, ctx) {
    units.forEach(({ drawX, drawY }) => {
        ctx.fillStyle = 'blue'
        ctx.fillRect(drawX * TILE_SIZE, drawY * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    })
}