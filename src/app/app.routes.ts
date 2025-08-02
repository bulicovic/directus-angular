import { Routes } from '@angular/router';
import { PageComponent } from './page/page';
import { GlobalComponent } from './global/global';

export const routes: Routes = [
  { path: '', component: GlobalComponent },
  { path: ':slug', component: PageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
