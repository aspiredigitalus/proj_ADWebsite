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

  constructor (subject:string, body:string) {
    this.subject = subject;
    this.body = body;
  }



}
