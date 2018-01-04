import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { switchMap, map, mergeMap, merge } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

import * as fromRoot from '@rootStore';
import * as PromptActions from '../actions/prompts.action';

import { Prompt } from '@models/prompt';


@Injectable()
export class PromptEffects {

    private _userID: string;

    constructor(private _actions$: Actions, private _afStore: AngularFirestore, private _store: Store<fromRoot.AppState>) {
        this._store.select(fromRoot.selectUser).subscribe((user) => {
            if (user) {
                this._userID = user.authID;
            }
        });
    }

    @Effect()
    query$: Observable<Action> = this._actions$.ofType(PromptActions.GET_PROMPTS).pipe(
        switchMap(action => {
            return this._afStore.collection<Prompt>('prompts',
                ref => ref.where(`roles.${this._userID}`, '==', 'owner')
            ).stateChanges()
                .pipe(
                merge(
                    this._afStore.collection<Prompt>('prompts',
                        ref => ref.where(`roles.${this._userID}`, '==', 'writer')
                    ).stateChanges()
                )).pipe(
                merge(
                    this._afStore.collection<Prompt>('prompts',
                        ref => ref.where(`roles.${this._userID}`, '==', 'reader')
                    ).stateChanges()
                ));
        }),
        mergeMap(actions => actions),
        map(action => {
            console.log(action);
            return {
                type: `[Prompt] ${action.type}`,
                payload: { id: action.payload.doc.id, ...action.payload.doc.data() }
            };
        })
    );

}
