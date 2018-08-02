import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todosservice:TodosService) { }

  ngOnInit() {
  }

  addTodo(todo:HTMLInputElement){
    if(todo.value == '') return;
    this.todosservice.addTodo(todo.value);
    //console.log(todo);
    todo.value = '';
  }

}
