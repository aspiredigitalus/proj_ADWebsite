export class Employee {
    private _imgSrc:string;
    private _firstName:string;
    private _lastName:string;
    private _jobTitles:string[];
    private _linkedInSrc:string;

    get imgSrc() {
      return this._imgSrc
    }
    
    set imgSrc(val: string) {
      this._imgSrc = val
    }
    
    get firstName() {
      return this._firstName
    }
    
    set firstName(val: string) {
      this._firstName = val
    }
    
    get lastName() {
      return this._lastName
    }
    
    set lastName(val: string) {
      this._lastName = val
    }
    
    get jobTitles() {
      return this._jobTitles
    }
    
    set jobTitles(val: string[]) {
      this._jobTitles = val
    }
    
    get linkedInSrc() {
      return this._linkedInSrc
    }
    
    set linkedInSrc(val: string) {
      this._linkedInSrc = val
    }

    constructor (imgSrc:string='', firstName:string='', lastName:string='', jobTitles:string[]=[], linkedInSrc:string='') {
        this._imgSrc = imgSrc;
        this._firstName = firstName;
        this._lastName = lastName;
        this._jobTitles = jobTitles;
        this._linkedInSrc = linkedInSrc;
    }
}