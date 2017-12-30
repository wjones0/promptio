import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRootStore from '@rootStore';

@Component({
  selector: 'pro-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(private _store: Store<fromRootStore.AppState>) { }

  ngOnInit() {
  }

  login() {
    this._store.dispatch(new fromRootStore.AuthLogin());
  }

}
