import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { first } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromRoot from '@rootStore';
import * as fromPrompts from '../store';

import { Prompt } from '@models/prompt';

@Component({
  selector: 'pro-prompt-view',
  templateUrl: './prompt-view.component.html',
  styleUrls: ['./prompt-view.component.scss']
})
export class PromptViewComponent implements OnInit {

  public thePrompt$: Observable<Prompt>;

  constructor(private _store: Store<fromPrompts.PromptModuleState>) { }

  ngOnInit() {
    this.thePrompt$ = this._store.select(fromPrompts.selectSelectedPrompt);
  }

  createSession() {
    this.thePrompt$.pipe(
      first()
    ).subscribe((prompt) => {
      this._store.dispatch(new fromPrompts.CreateSession(prompt.id));
    });
  }

}
