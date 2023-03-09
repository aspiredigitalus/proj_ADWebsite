import { Component } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator } from '@angular/forms';
import { JobApply } from '../models/JobApply';
import { JobPosition } from '../models/JobPosition';
import { JobRegion } from '../models/JobRegion';
import { JobType } from '../models/JobType';
import { ApplyNowService } from '../services/apply-now.service';

@Component({
  selector: 'apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})

export class ApplyNowComponent {
    appNowForm = new FormGroup({
        name: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
        position: new FormControl(''),
        type: new FormControl(''),
        region: new FormControl(''),
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
        this.app.setName(this.appNowForm.controls.name.value!);
        this.app.setEmail(this.appNowForm.controls.email.value!);
        this.app.setPhone(this.appNowForm.controls.phone.value!);
        this.app.setPosition(this.appNowForm.controls.position.value!);
        this.app.setType(this.appNowForm.controls.type.value!);
        this.app.setRegion(this.appNowForm.controls.region.value!);
        if(this.appNowForm.controls.region.value!=null){
            this.app.setAddInfo(this.appNowForm.controls.addInfo.value!);
        }
        console.log(this.app);
    }
    isReset(){
        this.appNowForm.reset({
            name: '',
            phone: '',
            email: '',
            position: '-1',
            type: '-1',
            region: '-1',
            addInfo: ''
           });
    }
}
