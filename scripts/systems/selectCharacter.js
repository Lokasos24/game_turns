export function selectCharacter(gameState) {
    const { selector } = gameState
    const characterClicked = gameState.playerState.characters.find(character => {
        return (character.drawX === selector.x && character.drawY === selector.y && character.status.recruited)
    })
    gameState.characterSelected = characterClicked?.id || null
}