import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '@app/student.service';
import { DepartmentService } from '@app/department.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  admin: any = { role : 'admin'};
  students: any[] = [];
  
  constructor(private router: Router, private departmentService: DepartmentService,private studentService: StudentService){}
  submitForm() {
    if(this.admin.role==='admin'){
      this.router.navigate(['/admin']);
    }
    else if(this.admin.role==='student'){
      this.router.navigate(['/student']);
    }
    
  }
ngOnInit() {
  this.studentService.students$.subscribe((students) => {
    this.students = students;
  });

}
}
