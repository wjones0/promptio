import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as fromRoot from '@rootStore';
import * as fromSessions from '../reducers';
import * as SessionActions from '../actions/session.action';
import * as PromptActions from '../actions/prompt.action';
import * as SessionSelectors from '../selectors';

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
                            payload: { id: sessiondoc.payload.id, ...sessiondoc.payload.data() }
                        };
                    })
                );
        }),
    );

    @Effect({ dispatch: false })
    stopScroll$ = this._actions$.ofType(SessionActions.STOP_SCROLL).pipe(
        withLatestFrom(this._store.select(SessionSelectors.selectCurrentSession)),
        map(([action, session]: [Action, Session]) => this._sessionService.stopScroll(session))
    );

    @Effect({ dispatch: false })
    increaseScroll$ = this._actions$.ofType(SessionActions.SCROLL_FASTER).pipe(
        withLatestFrom(this._store.select(SessionSelectors.selectCurrentSession)),
        map(([action, session]: [Action, Session]) => this._sessionService.increaseScroll(session))
    );

    @Effect({ dispatch: false })
    decreaseScroll$ = this._actions$.ofType(SessionActions.SCROLL_SLOWER).pipe(
        withLatestFrom(this._store.select(SessionSelectors.selectCurrentSession)),
        map(([action, session]: [Action, Session]) => this._sessionService.decreaseScroll(session))
    );

}
