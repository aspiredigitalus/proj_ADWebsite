import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.css']
})
export class TopOfPageComponent {
    @Input() urlSnippet = '';
}
