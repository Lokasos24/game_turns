export function getEnemie(gameState){
    const {world, selector} = gameState
    const {enemies} = world
    const enemieHover = enemies.find(unit => {
        return unit.x === selector.x && unit.y === selector.y
    })
    return enemieHover
}