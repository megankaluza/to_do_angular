import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
    </div>
    <div>
      <label>Select Priority Level:</label>
      <select #newPriority>
        <option value="high">High</option>
        <option value="medium" selected="selected">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div>
      <button (click)="
        addClicked(newDescription.value, newId.value, newPriority.value);
        newDescription.value='';
        newId.value='';
        newPriority.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string) {
    var newTaskToAdd: Task = new Task(description, id, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
