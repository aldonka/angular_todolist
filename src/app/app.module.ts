import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RecordsComponent} from "./records/app.records";
import {RecordComponent} from "./records/app.record";
import {NewRecordComponent} from "./records/app.record.new";
import {RecordMenu} from "./records/app.record.menu";
import {Menu} from "./common/app.common.menu";

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'add_task', component: NewRecordComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

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
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
