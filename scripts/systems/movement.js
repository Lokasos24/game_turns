import {
    captureUnit,
    verifyLimitMap,
    verifyNextTileWakable,
    verifyIsUnitMove,
    selectorInRange,
    isPlayerPhase,
    verifyUnitOnTile
} from "../utils/helpers.js"
import { aStar, getRecheableNodes } from "./astar.js"
import { eventBus } from "../utils/eventBus.js"

export function tryMoveSelector(gameState, yPosition, xPosition) {
    if(!isPlayerPhase(gameState)) return
    const nextY = gameState.selector.y + yPosition
    const nextX = gameState.selector.x + xPosition

    if (!verifyLimitMap(gameState.world.currentLevel, nextY, nextX)) return

    gameState.selector.y = nextY
    gameState.selector.x = nextX
}

export function tryMoveUnit(gameState) {
    if(!isPlayerPhase(gameState)) return
    const characterSelected = captureUnit(gameState)

    if (!characterSelected) return
    if (!verifyNextTileWakable(gameState)) return
    const { selector } = gameState

    gameState.unitTarget = {
        x: selector.x,
        y: selector.y
    }

    eventBus.emit('moved:character', gameState)
}

export function nodesExplored(gameState){
    if(!isPlayerPhase(gameState)) return
    if (!gameState.characterSelected) return

    const unit = captureUnit(gameState)
    if (!unit) return

    const reachable = getRecheableNodes(gameState, unit)

    gameState.allNodes = reachable
}

export function optimalPath(gameState){
    if(!isPlayerPhase(gameState)) return
    if(!gameState.characterSelected) return
    if(!selectorInRange(gameState)) return
    const {selector} = gameState
    const unit = captureUnit(gameState)

    const targetNode = {
        x: selector.x,
        y: selector.y
    }

    const optimalPath = aStar(gameState, unit, targetNode)

    gameState.unitPath = optimalPath
}

export function moveUnit(gameState) {
    if(!isPlayerPhase(gameState)) return
    if (!gameState.unitTarget) return

    const unit = captureUnit(gameState)
    const { unitTarget } = gameState
    const { unitPath } = gameState

    if(verifyIsUnitMove(unit, unitTarget)) {
        gameState.characterSelected = null
        return
    }

    if(verifyUnitOnTile(gameState)){ 
        gameState.characterSelected = null
        return
    }

    let pathFree = {}

    unitPath.forEach((tile) => {
        pathFree[`${tile.y},${tile.x}`] = {
            cost: tile.cost,
            walkable: tile.walkable
        }
    })

    if(pathFree[`${unitTarget.y.toString()},${unitTarget.x.toString()}`]){
        unit.drawX = unitTarget.x
        unit.drawY = unitTarget.y
        unit.moved = true
        gameState.characterSelected = null
    }

    pathFree = {}
    gameState.allNodes = []
    gameState.characterSelected = null
    eventBus.emit('allmoved:characters', gameState)
}