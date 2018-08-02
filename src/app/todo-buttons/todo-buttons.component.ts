import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-buttons',
  templateUrl: './todo-buttons.component.html',
  styleUrls: ['./todo-buttons.component.css']
})
export class TodoButtonsComponent implements OnInit {

  stateRadioBtn : string = 'all';

  constructor(private todosservice:TodosService) { }

  ngOnInit() {
    this.setType();
    console.log(this.stateRadioBtn);
  }

  setType(){
    this.todosservice.setTodoView(this.stateRadioBtn);
    //console.log(this.stateRadioBtn);
  }

  clear(event) {
    event.preventDefault();
    this.todosservice.clearCompleted();
  } 
}
