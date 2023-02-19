import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:DashboardComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ]
})
export class AppRoutingModule { }
