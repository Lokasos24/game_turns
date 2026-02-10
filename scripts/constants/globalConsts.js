export const TILE_SIZE = 32
export const TILE_DEFS = {
    0: { type: 'grass', walkable: true, cost: 1, color: '#144A1E' },
    1: { type: 'wall', walkable: false, cost: 999, color: 'brown' }
}

export const CONFIG_LIMITS = {
    "lvl": 20,
    "hp": 100,
    "str": 40,
    "skl": 40,
    "spd": 40,
    "lck": 40,
    "def": 40,
}

export const canvasWidth = 320 * 2
export const canvasHeight = 320 * 2

export const speed = 200

export const historyUrls = [
    "scripts/assets/chapters/chapter1.json",
]

export const mapsUrls = [
    "scripts/assets/maps/map1.json",
]