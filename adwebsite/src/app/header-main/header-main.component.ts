import { LanguageService } from './../services/language/language-service.service';
import { Component, ElementRef, HostListener, Inject, ViewChild, OnInit } from '@angular/core';



@Component({
  selector: 'header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent{

    languageService: LanguageService;

    constructor(languageService: LanguageService){
        this.languageService = languageService;
    }
   
    languageSelect(value:any){
        this.languageService.setLanguage(value);
    }
}
