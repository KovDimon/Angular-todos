import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = [];

  constructor(private todosservice:TodosService) { }

  ngOnInit() {
  }

  getTodoItems(){
    switch(this.todosservice.typeView){
      case 'completed': this.todos = this.todosservice.todos.filter(obj => obj.completed === true); break;

      case 'active': this.todos = this.todosservice.todos.filter(obj => obj.completed === false); break;

      default: this.todos = this.todosservice.todos;
      
    }
    console.log(this.todos);
    this.todosservice.maxPages = Math.ceil(this.todos.length/5);
    
    if(this.todosservice.currentPage > this.todosservice.maxPages){
      this.todosservice.currentPage = this.todosservice.maxPages;
    }
    return this.todos.slice(5*(this.todosservice.currentPage-1),5*this.todosservice.currentPage);
  }
}
