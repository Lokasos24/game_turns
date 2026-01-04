import { stateGame } from "./services/gameStates.js"

function keyWords(){

}

function renderChanges(){
    stateGame()
}

function main(){
    keyWords()
    renderChanges()
    // requestAnimationFrame(main)
}

main()