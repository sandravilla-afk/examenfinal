import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './pages/page1/page1.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component }
];
