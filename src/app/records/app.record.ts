import {Component} from '@angular/core';
import { Input } from '@angular/core';
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'record',
  templateUrl: './app.record.html'
})
export class RecordComponent{
  @Input() record: ToDoTask;
}
