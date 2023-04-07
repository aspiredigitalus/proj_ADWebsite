import { LanguageInterface } from "./language-interface";

export class English implements LanguageInterface {
    languagePairs: Map<string, string>;
    
    constructor(){
        this.languagePairs = new Map([

            ////////////////////////////////////////////////////
            ////********* Language KEY:VALUE pairs ********/////
            ////////////////////////////////////////////////////
            ['firstTag', 'First Tag'],

            /******* Culture Component *******/
            ['culture-banner-message', 'Aspire makes life and work fit together. Join our team!'],
            ['schedule', 'Schedule'],
            ['schedule-message', 'We support a family friendly remote work environment with flexible working hours'],
            ['timeoff', 'Time Off'],
            ['timeoff-message', 'We understand life happens & we have you covered with paid holidays & sick leave'],
            ['profitsharing', 'Profit Sharing'],
            ['profitsharing-message', 'We believe if you generate more money, you should earn more money with performanced based salary increases'],
            ['learning', 'Learning'],
            ['learning-message', 'We encourage our staff to upscale their skills with company paid industry certification and learning'],
            ['apprenticeships', 'Apprenticeships'],
            ['apprenticeships-message', 'We offer full-time jobs that allow you to earn while you learn'],
            ['events', 'Events'],
            ['events-message', 'We offer company Conventions, Conferences, Meetups and More!  Get to know your coworkers off the clock, but on our dime'],
            

        ]);
    }
    public getLanguagePairs():Map<string, string> {
        return this.languagePairs; 
    }

}