import { TILE_DEFS } from "../../constants/globalConsts.js"
import { showNameTiles } from "./showTilesBox.js"

export function changeTileName(gameState){
    const {selector, currentLevel} = gameState
    
    const newName = TILE_DEFS[currentLevel.map[selector.y]?.[selector.x]]?.type

    if(!newName) return

    showNameTiles(newName)
}