import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
  ,exports:[FooterComponent, NavbarComponent, SidebarComponent, SettingsComponent] // This export is necessary such that footer can be used in every componet under page
})
export class SharedModule { }
