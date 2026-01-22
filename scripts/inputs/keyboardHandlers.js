import { changeDialog } from "../components/dialog/changeDialog.js"

let dialogInputVisualizer = false

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