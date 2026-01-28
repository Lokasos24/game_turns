import { updateDialogVisibility } from "../dialog/dialogVisibility.js"
import { changeTitleName } from "../showTitleName/onMapTitle.js";
import { updateTilesVisibility } from "../showTitleName/updateTitleVisibility.js";

export function renderUi(gameState) {
    updateDialogVisibility(gameState)
    updateTilesVisibility(gameState)
    changeTitleName(gameState)
}