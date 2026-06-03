export function reconstructPath(node){
    const path = []
    let current = node

    while(current){
        path.unshift({x: current.x, y: current.y})
        current = current.parent
    }

    return path
}