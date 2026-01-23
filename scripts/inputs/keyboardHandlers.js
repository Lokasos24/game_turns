import { changeDialog } from "../components/dialog/changeDialog.js"
import { TILE_SIZE } from "../constants/globalConsts.js"

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
        if (event.key === 'w') {
            gameState.selector.y -= 1 * TILE_SIZE
        }

        if (event.key === 's') {
            gameState.selector.y += 1 * TILE_SIZE
        }

        if (event.key === 'd') {
            gameState.selector.x += 1 * TILE_SIZE
        }

        if (event.key === 'a') {
            gameState.selector.x -= 1 * TILE_SIZE
        }
    })
}