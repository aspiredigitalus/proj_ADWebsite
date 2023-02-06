import { Component } from '@angular/core';
import { Inquiry } from '../models/inquiry/inquiry.module';
import { EmailerService } from '../services/emailer.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  
  constructor (private email: EmailerService){

  }


  sendEmail() {
    let subject:string = "This is my subject";
    let body:string = "This is my body";
    let inquiry = new Inquiry();
    inquiry.setSubject(subject);
    inquiry.setBody(body);
    this.email.send(inquiry);
  }
}
