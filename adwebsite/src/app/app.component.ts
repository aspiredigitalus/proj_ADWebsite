import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adwebsite';
  element_1:any;
  element_2:any;
  constructor() {
    
  }

  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:Event) {
    let element_1 = document.getElementById('navbar_1');
    let element_2 = document.getElementById('navbar_2');
    if (window.scrollY > 150) {
       element_1?.classList.add('outrange');
       element_2?.classList.add('fixed');
       console.log('ON');
     } else {
        element_1?.classList.remove('outrange');
        element_2?.classList.remove('fixed');
        console.log('OFF');
     }
  }
}
