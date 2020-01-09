import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ ProductsPageComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
