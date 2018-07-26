import {Component} from '@angular/core'
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'records-list',
  templateUrl: './app.records.html'
})
export class RecordsComponent {
  setup: string;
  className: string;
  records: ToDoTask[];

  constructor() {
    this.className = "RecordsComponent";
    this.setup = "Test name in " + this.className;
    this.records = [
      new ToDoTask(
        'appointment',
        'wizyta u lekarza',
        'wizyta u lekarza pierwszego kontaktu, skierowanie na badanie krwi',
        'Dominika',
        new Date()
      ), new ToDoTask(
        'medication',
        'weź magnes i cynk',
        'weź codzienną dawkę lekarstw: jedna sztuka magnezu i pół tabletki cynku',
        'Dominika',
        null
      ), new ToDoTask(
        'blood_test',
        'pobranie krwi',
        'badanie krwi',
        'Dominika',
        new Date()
      )
    ];
  }
}
