import { Component } from '@angular/core';
import { LanguageService } from '../services/language/language-service.service';

@Component({
  selector: 'contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css']
})
export class ContactButtonComponent {
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
