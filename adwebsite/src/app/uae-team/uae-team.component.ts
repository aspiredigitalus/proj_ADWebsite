import { Component } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee/employee.service';
import { PositionService } from '../services/position/position.service';

@Component({
  selector: 'uae-team',
  templateUrl: './uae-team.component.html',
  styleUrls: ['./uae-team.component.css']
})
export class UaeTeamComponent {
    uaeResources:any;
    
    constructor(empService:EmployeeService, posService:PositionService) {
        empService.getUaeResources()
            .subscribe((response) => {
                this.uaeResources = response;
                
                for (let index = 0; index < response.length; index++) {
                    posService.getPositionTileByEmpId(this.uaeResources[index].id)
                        .subscribe((posRep) =>{
                            this.uaeResources[index]['jobTitles']=posRep;
                        });
                }
            });
    }
}
