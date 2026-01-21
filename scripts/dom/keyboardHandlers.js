import { changeDialogToBox } from "../components/dialogBox/changeDialog.js"

let dialogInputVisualizer = false

export function setupDialogInput(gameState){
    if(dialogInputVisualizer) return
    dialogInputVisualizer = true

    document.addEventListener('keydown', event => {
        if(event.key !== 'Enter') return

        if(['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(gameState.mode)){
            changeDialogToBox(gameState)
            gameState.currentDialog++
        }
    })
}