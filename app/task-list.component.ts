import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let currentTask of childTaskList">
      <div class="taskBox">
        <h3>{{ currentTask.description }}</h3>
        <h4>Type: {{ currentTask.id }}</h4>
        <h4>Priority: {{ currentTask.priority }}</h4>
        <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      </div>
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
