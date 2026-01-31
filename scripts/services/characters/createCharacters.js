export class FactoryUnits {
    constructor(id, name, kind, gender, weapons, level, stats, status) {
        this.id = id
        this.name = name
        this.class = kind
        this.gender = gender
        this.weapons = weapons
        this.level = level
        this.stats = stats
        this.status = status
        this.drawX = undefined
        this.drawY = undefined
    }
}