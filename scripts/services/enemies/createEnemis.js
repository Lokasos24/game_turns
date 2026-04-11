export class Enemies{
    constructor({type, level, stats}){
        this.type = type,
        this.level = level,
        this.stats = stats,
        this.x = undefined,
        this.y = undefined
    }

    static fromJSON(data = {}) {
        if (!data || typeof data !== 'object') throw new Error('Invalid character JSON')
        if (data.id === undefined || data.name === undefined) {
            throw new Error('Character JSON must include at least `id` and `name`')
        }

        return new Enemies({
            level: data.level,
            stats: data.stats,
            status: data.status,
            x: this.x,
            y: this.y
        })
    }

    toJson(){
        return {
            type: this.type,
            stats: this.stats
        }
    }
}