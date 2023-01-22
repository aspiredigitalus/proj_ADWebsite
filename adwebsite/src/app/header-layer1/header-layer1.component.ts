import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header_layer1',
  templateUrl: './header-layer1.component.html',
  styleUrls: ['./header-layer1.component.css']
})
export class HeaderLayer1Component {

  constructor (private router: Router){}
    
  onClick() {
    this.router.navigateByUrl('/')
  }
}
