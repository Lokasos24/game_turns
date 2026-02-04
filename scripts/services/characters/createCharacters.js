export class Character {
    constructor({ id, name, kind, gender, inventory = [], level = 1, stats = {}, status = {} } = {}) {
        this.id = id
        this.name = name
        this.class = kind || status.class || 'Unit'
        this.kind = kind || status.class || 'Unit'
        this.gender = gender
        this.inventory = Array.isArray(inventory) ? inventory : []
        this.level = Number.isFinite(level) ? level : 1
        this.stats = stats || {}
        this.status = Object.assign({ recruited: false }, status)
        this.drawX = undefined
        this.drawY = undefined
    }

    static fromJSON(data = {}) {
        if (!data || typeof data !== 'object') throw new Error('Invalid character JSON')
        if (data.id === undefined || data.name === undefined) {
            throw new Error('Character JSON must include at least `id` and `name`')
        }

        return new Character({
            id: data.id,
            name: data.name,
            kind: data.kind || data.class,
            gender: data.gender,
            inventory: data.inventory,
            level: data.level,
            stats: data.stats,
            status: data.status,
        })
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            kind: this.kind,
            class: this.class,
            gender: this.gender,
            inventory: this.inventory,
            level: this.level,
            stats: this.stats,
            status: this.status
        }
    }
}