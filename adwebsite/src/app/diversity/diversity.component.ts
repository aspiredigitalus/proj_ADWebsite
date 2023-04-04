import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diversity',
  templateUrl: './diversity.component.html',
  styleUrls: ['./diversity.component.css']
})
export class DiversityComponent implements OnInit {
    
    elementArray: Array<HTMLElement> = new Array();
    
    descElementArray: Array<HTMLElement> = new Array();

    ngOnInit(): void {
        this.elementArray.push(document.getElementById('red')!);
        this.elementArray.push(document.getElementById('green')!);
        this.elementArray.push(document.getElementById('blue')!);
        this.elementArray.push(document.getElementById('yellow')!);
        this.elementArray.push(document.getElementById('orange')!);
        this.elementArray.push(document.getElementById('purple')!);

        this.descElementArray.push(document.getElementById('red-desc')!);
        this.descElementArray.push(document.getElementById('green-desc')!);
        this.descElementArray.push(document.getElementById('blue-desc')!);
        this.descElementArray.push(document.getElementById('yellow-desc')!);
        this.descElementArray.push(document.getElementById('orange-desc')!);
        this.descElementArray.push(document.getElementById('purple-desc')!);
    }


    selected(e: Event) {     
        let targetElement = (e.target as HTMLElement);
        if(targetElement.nodeName != 'DIV'){
            targetElement = targetElement.parentElement!;
        }
        let targetName = targetElement.id;
        this.elementArray.forEach(colorElement => {
            colorElement.classList.remove('flag');
            colorElement.classList.add('flag-narrow');
        });
        this.descElementArray.forEach(descElement => {
            descElement.classList.add('hidden');
            for (let index = 0; index < descElement.children.length; index++) {
                descElement.children.item(index)?.classList.add('hidden-text');
            }     
        });
        targetElement.classList.remove('flag-narrow');
        targetElement.classList.add('flag');
        
        document.getElementById(targetName+'-desc')?.classList.remove('hidden');
        for (let index = 0; index < document.getElementById(targetName+'-desc')?.children.length!; index++) {
            document.getElementById(targetName+'-desc')?.children.item(index)?.classList.remove('hidden-text');
            
        }
    }
}
