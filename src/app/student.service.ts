// student.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<any[]>([]);
  students$ = this.studentsSubject.asObservable();

  addStudent(student: any) {
    const currentStudents = this.studentsSubject.getValue();
    const updatedStudents = [...currentStudents, student];
    this.studentsSubject.next(updatedStudents);
  }
  private studentInfo: any = {
    name: 'John Doe',
    rollNumber: '12345',
    // Add more student-related information as needed
  };

  private marks: any[] = [
    { subject: 'Math', marks: 90 },
    { subject: 'Science', marks: 85 },
    // Add more subjects and marks as needed
  ];

  private attendanceRecord: any[] = [];

  getStudentInfo() {
    return this.studentInfo;
  }

  getStudentMarks() {
    return this.marks;
  }

  getStudentAttendance() {
    return this.attendanceRecord;
  }

  markAttendance(date: Date) {
    // Implement logic to mark attendance
    this.attendanceRecord.push({ date });
  }
}
