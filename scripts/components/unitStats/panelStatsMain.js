import { mainStats } from "../../constants/htmlConsts.js";
import { createHeaderPanel } from "./headerPanel/createHeaderPanel.js";
import { createBodyPanel } from "./bodyPanel/createBodyPanel.js";

export function createPanel(gameState) {
    mainStats.replaceChildren()

    if(gameState.mode !== 'LVL') return

    const headerPanel = mainStats.appendChild(document.createElement('div'))
    headerPanel.dataset.id = `headerStatsPanel`
    headerPanel.className = `header-stats-panel`

    const bodyPanel = mainStats.appendChild(document.createElement('div'))
    bodyPanel.dataset.id = `bodyStatsPanel`
    bodyPanel.className = `body-stats-panel`

    createHeaderPanel(gameState, headerPanel)
    createBodyPanel(gameState, bodyPanel)
}