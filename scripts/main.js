import { stateGame } from "./services/gameStates.js"

function keyWords(){

}

function renderChanges(){
    stateGame()
}

async function main(){
    keyWords()
    renderChanges()
    // requestAnimationFrame(main)
}

main()