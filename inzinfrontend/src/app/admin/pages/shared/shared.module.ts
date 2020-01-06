import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, SettingsComponent],
  imports: [
    CommonModule,
    MatSnackBarModule, // Now this will be available in all th modules under admin,
    ReactiveFormsModule,
    FormsModule
  
  
  ]
  ,exports:[FooterComponent, NavbarComponent, SidebarComponent, SettingsComponent] // This export is necessary such that footer can be used in every componet under page
})
export class SharedModule { }
