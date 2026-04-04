import { TILE_DEFS, directions } from "../constants/globalConsts.js"

export function verifyLimitMap({ map }, nextPositionY, nextPositionX) {
    const nextTile = map[nextPositionY]?.[nextPositionX]
    if (nextTile === undefined || nextTile === null) return false

    return true
}

export function captureUnit({ selector, playerState, characterSelected }) {
    const { units } = playerState
    const { x, y } = selector

    const hoverUnit = units.find(unit => unit.drawX === x && unit.drawY === y)
    const unitSelected = units.find(unit => unit.id === characterSelected)

    return unitSelected || hoverUnit
}

export function verifyNextTileWakable({world, selector}){
    const {currentLevel} = world
    const {map} = currentLevel
    
    const nextTile = map[selector.y]?.[selector.x]

    if(!TILE_DEFS[nextTile].walkable) return false

    return true
}

export function getRecheableNodes(gameState, unit){
    const reachable = []
    const visited = new Set()
    const queue = [
        {
            x: unit.drawX,
            y: unit.drawY,
            cost: 0
        }
    ]

    while(queue.length > 0){
        let current = queue[0]
        let minCostIndex = 0
        
        for(let i = 1; i < queue.length; i++){
            if(queue[i].cost < current.cost){
                current = queue[i]
                minCostIndex = i
            }
        }

        queue.splice(minCostIndex, 1)

        const key = `${current.x},${current.y}`

        if(visited.has(key)) continue
        visited.add(key)

        if(current.cost > unit.stats.mov) continue

        reachable.push({
            x: current.x,
            y: current.y,
            cost: current.cost
        })

        for(const direction of directions){
            const neighborX = current.x + direction.x
            const neighborY = current.y + direction.y
            const neighborKey = `${neighborX},${neighborY}`

            if(visited.has(neighborKey)) continue

            const neighbor = getNode(gameState.world.currentLevel, neighborX, neighborY)

            if(!neighbor || !neighbor.walkable) continue

            const newCost = current.cost + (neighbor.cost || 1)

            if (newCost <= unit.stats.mov) {
                queue.push({
                    x: neighborX,
                    y: neighborY,
                    cost: newCost
                })
            }
            
        }
    }

    return reachable
}

function getNode({map}, x, y){
    // if(!map?.[y]?.length) return
    if(y < 0 || y >= map.length) return
    if(x < 0 || x >= map[y].length) return
    // if(x < 0 || x >= map[y]?.[x]?.length || y < 0 || y >= map[y].length) return

    return {
        ...TILE_DEFS[map[y][x]],
        x,
        y
    }
}

export function verifyIsUnitMove({drawX, drawY, moved}, {y, x}){
    if (drawX === x && drawY === y || moved) {
        return true
    }
}