export function selectCharacter(gameState) {
    const { selector } = gameState
    const characterClicked = gameState.playerState.units.find(unit => {
        return (unit.drawX === selector.x && unit.drawY === selector.y && unit.status.recruited)
    })
    gameState.characterSelected = characterClicked?.id || null
}