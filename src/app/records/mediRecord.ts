export class MediRecord{
  type: string;
  desc: string;
  due_date: Date;
  accomplished: boolean;

  constructor(type: string,
              desc: string,
              due_date: Date){
    this.type = type;
    this.desc = desc;
    this.due_date = due_date;
    this.accomplished = false;
  }

  finish_task(){
    this.accomplished = true;
  }

}
