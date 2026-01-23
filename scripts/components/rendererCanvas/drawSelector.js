import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawSelector({ x, y }, ctx) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
    ctx.lineWidth = 1
    ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
}