import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ]
  ,exports:[FooterComponent] // This export is necessary such that footer can be used in every componet under page
})
export class SharedModule { }
