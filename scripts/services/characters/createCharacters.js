export class FactoryUnits {
    constructor(id, name, kind, gender, inventory, level, stats, status) {
        this.id = id
        this.name = name
        this.class = kind
        this.gender = gender
        this.inventory = inventory
        this.level = level
        this.stats = stats
        this.status = status
        this.drawX = undefined
        this.drawY = undefined
    }
}