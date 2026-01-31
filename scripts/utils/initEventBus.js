import { eventBus } from "./eventBus.js"
import { selectCharacter } from "../systems/selectCharacter.js"
import { changeDialog } from "../components/dialog/changeDialog.js"
import { createPanel } from "../components/unitStats/panelStatsMain.js"

export function initAllEvents() {
    eventBus.on('select:character', selectCharacter)
    eventBus.on('change:dialog', changeDialog)
    eventBus.on('move:selector', createPanel)
}