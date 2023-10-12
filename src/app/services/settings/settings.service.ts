import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const API = `${environment.API}/settings`;

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(API);
  }

  put(id: number, payload: any): Observable<any> {
    return this.http.put(`${API}/${id}`,payload);
  }
}
