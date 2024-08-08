import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-user',
    pathMatch: 'full',
  },
  {
    path: 'create-user',
    loadComponent: () =>
      import('../users/pages/create-user/create-user.component').then(
        (c) => c.CreateUserComponent
      ),
  },
];
