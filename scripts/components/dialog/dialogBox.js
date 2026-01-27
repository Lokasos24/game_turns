import { boxDialog } from "../../constants/htmlConsts.js"

export function renderDialogText(currentDialog) {
    boxDialog.replaceChildren()
    const dialogText = boxDialog.appendChild(document.createElement('p'))

    dialogText.textContent = currentDialog

    return dialogText
}