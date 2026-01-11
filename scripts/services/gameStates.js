import { draw } from "../components/drawCanvas.js"
import { principalCharcters } from "./characters/characters.js"

const playerState = {
    characters: principalCharcters,
    weapons: []
}

const gameState = {
    mode: "PREP",
    currentLevel: null,
    playerState,
}

export function stateGame(){
    draw(gameState)
}