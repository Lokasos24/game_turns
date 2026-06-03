export function captureUnit({ selector, playerState, characterSelected }) {
    const { units } = playerState
    const { x, y } = selector

    const hoverUnit = units.find(unit => unit.drawX === x && unit.drawY === y)
    const unitSelected = units.find(unit => unit.id === characterSelected)

    return unitSelected || hoverUnit
}