import { directions } from "../constants/globalConsts.js"
import { 
    getNode,
    manhattan,
    reconstructPath
} from "../utils/helpers.js"

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

export function aStar(gameState, unit, goal, reachableNodes){
    const openList = [
        {
            x: unit.drawX,
            y: unit.drawY,
            g: 0,
            h: manhattan(unit.drawX, unit.drawY, goal.x, goal.y),
            parent: null
        }
    ]
    
    const closedList = new Set()

    while(openList.length > 0){
        let current = openList[0]
        let currentIndex = 0

        for(let i = 1; i < openList.length; i++){
            const f = openList[i].g + openList[i].h
            const currentF = current.g + current.h
            if(f < currentF){
                current = openList[i]
                currentIndex = i
            }
        }

        if(current.x === goal.x && current.y === goal.y){
            return reconstructPath(current)
        }

        openList.splice(currentIndex, 1)
        closedList.add(`${current.x},${current.y}`)

        for(const direction of directions){
            const neighborX = current.x + direction.x
            const neighborY = current.y + direction.y

            const isReachable = reachableNodes.some(
                node => node.x === neighborX && node.y === neighborY
            )
            if(!isReachable) continue

            if(closedList.has(`${neighborX},${neighborY}`)) continue

            const neighbor = getNode(gameState.world.currentLevel, neighborX, neighborY)
            if(!neighbor || !neighbor.walkable) continue

            const newG = current.g + (neighbor.cost || 1)
            const heuristic = manhattan(neighborX, neighborY, goal.x, goal.y)

            const existing = openList.find(node => node.x === neighborX && node.y === neighborY)

            if (!existing) {
                openList.push({
                    x: neighborX,
                    y: neighborY,
                    g: newG,
                    h: heuristic,
                    parent: current
                })
            } else if (newG < existing.g) {
                existing.g = newG;
                existing.parent = current;
            }
        }
    }

    return reachableNodes;
}