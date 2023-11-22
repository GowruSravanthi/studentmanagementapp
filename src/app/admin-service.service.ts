// admin.service.ts
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private students: any[] = [];
  private departments: any[] = [];

  addStudent(student: any) {
    // Implement logic to add a student to the list
    this.students.push(student);
  }

  addDepartment(department: any) {
    // Implement logic to add a department to the list
    this.departments.push(department);
  }

  getStudents() {
    return this.students;
  }

  getDepartments() {
    return this.departments;
  }
}
