import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { StanicaComponent } from './stanica.component';

@NgModule({
    imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    StanicaComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
