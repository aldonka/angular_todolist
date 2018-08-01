import {Component} from '@angular/core'
import {ToDoTask} from "./toDoTask";

@Component({
  selector: 'records-list',
  templateUrl: './app.records.html'
})
export class RecordsComponent {
  records: ToDoTask[];

  constructor() {
    this.records = [
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
}
