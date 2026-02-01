import { drawPlayerUnits } from "../rendererCanvas/drawUnitsRecruited.js"
import { drawEnemiesUnits } from "../rendererCanvas/drawEnemies.js"
import { drawCombatMap } from "../rendererCanvas/drawCombatMap.js"
import { drawHistoryMap } from "../rendererCanvas/drawHistoryMap.js"
import { canvasHeight, canvasWidth } from "../../constants/globalConsts.js"
import { drawSelector } from "../rendererCanvas/drawSelector.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = canvasWidth
canvas.height = canvasHeight

export function renderCanvas({ history, mode, currentLevel, selector, playerState }) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    if (mode === "STORY") {
        drawHistoryMap(history.map, ctx)
    }

    if (currentLevel && mode === "LVL") {
        drawCombatMap(currentLevel, ctx)
        drawPlayerUnits(playerState, ctx)
        drawEnemiesUnits(currentLevel, ctx)
        drawSelector(selector, ctx)
    }
}