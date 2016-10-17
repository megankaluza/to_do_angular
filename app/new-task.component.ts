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
      <label>Enter Task Category:</label>
      <select #newId>
        <option value="Hobby">Hobby</option>
        <option value="Home" selected="selected">Home</option>
        <option value="Work">Work</option>
      </select>
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
  addClicked(description: string, id: string, priority: string) {
    var newTaskToAdd: Task = new Task(description, id, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
