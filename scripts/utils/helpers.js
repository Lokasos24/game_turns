import { TILE_DEFS } from "../constants/globalConsts.js"

export function verifyLimitMap({ map }, nextPositionY, nextPositionX) {
    const nextTile = map[nextPositionY]?.[nextPositionX]
    if (nextTile === undefined || nextTile === null) return false

    return true
}

export function verifyUnitOnTile({ playerState, characterSelected, unitTarget }){
    if(!unitTarget) return
    const { units } = playerState
    const unitOntile = units.find(unit => unit.drawX === unitTarget.x && unit.drawY === unitTarget.y)

    if(!unitOntile) return

    return unitTarget.x === unitOntile.drawX && unitTarget.y === unitOntile.drawY
}

export function verifyNextTileWakable({world, selector}){
    const {currentLevel} = world
    const {map} = currentLevel
    
    const nextTile = map[selector.y]?.[selector.x]

    if(!TILE_DEFS[nextTile].walkable) return false

    return true
}

export function verifyIsUnitMove({drawX, drawY, moved}, {y, x}){
    return drawX === x && drawY === y || moved
}

export function selectorInRange({selector, allNodes}){
    return allNodes.find((node) => node.x === selector.x && node.y === selector.y)
}

export function isPlayerPhase({world}){
    const {phase} = world
    return phase === 'PLAYER'
}