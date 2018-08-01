import {Component, HostBinding} from '@angular/core';
import { Input } from '@angular/core';
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'record',
  templateUrl: './app.record.html'
})
export class RecordComponent{
  @Input() record: ToDoTask;

  showDetails: boolean = false;

  public toggle_details(action_type) {
    if(action_type == 'details'){
      this.showDetails = !this.showDetails;
    }else if (action_type == 'edit'){
      console.log("Edit task!");
    }else if(action_type == 'remove'){
      console.log('Task removed.');
    }
  }

}
