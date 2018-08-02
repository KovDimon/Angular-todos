import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo : Todo;
  //@Input() input : ElementRef;
  @ViewChild('li') li : ElementRef;
  state : boolean = true;

  constructor(private todosservice:TodosService) { }

  ngOnInit() {
  }

  editTodo(){
    this.state == true ? this.state = false : this.state = true;
    //input.focus();
    //console.log(input);
    //todo.focus();
  }

  deleteTodo(){
    this.todosservice.removeTodo(this.li.nativeElement.id);
  }
}
