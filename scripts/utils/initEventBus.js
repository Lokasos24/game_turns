import { eventBus } from "./eventBus.js"
import { selectCharacter } from "../systems/selectCharacter.js"
import { changeDialog } from "../components/dialog/changeDialog.js"

export function initAllEvents() {
    eventBus.on('select:character', selectCharacter)
    // eventBus.on('move:selector', changeTileName)
    eventBus.on('change:dialog', changeDialog)
}