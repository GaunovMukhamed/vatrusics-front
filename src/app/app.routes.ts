import { Routes } from '@angular/router';
import { StepsComponent } from './pages/steps/steps.component';

export const routes: Routes = [
  {
    path: 'steps',
    component: StepsComponent,
  },
  { path: '', redirectTo: '/steps', pathMatch: 'full' },
  { path: '**', redirectTo: '/steps', pathMatch: 'full' },
];
