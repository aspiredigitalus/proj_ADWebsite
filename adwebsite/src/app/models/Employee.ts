export class Employee {
    private _id:string;
    private _imgSrc:string;
    private _firstName:string;
    private _middleInit:string;
    private _lastName:string;
    private _jobTitles:string[];
    private _linkedInSrc:string;
    private _region:string;

    get id() {
        return this._id;
    }

    set id(id:string){
        this.id = id;
    }

    get imgSrc() {
      return this._imgSrc;
    }
    
    set imgSrc(val: string) {
      this._imgSrc = val;
    }
    
    get firstName() {
      return this._firstName;
    }
    
    set firstName(val: string) {
      this._firstName = val;
    }
    
    get middleInit() {
        return this._middleInit;
    }

    set middleInit(middleInit:string) {
        this.middleInit = middleInit;
    }
    get lastName() {
      return this._lastName;
    }
    
    set lastName(val: string) {
      this._lastName = val;
    }
    
    get jobTitles() {
      return this._jobTitles;
    }
    
    set jobTitles(val: string[]) {
      this._jobTitles = val;
    }
    
    get linkedInSrc() {
      return this._linkedInSrc;
    }
    
    set linkedInSrc(val: string) {
      this._linkedInSrc = val;
    }

    get region() {
        return this._region;
    }

    set region(region:string) {
        this._region = region;
    }

    constructor (id:string, imgSrc:string='', firstName:string='', middleInit:string = '', lastName:string='', jobTitles:string[]=[], linkedInSrc:string='', region:string='') {
        this._id = id;
        this._imgSrc = imgSrc;
        this._firstName = firstName;
        this._middleInit = middleInit;
        this._lastName = lastName;
        this._jobTitles = jobTitles;
        this._linkedInSrc = linkedInSrc;
        this._region = region;
    }
}