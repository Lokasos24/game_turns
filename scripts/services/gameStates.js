import { draw } from "../components/drawCanvas.js"
import { principalCharcters } from "./characters/characters.js"
import { mapLvl1 } from "../components/maps/map1.js"

const playerState = {
    characters: principalCharcters,
    weapons: []
}

const gameState = {
    mode: "PREP",
    currentLevel: mapLvl1,
    playerState,
}

export function stateGame(){
    draw(gameState)
}