import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adwebsite';
  urlSnippet:string = '';
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
    let urlSnippet = event.url;
    let charIndex = urlSnippet.indexOf("#");
    if(charIndex != -1){
        urlSnippet = urlSnippet.substring(0,charIndex);
    }
    this.urlSnippet = urlSnippet;
    console.log(this.urlSnippet);
    });
  }


}
