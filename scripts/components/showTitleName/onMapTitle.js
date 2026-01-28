import { showTitle } from "./showTitleBox.js"

export function changeTitleName(gameState) {
    // const { selector, currentLevel, playerState } = gameState
    // const { x, y } = selector

    // const tileName = TILE_DEFS[currentLevel.map[y]?.[x]]?.type
    // const tileUnit = playerState.characters.find(({ drawX, drawY, status }) => drawX === x && drawY === y && status.recruited)

    // const newName = tileUnit?.name || tileName
    if(gameState.mode !== 'LVL') return

    const {history} = gameState
    if (!history) return

    const newTitle = `Cap ${history.id}: ${history.title}`

    showTitle(newTitle)
}