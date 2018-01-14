import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, mergeMap, merge } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

import * as fromRoot from '@rootStore';
import * as PromptActions from '../actions/prompts.action';

import { Prompt } from '@models/prompt';
import { User } from '@models/user';

@Injectable()
export class PromptEffects {

    constructor(private _actions$: Actions, private _afStore: AngularFirestore, private _store: Store<fromRoot.AppState>) { }

    // Getting all the prompts from firestore
    @Effect()
    query$: Observable<Action> = this._actions$.ofType(PromptActions.GET_PROMPTS).pipe(
        switchMap(action => this._store.select(fromRoot.selectUser)),
        map((user: User) => user.authID),
        switchMap((userID: string) => {
            return this._afStore.collection<Prompt>('prompts',
                ref => ref.where(`roles.${userID}`, '==', 'owner')
            ).stateChanges()
                .pipe(
                merge(
                    this._afStore.collection<Prompt>('prompts',
                        ref => ref.where(`roles.${userID}`, '==', 'writer')
                    ).stateChanges()
                )).pipe(
                merge(
                    this._afStore.collection<Prompt>('prompts',
                        ref => ref.where(`roles.${userID}`, '==', 'reader')
                    ).stateChanges()
                ));
        }),
        mergeMap(actions => actions),
        map(action => {
            return {
                type: `[Prompts] ${action.type}`,
                payload: { id: action.payload.doc.id, ...action.payload.doc.data() }
            };
        })
    );

    // listening for the login success - and when we are logged in, grab the prompts
    @Effect()
    loadOnAuth$: Observable<Action> = this._actions$.ofType(fromRoot.LOGIN_SUCCESS)
        .switchMap(action => {
            return of(new PromptActions.GetPrompts());
        });

}
