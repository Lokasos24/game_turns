export class Enemies{
    constructor({type, stats}){
        this.type = type,
        this.stats = stats
    }

    toJson(){
        return {
            type: this.type,
            stats: this.stats
        }
    }
}