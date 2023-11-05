import { TestBed } from '@angular/core/testing';
import { CompletedPipe } from './completed.pipe';
import { Task } from '../models/task.model';

describe('CompletedPipe', () => {
  let pipe: CompletedPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletedPipe],
    });

    pipe = TestBed.inject(CompletedPipe);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter completed tasks correctly', () => {
    const tasks = [
      { title: 'Task 1', date: '2023-01-01', isCompleted: true },
      { title: 'Task 2', date: '2023-01-02', isCompleted: false },
      { title: 'Task 3', date: '2023-01-03', isCompleted: true },
    ];

    const result = pipe.transform(tasks, true);

    expect(result.length).toBe(2);
    expect(result[0].title).toBe('Task 1');
    expect(result[1].title).toBe('Task 3');
  });

  it('should filter incomplete tasks correctly', () => {
    const tasks = [
      { title: 'Task 1', date: '2023-01-01', isCompleted: true },
      { title: 'Task 2', date: '2023-01-02', isCompleted: false },
      { title: 'Task 3', date: '2023-01-03', isCompleted: true },
    ];

    const result = pipe.transform(tasks, false);

    expect(result.length).toBe(1);
    expect(result[0].title).toBe('Task 2');
  });

  it('should return the original array if no tasks', () => {
    const tasks: Task[] = [];
    const result = pipe.transform(tasks, true);

    expect(result).toEqual(tasks);
  });

  it('should return the original array if no matching tasks', () => {
    const tasks = [
      { title: 'Task 1', date: '2023-01-01', isCompleted: false },
      { title: 'Task 2', date: '2023-01-02', isCompleted: false },
    ];

    const result = pipe.transform(tasks, false);

    expect(result.length).toEqual(tasks.length);
  });
});
