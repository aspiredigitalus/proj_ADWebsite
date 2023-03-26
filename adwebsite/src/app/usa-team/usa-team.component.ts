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
    
    constructor(empService:EmployeeService) {
        empService.getUsaResources()
            .subscribe((response:Array<Employee>) => {
                this.usaResources = response;
                console.log(this.usaResources);
                for (let index = 0; index < response.length; index++) {
                    
                }
                console.log(this.usaResources);
            });
    }
}
