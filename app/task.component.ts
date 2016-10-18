import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-display',
  template: `
  <div>
    <input *ngIf="task.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="task.done === false" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ task.description }}</label>
  </div>
    <!--<div>
  <label>{{ task.priority }}</label>
    <select>
      <option *ngIf="task.priority === High" type="select" selected="selected" (change)="togglePriority(High)"/>
      <option *ngIf="task.priority === Medium" type="select" (change)="togglePriority(Medium)"/>
      <option *ngIf="task.priority === Low" type="select" (change)="togglePriority(Low)"/>
    </select>
  </div>-->
  `
})
export class TaskComponent {
  @Input() task: Task;
  toggleDone(setCompleteness: boolean) {
    this.task.done = setCompleteness;
  }
  togglePriority(setPriority: string) {
    this.task.priority = setPriority;
  }
}
