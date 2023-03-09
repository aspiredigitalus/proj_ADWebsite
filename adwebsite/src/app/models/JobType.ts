export class JobType {
    id:number;
    type:string;

    constructor(id:number=-1, type:string="-1"){
        this.id=id;
        this.type=type;
    }

    getId():number {
        return this.id;
    }
    getType():string {
        return this.type;
    }
    setId(id:number):void {
        this.id = id;
    }
    setType(type:string):void {
        this.type = type;
    }
}