export function initCharactersPositions(gameState) {
    if (gameState.mode !== 'LVL') return

    const playerState = gameState.playerState
    const currentLevel = gameState.currentLevel

    currentLevel.initPlayerPositions.forEach(({ x, y }, i) => {
        playerState.characters[i].drawX = x
        playerState.characters[i].drawY = y
    });
}