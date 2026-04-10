import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  {
    path: 'weather',
    loadComponent: () =>
      import('./features/weather-dashboard/weather-dashboard').then((m) => m.WeatherDashboard),
  },
];
