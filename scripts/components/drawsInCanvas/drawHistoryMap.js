import { TILE_SIZE } from "../../consts/globalConsts.js"

const TILE_DEFS = {
    0: { color: 'green' },
    1: { color: 'blue' },
    2: { color: 'red' },
    3: { color: 'yellow' }
}

export function drawHistoryMap(map, ctx) {
    map.forEach((rows, y) => {
        rows.forEach((value, x) => {
            const tiles = TILE_DEFS[value]
            if (!tiles) return

            ctx.fillStyle = tiles.color
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        })
    })
}