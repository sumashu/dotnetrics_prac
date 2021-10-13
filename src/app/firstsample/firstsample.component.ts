import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstsample',
  templateUrl: './firstsample.component.html',
  styleUrls: ['./firstsample.component.css']
})
export class FirstsampleComponent implements OnInit {
   num1: number = 0;
   num2:number=0;
   color!: string[];
   selectedColor!: string;
  constructor() { 
    this.color=['red','blue','green']
  }

  ngOnInit(): void {
  }

}
