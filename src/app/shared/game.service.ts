import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Action} from "./action";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentAction: Observable<Action>;
  isNight$: Observable<boolean>;

  currentActionSubject: BehaviorSubject<Action> = new BehaviorSubject<Action>(null);
  isNightSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
    this.currentAction = this.currentActionSubject.asObservable();
    this.isNight$ = this.isNightSubject.asObservable();
  }
}
