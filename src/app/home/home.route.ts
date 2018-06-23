import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';


export const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'about',  loadChildren: '../about/about.module#AboutModule' },
      { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' }
    ]
    
  }
]