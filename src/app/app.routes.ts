import { Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';

export const routes: Routes = [
  { path: 'price', component: FirstPageComponent },
  { path: 'about', component: SecondPageComponent },
];
