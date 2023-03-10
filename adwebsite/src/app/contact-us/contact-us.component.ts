import { Component } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { ContactUs } from '../models/ContactUs';
import { ApplyNowService } from '../services/apply-now.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
    contactUsForm = new FormGroup({
        name: new FormControl('', [
            Validators.required
        ]),
        company: new FormControl('',),
        phone: new FormControl('', [
            Validators.required
        ]),
        email: new FormControl('', [
            Validators.required
        ]),
        subject: new FormControl('', [
            Validators.required
        ]),
        message: new FormControl('', [
            Validators.required
        ])
    });
    contact:ContactUs;
    constructor(private appService: ApplyNowService) {
        this.contact = new ContactUs();
    }

    onSubmit(){ 
        this.contact.setName(this.contactUsForm.controls.name.value!);
        if(this.contactUsForm.controls.company.value!=null){
            this.contact.setCompany(this.contactUsForm.controls.company.value);
        }
        this.contact.setEmail(this.contactUsForm.controls.email.value!);
        this.contact.setPhone(this.contactUsForm.controls.phone.value!);
        this.contact.setSubject(this.contactUsForm.controls.subject.value!);
        this.contact.setMessage(this.contactUsForm.controls.message.value!);
        console.log(this.contact);
    }
    isReset(){
        this.contactUsForm.reset({
            name: '',
            company: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
           });
    }
}
