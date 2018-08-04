import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl:string = 'api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any>{
    return this.http.get(this.todosUrl)
    .pipe(tap((todos) => console.log('Loading todos')));
  }

  addTodo(todo:string): Observable<Todo>{
    return this.http.post(this.todosUrl, {todo, completed: false})
    .pipe(tap((todo: Todo) => console.log('Add todo')));
  }

  deleteTodo(id: string): Observable<Todo>{
    return this.http.delete(`${this.todosUrl}/${id}`)
    .pipe(tap((todo: Todo) => console.log(`Delete todo with id ${id}`)));
  }
  updateTodo(todo: Todo): Observable<any>{
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo)
    .pipe(tap((todo: Todo) => console.log('Update todos')));
  }

  updateTodoList(todos: Todo[]): Observable<any>{
    return this.http.post(this.todosUrl, todos)
    .pipe(tap(() => console.log('Update todo list')));
  }

}
