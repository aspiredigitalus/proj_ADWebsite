import { Component } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'usa-team',
  templateUrl: './usa-team.component.html',
  styleUrls: ['./usa-team.component.css']
})
export class UsaTeamComponent {
    usaResources:Employee[];
    
    constructor(empService:EmployeeService) {
        this.usaResources = empService.getUsaResources();
    }
}
