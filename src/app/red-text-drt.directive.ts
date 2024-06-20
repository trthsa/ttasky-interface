import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedTextDrt]',
  standalone: true,
})
export class RedTextDrtDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'yellow';
    //make it bigger
    this.el.nativeElement.style.fontSize = '1em';
  }
}
