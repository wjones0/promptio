import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import * as fromRoot from '@rootStore';
import * as fromSessions from '../reducers';
import * as SessionActions from '../actions/session.action';

import { SessionService } from '../../services';

import { Session } from '@models/session';

@Injectable()
export class SessionEffects {

    private _sessionID: string;

    constructor(private _actions$: Actions,
        private _store: Store<fromRoot.AppState>,
        private _sessionService: SessionService) { }

    @Effect()
    getSession$: Observable<Action> = this._actions$.ofType(ROUTER_NAVIGATION).pipe(
        switchMap(action => this._store.select(fromRoot.selectRouterParams)),
        map((params): string => params.sessionID),
        switchMap((sessionid: string) => {
            return this._sessionService.getSingleSessionActionStream(sessionid)
                .pipe(
                map(sessiondoc => {
                    return {
                        type: `[Session] ${sessiondoc.type}`,
                        payload: sessiondoc.payload.data()
                    };
                })
                );
        }),
    );

}
