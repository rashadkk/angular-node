import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' }
]