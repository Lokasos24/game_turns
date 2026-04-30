import { captureUnit } from "../../../utils/helpers.js"
import {getEnemie} from "../../../services/enemies/captureEnemie.js"

export function createHeaderPanel(gameState, headerPanel) {
    headerPanel.replaceChildren()

    const changes = captureUnit(gameState) || getEnemie(gameState)

    if (!changes) return

    const createSpanName = headerPanel.appendChild(document.createElement('span'))
    createSpanName.className = `unit-name`
    createSpanName.textContent = `${changes.name || changes.type}`

    const createLevelUnit = headerPanel.appendChild(document.createElement('span'))
    createLevelUnit.className = `unit-level`
    createLevelUnit.textContent = `lvl ${changes.level}`

    if(!changes.class || !changes.kind) return
    const createClassUnit = headerPanel.appendChild(document.createElement('span'))
    createClassUnit.className = `unit-class`
    createClassUnit.textContent = `${changes.class || changes.kind}`
}