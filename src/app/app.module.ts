import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrorTestComponent } from './dror-test/dror-test.component';
import { FridayComponent } from './friday/friday.component';

@NgModule({
  declarations: [
    AppComponent,
    DrorTestComponent,
    FridayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
