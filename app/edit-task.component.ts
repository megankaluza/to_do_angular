import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Enter Task Category:</label>
        <select [(ngModel)]="childSelectedTask.id">
          <option value="Hobby">Hobby</option>
          <option value="Home" selected="selected">Home</option>
          <option value="Work">Work</option>
        </select>
      </div>
    <div>
    <label>Priority</label>
    <select [(ngModel)]="childSelectedTask.priority">
      <option value="high">High</option>
      <option value="medium" selected="selected">Medium</option>
      <option value="low">Low</option>
    </select>
    <button (click)="doneClicked()">Done</button>
  </div>
</div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
