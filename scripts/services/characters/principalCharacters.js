export function principalCharacters(charactersData, playerState){
    playerState.characters.push(charactersData.find(character => character.id === 1))
    playerState.characters.push(charactersData.find(character => character.id === 2))
}