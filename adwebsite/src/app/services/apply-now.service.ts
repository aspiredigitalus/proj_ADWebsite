import { JobPosition } from './../models/JobPosition';
import { Injectable } from '@angular/core';
import { JobRegion } from '../models/JobRegion';
import { JobType } from '../models/JobType';

@Injectable({
  providedIn: 'root'
})
export class ApplyNowService {

    constructor() { }

    positions:JobPosition[] = [
        new JobPosition(0, "SAP CPQ Associate"),
        new JobPosition(1, "SAP CPQ Architect"),
        new JobPosition(2, "SAP Commissions Associate"),
        new JobPosition(3, "SAP C4C Associate")
    ];
    regions:JobRegion[] = [
        new JobRegion(0, "United States of America"),
        new JobRegion(1, "India")
    ];
    types:JobType[] = [
        new JobType(0, "Part-Time"),
        new JobType(1, "Full-Time"),
        new JobType(2, "Apprenticeship")
    ];
    
    getPositions(){
        return this.positions;
    }
    getRegions(){
        return this.regions;
    }
    getTypes(){
        return this.types;
    }
}
    
