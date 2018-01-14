import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/operators';

import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

import { Prompt } from '@models/prompt';

@Injectable()
export class PromptService {

  constructor(private _afStore: AngularFirestore) { }

  getPromptActionStream(userID: string): Observable<DocumentChangeAction[]> {
    return this._afStore.collection<Prompt>('prompts',
      ref => ref.where(`roles.${userID}`, '==', 'owner')
    ).stateChanges()
      .pipe(
      merge(
        this._afStore.collection<Prompt>('prompts',
          ref => ref.where(`roles.${userID}`, '==', 'writer')
        ).stateChanges()
      )).pipe(
      merge(
        this._afStore.collection<Prompt>('prompts',
          ref => ref.where(`roles.${userID}`, '==', 'reader')
        ).stateChanges()
      ));
  }

}
