import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  CustomerName!:string;
  Customers!:string[]
  constructor() {
    this.Customers = [];
   }

  ngOnInit(): void {
  }

  addCustomer()
  {
   this.Customers.push(this.CustomerName);
  }

}
