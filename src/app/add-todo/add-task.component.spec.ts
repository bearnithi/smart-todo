import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task.component';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';

describe('AddTaskComponent', () => {
    let component: AddTaskComponent;
    let fixture: ComponentFixture<AddTaskComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [TaskService],
            imports: [FormsModule, CommonModule, AddTaskComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AddTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add a task on addItem() call', () => {
        const taskService = TestBed.inject(TaskService);
        spyOn(taskService, 'addItem');

        component.taskTitle = 'Test Task';
        component.dueDate = '2023-01-01';

        component.addItem();

        expect(taskService.addItem).toHaveBeenCalledWith({
            title: 'Test Task',
            date: '2023-01-01',
            isCompleted: false,
        });
        expect(component.taskTitle).toBe('');
        expect(component.dueDate).toBe('');
    });

    it('should not add a task on addItem() if taskTitle and dueDate are empty', () => {
        const taskService = TestBed.inject(TaskService);
        spyOn(taskService, 'addItem');

        component.taskTitle = '';
        component.dueDate = '';

        component.addItem();

        expect(taskService.addItem).not.toHaveBeenCalled();
    });

    it('should reset the form on resetAddForm() call', () => {
        component.taskTitle = 'Test Task';
        component.dueDate = '2023-01-01';

        component.resetAddForm();

        expect(component.taskTitle).toBe('');
        expect(component.dueDate).toBe('');
    });

    it('should focus on todoInput on ngAfterViewInit()', () => {
        const todoInput = {
            nativeElement: {
                focus: jasmine.createSpy('focus'),
            },
        } as any;

        component.todoInput = todoInput;
        component.ngAfterViewInit();

        expect(todoInput.nativeElement.focus).toHaveBeenCalled();
    });
});
