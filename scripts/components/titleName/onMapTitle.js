import { showTitle } from "./showTitleBox.js"

export function changeTitleName(gameState) {
    const { history } = gameState
    if (!history) return

    const newTitle = `Cap ${history.id}: ${history.title}`

    showTitle(newTitle)
}