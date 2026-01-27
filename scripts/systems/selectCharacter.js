export function selectCharacter(gameState) {
    const { selector } = gameState
    gameState.characterSelected = gameState.playerState.characters.find(character => {
        return character.drawX === selector.x && character.drawY === selector.y && character.status.recruited
    })
}