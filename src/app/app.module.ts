import { NgModule, ApplicationRef, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { RouterModule }             from '@angular/router';

import { AppComponent }       from './app.component';
import { appRoutes }          from './app.routes';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

import { AsyncNgModuleLoader } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [
    // Use custom ng module factory loader
    { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
  ],
  entryComponents: [ AppComponent ]
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}
