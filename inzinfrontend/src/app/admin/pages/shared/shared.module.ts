import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule,MatSelectModule,MatInputModule,} from '@angular/material';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, SettingsComponent],
  imports: [
    CommonModule,
    MatSnackBarModule, // Now this will be available in all th modules under admin,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,MatSelectModule,MatInputModule
  
  
  ]
  ,exports:[FooterComponent, NavbarComponent, SidebarComponent, SettingsComponent,MatTableModule,MatSnackBarModule, MatPaginatorModule,MatSortModule,MatFormFieldModule,MatSelectModule,MatInputModule] // This export is necessary such that footer can be used in every componet under page
  ,providers: [],
})
export class SharedModule { }
