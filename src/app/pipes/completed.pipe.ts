import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'completed',
  pure: false,
  standalone: true,
})
export class CompletedPipe implements PipeTransform {

  /**
   *
   * @param value todolist array
   * @param isCompleted boolean which acts as a filter.
   */
  transform(value: Task[], isCompleted: boolean): Task[] {
    if (!value || value.length === 0) {
      return value;
    }

    return value.filter((currentValue: any) => currentValue.isCompleted === isCompleted);
  }

}
