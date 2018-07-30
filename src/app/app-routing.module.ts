import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NewRecordComponent} from "./records/app.record.new";
import {RecordsComponent} from "./records/app.records";

const routes : Routes = [
  {path: 'home', component: RecordsComponent},
  {path: 'add_task', component: NewRecordComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule{}
