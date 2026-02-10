import { verifyLimitMap, verifyNextTileWakable } from "../utils/helpers.js"
import { eventBus } from "../utils/eventBus.js"

export function tryMoveSelector(gameState, yPosition, xPosition) {
    const nextY = gameState.selector.y + yPosition
    const nextX = gameState.selector.x + xPosition

    if (!verifyLimitMap(gameState.currentLevel, nextY, nextX)) return

    gameState.selector.y = nextY
    gameState.selector.x = nextX

    eventBus.emit('move:selector', gameState)
}

export function tryMoveUnit(gameState) {
    const characterSelected = gameState.playerState.units.find(unit => unit.id === gameState.characterSelected)

    if (!characterSelected) return
    if (!verifyNextTileWakable(gameState)) return

    characterSelected.drawX = gameState.selector.x
    characterSelected.drawY = gameState.selector.y
    gameState.characterSelected = null
}