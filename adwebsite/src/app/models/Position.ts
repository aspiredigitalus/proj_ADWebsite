
export class Position {
    id:string;
    employeeId:string;
    positionId:string;
    positionTitle:string;

    constructor(id:string='', employeeId='', positionId='', position:string='', positionTitle:string='') {
        this.id=id;
        this.employeeId=employeeId;
        this.positionId=positionId;
        this.positionTitle=positionTitle;
    }

    getId():string {
        return this.id;
    }
    getEmployeeId():string {
        return this.employeeId;
    }
    getPositionId():string {
        return this.positionId;
    }
    getPositionTitle():string {
        return this.positionTitle;
    }
    setId(id:string):void {
        this.id = id;
    }
    setEmployeeId(employeeId:string):void {
        this.employeeId = employeeId;
    }
    setPositionId(positionId:string):void {
        this.positionId = positionId;
    }
    setPositionTitle(positionTitle:string):void {
        this.positionTitle = positionTitle;
    }



}