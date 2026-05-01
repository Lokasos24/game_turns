import { captureUnit } from "../../../utils/helpers.js"
import { getEnemie } from "../../../services/enemies/captureEnemie.js"

export function createBodyPanel(gameState, bodyPanel) {
    bodyPanel.replaceChildren()
    if(gameState.world.phase !== "PLAYER") return
    const changes = captureUnit(gameState) || getEnemie(gameState)

    if (!changes || !changes.stats) return

    Object.entries(changes.stats).forEach(([key, value]) => {
        if (key === 'mov') return

        const statRow = bodyPanel.appendChild(document.createElement('div'))
        statRow.className = 'stat-row'

        const statLabel = statRow.appendChild(document.createElement('span'))
        statLabel.className = 'stat-label'
        statLabel.textContent = key

        const statBarContainer = statRow.appendChild(document.createElement('div'))
        statBarContainer.className = 'stat-bar-container'

        const statBar = statBarContainer.appendChild(document.createElement('div'))
        statBar.className = `stat-bar ${key}`
        // Simple calculation for bar width, assuming max 30 for now as per previous context or generic max
        const width = Math.min((value / 30) * 100, 100)
        statBar.style.width = `${width}%`

        const statValue = statRow.appendChild(document.createElement('span'))
        statValue.className = 'stat-value'
        statValue.textContent = value
    })
}