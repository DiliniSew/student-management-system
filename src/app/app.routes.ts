import { Routes } from '@angular/router';
import {StudentForm} from './student-form/student-form';
// import {StudentDetails} from './student-details/student-details';
import { StudentList } from './student-list/student-list';

export const routes: Routes = [

{   path: '', 
    component: StudentList

},

{

    path: 'add-student',
    component: StudentForm


},
// {

//     path: 'student-details',
//     component: StudentDetails

// },

{
    path: 'edit-student/:id', 
    component: StudentForm},



];
