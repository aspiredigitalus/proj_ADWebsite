import { Injectable } from '@angular/core';
import { Inquiry } from '../models/inquiry/inquiry.module';

@Injectable({
  providedIn: 'root'
})
export class EmailerService {

  constructor(email: Inquiry) { }


  send(){
    
  };


}
