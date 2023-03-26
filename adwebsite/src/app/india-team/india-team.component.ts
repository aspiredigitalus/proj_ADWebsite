import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { PositionService } from '../services/position/position.service';

@Component({
  selector: 'india-team',
  templateUrl: './india-team.component.html',
  styleUrls: ['./india-team.component.css']
})
export class IndiaTeamComponent {
    indiaResources:any;

    constructor(empService:EmployeeService, posService:PositionService) {
        empService.getIndiaResources()
            .subscribe((response) => {
                this.indiaResources = response;
                
                for (let index = 0; index < response.length; index++) {
                    posService.getPositionTileByEmpId(this.indiaResources[index].id)
                        .subscribe((posRep) =>{
                            this.indiaResources[index]['jobTitles']=posRep;
                        });
                }
            });
    }
}

