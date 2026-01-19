import { changeDialogToBox } from "../components/dialogBox/changeDialog.js"

let currentDialog = 0

export function pressEnterToChangeDialog(gameState){
    if(!['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(gameState.mode)) return

    document.addEventListener('keydown', event => {
        if(event.key === 'Enter'){
            changeDialogToBox(gameState, currentDialog)
            currentDialog++
        }
    })
}