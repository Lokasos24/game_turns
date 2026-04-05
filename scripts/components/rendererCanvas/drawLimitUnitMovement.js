import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawLimitMovement(characterSelected, currentLevel, reachableNodes, ctx){
    // if(!turn || turn !== 'PLAYER') return
    if(!characterSelected || !reachableNodes) return

    const { map } = currentLevel

    reachableNodes.forEach((node) => {
        const { x, y } = node
        if(map?.[y]?.[x] !== undefined){
            ctx.globalCompositeOperation = 'multiply'
            ctx.fillStyle = 'rgb(243, 247, 23)'
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
            ctx.globalCompositeOperation = 'source-over'
        }
    })
}