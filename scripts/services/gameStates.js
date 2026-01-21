import { dataCharacters } from "./characters/characters.js"
import { addCharactersToPlayerState, loadCharactersToGameState, getPlayableCharacters } from "./characters/recruitingCharacters.js"

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
    currentHistory: 0,
    currentDialog: 0,
    currentGameLevel: 0,
    playerState,
}

export async function stateGame() {
    const dataFromCharacters = await dataCharacters()
    loadCharactersToGameState(dataFromCharacters, gameState.characters)

    const playableCharacters = await getPlayableCharacters(gameState.characters)
    addCharactersToPlayerState(playerState, playableCharacters)

    return gameState
}