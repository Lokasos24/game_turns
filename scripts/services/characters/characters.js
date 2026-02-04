import dataFetchs from "../dataFetching/fetch.js"
import { Character } from "./createCharacters.js"

export async function characters() {
    const url = "scripts/assets/gameData/characters.json"
    const data = await dataFetchs(url)
    return data
}

export async function dataCharacters() {
    const units = await characters()
    return units.map(Character.fromJSON)
}