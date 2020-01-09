import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPagesComponent } from './users-pages/users-pages.component';


const routes: Routes = [
  {
    path: '',
    component:UsersPagesComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
