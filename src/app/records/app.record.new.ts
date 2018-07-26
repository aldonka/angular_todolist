import {Component} from '@angular/core';
import { Input } from '@angular/core';
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'new-record',
  templateUrl: './app.record.new.html'
})
export class NewRecordComponent{
  @Input() newRecord: ToDoTask;
}
