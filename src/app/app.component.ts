import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dotnet';
  productname:string="laptop";
  producid:string="agf"

  clickMe()
  {
    alert(`this is product ${this.productname}`)
  }
}
