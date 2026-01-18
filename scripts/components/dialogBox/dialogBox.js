import { dialogBox } from "../../consts/globalConsts.js"

export function renderDialogText(history) {
    dialogBox.replaceChildren()
    const dialogText = dialogBox.appendChild(document.createElement('p'))

    dialogText.textContent = history.dialogs[0].text

    return dialogText
}