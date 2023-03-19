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
    
    leadershipId:Element|null = null;
    usaId:Element|null = null;
    indiaId:Element|null = null;
    uaeId:Element|null = null;

    constructor(private router:Router){
        console.log('constructor');
    }
    ngOnInit(): void {
        console.log('ngOnInit');
        this.leadershipId = document.getElementById('leadership');
        this.usaId = document.getElementById('usa');
        this.indiaId = document.getElementById('india');
        this.uaeId = document.getElementById('uae');

        //this.router.events.subscribe(event => console.log(event));

        this.router.events.pipe(
            filter((event): event is Scroll => event instanceof Scroll)
        ).subscribe((event) => {
            let urlSnippet = event.routerEvent.url;
            if(urlSnippet.search('Leadership') != -1){
                this.leadershipId?.classList.add('tab-on')
                this.usaId?.classList.remove('tab-on')
                this.indiaId?.classList.remove('tab-on')
                this.uaeId?.classList.remove('tab-on')
            } else if(urlSnippet.search('USA') != -1){
                this.usaId?.classList.add('tab-on')
                this.leadershipId?.classList.remove('tab-on')
                this.indiaId?.classList.remove('tab-on')
                this.uaeId?.classList.remove('tab-on')
            }else if(urlSnippet.search('India') != -1){
                this.indiaId?.classList.add('tab-on')
                this.leadershipId?.classList.remove('tab-on')
                this.usaId?.classList.remove('tab-on')
                this.uaeId?.classList.remove('tab-on')
            }else if(urlSnippet.search('UAE') != -1){
                this.uaeId?.classList.add('tab-on')
                this.indiaId?.classList.remove('tab-on')
                this.leadershipId?.classList.remove('tab-on')
                this.usaId?.classList.remove('tab-on')     
            }else {
                this.leadershipId?.classList.add('tab-on')
                this.usaId?.classList.remove('tab-on')
                this.indiaId?.classList.remove('tab-on')
                this.uaeId?.classList.remove('tab-on')
            }
        });
    }
}
