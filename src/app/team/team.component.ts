import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  imports: [RouterOutlet, NavBarComponent],
})
export class TeamComponent {
  shiftId: string | undefined;
  @Input()
  set id(shiftId: string) {
    console.log('shiftId', shiftId);
    this.shiftId = shiftId;
  }
}
