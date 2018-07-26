import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RecordsComponent} from "./records/app.records";
import {RecordComponent} from "./records/app.record";
import {NewRecordComponent} from "./records/app.record.new";
import {RecordMenu} from "./records/app.record.menu";

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordComponent,
    NewRecordComponent,
    RecordMenu
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
