import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';


const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
   
  },
  {
    path: 'dashboard',
    loadChildren: './pages/index/index.module#IndexModule',
    canActivate:[AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }