import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

import { TodosService } from '../todos.service';
import { Todo } from '../todo';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() onAddTodo = new EventEmitter<string>();

  constructor(private appcomponent: AppComponent) { }

  ngOnInit() {
  }

  addTodo(todo:HTMLInputElement){
    if(!todo.value) return;
    this.onAddTodo.emit(todo.value);
    todo.value = '';
  }
}
