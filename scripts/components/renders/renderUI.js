import { updateDialogVisibility } from "../dialog/dialogVisibility.js"
import { changeTitleName } from "../titleName/onMapTitle.js";
import { updateTilesVisibility } from "../titleName/updateTitleVisibility.js";

export function renderUi(gameState) {
    updateDialogVisibility(gameState)
    updateTilesVisibility(gameState)
    changeTitleName(gameState)
}