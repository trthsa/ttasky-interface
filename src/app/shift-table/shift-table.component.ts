import { Component, ViewEncapsulation } from '@angular/core';
import { DAY, Shift } from '../../interface/day-time';
import { ShiftRowComponent } from '../shift-row/shift-row.component';

@Component({
  selector: 'app-shift-table',
  standalone: true,
  templateUrl: './shift-table.component.html',
  styleUrl: './shift-table.component.css',
  imports: [ShiftRowComponent],
  encapsulation: ViewEncapsulation.None,
})
export class ShiftTableComponent {
  shiftsMock: {
    shifts: Shift[];
  } = {
    shifts: [
      {
        shiftName: '1',
        availableOn: {
          [DAY.Monday]: true,
          [DAY.Wednesdays]: true,
          [DAY.Thursday]: true,
          [DAY.Friday]: true,
          [DAY.Saturday]: true,
          [DAY.Sunday]: true,
        },
      },
      {
        shiftName: '2',
        availableOn: {
          [DAY.Sunday]: true,
        },
      },
      {
        shiftName: '3',
        availableOn: {
          [DAY.Thursday]: true,
        },
      },
    ],
  };
}
