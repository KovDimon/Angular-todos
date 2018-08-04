import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo-buttons',
  templateUrl: './todo-buttons.component.html',
  styleUrls: ['./todo-buttons.component.css']
})
export class TodoButtonsComponent implements OnInit {

  stateRadioBtn : string = 'all';

  constructor(private appcomponent: AppComponent) { }

  ngOnInit() {
    this.setType();
    console.log(this.stateRadioBtn);
  }

  setType(){
    this.appcomponent.setTodoView(this.stateRadioBtn);
  }

}
