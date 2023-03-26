
export class JobPosition {
    id:number;
    position:string;


    constructor(id:number=-1, position='') {
        this.id=id;
        this.position=position;

    }

    getId():number {
        return this.id;
    }
    getPosition():string {
        return this.position;
    }
    setId(id:number):void {
        this.id = id;
    }

    setPositionId(position:string):void {
        this.position = position;
    }




}