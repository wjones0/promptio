import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

import { Prompt } from '@models/prompt';

@Component({
  selector: 'pro-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, OnDestroy {

  public prompt$: Observable<Prompt>;
  public role$: Observable<string>;

  private rateSub: Subscription;
  public scrollPosY: number;

  constructor(private _store: Store<fromStore.SessionModuleState>) { }

  ngOnInit() {
    this.prompt$ = this._store.select(fromStore.selectCurrentPrompt);
    this.role$ = this._store.select(fromStore.selectRole);

    this.scrollPosY = 0;

    this._store.select(fromStore.selectCurrentRate).subscribe((rate: number) => {
      if (this.rateSub) {
        this.rateSub.unsubscribe();
      }

      // temporary rate until i can change rate to an interval
      if (rate > 0) {
        this.rateSub = Observable.interval(rate).subscribe(() => ++this.scrollPosY);
      } else if (rate < 0) {
        this.rateSub = Observable.interval(rate).subscribe(() => --this.scrollPosY);
      }
    });
  }

  maxScrollReached() {
    this._store.dispatch(new fromStore.StopScroll());
  }

  rateChange(change: string) {
    if (change === '+') {
      this._store.dispatch(new fromStore.ScrollFaster());
    } else if (change === '-') {
      this._store.dispatch(new fromStore.ScrollSlower());
    }
  }

  selectRole(role: string) {
    this._store.dispatch(new fromStore.SelectRole(role));
  }

  ngOnDestroy() {
    if (this.rateSub) {
      this.rateSub.unsubscribe();
    }
  }

}
