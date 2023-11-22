// marks-sheet.component.ts
import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-marks-sheet',
  templateUrl: './marks-sheet.component.html',
})
export class MarksSheetComponent {
  marks: any[]; // Define the structure based on your marks data model

  constructor(private studentService: StudentService) {
    // Fetch student marks from the service
    this.marks = this.studentService.getStudentMarks();
  }
}
