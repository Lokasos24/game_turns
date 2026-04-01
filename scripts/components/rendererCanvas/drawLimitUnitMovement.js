import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawLimitMovement(characterSelected, currentLevel, unitPath, ctx){
    // if(!turn || turn !== 'PLAYER') return
    if(!characterSelected || !unitPath) return

    const { map } = currentLevel

    unitPath.forEach((value) => {
        const { x, y } = value
        if(map?.[y]?.[x] !== undefined){
            ctx.strokeStyle = 'blue'
            ctx.lineWidth = 1
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        }
    })
}