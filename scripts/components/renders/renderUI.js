import { updateDialogVisibility } from "../dialog/dialogVisibility.js"

const dialogBox = document.querySelector('#dialogBox')

export function renderUi(gameState) {
    updateDialogVisibility(gameState, dialogBox)
}