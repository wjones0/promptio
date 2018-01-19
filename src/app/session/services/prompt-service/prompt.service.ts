import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { Prompt } from '@models/prompt';

@Injectable()
export class PromptService {

  constructor(private _afStore: AngularFirestore) { }

  getSinglePromptActionStream(promptid: string): Observable<any> {
    return this._afStore.doc<Prompt>(`prompts/${promptid}`).snapshotChanges();
  }
}
