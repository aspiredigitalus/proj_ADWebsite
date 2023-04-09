import { Component } from '@angular/core';
import { EmailerService } from '../services/emailer.service';
import { LanguageService } from '../services/language/language-service.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  
    /** language service */
    languageService: LanguageService;
    language:Map<string,string>;
    
    constructor(languageService: LanguageService) {
        this.language = new Map();
        this.languageService = languageService;
        this.languageService.languageMap.subscribe((lang:Map<string,string>)=>{
            this.language = lang;
        });
    }
}
