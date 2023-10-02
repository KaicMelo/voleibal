import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>([
    { name: 'Kaic', generous: 'masculine' },
    { name: 'Bruno Nicolete', generous: 'masculine' },
    { name: 'Hugo', generous: 'masculine' },
    { name: 'Bruno', generous: 'masculine' },
    { name: 'Kely', generous: 'feminine' },
    { name: 'Pietro', generous: 'masculine' },
    { name: 'Amanda', generous: 'feminine' },
    { name: 'Luiza', generous: 'feminine' },
    { name: 'Theo', generous: 'masculine' },
    { name: 'Tabata', generous: 'feminine' },
    { name: 'Fernando', generous: 'masculine' },
    { name: 'Fernanda', generous: 'feminine' },
    { name: 'Guilherme', generous: 'masculine' },
  ]);

  constructor(private httpClent: HttpClient) {}

  get():Observable<any> {
    return this.userSubject.asObservable();
  }

  put(value: any){
  return this.userSubject.next(value);
  }

  delete(){

  }
}
