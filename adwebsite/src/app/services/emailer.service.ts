import { Injectable } from '@angular/core';
import { Inquiry } from '../models/inquiry/inquiry.module';

@Injectable({
  providedIn: 'root'
})
export class EmailerService {

  constructor() { }


  send(email: Inquiry){
    console.log(email.subject);
    console.log(email.body);
  };


}
