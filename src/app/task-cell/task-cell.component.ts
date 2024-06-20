import { Component, Input } from '@angular/core';
import { IShiftWork } from '../../interface/task.interface';

@Component({
  selector: 'app-task-cell',
  standalone: true,
  imports: [],
  templateUrl: './task-cell.component.html',
  styleUrl: './task-cell.component.css',
})
export class TaskCellComponent {
  @Input() task: IShiftWork | undefined;
}
