import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { lazyRoutes }     from './lazy.routes';
import { HomeComponent }  from './home';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(lazyRoutes)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [

  ],
  entryComponents: [  ]
})
export class LazyModule {
}
