import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'plandashboard', component: PlanDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
