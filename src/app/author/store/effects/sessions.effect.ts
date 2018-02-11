import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';

import { DocumentReference } from 'firebase/firestore';

import * as fromRoot from '@rootStore';
import * as PromptSessionActions from '../actions/sessions.action';

import { SessionService, UserSessionService } from '../../services';

import { User } from '@models/user';
import { Session } from '@models/session';

@Injectable()
export class SessionEffects {

    constructor(private _actions$: Actions,
        private _store: Store<fromRoot.AppState>,
        private _sessionService: SessionService,
        private _userSessionService: UserSessionService) { }

    @Effect()
    createSession$: Observable<Action> = this._actions$.ofType(PromptSessionActions.CREATE_SESSION).pipe(
        withLatestFrom(this._store.select(fromRoot.selectUser)),
        // create the session
        switchMap(([action, user]: [PromptSessionActions.CreateSession, User]): Observable<DocumentReference> => {
            const role = {};
            role[user.authID] = 'owner';
            const newSession: Session = {
                rate: 0,
                promptId: action.payload,
                roles: role
            };

            return this._sessionService.addSession(newSession);
        }),
        withLatestFrom(this._store.select(fromRoot.selectUser)),
        tap(([session, user]: [DocumentReference, User]) => {
            // use the created session to create a user owned usersession
            this._userSessionService.addUserSession({ sessionId: session.id }, user.authID);
        }),
        map(([session, user]: [DocumentReference, User]) => {
            // go to that session
            return new fromRoot.Go({ path: ['/session', session.id] });
        })
    );
}
