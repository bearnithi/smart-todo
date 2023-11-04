import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  showEdit = false;
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

}
