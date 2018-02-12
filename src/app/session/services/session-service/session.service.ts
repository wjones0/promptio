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

  stopScroll(session: Session) {
    this.setScrollRate(session, 0);
  }

  increaseScroll(session: Session) {
    this.setScrollRate(session, session.rate + 1);
  }

  decreaseScroll(session: Session) {
    this.setScrollRate(session, session.rate - 1);
  }

  private setScrollRate(session: Session, rate: number) {
    this.saveSession({
      ...session,
      rate
    });
  }

  private saveSession(session: Session): void {
    const sessionDoc = this._afStore.doc<Session>(`sessions/${session.id}`);
    sessionDoc.update(session);
  }

}
