import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { Subject, Subscription } from 'rxjs';
import { Task } from './models/task.model';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let taskService: jasmine.SpyObj<TaskService>;

    beforeEach(() => {
        taskService = jasmine.createSpyObj('TaskService', ['addItem', 'removeItem']);

        TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                { provide: TaskService, useValue: taskService }
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        component.toDoSubscription = new Subscription();
        taskService.toDoAdded$ = new Subject<Task[]>();

    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with an empty toDoLists array', () => {
        expect(component.toDoLists).toEqual([]);
    });

    it('should unsubscribe on component destroy', () => {
        spyOn(component.toDoSubscription as Subscription, 'unsubscribe');

        component.ngOnDestroy();

        expect(component.toDoSubscription?.unsubscribe).toHaveBeenCalled();
    });

    it('should render tasks in the template', () => {
        const mockTasks = [
            { title: 'Task 1', date: '2023-01-01', isCompleted: false },
            { title: 'Task 2', date: '2023-01-02', isCompleted: true }
        ];

        component.toDoLists = mockTasks;
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const taskElements = element.querySelectorAll('app-task-item');

        expect(taskElements.length).toEqual(mockTasks.length);
    });

});
