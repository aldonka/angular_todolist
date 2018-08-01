import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core'
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'record-menu',
  templateUrl: './app.record.menu.html'
})
export class RecordMenu {
  @Input() record: ToDoTask;
  @Output() action: EventEmitter<string> = new EventEmitter();

  do_action(actionType: string){
    this.action.emit(actionType);
  }

}
