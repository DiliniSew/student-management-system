import { Injectable, signal } from '@angular/core';


export interface StudentData {
  id: string;
  fullName: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  email: string

}

@Injectable({
  providedIn: 'root'
})
export class Student {

 
//   studentDetails = signal <StudentData | null>(null);

  students = signal<StudentData[]>([]); //For storing multiple students
  latestStudent = signal<StudentData | null>(null); //For storing the new st.
  private nextStudentNumber = 1;

    
  saveStudent(data: Omit<StudentData, 'id'>) {

    const newId = `ST${String(this.nextStudentNumber++).padStart(3, '0')}`;

    const newStudent: StudentData = {
            id: newId,
            ...data
    };

    // this.studentDetails.set(data);
     this.students.update(currentStudents => [...currentStudents, newStudent]);


     this.latestStudent.set(newStudent);
  }

  updateStudent(id: string, updatedData: Omit<StudentData, 'id'>) {

    this.students.update(currentStudents => currentStudents.map(student => student.id === id ? {...student, ...updatedData} : student));

  }

  deleteStudent(id: string) {
    this.students.update(currentStudents => currentStudents.filter(student => student.id !== id));
  }


}