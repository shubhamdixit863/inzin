import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsPagesComponent } from './brands-pages/brands-pages.component';


const routes: Routes = [

  {
    path: '',
    component: BrandsPagesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
