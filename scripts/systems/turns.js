export function changeTurn(gameState){
    if(gameState.playerState.units.every(unit => unit.moved)){
        gameState.world.phase = 'ENEMY'
    }else if(gameState.world.enemies.every(unit => unit.moved)){
        gameState.world.phase = 'PLAYER'
    }
}