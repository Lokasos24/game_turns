import { renderDialogText } from "./dialogBox.js"

export function changeDialogToBox(gameState, dialogIndex){
    if(gameState.history.dialogs.length <= dialogIndex) return
    const currentDialog = gameState.history.dialogs[dialogIndex].text
    renderDialogText(currentDialog)
}