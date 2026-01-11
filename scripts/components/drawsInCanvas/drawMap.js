export function drawMap(map, ctx, TILE_SIZE){
    map.forEach((rows, y) => {
        rows.forEach((value, x) => {
            if(value === 0){
                ctx.fillStyle = '#144A1E'
                ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
            }

            if(value === 1){
                ctx.fillStyle = 'brown'
                ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
            }

            if(value === 2){
                ctx.fillStyle = 'red'
                ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
            }

            if(value === 3){
                ctx.fillStyle = 'blue'
                ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
            }
        })
    });
}