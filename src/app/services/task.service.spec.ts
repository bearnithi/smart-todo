import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService],
    });

    taskService = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(taskService).toBeTruthy();
  });

  it('should add a task', () => {
    const task: Task = { title: 'Test Task', date: '2023-01-01' };
    taskService.addItem(task);

    expect(taskService.tasks.length).toBe(1);
    expect(taskService.tasks[0]).toBe(task);
  });

  it('should remove a task', () => {
    const task: Task = { title: 'Test Task', date: '2023-01-01' };
    taskService.addItem(task);
    expect(taskService.tasks.length).toBe(1);

    taskService.removeItem(task);

    expect(taskService.tasks.length).toBe(0);
  });

  it('should publish the to-do list on add or remove', () => {
    const spy = spyOn(taskService.toDoAdded$, 'next');

    const task: Task = { title: 'Test Task', date: '2023-01-01' };
    taskService.addItem(task);

    expect(spy).toHaveBeenCalledWith(taskService.tasks);

    taskService.removeItem(task);

    expect(spy).toHaveBeenCalledWith(taskService.tasks);
  });
});
