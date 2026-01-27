import { changeDialog } from "../components/dialog/changeDialog.js"
import { changeTileName } from "../components/showNamesTiles/onMapTile.js"
import { tryMoveSelector } from "../systems/movement.js"
import { selectCharacter } from "../systems/selectCharacter.js"

const keys = {
    'w': true,
    'a': true,
    's': true,
    'd': true
}
let isDialogInputSetup = false
let isMoveInputSetup = false


export function setupDialogInput(gameState) {
    if (isDialogInputSetup) return
    isDialogInputSetup = true

    document.addEventListener('keydown', event => {
        if (event.key !== 'Enter') return

        if (['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(gameState.mode)) {
            changeDialog(gameState)
            gameState.currentDialog++
        }

        if (['LVL'].includes(gameState.mode)) {
            selectCharacter(gameState)
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
        if (keys[event.key]) changeTileName(gameState)
    })
}