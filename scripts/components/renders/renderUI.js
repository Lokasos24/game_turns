import { updateDialogVisibility } from "../dialog/dialogVisibility.js"
import { updateTilesVisibility } from "../showNamesTiles/updateTilesVisibility.js";

export function renderUi(gameState) {
    updateDialogVisibility(gameState)
    updateTilesVisibility(gameState)
}