import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

import { load } from './shared';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'lazy',
    loadChildren: load(() => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./lazy/lazy.module').LazyModule);
      });
    }))
 }
];
