import {Injectable} from "@angular/core";
import {ToDoTask} from "../toDoTask";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";

@Injectable()
export class TaskService{
  tasks: ToDoTask[];

  constructor(){
    this.initTasksTmp();
  }

  private initTasksTmp(){
    this.tasks = [
      new ToDoTask(
        1,
        'appointment',
        'wizyta u lekarza',
        'wizyta u lekarza pierwszego kontaktu, skierowanie na badanie krwi',
        'Dominika',
        new Date()
      ), new ToDoTask(
        2,
        'medication',
        'weź magnes i cynk',
        'weź codzienną dawkę lekarstw: jedna sztuka magnezu i pół tabletki cynku',
        'Dominika',
        null
      ), new ToDoTask(
        3,
        'blood_test',
        'pobranie krwi',
        'badanie krwi',
        'Dominika',
        new Date()
      )
    ];
  }

  getTasks(): Observable<ToDoTask[]>{
    return of(this.tasks);
  }

  createTask(task: ToDoTask){
    console.log("In service : " + JSON.stringify(task) );
      if (task != null) {
        this.tasks.push(task);
      }
  }

  removeTask(taskIndex: number){

  }

}
