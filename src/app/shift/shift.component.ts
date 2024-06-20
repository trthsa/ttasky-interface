import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedUIModule } from '../shared-ui-module/shared-ui-module.module';
import { ShiftTableComponent } from '../shift-table/shift-table.component';

@Component({
  selector: 'app-shift',
  standalone: true,
  templateUrl: './shift.component.html',
  styleUrl: './shift.component.css',
  imports: [SharedUIModule, ShiftTableComponent],
})
export class ShiftComponent {
  id: string | undefined;

  constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route?.parent?.params.subscribe((params) => {
  //     if (params) {
  //       this.id = params['id'];
  //     }
  //   });
  // }
}
