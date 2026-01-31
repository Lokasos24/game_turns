import { captureUnitStats } from "../../../utils/helpers.js"

export function createBodyPanel(gameState, bodyPanel){
    bodyPanel.replaceChildren()

    const changes = captureUnitStats(gameState)

    if(!changes) return

    Object.entries(changes.stats).forEach(([key, value]) => {
        const createChildValues = bodyPanel.appendChild(document.createElement('span'))
        createChildValues.className = `unit-stats`
        createChildValues.textContent = `${key}: ${value}`
    })
}