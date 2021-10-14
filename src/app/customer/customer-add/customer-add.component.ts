import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  CustomerName!:string;
  Customers!:string[];

  employees = [{
    name:"sumit",age:30,salary:300000
  }]
  constructor() {
    this.Customers = [];
   }

  ngOnInit(): void {
  }

  addCustomer()
  {
   this.Customers.push(this.CustomerName);
  }

  readata(ndata: string){
    this.CustomerName = ndata;
  }

}
