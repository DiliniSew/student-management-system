import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import {Header}from './header/header';
// import {StudentForm} from './student-form/student-form';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
//   protected readonly title = signal('my-first-angular-app');

// name: string = '';
// welcomeMessage: string = '';

// showWelcome(){

// this.welcomeMessage = 'Welcome,' + this.name + '!';

// }

}


