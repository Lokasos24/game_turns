import { verifyNextTile } from "../utils/helpers.js"
import { eventBus } from "../utils/eventBus.js"

export function tryMoveSelector(gameState, yPosition, xPosition) {
    const nextY = gameState.selector.y + yPosition
    const nextX = gameState.selector.x + xPosition

    if (!verifyNextTile(gameState.currentLevel, nextY, nextX)) return

    gameState.selector.y = nextY
    gameState.selector.x = nextX

    eventBus.emit('move:selector', gameState)
}

export function tryMoveUnit(gameState) {
    const nextY = gameState.selector.y
    const nextX = gameState.selector.x

    if (!verifyNextTile(gameState.currentLevel, nextY, nextX)) return

    const characterSelected = gameState.playerState.units.find(unit => unit.id === gameState.characterSelected)

    if (!characterSelected) return

    characterSelected.drawX = nextX
    characterSelected.drawY = nextY
    gameState.characterSelected = null
}