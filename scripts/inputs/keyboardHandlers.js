import { tryMoveSelector } from "../systems/movement.js"
import { eventBus } from "../utils/eventBus.js"
import { MODE } from "../constants/globalConsts.js"

const directionMap = {
    'w': [0, -1],
    's': [0, 1],
    'd': [1, 0],
    'a': [-1, 0]
}
let isDialogInputSetup = null
let isMoveInputSetup = null

export function setupEnterInput(gameState) {
    if (isDialogInputSetup) return
    isDialogInputSetup = true

    document.addEventListener('keydown', event => {
        if (event.key !== 'Enter') return

        if (MODE.DIALOG.includes(gameState.mode)) {
            eventBus.emit('change:dialog', gameState)
        }

        if (MODE.GAMEPLAY.includes(gameState.mode)) {
            if (gameState.characterSelected) {
                eventBus.emit('move:character', gameState)
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

        if (directionMap[event.key]) {
            const [dx, dy] = directionMap[event.key]
            tryMoveSelector(gameState, dy, dx)
            eventBus.emit('move:selector', gameState)
        }

    })
}