import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskService } from './services/task.service';
import { TaskItemComponent } from './task-item/task-item.component';
import { AddTaskComponent } from './add-todo/add-task.component';
import { CompletedPipe } from './pipes/completed.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    TaskItemComponent,
    AddTaskComponent,
    CompletedPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoLists: Array<any> = [];
  toDoSubscription: Subscription | undefined;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.toDoSubscription = this.taskService.toDoAdded$.subscribe((toDoLists) => {
      this.toDoLists = toDoLists;
    });
  }

  ngOnDestroy() {
    if (this.toDoSubscription) {
      this.toDoSubscription.unsubscribe();
    }
  }
}
