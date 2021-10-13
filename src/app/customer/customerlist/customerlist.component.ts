import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  @Input('customerskidukan') 
  Custlist!:string[];
  constructor() { }

  ngOnInit(): void {
  }

}
