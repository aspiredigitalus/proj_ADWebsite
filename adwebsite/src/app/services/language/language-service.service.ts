import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { English } from './English';
import { French } from './French';
import { Spanish } from './Spanish';

@Injectable({
  providedIn: 'root'
})
export class LanguageService{

    languageMap:BehaviorSubject<Map<string, string>>;

    constructor() {
        let english = new English();
        this.languageMap = new BehaviorSubject<Map<string, string>>(english.getLanguagePairs());
    }
    setLanguage(lang:string){

        switch(lang){
            case 'English': {
                let english = new English();
                this.languageMap.next(english.getLanguagePairs());
                break;
            }
            case 'French': {
                let french = new French();
                this.languageMap.next(french.getLanguagePairs());
                break;
            }
            case 'Spanish': {
                let spanish = new Spanish();
                this.languageMap.next(spanish.getLanguagePairs());
                break;
            }

        }

    }

}
