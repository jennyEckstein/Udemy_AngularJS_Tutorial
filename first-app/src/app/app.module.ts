import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DoublepipePipe } from './shared/doublepipe.pipe';
import { FilterpipePipe } from './shared/filterpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DoublepipePipe,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
