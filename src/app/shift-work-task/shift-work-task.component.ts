import { Component, Input } from '@angular/core';
import { IShiftWork } from '../../interface/task.interface';
import { TaskCellComponent } from '../task-cell/task-cell.component';

@Component({
  selector: 'app-shift-work-task',
  standalone: true,
  imports: [TaskCellComponent],
  templateUrl: './shift-work-task.component.html',
  styleUrl: './shift-work-task.component.css',
})
export class ShiftWorkTaskComponent {
  @Input() shiftWork: IShiftWork[] | undefined;
}
