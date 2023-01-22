import { Component } from '@angular/core';

@Component({
  selector: 'blank-body',
  templateUrl: './blank-body.component.html',
  styleUrls: ['./blank-body.component.css']
})
export class BlankBodyComponent {

  onSwitch: boolean = false;
  
  onClick() {
    this.onSwitch = !this.onSwitch;
  }
}
