// department.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departmentsSubject = new BehaviorSubject<string[]>([]);
  departments$ = this.departmentsSubject.asObservable();

  addDepartment(departmentName: string) {
    const currentDepartments = this.departmentsSubject.getValue();
    const updatedDepartments = [...currentDepartments, departmentName];
    this.departmentsSubject.next(updatedDepartments);
  }
}
