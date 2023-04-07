import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language/language-service.service';

@Component({
  selector: 'app-our-pledge',
  templateUrl: './our-pledge.component.html',
  styleUrls: ['./our-pledge.component.css']
})
export class OurPledgeComponent{
    languageService: LanguageService;
    language:Map<string,string>;
    
    constructor(languageService: LanguageService){
        this.language = new Map();
        this.languageService = languageService;
        this.languageService.languageMap.subscribe((lang:Map<string,string>)=>{
            this.language = lang;
        });
    }

}
