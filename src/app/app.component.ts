import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temp: string;
  todo: string[] = [];

  addTodo() {
    this.todo.push(this.temp);
  }

  displayTodo() {
    console.log(this.todo);
  }
}
