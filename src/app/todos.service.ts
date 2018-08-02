import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos : Todo[] = [];
  typeView:string;
  maxPages:number;
  currentPage:number;

  constructor() { }

  addTodo(todo:string){
    console.log(this.todos);
    this.todos.push({
      todoId : this.makeId(),
      todo : todo,
      completed : false
    });
    this.currentPage = Math.ceil(this.todos.length/5);
  }

  removeTodo(id:string){
    this.todos.splice(this.todos.findIndex(x => id === x.todoId), 1);
    this.maxPages = Math.ceil(this.todos.length/5);
  }

  makeId(){
    return Math.random().toString(36).substr(2,16);
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
    
  clearCompleted(){
    this.todos = this.todos.filter(obj => obj.completed === false);
  }
}
