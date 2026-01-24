import { statsDom } from "../../constants/htmlConsts.js"

export function showNameTiles(name){
    statsDom.replaceChildren()

    const tileSpan = statsDom.appendChild(document.createElement('span'))

    tileSpan.textContent = name || 'Hola mundo'

    return tileSpan
}