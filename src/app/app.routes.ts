import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ShiftComponent } from './shift/shift.component';
import { TeamComponent } from './team/team.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'team/:id',
    component: TeamComponent,
    children: [
      {
        path: 'shift',
        component: ShiftComponent,
        //lazy loading
      },
      {
        path: 'member',
        component: MemberComponent,
      },
      {
        path: 'shift-work',
        component: WorkComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
