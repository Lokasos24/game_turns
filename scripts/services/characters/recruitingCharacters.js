export function getPlayableCharacters(charactersArray) {
    return (Array.isArray(charactersArray) ? charactersArray : [])
        .filter(character => !!(character && character.status && character.status.recruited))
}

export function addCharactersToPlayerState(playerState, charactersRecruited) {
    playerState.units.push(...charactersRecruited)
}