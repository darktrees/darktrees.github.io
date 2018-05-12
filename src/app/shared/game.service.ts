import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Action} from "./action";
import {Player} from "./player";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentAction$: Observable<Action>;
  isNight$: Observable<boolean>;
  players$: Observable<Player[]>;

  currentActionSubject: BehaviorSubject<Action> = new BehaviorSubject<Action>(null);
  isNightSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  playersSubject: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);

  constructor() {
    this.currentAction$ = this.currentActionSubject.asObservable();
    this.isNight$ = this.isNightSubject.asObservable();
    this.players$ = this.playersSubject.asObservable();
  }

  public next() {

  }
}
