export function initCharactersPositions(gameState) {
    if (gameState.mode !== 'LVL') return

    const playerState = gameState.playerState
    const currentLevel = gameState.currentLevel

    currentLevel.initPlayerPositions.forEach(({ x, y }, i) => {
        playerState.units[i].drawX = x
        playerState.units[i].drawY = y
    });
}