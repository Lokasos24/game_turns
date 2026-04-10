import { dataCharacters } from "./characters/characters.js"
import { addCharactersToPlayerState, getPlayableCharacters } from "./characters/recruitingCharacters.js"
import { addEnemies, processEnemies } from "./enemies/enemies.js"

const playerState = {
    units: [],
    weapons: [],
    items: [],
    gold: 0
}

const gameState = {
    mode: undefined,
    history: undefined,
    world: {
        units: [],
        enemies: [],
        terrain: [],
        phase: undefined,
        turn: undefined,
        currentLevel: undefined,
    },
    currentHistory: 0,
    currentDialog: 0,
    currentGameLevel: 0,
    selector: {
        x: 9,
        y: 9,
    },
    characterSelected: undefined,
    unitTarget: {},
    allNodes: [],
    unitPath: [],
    playerState,
}

export async function stateGame() {
    const dataFromCharacters = await dataCharacters()
    const dataFromEnemies = await processEnemies()

    const playableCharacters = getPlayableCharacters(dataFromCharacters)
    addCharactersToPlayerState(playerState, playableCharacters)
    if(!gameState.world) return gameState
    addEnemies(gameState, dataFromEnemies)

    return gameState
}