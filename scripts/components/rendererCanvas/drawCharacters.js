import { TILE_SIZE } from "../../constants/globalConsts.js"

export function drawCharacters({ map }, ctx) {
    const drawUnits = {
        3: { color: 'blue' }
    }

    map.forEach((rows, y) => {
        rows.forEach((value, x) => {
            const tiles = drawUnits[value]
            if (!tiles) return

            ctx.fillStyle = tiles.color
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        })
    })
}