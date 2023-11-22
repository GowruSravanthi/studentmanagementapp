import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'admin', component: AdminComponent},
  { path: 'dashboard', component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path:'dashboard', redirectTo:'/login', pathMatch:'full'},
  // Define other routes as needed.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

