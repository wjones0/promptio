import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromRoot from '@rootStore';
import * as fromPrompts from '../store';

import { Prompt } from '@models/prompt';

@Component({
  selector: 'pro-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.scss']
})
export class PromptListComponent implements OnInit {

  public prompts$: Observable<Prompt[]>;

  constructor(private _store: Store<fromPrompts.PromptModuleState>) { }

  ngOnInit() {
    this.prompts$ = this._store.select(fromPrompts.selectAll);
  }

  goTo(prompt: Prompt) {
    this._store.dispatch(new fromRoot.Go({
      path: ['/author', prompt.id]
    }));
  }
}
