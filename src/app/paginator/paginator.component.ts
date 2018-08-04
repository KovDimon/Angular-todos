import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';

import { TodosService } from '../todos.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  pages = [];

  constructor(private todosservice:TodosService, private appcomponent: AppComponent) { }

  ngOnInit() {
  }

  setMaxPages(){
    this.pages.length = this.appcomponent.maxPages;
    for(let i = 0; i < this.appcomponent.maxPages; i++){
      this.pages[i] = i+1;
    }

    return this.pages;
  }

  goToPage(event){
    event.preventDefault();
    this.appcomponent.currentPage = event.target.text;
  }
}
