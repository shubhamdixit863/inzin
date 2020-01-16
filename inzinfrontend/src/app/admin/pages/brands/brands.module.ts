import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsPagesComponent } from './brands-pages/brands-pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BrandsPagesComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SharedModule
  ]
})
export class BrandsModule { }
