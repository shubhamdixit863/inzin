import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterhomeComponent } from './footerhome/footerhome.component';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';






@NgModule({
  declarations: [FooterhomeComponent, NavbarhomeComponent],
  imports: [
    CommonModule
  ]
  ,exports:[FooterhomeComponent, NavbarhomeComponent] // This export is necessary such that footer can be used in every componet under page
})
export class SharedModule { }
