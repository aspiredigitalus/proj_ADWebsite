import { LanguageInterface } from "./language-interface";

export class English implements LanguageInterface {
    languagePairs: Map<string, string>;
    
    constructor(){
        this.languagePairs = new Map([

            ////////////////////////////////////////////////////
            ////********* Language KEY:VALUE pairs ********/////
            ////////////////////////////////////////////////////
  
            /******* GENERIC VALIDATION *******/
            ['required', 'Required Field'],

            /******* GENERIC FORM *******/
            ['name', 'Name'],
            ['company', 'Company'],
            ['phonenumber', 'Phone Number'],
            ['email', 'Email'],
            ['subject', 'Subject'],
            ['message', 'Message'],
            ['reset', 'Reset'],
            ['submit', 'Submit'],

            /******* contact-button Component *******/
            ['contactus', 'Contact Us!'],

            /******* contact-us Component *******/
            ['contactus-title', 'Contact Us'],
            

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
            
            /******* leadership Component *******/
            ['robinsingh-description', 'Robin is an innovator and leader with a history of success in implementing the latest technologies, defying conventions, challenging the status quo, and delivering complex world class programs'],
            ['corrinefreese-description', 'Corrine has wide-ranging experience leading organization-wide transformation with leadership development initiatives and capability driven development strategies'],
            ['kawaljeetsingh-description', 'Kawaljeet (Goldy) has over a decade of experience designing and delivering end-to-end sales performance management solutions around the globe'],
            
            /******* our-staff Component *******/
            ['ourstaff', 'Our Staff'],
            ['ourstaff-message', 'You will find highly skilled, credentialed, and experienced professionals on the Aspire Digital team.  We are software developers, process consultants, and SAP specialists. Experts at meeting our clients\' needs, with Aspire Digital, you can have SAP your way.'],
            ['leadership', 'Leadership'],
            ['indiateam', 'India Team'],
            ['uaeteam', 'UAE Team'],
            ['usateam', 'USA Team'],


        ]);
    }
    public getLanguagePairs():Map<string, string> {
        return this.languagePairs; 
    }

}