export function selectorInRange({selector, allNodes}){
    return allNodes.find((node) => node.x === selector.x && node.y === selector.y)
}