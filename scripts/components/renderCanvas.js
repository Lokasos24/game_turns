import { renderDialogText } from "./dialogBox/dialogBox.js"
import { drawCharacters } from "./drawsInCanvas/drawCharacters.js"
import { drawCombatMap } from "./drawsInCanvas/drawCombatMap.js"
import { drawHistoryMap } from "./drawsInCanvas/drawHistoryMap.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = 320 * 2
const canvasHeight = 320 * 2

canvas.width = canvasWidth
canvas.height = canvasHeight

export function renderCanvas(gameState) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    const history = gameState.history
    const mode = gameState.mode
    if (mode === "STORY") {
        drawHistoryMap(history.map, ctx)
        renderDialogText(gameState.history)
    }

    if (mode !== "LVL") return

    const level = gameState.currentLevel

    if (!level) return

    const map = gameState.currentLevel.map
    drawCombatMap(map, ctx)

    drawCharacters(map, ctx)
}