import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RecordsComponent} from "./records/app.records";
import {RecordComponent} from "./records/app.record";
import {NewRecordComponent} from "./records/app.record.new";
import {RecordMenu} from "./records/app.record.menu";
import {Menu} from "./common/app.common.menu";
import {AppRoutingModule} from "./app-routing.module";
import {TaskService} from "./records/services/app.record.service";

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordComponent,
    NewRecordComponent,
    RecordMenu,
    Menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ TaskService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
