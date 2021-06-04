import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FridayComponent } from './friday/friday.component';

const routes: Routes = [
  {
    path: 'friday',
    component: FridayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
