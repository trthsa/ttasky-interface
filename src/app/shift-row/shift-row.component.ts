import { Component, Input } from '@angular/core';
import { MOCK_TASKS } from '../../constants/tasks.constant';
import { DAY_CONST, Shift } from '../../interface/day-time';
import { ShiftWorkTaskComponent } from '../shift-work-task/shift-work-task.component';
import { TaskCellComponent } from '../task-cell/task-cell.component';

@Component({
  selector: 'app-shift-row',
  standalone: true,
  templateUrl: './shift-row.component.html',
  styleUrl: './shift-row.component.css',
  imports: [TaskCellComponent, ShiftWorkTaskComponent],
})
export class ShiftRowComponent {
  @Input() shift: Shift | undefined;
  DAY_CONST = DAY_CONST;
  MOCK_TASKS = MOCK_TASKS;
}
