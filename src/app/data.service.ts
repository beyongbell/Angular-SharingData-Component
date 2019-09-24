import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject<string>('Default Service Message');
  currentMessage = this.dataSource.asObservable();

  constructor() { }

  updatedMessages(data) {
    this.dataSource.next(data);
  }

}
