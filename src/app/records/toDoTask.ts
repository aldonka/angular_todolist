export class ToDoTask{
  id: number;
  tag: string;
  title: string;
  description: string;
  assignedTo: string;
  due_date: Date;
  accomplished: boolean;

  constructor(id: number,
              tag: string,
              title: string,
              description: string,
              assignedTo: string,
              due_date: Date){
    this.id = id;
    this.tag = tag;
    this.title = title;
    this.description = description;
    this.assignedTo = assignedTo;
    this.due_date = due_date;
    this.accomplished = false;
  }

  static createNewTask(){
    return new ToDoTask(null, null, null, null, null, null);
  }

  finish_task(){
    this.accomplished = true;
  }

}
