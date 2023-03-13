import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'our-staff',
  templateUrl: './our-staff.component.html',
  styleUrls: ['./our-staff.component.css']
})
export class OurStaffComponent implements OnInit {
    
    managementId:Element|null = null;
    usaId:Element|null = null;
    indiaId:Element|null = null;

    constructor(private router:Router){
        console.log('constructor');
    }
    ngOnInit(): void {
        console.log('ngOnInit');
        this.managementId = document.getElementById('management');
        this.usaId = document.getElementById('usa');
        this.indiaId = document.getElementById('india');

        //this.router.events.subscribe(event => console.log(event));

        this.router.events.pipe(
            filter((event): event is Scroll => event instanceof Scroll)
        ).subscribe((event) => {
            let urlSnippet = event.routerEvent.url;
            if(urlSnippet.search('Management') != -1){
                this.managementId?.classList.add('tab-on')
                this.usaId?.classList.remove('tab-on')
                this.indiaId?.classList.remove('tab-on')
            } else if(urlSnippet.search('USA') != -1){
                this.usaId?.classList.add('tab-on')
                this.managementId?.classList.remove('tab-on')
                this.indiaId?.classList.remove('tab-on')
            }else if(urlSnippet.search('India') != -1){
                this.indiaId?.classList.add('tab-on')
                this.managementId?.classList.remove('tab-on')
                this.usaId?.classList.remove('tab-on')
            }else {
                this.managementId?.classList.add('tab-on')
                this.usaId?.classList.remove('tab-on')
                this.indiaId?.classList.remove('tab-on')
            }
        });
    }
}
