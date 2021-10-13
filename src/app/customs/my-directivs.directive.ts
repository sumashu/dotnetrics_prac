import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirectivs]'
})
export class MyDirectivsDirective {

  constructor(private ele: ElementRef, private rend:Renderer2) { 

     //this.ele.nativeElement.style.backgroundColor = 'green';
     this.rend.setStyle(this.ele.nativeElement, 'font-weight','bold')
     let input = this.rend.createElement('input');
     this.rend.appendChild(this.ele.nativeElement, input);
  }

  @Input('appMyDirectivs')
  color!: string; 

  @HostListener('mouseover')

  onMouseover1()
  {
    this.ele.nativeElement.style.backgroundColor =this.color
  }


}
