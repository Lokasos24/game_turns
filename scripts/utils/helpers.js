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

export function getNeighbors({ world }, unit){
    const neightbors = []
    const { currentLevel } = world

    for(const direction of directions){
        const neightbor = getNode(currentLevel, unit.drawX + direction.x, unit.drawY + direction.y)

        if(neightbor && neightbor.walkable){
            neightbors.push(neightbor)
        }
    }

    return neightbors
}

function getNode({map}, x, y){
    if(!map?.[y]?.length) return
    if(x < 0 || x >= map[y]?.[x].length || y < 0 || y >= map[y].length) return

    return {
        ...TILE_DEFS[map[y]?.[x]],
        x,
        y
    }
}