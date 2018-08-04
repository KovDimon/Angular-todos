import { Component, OnInit, Input, ViewChild, ElementRef, DoCheck } from '@angular/core';

import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, DoCheck {

  @Input() todo : Todo;
  @ViewChild('input') input : ElementRef;
  state : boolean = true;
  liView: boolean = false;

  constructor(private appcomponent: AppComponent, private todosservice: TodosService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    if(this.input){
      this.input.nativeElement.focus();
    }
  }

  editTodo(todo: Todo){
    this.state = true;
    this.todosservice.updateTodo(todo)
    .subscribe(
      todo => console.log(todo),
      err => console.log('ERROR Update todo')
    );
  }
}
