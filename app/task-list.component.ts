import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let currentTask of childTaskList">
      <h3>{{ currentTask.description }}</h3>
      <h4>{{ currentTask.id }}</h4>
      <h4>{{ currentTask.priority }}</h4>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
  this.clickSender.emit(taskToEdit);
}
}
