import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Array<Task> = [];
  toDoAdded$ = new Subject<Task[]>();

  constructor() { }

  addItem(todo: Task) {
    this.tasks.push(todo);
    this.publishToDoList();
  }

  removeItem(toDo: Task) {
    const toDoIndex = this.tasks.indexOf(toDo);
    if (toDoIndex > -1) {
      this.tasks.splice(toDoIndex, 1);
    }
    this.publishToDoList();
  }

  publishToDoList() {
    this.toDoAdded$.next(this.tasks);
  }
}
