import { draw } from "../components/drawCanvas.js"

const gameState = {
    characters: [{
        name: "Lokasos",
        class: "Picaro",
        gender: "M",
        weapons: [],
        level: 1,
        drawX: 3,
        drawY: 3,
    }],
    weapons: []
}

export function stateGame(){
    draw(gameState)
}