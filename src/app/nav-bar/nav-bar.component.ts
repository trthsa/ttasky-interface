import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { SharedUIModule } from '../shared-ui-module/shared-ui-module.module';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedUIModule, MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
