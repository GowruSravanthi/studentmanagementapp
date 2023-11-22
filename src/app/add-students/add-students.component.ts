// add-students.component.ts
// Similar structure for AddDepartmentsComponent
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '@app/admin-service.service';
import { StudentService } from '@app/student.service';


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
})
export class AddStudentsComponent  implements OnInit{
  studentForm: FormGroup;
  newStudent: any = {};
  students: any[] = [];

  constructor(private formBuilder: FormBuilder, private adminService: AdminService,private studentService: StudentService ) {
    this.studentForm = this.formBuilder.group({
      
    });
  }
  addStudent() {
    this.studentService.addStudent(this.newStudent);
    this.newStudent = {}; // Clear the form after adding a student
  }
  ngOnInit() {
    this.studentService.students$.subscribe((students) => {
      this.students = students;
    });
  }
}

  
