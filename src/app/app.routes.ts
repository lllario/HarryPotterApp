import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}  
];