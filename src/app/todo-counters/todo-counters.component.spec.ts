import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCountersComponent } from './todo-counters.component';

describe('TodoCountersComponent', () => {
  let component: TodoCountersComponent;
  let fixture: ComponentFixture<TodoCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
