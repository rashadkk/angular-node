import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule'},
]