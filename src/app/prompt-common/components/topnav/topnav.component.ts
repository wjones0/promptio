import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromRootStore from '@rootStore';

import { User } from '@models/user';

@Component({
  selector: 'pro-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  public loggedIn$: Observable<boolean>;

  constructor(private _store: Store<fromRootStore.AppState>) { }

  ngOnInit() {
    this.loggedIn$ = this._store.select(fromRootStore.selectLoggedIn).pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this._store.dispatch(new fromRootStore.AuthCheckLogin());
        }
      }
      ));
  }

  login() {
    this._store.dispatch(new fromRootStore.AuthLogin());
  }

  logout() {
    this._store.dispatch(new fromRootStore.AuthLogout());
  }

}
