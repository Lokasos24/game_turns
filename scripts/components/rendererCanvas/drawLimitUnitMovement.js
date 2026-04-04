import { TILE_SIZE } from "../../constants/globalConsts.js"

//allNodes
export function drawLimitMovement(characterSelected, currentLevel, reachableNodes, ctx){
    // if(!turn || turn !== 'PLAYER') return
    if(!characterSelected || !reachableNodes) return

    const { map } = currentLevel

    reachableNodes.forEach((node) => {
        const { x, y } = node
        if(map?.[y]?.[x] !== undefined){
            ctx.strokeStyle = 'blue'
            ctx.lineWidth = 1
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        }
    })
}