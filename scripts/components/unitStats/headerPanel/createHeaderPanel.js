import { captureUnitStats } from "../../../utils/helpers.js"

export function createHeaderPanel(gameState, headerPanel) {
    headerPanel.replaceChildren()

    const changes = captureUnitStats(gameState)

    if(!changes) return

    const createSpanName = headerPanel.appendChild(document.createElement('span'))
    createSpanName.className = `unit-name`
    createSpanName.textContent = `${changes.name}`

    const createLevelUnit = headerPanel.appendChild(document.createElement('span'))
    createLevelUnit.className = `unit-level`
    createLevelUnit.textContent = `${changes.level}`
}