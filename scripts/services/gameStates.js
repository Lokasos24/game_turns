import { dataCharacters } from "./characters/characters.js"
import { addCharactersToPlayerState, loadCharactersToGameState, getPlayableCharacters } from "./characters/recruitingCharacters.js"
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
    characters: [],
    playerState,
}

export async function stateGame() {
    const dataFromCharacters = await dataCharacters()
    loadCharactersToGameState(dataFromCharacters, gameState.characters)

    const playableCharacters = getPlayableCharacters(gameState.characters)
    addCharactersToPlayerState(playerState, playableCharacters)


    await changeScenes(gameState)
    return gameState
}