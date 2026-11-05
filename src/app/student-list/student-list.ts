import { Component, inject } from '@angular/core';
import {Student, StudentData} from '../student';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-student-list',
  styleUrl: './student-list.css',
  templateUrl: './student-list.html',
})
export class StudentList {

studentService = inject(Student);
router = inject(Router);
 goToAddStudent() {
    this.router.navigate(['/add-student']);
  }

 deleteStudent(id: string) {
  const confirmDelete = window.confirm('Are you sure you want to delete this student?');

  if (confirmDelete) {
    this.studentService.deleteStudent(id);
  }
}

 editStudent(student: StudentData) {
  this.router.navigate(['/edit-student', student.id]);
}




}
