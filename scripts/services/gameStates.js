import { renderCanvas } from "../components/renderCanvas.js"
import { mapLvl1 } from "../components/maps/map1.js"
import { dataCharacters } from "./characters/characters.js"

const playerState = {
    characters: [],
    weapons: [],
    items: [],
    gold: 0
}

const units = []

const gameState = {
    mode: "PREP",
    currentLevel: mapLvl1,
    playerState,
}

export async function stateGame(){
    const principalCharacters = await dataCharacters(units)
    console.log(principalCharacters)
    console.log(units)
    renderCanvas(gameState)
}