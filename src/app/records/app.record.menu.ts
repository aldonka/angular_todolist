import {Component, Input} from '@angular/core'
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'record-menu',
  templateUrl: './app.record.menu.html'
})
export class RecordMenu {
  @Input() record: ToDoTask;
}
