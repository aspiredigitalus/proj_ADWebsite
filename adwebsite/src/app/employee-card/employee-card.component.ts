import { Component, Input } from '@angular/core';
import { Position } from '../models/Position';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
    @Input() imgSrc:string = '';
    @Input() firstName:string = '';
    @Input() lastName:string = '';
    @Input() jobTitles:any;
    @Input() linkedInSrc:string = '';


}
