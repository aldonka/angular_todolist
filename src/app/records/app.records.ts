import {Component} from '@angular/core'
import {MediRecord} from "./mediRecord";

@Component({
  selector: 'records-list',
  templateUrl: './app.records.html'
})
export class RecordsComponent {
  setup: string;
  className: string;
  records: MediRecord[];

  constructor() {
    this.className = "RecordsComponent";
    this.setup = "Test name in " + this.className;
    this.records = [
      new MediRecord(
        'appointment',
        'wizyta u lekarza',
        new Date()
      ), new MediRecord(
        'medication',
        'weź magnes i cynk',
        null
      ), new MediRecord(
        'blood_test',
        'badanie krwi',
        new Date()
      )
    ];
  }
}
