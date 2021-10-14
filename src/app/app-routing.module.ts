import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstsampleComponent } from './firstsample/firstsample.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'home', component: FirstsampleComponent},
  {path: '**', pathMatch:"full" , component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
