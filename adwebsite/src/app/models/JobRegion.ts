export class JobRegion{

    id:number;
    region:string;

    constructor(id:number=-1, region:string="-1"){
        this.id = id;
        this.region = region;
    }

    getId():number {
        return this.id;
    }
    getRegion():string {
        return this.region;
    }
    setId(id:number):void {
        this.id = id;
    }
    setRegion(region:string):void {
        this.region = region;
    }

}