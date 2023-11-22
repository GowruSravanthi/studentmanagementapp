// attendance.component.ts
import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
})
export class AttendanceComponent {
  today: Date = new Date();
  attendanceRecord: any[]; // Define the structure based on your attendance data model

  constructor(private studentService: StudentService) {
    // Fetch student attendance from the service
    this.attendanceRecord = this.studentService.getStudentAttendance();
  }

  markAttendance() {
    // Implement logic to mark attendance for today
    this.studentService.markAttendance(this.today);
    // Update the attendanceRecord if needed
    this.attendanceRecord = this.studentService.getStudentAttendance();
  }
}
