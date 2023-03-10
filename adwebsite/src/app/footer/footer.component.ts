import { Component } from '@angular/core';
import { EmailerService } from '../services/emailer.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  
  constructor (private email: EmailerService){

  }

}
