export class MainPageHeadlines{
    private headline:string;
    private message:string;

    constructor(headline:string = '', message:string=''){
        this.headline=headline;
        this.message=message;
    }
    setHeadline(headline:string){
        this.headline = headline;
    }
    setMessage(message:string){
        this.message=message;
    }
    getHeadline():string{
        return this.headline;
    }
    getMessage():string{
        return this.message;
    }
}