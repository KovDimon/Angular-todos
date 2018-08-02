import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';

import { TodosService } from '../todos.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  //@ViewChild('link') link:ElementRef;
  pages = [];

  constructor(private todosservice:TodosService) { }

  ngOnInit() {
  }

  setMaxPages(){
    this.pages.length = this.todosservice.maxPages;
    for(let i = 0; i < this.todosservice.maxPages; i++){
      this.pages[i] = i+1;
    }

    return this.pages;
  }

  goToPage(event){
    event.preventDefault();
    this.todosservice.currentPage = event.target.text;
  }
}
