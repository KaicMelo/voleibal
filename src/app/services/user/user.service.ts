import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';

const API = `${environment.API}/items`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.userSubject.asObservable();
  }

  put(value: any) {
    return this.userSubject.next(value);
  }

  getAPI(): Observable<any> {
    this.http.get(API).subscribe((users) => {
      if (users) {
        if (!this.userSubject.value.length) {
          this.userSubject.next(users);
        }
      }
    });
    return of();
  }

  update(value: any){
    this.userSubject.next([...this.userSubject.getValue(), value]);
  }

  create(value: any): Observable<any> {
    return this.http.post(API, value);
  }

  delete() {}
}
