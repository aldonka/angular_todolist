import { Component } from '@angular/core'

@Component({
  selector: 'records-list',
  templateUrl: './app.records.html'
})
export class RecordsComponent{
  setup: string;
  className: string;
  records: Object[];

  constructor(){
    this.className = "RecordsComponent";
    this.setup = "Test name in " + this.className;
    this.records = [
      {
        type: 'appointment',
        desc: 'wizyta u lekarza',
        due_date: new Date()
      },{
        type: 'medication',
        desc: 'weź magnes i cynk'
      },{
        type: 'blood_test',
        desc: 'badanie krwi',
        due_date: new Date()
      }
    ]
  }
}
