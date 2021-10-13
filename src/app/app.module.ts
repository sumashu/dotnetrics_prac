import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstsampleComponent } from './firstsample/firstsample.component';
import { MyDirectivsDirective } from './customs/my-directivs.directive';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstsampleComponent,
    MyDirectivsDirective,
    CustomerAddComponent,
    CustomerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
