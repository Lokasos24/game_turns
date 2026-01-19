import { dialogBox } from "../../consts/globalConsts.js"

export function renderDialogText(currentDialog) {
    dialogBox.replaceChildren()
    const dialogText = dialogBox.appendChild(document.createElement('p'))

    dialogText.textContent = currentDialog

    return dialogText
}