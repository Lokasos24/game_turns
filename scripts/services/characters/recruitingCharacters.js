export function loadCharactersToGameState(charactersData, playerState) {
    playerState.push(...charactersData)
}

export function getPlayableCharacters(stateGame) {
    return stateGame.filter(character => character.status.recruited)
}

export function addCharactersToPlayerState(playerState, charactersRecruited) {
    playerState.characters.push(...charactersRecruited)
}