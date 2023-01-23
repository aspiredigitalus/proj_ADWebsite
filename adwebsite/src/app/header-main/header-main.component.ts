import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent {
  constructor (private router: Router){}
    
  onClick() {
    this.router.navigateByUrl('/')
  }
}
