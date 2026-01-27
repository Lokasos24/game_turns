import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawCharacters({ characters }, ctx) {
    characters.forEach(({ drawX, drawY }) => {
        ctx.fillStyle = 'blue'
        ctx.fillRect(drawX * TILE_SIZE, drawY * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    })
}