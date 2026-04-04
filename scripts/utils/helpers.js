import { TILE_DEFS } from "../constants/globalConsts.js"

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

export function getNode({map}, x, y){
    if(y < 0 || y >= map.length) return
    if(x < 0 || x >= map[y].length) return

    return {
        ...TILE_DEFS[map[y][x]],
        x,
        y
    }
}

export function manhattan(x1, x2, y1, y2){
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

export function reconstructPath(node){
    const path = []
    let current = node

    while(current){
        path.unshift({x: current.x, y: current.y})
        current = current.parent
    }

    return path
}

export function verifyIsUnitMove({drawX, drawY, moved}, {y, x}){
    if (drawX === x && drawY === y || moved) {
        return true
    }
}