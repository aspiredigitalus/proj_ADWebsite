import { Component } from '@angular/core';
import { LanguageService } from '../services/language/language-service.service';

@Component({
  selector: 'leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent {


    //language service 
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
