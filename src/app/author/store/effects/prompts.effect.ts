import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, mergeMap } from 'rxjs/operators';

import { DocumentChangeAction } from 'angularfire2/firestore';

import * as fromRoot from '@rootStore';
import * as PromptActions from '../actions/prompts.action';

import { PromptService } from '../../services/prompt-service/prompt.service';

import { Prompt } from '@models/prompt';
import { User } from '@models/user';

@Injectable()
export class PromptEffects {

    constructor(private _actions$: Actions, private _store: Store<fromRoot.AppState>, private _promptService: PromptService) { }

    // Getting all the prompts from firestore
    @Effect()
    query$: Observable<Action> = this._actions$.ofType(PromptActions.GET_PROMPTS).pipe(
        switchMap((action: Action): Observable<User> => this._store.select(fromRoot.selectUser)),
        map((user: User): string => user.authID),
        switchMap((userID: string): Observable<DocumentChangeAction[]> => {
            return this._promptService.getPromptActionStream(userID);
        }),
        mergeMap((actions: DocumentChangeAction[]): DocumentChangeAction[] => actions),
        map((action: DocumentChangeAction) => {
            return {
                type: `[Prompts] ${action.type}`,
                payload: { id: action.payload.doc.id, ...action.payload.doc.data() }
            };
        })
    );

    // listening for the login success - and when we are logged in, grab the prompts
    @Effect()
    loadOnAuth$: Observable<Action> = this._actions$.ofType(fromRoot.LOGIN_SUCCESS)
        .switchMap((action: Action): Observable<Action> => {
            return of(new PromptActions.GetPrompts());
        });

}
