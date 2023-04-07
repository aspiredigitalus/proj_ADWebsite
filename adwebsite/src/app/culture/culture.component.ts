import { Component } from '@angular/core';
import { LanguageService } from '../services/language/language-service.service';

@Component({
  selector: 'culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent {
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
