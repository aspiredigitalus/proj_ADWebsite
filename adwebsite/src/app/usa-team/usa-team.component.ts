import { PositionService } from './../services/position/position.service';
import { Component } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'usa-team',
  templateUrl: './usa-team.component.html',
  styleUrls: ['./usa-team.component.css']
})
export class UsaTeamComponent {
    usaResources:any;
    
    constructor(empService:EmployeeService, posService:PositionService) {
        empService.getUsaResources()
            .subscribe((response) => {
                this.usaResources = response;
                
                for (let index = 0; index < response.length; index++) {
                    posService.getPositionTitleByEmpId(this.usaResources[index].id)
                        .subscribe((posRep) =>{
                            this.usaResources[index]['jobTitles']=posRep;
                        });
                }
            });
    }
}