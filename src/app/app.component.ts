import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'little to-do list app';

  alert2(){
    console.log("This is sick");
  }

  alert3(){
    console.log("Double click handled!");
  }
}
