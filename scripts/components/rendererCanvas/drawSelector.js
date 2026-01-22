import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawSelector({ x, y }, ctx) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
    ctx.lineWidth = 2
    ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE)
}