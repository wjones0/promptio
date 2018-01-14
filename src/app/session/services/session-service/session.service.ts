import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentSnapshot } from 'firebase/firestore';

import { Session } from '@models/session';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {

  constructor(private _afStore: AngularFirestore) { }

  getSingleSessionActionStream(sessionid: string): Observable<DocumentSnapshot> {
    return this._afStore.doc<Session>(`sessions/${sessionid}`).snapshotChanges();
  }

}
