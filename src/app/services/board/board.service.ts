import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private boardSubject = new BehaviorSubject<any>({ team_1: 0, team_2: 0 });

  constructor() {}

  get(): Observable<any> {
    return this.boardSubject.asObservable();
  }

  put(team_1: any, team_2: any) {
    return this.boardSubject.next({ team_1, team_2 });
  }
}
