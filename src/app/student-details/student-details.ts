import { Component } from '@angular/core';
import { Student } from '../student';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-student-details',
  styleUrl: './student-details.css',
  templateUrl: './student-details.html',
})
export class StudentDetails {

  router = inject(Router);

  studentService = inject(Student);
  
   goToStudentList() {
    this.router.navigate(['/']);
  }



}
