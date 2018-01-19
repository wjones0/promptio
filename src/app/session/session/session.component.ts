import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

import { Session } from '@models/session';
import { Prompt } from '@models/prompt';

@Component({
  selector: 'pro-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  public session$: Observable<Session>;
  public prompt$: Observable<Prompt>;

  constructor(private _store: Store<fromStore.SessionModuleState>) { }

  ngOnInit() {
    this.session$ = this._store.select(fromStore.selectCurrentSession);
    this.prompt$ = this._store.select(fromStore.selectCurrentPrompt);
  }

}
