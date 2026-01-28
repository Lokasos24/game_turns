import { chapterTitleDom } from "../../constants/htmlConsts.js"

export function showTitle(name){
    chapterTitleDom.replaceChildren()

    const tileSpan = chapterTitleDom.appendChild(document.createElement('span'))

    tileSpan.textContent = name || 'Hola mundo'

    return tileSpan
}