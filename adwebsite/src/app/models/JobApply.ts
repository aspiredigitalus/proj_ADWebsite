export class JobApply{
    name:string = '';
    phone:string = '';
    email:string = '';
    position:string = '';
    type:string = '';
    region:string = '';
    addInfo:string = '';

    setName(name:string):void {
        this.name = name;
    }
    setPhone(phone:string):void {
        this.phone = phone;
    }
    setEmail(email:string):void {
        this.email = email;
    }
    setPosition(position:string):void {
        this.position = position;
    }
    setType(type:string):void {
        this.type = type;
    }
    setRegion(region:string):void {
        this.region = region;
    }
    setAddInfo(addInfo:string):void {
        this.addInfo = addInfo;
    }
    getName():string {
        return this.name;
    }
    getPhone():string {
        return this.phone;
    }
    getEmail():string {
        return this.email;
    }
    getPosition():string {
        return this.position;
    }
    getType():string {
        return this.type;
    }
    getRegion():string {
        return this.region;
    }
    getAddInfo():string {
        return this.addInfo;
    }



}