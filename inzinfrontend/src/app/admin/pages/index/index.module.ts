import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexPageComponent } from './index-page/index-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class IndexModule { }
