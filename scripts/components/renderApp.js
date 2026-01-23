import { renderCanvas } from "./renders/renderCanvas.js"
import { renderUi } from "./renders/renderUI.js"

export default function renderApp(gameState) {
    renderCanvas(gameState)
    renderUi(gameState)
}