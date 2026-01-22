import { renderDialogText } from "./dialogBox.js"
import { onDialogEnd } from "./onDialogEnd.js"

export function changeDialog(gameState) {
    if (gameState.history.dialogs.length <= gameState.currentDialog) {
        onDialogEnd(gameState)
        return
    }
    const dialogIndex = gameState.currentDialog
    const currentDialog = gameState.history.dialogs[dialogIndex].text
    renderDialogText(currentDialog)
}