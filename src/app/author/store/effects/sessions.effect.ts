import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { switchMap, map, tap } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

import * as fromRoot from '@rootStore';
import * as PromptSessionActions from '../actions/sessions.action';

import { Session } from '@models/session';
import { UserSession } from '@models/usersession';

@Injectable()
export class SessionEffects {

    private _userID: string;

    constructor(private _actions$: Actions, private _afStore: AngularFirestore, private _store: Store<fromRoot.AppState>) {
        this._store.select(fromRoot.selectUser).subscribe((user) => {
            if (user) {
                this._userID = user.authID;
            }
        });
    }

    @Effect()
    createSession$: Observable<Action> = this._actions$.ofType(PromptSessionActions.CREATE_SESSION).pipe(
        // create the session
        switchMap((action: PromptSessionActions.CreateSession) => {
            const sessionCollection = this._afStore.collection<Session>('sessions');
            const role = {};
            role[this._userID] = 'owner';
            const newSession: Session = {
                promptId: action.payload,
                roles: role
            };
            return fromPromise(sessionCollection.add(newSession));
        }),
        tap((session) => {
            // use the created session to create a user owned usersession
            const userSessionCollection = this._afStore.collection<UserSession>(`users/${this._userID}/sessions`);
            userSessionCollection.add({
                sessionId: session.id
            });
        }),
        map((session) => {
            // go to that session
            return new fromRoot.Go({ path: ['/session', session.id] });
        })
    );
}
