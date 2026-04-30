export class Enemies{
    constructor(type, level, stats, x, y){
        this.type = type,
        this.level = level,
        this.stats = stats,
        this.move = true,
        this.x = x || undefined,
        this.y = y || undefined
    }

    static fromJSON(data = {}) {
        if (!data || typeof data !== 'object') throw new Error('Invalid enemies JSON')

        return new Enemies({
            type: data.type,
            level: data.level,
            stats: data.stats,
            move: this.move,
            x: this.x,
            y: this.y
        })
    }

    toJson(){
        return {
            type: this.type,
            level: this.level,
            stats: this.stats,
            x: this.x,
            y: this.y
        }
    }
}