import { TILE_DEFS } from "../../constants/globalConsts.js"

export function verifyNextTileWakable({world, selector}){
    const {currentLevel} = world
    const {map} = currentLevel
    
    const nextTile = map[selector.y]?.[selector.x]

    if(!TILE_DEFS[nextTile].walkable) return false

    return true
}