import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo-counters',
  templateUrl: './todo-counters.component.html',
  styleUrls: ['./todo-counters.component.css']
})
export class TodoCountersComponent implements OnInit {

  constructor(private appcomponent: AppComponent) { }

  ngOnInit() {
  }

}
