import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Observable } from 'rxjs/Observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { Effect, Actions } from '@ngrx/effects';

import * as authActions from '../actions/auth.action';

import { User } from '@models/user';

@Injectable()
export class AuthEffects {
    constructor(private _actions$: Actions, private _afAuth: AngularFireAuth) { }

    @Effect()
    logIn$ = this._actions$.ofType(authActions.LOGIN)
        .pipe(
        switchMap(() => {
            return Observable.fromPromise(this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
                .pipe(
                map((authData: any /*what type is this?*/) => {
                    return new authActions.AuthLoginSuccess({
                        authID: authData.user.uid,
                        displayName: authData.user.displayName
                    });
                }),
                catchError(error => {
                    return of(new authActions.AuthLoginFailure(error));
                })
                )
        })
        );


    @Effect()
    checkLogIn$ = this._actions$.ofType(authActions.CHECK_LOGIN)
        .pipe(
        switchMap(() => this._afAuth.authState),
        map((authData) => {
            if (authData) {
                return new authActions.AuthLoginSuccess({
                    authID: authData.uid,
                    displayName: authData.displayName
                });
            }
            else {
                return of(new authActions.AuthLoginFailure('not logged in'));
            }
        })
        );
}