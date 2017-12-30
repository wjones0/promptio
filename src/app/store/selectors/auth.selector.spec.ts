import { TestBed } from '@angular/core/testing';

import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';

import { User } from '../../models/user';

describe('Auth Selectors', () => {
    let store: Store<fromReducers.AppState>;

    const user: User = {
        authID: 'someid',
        displayName: 'clevername'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ ...fromReducers.reducers })
            ]
        });

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should have a user selector that returns a user', () => {
        let result;

        store
            .select(fromSelectors.selectUser)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBeNull;

        store.dispatch(new fromActions.AuthLoginSuccess(user));

        expect(result).toEqual(user);
    });

    it('should have a logging in selector', () => {
        let result;

        store
            .select(fromSelectors.selectLoggingIn)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBeFalsy('pre logging in');

        store.dispatch(new fromActions.AuthLogin());

        expect(result).toBeTruthy('post logging in');
    });

    it('should have a logged in selector', () => {
        let result;

        store
            .select(fromSelectors.selectLoggedIn)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBeFalsy('pre legged in');

        store.dispatch(new fromActions.AuthLoginSuccess(user));

        expect(result).toBeTruthy('post logged in');
    });
});
