import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
      <div class="taskBox">
        <task-display [task]="currentTask"></task-display>
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
    public selectedCompleteness: string = 'notDone';
    onChange(optionFromMenu) {
      this.selectedCompleteness = optionFromMenu;
      console.log(this.selectedCompleteness);
    }
    editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
