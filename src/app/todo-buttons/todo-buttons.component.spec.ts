import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonsComponent } from './todo-buttons.component';

describe('TodoButtonsComponent', () => {
  let component: TodoButtonsComponent;
  let fixture: ComponentFixture<TodoButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
