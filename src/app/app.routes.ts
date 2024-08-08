import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/users/users.routes').then((m) => m.routes),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.routes').then((m) => m.routes),
  },
];
