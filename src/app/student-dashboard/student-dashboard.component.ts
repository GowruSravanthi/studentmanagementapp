// student-dashboard.component.ts
import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
})
export class StudentDashboardComponent {
  studentInfo: any; // Define the structure based on your student data model

  constructor(private studentService: StudentService) {
    // Fetch student information from the service
    this.studentInfo = this.studentService.getStudentInfo();
  }
}
