import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>([
    { id: 1, name: 'Kaic', generous: 'masculine' },
    { id: 2, name: 'Bruno Nicolete', generous: 'masculine' },
    { id: 3, name: 'Hugo', generous: 'masculine' },
    { id: 4, name: 'Bruno', generous: 'masculine' },
    { id: 5, name: 'Kely', generous: 'feminine' },
    { id: 6, name: 'Pietro', generous: 'masculine' },
    { id: 7, name: 'Amanda', generous: 'feminine' },
    { id: 8, name: 'Luiza', generous: 'feminine' },
    { id: 9, name: 'Theo', generous: 'masculine' },
    { id: 10, name: 'Tabata', generous: 'feminine' },
    { id: 11, name: 'Fernando', generous: 'masculine' },
    { id: 12, name: 'Fernanda', generous: 'feminine' },
    { id: 13, name: 'Guilherme', generous: 'masculine' },
  ]);

  get(): Observable<any> {
    return this.userSubject.asObservable();
  }

  put(value: any) {
    return this.userSubject.next(value);
  }

  delete() {}
}
