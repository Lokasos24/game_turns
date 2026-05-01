import { updateDialogVisibility } from "../dialog/dialogVisibility.js"
import { changeTitleName } from "../titleName/onMapTitle.js";
import { updateTitleVisibility } from "../titleName/updateTitleVisibility.js";

export function renderUi(gameState) {
    updateDialogVisibility(gameState)
    updateTitleVisibility(gameState)
    changeTitleName(gameState)
}