import { tryMoveSelector, tryMoveUnit } from "../systems/movement.js"
import { eventBus } from "../utils/eventBus.js"

const movementKeys = ['w', 'a', 's', 'd']
let isDialogInputSetup = false
let isMoveInputSetup = false

export function setupDialogInput(gameState) {
    if (isDialogInputSetup) return
    isDialogInputSetup = true

    document.addEventListener('keydown', event => {
        if (event.key !== 'Enter') return

        if (['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(gameState.mode)) {
            eventBus.emit('change:dialog', gameState)
        }

        if (['LVL'].includes(gameState.mode)) {
            if (gameState.characterSelected) {
                tryMoveUnit(gameState)
                return
            }
            eventBus.emit('select:character', gameState)
        }
    })
}

export function moveSelectorInput(gameState) {
    if (isMoveInputSetup) return
    isMoveInputSetup = true

    document.addEventListener('keydown', event => {
        if (gameState.mode !== 'LVL') return
        if (event.key === 'w') tryMoveSelector(gameState, -1, 0)
        if (event.key === 's') tryMoveSelector(gameState, 1, 0)
        if (event.key === 'd') tryMoveSelector(gameState, 0, 1)
        if (event.key === 'a') tryMoveSelector(gameState, 0, -1)
        if (movementKeys.includes(event.key)) eventBus.emit('move:selector', gameState)
    })
}