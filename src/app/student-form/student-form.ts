import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student} from '../student';  
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-student-form',
  styleUrl: './student-form.css',
  templateUrl: './student-form.html',
})
export class StudentForm implements OnInit {
// id: string = '';
fullName: string = '';
address: string = '';
dateOfBirth: string = '';
gender: string = '';
email: string = '';
studentId: string | null = null;


studentService = inject(Student);
router = inject(Router);
route = inject(ActivatedRoute);

submitForm() {
  const student = {
    // id: '' + Date.now(), // Generate a unique ID based on timestamp
    fullName: this.fullName,
    address: this.address,
    dateOfBirth: this.dateOfBirth,
    gender: this.gender,
    email: this.email
  };

if (this.studentId) {
  this.studentService.updateStudent(this.studentId, student);
  this.router.navigate(['/']);

}

else {
  this.studentService.saveStudent(student);
  this.router.navigate(['/']);

}

  console.log('Student data saved:', student);

}

ngOnInit() {
  this.studentId = this.route.snapshot.paramMap.get('id');

  if (this.studentId) {
    const student = this.studentService.students().find(
      s => s.id === this.studentId
    );

    if (student) {
      this.fullName = student.fullName;
      this.address = student.address;
      this.dateOfBirth = student.dateOfBirth;
      this.gender = student.gender;
      this.email = student.email;
    }
  }
}





//app module ts and standalone
//data pass, validation, form control vs group control
// data binding methods - 3
// dependency injection, services

}
