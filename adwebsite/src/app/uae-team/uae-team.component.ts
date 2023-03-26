import { Component } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'uae-team',
  templateUrl: './uae-team.component.html',
  styleUrls: ['./uae-team.component.css']
})
export class UaeTeamComponent {
    uaeResources:Employee[];
    
    constructor(empService:EmployeeService) {
        this.uaeResources = empService.getUaeResources();
    }
}
