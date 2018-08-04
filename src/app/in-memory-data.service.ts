import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from './todo';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const todos = [
      { id: 1, todo: '1', completed: false },
      { id: 2, todo: '2', completed: true },
      { id: 3, todo: '3', completed: false }
    ];
    return {todos};
  }
}
//{id: 1, todo: '123', completed: false}