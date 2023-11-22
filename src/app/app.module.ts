import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AdminComponent } from './admin/admin.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { AddDepartmentsComponent } from './add-departments/add-departments.component';
import { AdminService } from './admin-service.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MarksSheetComponent } from './marks-sheet/marks-sheet.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AddStudentsComponent,
    AddDepartmentsComponent,
    StudentDashboardComponent,
    MarksSheetComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminService,
    StudentService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
