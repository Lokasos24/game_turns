import { changeDialog } from "../components/dialog/changeDialog.js"
import { tryMoveSelector } from "../systems/movement.js"

let dialogInputVisualizer = false
let moveSelectorInputVisualizer = false

export function setupDialogInput(gameState) {
    if (dialogInputVisualizer) return
    dialogInputVisualizer = true

    document.addEventListener('keydown', event => {
        if (event.key !== 'Enter') return

        if (['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(gameState.mode)) {
            changeDialog(gameState)
            gameState.currentDialog++
        }
    })
}

export function moveSelectorInput(gameState) {
    if (moveSelectorInputVisualizer) return
    moveSelectorInputVisualizer = true

    document.addEventListener('keydown', event => {
        if (gameState.mode !== 'LVL') return
        if (event.key === 'w') tryMoveSelector(gameState, -1, 0)
        if (event.key === 's') tryMoveSelector(gameState, 1, 0)
        if (event.key === 'd') tryMoveSelector(gameState, 0, 1)
        if (event.key === 'a') tryMoveSelector(gameState, 0, -1)
    })
}