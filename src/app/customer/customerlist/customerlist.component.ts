import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  @Input('customerskidukan') 
  Custlist!:string[];
  @Input('empdtl')
  employeeDetl!: any;
  @Output('onselctedCust')
  onselctedCust!:EventEmitter<string>;
  
  constructor() { 
    this.onselctedCust = new EventEmitter;
  }

  ngOnInit(): void {
  }

  SelctedCustomer(Custm: string)
  {
    this.onselctedCust.emit(Custm);
  }

}
