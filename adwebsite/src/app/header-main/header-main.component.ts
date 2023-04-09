import { LanguageService } from './../services/language/language-service.service';
import { Component, ElementRef, HostListener, Inject, ViewChild, OnInit } from '@angular/core';



@Component({
  selector: 'header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent{

    languageService: LanguageService;
    language:Map<string,string>;
    
    constructor(languageService: LanguageService){
        this.language = new Map();
        this.languageService = languageService;
        this.languageService.languageMap.subscribe((lang:Map<string,string>)=>{
            this.language = lang;
        });
    }
   
    languageSelect(value:any){
        this.languageService.setLanguage(value);
    }
}
