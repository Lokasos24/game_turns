import dataFetchs from "../dataFetching/fetch.js"
import { FactoryUnits } from "./createCharacters.js"

export async function characters() {
    const url = "scripts/assets/gameData/characters.json"
    const data = await dataFetchs(url)
    return data
}

export async function dataCharacters() {
    const units = await characters()

    return units.map(data => {
        return new FactoryUnits(
            data.id,
            data.name,
            data.kind,
            data.gender,
            data.inventory,
            data.level,
            data.stats,
            data.status
        )
    })
}