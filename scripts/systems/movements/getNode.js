export function getNode({map}, x, y){
    if(y < 0 || y >= map.length) return
    if(x < 0 || x >= map[y].length) return

    return {
        ...TILE_DEFS[map[y][x]],
        x,
        y
    }
}