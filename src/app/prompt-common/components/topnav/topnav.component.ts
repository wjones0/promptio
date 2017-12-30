import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRootStore from '@rootStore';

import { User } from '../../../models/user';

@Component({
  selector: 'pro-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  public user$: Observable<User>;
  public loggingIn$: Observable<boolean>;
  public loggedIn$: Observable<boolean>;

  constructor(private _store: Store<fromRootStore.AppState>) { }

  ngOnInit() {
    this._store.dispatch(new fromRootStore.AuthCheckLogin());
    this.user$ = this._store.select(fromRootStore.selectUser);
    this.loggedIn$ = this._store.select(fromRootStore.selectLoggedIn);
    this.loggingIn$ = this._store.select(fromRootStore.selectLoggingIn);
  }

  login() {
    this._store.dispatch(new fromRootStore.AuthLogin());
  }

}
