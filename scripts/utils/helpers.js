import { TILE_DEFS } from "../constants/globalConsts.js"

export function verifyLimitMap({ map }, nextPositionY, nextPositionX) {
    const nextTile = map[nextPositionY]?.[nextPositionX]
    if (nextTile === undefined || nextTile === null) return false

    return true
}

export function captureUnitStats({ selector, playerState, characterSelected }) {
    const { units } = playerState
    const { x, y } = selector

    const hoverUnit = units.find(unit => unit.drawX === x && unit.drawY === y)
    const unitSelected = units.find(unit => unit.id === characterSelected)

    return unitSelected || hoverUnit
}

export function verifyNextTileWakable({currentLevel, selector}){
    const {map} = currentLevel
    const nextTile = map[selector.y]?.[selector.x]

    if(!TILE_DEFS[nextTile].walkable) return false

    return true
}