import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

import { Session } from '@models/session';
import { Prompt } from '@models/prompt';

@Component({
  selector: 'pro-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, OnDestroy {

  public session$: Observable<Session>;
  public prompt$: Observable<Prompt>;

  private rateSub: Subscription;

  public scrollPosY: number;

  @ViewChild('promptcontent') promptEl: ElementRef;

  constructor(private _store: Store<fromStore.SessionModuleState>) { }

  ngOnInit() {
    this.session$ = this._store.select(fromStore.selectCurrentSession);
    this.prompt$ = this._store.select(fromStore.selectCurrentPrompt);

    this._store.select(fromStore.selectCurrentRate).subscribe((rate: number) => {
      if (this.rateSub) {
        this.rateSub.unsubscribe();
      }

      if (rate !== 0) {
        this.rateSub = Observable.interval(rate).subscribe(() => {
          this.promptEl.nativeElement.scrollTo(0, ++this.scrollPosY);
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.rateSub) {
      this.rateSub.unsubscribe();
    }
  }

}
