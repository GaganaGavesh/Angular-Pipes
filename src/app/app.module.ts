import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//Template Driven approach ekata thama FormsModule ona

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';

//components directives pipes declerations wala danna ona
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe//pipe eka use karanna namangular ekata eka kiyala tyenna ona
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
