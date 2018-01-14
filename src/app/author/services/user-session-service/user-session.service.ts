import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentReference } from 'firebase/firestore';

import { UserSession } from '@models/usersession';

@Injectable()
export class UserSessionService {

  constructor(private _afStore: AngularFirestore) { }

  addUserSession(userSession: UserSession, userID: string): Observable<DocumentReference> {
    const userSessionCollection = this._afStore.collection<UserSession>(`users/${userID}/sessions`);
    return fromPromise(userSessionCollection.add(userSession));
  }
}
