import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentReference } from 'firebase/firestore';

import { Session } from '@models/session';

@Injectable()
export class SessionService {

  constructor(private _afStore: AngularFirestore) { }

  addSession(newSession: Session): Observable<DocumentReference> {
    const sessionCollection = this._afStore.collection<Session>('sessions');

    return fromPromise(sessionCollection.add(newSession));
  }

}
