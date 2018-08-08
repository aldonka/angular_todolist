import {Component, Inject} from '@angular/core'
import {ToDoTask} from "./toDoTask";
import {TaskService} from "./services/app.record.service";

@Component({
  selector: 'records-list',
  templateUrl: './app.records.html'
})
export class RecordsComponent {
  records: ToDoTask[];

  constructor(private taskService: TaskService) {}

  getTasks(): void{
    this.taskService.getTasks().subscribe(tasks => this.records = tasks);
  }

  ngOnInit(){
    this.getTasks();
  }
}
