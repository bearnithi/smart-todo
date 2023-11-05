import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';
import { TaskService } from '../services/task.service';

describe('TaskItemComponent', () => {
    let component: TaskItemComponent;
    let fixture: ComponentFixture<TaskItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [TaskService],
            imports: [FormsModule, CommonModule, TaskItemComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(TaskItemComponent);
        component = fixture.componentInstance;
        component.task = { title: 'Test Task', date: '2023-01-01', isCompleted: false };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render task details', () => {
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const titleElement = element.querySelector('.fw-bold');
        const dateElement = element.querySelector('.text-sm');

        expect(titleElement?.textContent).toContain('Test Task');
        expect(dateElement?.textContent).toContain('Jan 1, 2023');
    });

    it('should show edit UI when showEdit is true', () => {
        component.showEdit = true;
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const editTemplate = element.querySelector('.form-group.w-100');
        expect(editTemplate).toBeTruthy();
    });

    it('should call taskService.removeItem on delete button click', () => {
        const taskService = TestBed.inject(TaskService);
        spyOn(taskService, 'removeItem');

        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const deleteButton = element.querySelector('.btn-danger') as HTMLButtonElement;
        deleteButton?.click();

        expect(taskService.removeItem).toHaveBeenCalledWith(component.task);
    });

    it('should update task.isCompleted on checkbox change', () => {
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const checkbox = element.querySelector('.form-check-input') as HTMLInputElement;

        checkbox.click();
        expect(component.task.isCompleted).toBe(true);

        checkbox.click();
        expect(component.task.isCompleted).toBe(false);
    });

    it('should update task properties and reset showEdit on update button click', () => {
        component.showEdit = true;
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const titleInput = element.querySelector('input[name="name"]') as HTMLInputElement;
        const dateInput = element.querySelector('input[name="date"]') as HTMLInputElement;
        const updateButton = element.querySelector('.btn-primary') as HTMLButtonElement;

        titleInput.value = 'Updated Task';
        dateInput.value = '2023-02-02';
        titleInput.dispatchEvent(new Event('input'));
        dateInput.dispatchEvent(new Event('input'));

        updateButton?.click();

        expect(component.task.title).toBe('Updated Task');
        expect(component.task.date).toBe('2023-02-02');
        expect(component.showEdit).toBe(false);
    });

});
