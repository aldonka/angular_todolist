export class ToDoTask{
  tag: string;
  title: string;
  description: string;
  assignedTo: string;
  due_date: Date;
  accomplished: boolean;

  constructor(tag: string,
              title: string,
              description: string,
              assignedTo: string,
              due_date: Date){

    this.tag = tag;
    this.title = title;
    this.description = description;
    this.assignedTo = assignedTo;
    this.due_date = due_date;
    this.accomplished = false;
  }

  finish_task(){
    this.accomplished = true;
  }

  add_task(){
    console.log("Adding new task");
  }

}
