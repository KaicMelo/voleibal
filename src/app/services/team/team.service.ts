import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamSubject = new BehaviorSubject<any>({
    team_1: [],
    team_2: [],
  });

  get(): Observable<any> {
    return this.teamSubject.asObservable();
  }

  put(team_1: any, team_2: any) {
    return this.teamSubject.next({ team_1, team_2 });
  }
}
