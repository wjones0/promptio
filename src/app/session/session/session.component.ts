import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

import { Session } from '@models/session';

@Component({
  selector: 'pro-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  public session$: Observable<Session>;

  constructor(private _store: Store<fromStore.SessionModuleState>) { }

  ngOnInit() {
    this.session$ = this._store.select(fromStore.selectCurrentSession);
  }

}
