import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Megan & Alex's To-Do List</h1>
    <hr>
    <edit-task
    [childSelectedTask]="selectedTask"
    (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
      >
      <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
      ></edit-task>

    </task-list>
     <new-task
   (newTaskSender)="addTask($event)"
  ></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Watch Stranger Things on Netflix.", "Hobby", "Medium"),
      new Task("Flower shopping for my significant other.", "Home", "High"),
      new Task("Catching butterflies.", "Hobby", "Low"),
      new Task("Drink coffee.", "Work", "High")
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
  this.masterTaskList.push(newTaskFromChild);
}
}
