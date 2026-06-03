export function verifyUnitOnTile({ playerState, characterSelected, unitTarget }){
    if(!unitTarget) return
    const { units } = playerState
    const unitOntile = units.find(unit => unit.drawX === unitTarget.x && unit.drawY === unitTarget.y)

    if(!unitOntile) return

    return unitTarget.x === unitOntile.drawX && unitTarget.y === unitOntile.drawY
}