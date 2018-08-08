import {Component, EventEmitter, Output} from '@angular/core';
import { Input } from '@angular/core';
import {ToDoTask} from "./toDoTask";
import {TaskService} from "./services/app.record.service";
import {rootRoute} from "@angular/router/src/router_module";
import {Router} from "@angular/router";

@Component({
  selector: 'new-record',
  templateUrl: './app.record.new.html'
})
export class NewRecordComponent{
  @Input() task: ToDoTask = ToDoTask.createNewTask();

  constructor(private taskService: TaskService,
              private router: Router){}

  create(){
    this.taskService.createTask(this.task);
    this.router.navigateByUrl("/home");
  }

  addTag(newTag){
    this.task.tag += newTag + ',';
  }
}
