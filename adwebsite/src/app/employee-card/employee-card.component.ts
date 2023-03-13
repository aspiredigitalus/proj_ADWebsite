import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
    @Input() imgSrc:string = '';
    @Input() firstName:string = '';
    @Input() lastName:string = '';
    @Input() jobTitles:string[] = [];
    @Input() linkedInSrc:string = '';


}
