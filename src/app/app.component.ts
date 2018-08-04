import { Component, OnInit } from '@angular/core';

import { TodosService } from './todos.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todosservice:TodosService) {}

  maxPages: number;
  currentPage: number;
  typeView: string;
  allCheckbox: boolean

  ngOnInit(){
    this.getTodos();
  }

  addTodo(todo: string){
    this.todosservice.addTodo(todo)
    .subscribe(todo => {
      this.todos.push(todo);
      this.currentPage = Math.ceil(this.todos.length/5);
    },
    err => console.log(err));
  }

  getTodos(){
    this.todosservice.getTodos().subscribe(
      todos => {
        this.todos = todos;
        this.currentPage = Math.ceil(this.todos.length/5);
      },
      err => console.log("ERROR: array don't load")
    );
  }

  removeTodo(li: HTMLLIElement){
    this.allCheckbox = false;
    this.todosservice.deleteTodo(li.id)
    .subscribe(
      todo => this.todos = this.todos.filter(obj => obj.id !== +li.id),
      err => console.log("ERROR: todo don't delete")
      
    );
  }

  clearCompleted(event){
    event.preventDefault();
    this.allCheckbox = false;
    this.todosservice.updateTodoList(this.todos.filter(obj => obj.completed === false))
    .subscribe(
      todos => this.todos = todos,
      err => console.log('ERROR Update todo list')
    );
  }

  updateAllCheckbox(){
    if(this.allCheckbox){
      this.todos.forEach(obj => obj.completed = false);
      this.allCheckbox = false;
    }else{
      this.todos.forEach(obj => obj.completed = true);
      this.allCheckbox = true;
    }
    this.todosservice.updateTodoList(this.todos)
    .subscribe(
      todos => console.log(todos),
      err => console.log('ERROR update todo list')
    );
  }

  getTodoItems(){
    let arrayTodo=[];

    switch(this.typeView){
      case 'completed':  arrayTodo = this.todos.filter(obj => obj.completed === true); break;

      case 'active': arrayTodo = this.todos.filter(obj => obj.completed === false); break;

      default: arrayTodo = this.todos;
      
    }
    this.maxPages = Math.ceil(arrayTodo.length/5);
    
    if(this.currentPage > (this.maxPages != 0 ? this.maxPages : 1)){
      this.currentPage = this.maxPages;
    }
    return arrayTodo.slice(5*(this.currentPage-1),5*this.currentPage);
  }

  calculateAllTodos(){
    return this.todos.length;
  }

  calculateCompletedTodos(){
    return this.todos.filter(obj => obj.completed === true).length;
  }

  setTodoView(state:string){
    this.typeView = state;
  }
}
