export class ContactUs{
    name:string = '';
    company:string = '';
    phone:string = '';
    email:string = '';
    subject:string = '';
    message:string = '';

    setName(name:string):void {
        this.name = name;
    }
    setCompany(company:string):void {
        this.company = company;
    }
    setPhone(phone:string):void {
        this.phone = phone;
    }
    setEmail(email:string):void {
        this.email = email;
    }
    setSubject(subject:string):void {
        this.subject = subject;
    }
    setMessage(message:string):void {
        this.message = message;
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
    getSubject():string {
        return this.subject;
    }
    getMessage():string {
        return this.message;
    }



}