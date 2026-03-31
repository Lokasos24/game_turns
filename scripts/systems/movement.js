import { captureUnit, getNeighbors, verifyLimitMap, verifyNextTileWakable } from "../utils/helpers.js"
import { eventBus } from "../utils/eventBus.js"

export function tryMoveSelector(gameState, yPosition, xPosition) {
    const nextY = gameState.selector.y + yPosition
    const nextX = gameState.selector.x + xPosition

    if (!verifyLimitMap(gameState.currentLevel, nextY, nextX)) return

    gameState.selector.y = nextY
    gameState.selector.x = nextX
}

export function tryMoveUnit(gameState) {
    const characterSelected = captureUnit(gameState)

    if (!characterSelected) return
    if (!verifyNextTileWakable(gameState)) return

    gameState.unitTarget = {
        x: gameState.selector.x,
        y: gameState.selector.y
    }

    eventBus.emit('moved:character', gameState)
}

export function pathFinding(gameState) {
    // if(!gameState.turn || gameState.turn !== `PLAYER`) return
    if (!gameState.characterSelected) return

    const unit = captureUnit(gameState)
    if (!unit) return

    const positionsFreeToMove = getNeighbors(gameState, unit)
    console.log(positionsFreeToMove)

    return positionsFreeToMove
}

export function moveUnit(gameState) {
    if(!gameState.unitTarget) return

    const unit = captureUnit(gameState)
    const { unitTarget } = gameState

    unit.drawX = unitTarget.x
    unit.drawY = unitTarget.y
    gameState.characterSelected = null
}