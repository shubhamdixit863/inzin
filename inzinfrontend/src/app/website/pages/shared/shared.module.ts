import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterhomeComponent } from './footerhome/footerhome.component';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';
import { BasehomeComponent } from './basehome/basehome.component';





@NgModule({
  declarations: [FooterhomeComponent, NavbarhomeComponent, BasehomeComponent],
  imports: [
    CommonModule
  ]
  ,exports:[FooterhomeComponent, NavbarhomeComponent, BasehomeComponent] // This export is necessary such that footer can be used in every componet under page
})
export class SharedModule { }
