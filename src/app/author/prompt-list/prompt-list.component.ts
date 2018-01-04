import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromPrompts from '../store';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Component({
  selector: 'pro-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.scss']
})
export class PromptListComponent implements OnInit {

  testData: any;

  constructor(private _store: Store<fromPrompts.PromptModuleState>) { }

  ngOnInit() {
    this.testData = this._store.select(fromPrompts.selectEntities);
  }

  go() {
    this._store.dispatch(new fromPrompts.GetPrompts());
  }
}
