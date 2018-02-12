import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import * as fromRoot from '@rootStore';
import * as PromptActions from '../actions/prompt.action';
import * as SessionActions from '../actions/session.action';
import * as fromSessions from '../selectors/session.selector';

import { PromptService } from '../../services';

import { Prompt } from '@models/prompt';
import { Session } from '@models/session';

@Injectable()
export class PromptEffects {

    constructor(private _actions$: Actions,
        private _store: Store<fromRoot.AppState>,
        private _promptService: PromptService) { }

    @Effect()
    getPrompt$: Observable<Action> = this._actions$.ofType(SessionActions.SESSION_LOADED).pipe(
        switchMap(action => this._store.select(fromSessions.selectCurrentSession)),
        map((session: Session): string => session.promptId),
        switchMap((promptid: string) => {
            return this._promptService.getSinglePromptActionStream(promptid)
                .pipe(
                    map(promptdoc => {
                        return {
                            type: `[Prompt] ${promptdoc.type}`,
                            payload: promptdoc.payload.data()
                        };
                    })
                );
        }),
    );

}
