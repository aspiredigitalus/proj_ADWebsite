import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Inquiry { 

  subject: string;
  body: string;

  constructor () {
    this.subject = "";
    this.body = "";
  }

  setSubject(subject:string){
    this.subject = subject;
  }
  setBody(body:string){
    this.body = body;
  }



}
