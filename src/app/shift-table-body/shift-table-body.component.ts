import { Component, Input } from '@angular/core';
import { DAY_CONST, Shift } from '../../interface/day-time';
import { ShiftRowComponent } from '../shift-row/shift-row.component';

@Component({
  selector: '[app-shift-table-body]',
  standalone: true,
  templateUrl: './shift-table-body.component.html',
  styleUrl: './shift-table-body.component.css',
  imports: [ShiftRowComponent],
})
export class ShiftTableBodyComponent {
  @Input() shifts: Shift[] | undefined;
  DAY_CONST = DAY_CONST;
}
