import { Component } from '@angular/core';
import { LanguageService } from '../services/language/language-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
