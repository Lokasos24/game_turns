import { dataCharacters } from "./characters/characters.js"
import { addCharactersToPlayerState, getPlayableCharacters } from "./characters/recruitingCharacters.js"

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
    // characters are loaded from JSON and transformed into Character instances
    const dataFromCharacters = await dataCharacters()

    const playableCharacters = getPlayableCharacters(dataFromCharacters)
    addCharactersToPlayerState(playerState, playableCharacters)

    return gameState
}