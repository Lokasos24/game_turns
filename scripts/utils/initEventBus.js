import { eventBus } from "./eventBus.js"
import { selectCharacter } from "../systems/selectCharacter.js"
import { changeDialog } from "../components/dialog/changeDialog.js"
import { createPanel } from "../components/unitStats/panelStatsMain.js"
import { 
    tryMoveUnit,
    moveUnit,
    optimalPath,
    nodesExplored 
} from "../systems/movement.js"

export function initAllEvents() {
    eventBus.on('move:character', tryMoveUnit)
    eventBus.on('moved:character', moveUnit)
    eventBus.on('select:character', selectCharacter)
    eventBus.on('select:character', nodesExplored)
    eventBus.on('change:dialog', changeDialog)
    eventBus.on('move:selector', optimalPath)
    eventBus.on('move:selector', createPanel)
}