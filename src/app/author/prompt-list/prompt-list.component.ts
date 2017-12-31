import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@rootStore';

@Component({
  selector: 'pro-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.scss']
})
export class PromptListComponent implements OnInit {

  constructor(private _store: Store<fromRoot.AppState>) { }

  ngOnInit() {
  }

  go() {
    this._store.dispatch(new fromRoot.Go({
      path: ['/author', '1']
    }));
  }
}
