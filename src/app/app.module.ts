import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RecordsComponent} from "./records/app.records";

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  RecordsComponent]
})
export class AppModule { }
