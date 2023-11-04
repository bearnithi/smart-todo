import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class AddTaskComponent implements AfterViewInit {
  @ViewChild('taskInput') todoInput!: ElementRef;

  taskTitle = '';
  dueDate = '';

  constructor(public taskService: TaskService) { }

  addItem(): void {
    if (!this.taskTitle && !this.dueDate) {
      return;
    }

    this.taskService.addItem({
      title: this.taskTitle.trim(),
      date: this.dueDate,
      isCompleted: false
    });

    this.resetAddForm();
  }

  resetAddForm() {
    this.taskTitle = '';
    this.dueDate = '';
  }

  ngAfterViewInit(): void {
    this.todoInput.nativeElement.focus();
  }

}
