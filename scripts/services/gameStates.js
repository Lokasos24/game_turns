import { dataCharacters } from "./characters/characters.js"
import { addCharactersToPlayerState, loadCharactersToGameState, getPlayableCharacters } from "./characters/recruitingCharacters.js"

const playerState = {
    units: [],
    weapons: [],
    items: [],
    gold: 0
}

const gameState = {
    mode: undefined,
    history: undefined,
    currentLevel: undefined,
    units: [],
    currentHistory: 0,
    currentDialog: 0,
    currentGameLevel: 0,
    selector: {
        x: 9,
        y: 9,
    },
    characterSelected: undefined,
    playerState,
}

export async function stateGame() {
    const dataFromCharacters = await dataCharacters()
    loadCharactersToGameState(dataFromCharacters, gameState.units)

    const playableCharacters = await getPlayableCharacters(gameState.units)
    addCharactersToPlayerState(playerState, playableCharacters)

    return gameState
}