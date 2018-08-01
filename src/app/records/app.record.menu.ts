import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core'
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'record-menu',
  templateUrl: './app.record.menu.html'
})
export class RecordMenu {
  @Input() record: ToDoTask;
  @Output() toggle: EventEmitter<null> = new EventEmitter();

  click(){
    this.toggle.emit();
  }

}
