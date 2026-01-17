import { dataCharacters } from "./characters/characters.js"
import { principalCharacters } from "./characters/principalCharacters.js"
import { changeScenes } from "./changeScenes/changeScene.js"
import { mapLvl1 } from "../components/maps/map1.js"

const playerState = {
    characters: [],
    weapons: [],
    items: [],
    gold: 0
}

const gameState = {
    mode: undefined,
    history: undefined,
    currentLevel: undefined,
    playerState,
}

export async function stateGame() {
    const dataFromCharacters = await dataCharacters()
    principalCharacters(dataFromCharacters, playerState)

    await changeScenes(gameState)
    return gameState
}