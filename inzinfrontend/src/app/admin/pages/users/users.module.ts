import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { SharedModule } from '../shared/shared.module';
import { UsersPagesComponent } from './users-pages/users-pages.component';


@NgModule({
  declarations: [UsersPagesComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
