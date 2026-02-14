import { captureUnit } from "../../../utils/helpers.js"

export function createHeaderPanel(gameState, headerPanel) {
    headerPanel.replaceChildren()

    const changes = captureUnit(gameState)

    if (!changes) return

    const createSpanName = headerPanel.appendChild(document.createElement('span'))
    createSpanName.className = `unit-name`
    createSpanName.textContent = `${changes.name}`

    const createLevelUnit = headerPanel.appendChild(document.createElement('span'))
    createLevelUnit.className = `unit-level`
    createLevelUnit.textContent = `Lv. ${changes.level}`

    const createClassUnit = headerPanel.appendChild(document.createElement('span'))
    createClassUnit.className = `unit-class`
    createClassUnit.textContent = `${changes.class || changes.kind}`
}