import { renderDialogText } from "./dialogBox.js"

export function changeDialogToBox(gameState){
    if(gameState.history.dialogs.length <= gameState.currentDialog) return
    const dialogIndex = gameState.currentDialog
    const currentDialog = gameState.history.dialogs[dialogIndex].text
    renderDialogText(currentDialog)
}