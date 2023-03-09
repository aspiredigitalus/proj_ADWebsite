import { Component } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { JobApply } from '../models/JobApply';
import { JobPosition } from '../models/JobPosition';
import { JobRegion } from '../models/JobRegion';
import { JobType } from '../models/JobType';
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
        phone: new FormControl('', [
            Validators.required
        ]),
        email: new FormControl('', [
            Validators.required
        ]),
        position: new FormControl('', [
            Validators.required
        ]),
        type: new FormControl('', [
            Validators.required
        ]),
        region: new FormControl('', [
            Validators.required
        ]),
        addInfo: new FormControl('')
    });
    positions:JobPosition[] = [];
    regions:JobRegion[] = [];
    types:JobType[] = [];
    app:JobApply;
    constructor(private appService: ApplyNowService) {
        this.positions = appService.getPositions();
        this.regions = appService.getRegions();
        this.types = appService.getTypes();
        this.app = new JobApply();
    }

    onSubmit(){ 
        this.app.setName(this.contactUsForm.controls.name.value!);
        this.app.setEmail(this.contactUsForm.controls.email.value!);
        this.app.setPhone(this.contactUsForm.controls.phone.value!);
        this.app.setPosition(this.contactUsForm.controls.position.value!);
        this.app.setType(this.contactUsForm.controls.type.value!);
        this.app.setRegion(this.contactUsForm.controls.region.value!);
        if(this.contactUsForm.controls.region.value!=null){
            this.app.setAddInfo(this.contactUsForm.controls.addInfo.value!);
        }
        console.log(this.app);
    }
    isReset(){
        this.contactUsForm.reset({
            name: '',
            phone: '',
            email: '',
            position: '',
            type: '',
            region: '',
            addInfo: ''
           });
    }
}
