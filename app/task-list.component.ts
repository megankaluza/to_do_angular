import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone">Show Not Done</option>
    </select>
    <select (change)="priorityChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
   <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priority:selectedPriority">
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
    public selectedPriority: string = 'all';
    onChange(optionFromMenu) {
      this.selectedCompleteness = optionFromMenu;
      console.log(this.selectedCompleteness);
    }
    priorityChange(optionFromMenu) {
     this.selectedPriority = optionFromMenu;
      console.log(this.selectedPriority);
     }
    editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
