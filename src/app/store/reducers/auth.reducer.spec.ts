
import * as fromAuth from './auth.reducer';
import * as fromActions from '../actions/auth.action';

import { User } from '@models/user';

describe('Auth Reducers', () => {
    it('should return the initial state with undefined action', () => {
        const { initialState } = fromAuth;
        const action = {} as any;

        const state = fromAuth.reducer(undefined, action);

        expect(state).toBe(initialState);
    });

    describe('Logging In Reducers', () => {
        it('should have proper state for login action', () => {
            const { initialState } = fromAuth;
            const action = new fromActions.AuthLogin();

            const state = fromAuth.reducer(initialState, action);

            expect(state.loggedIn).toBe(false, 'logged in');
            expect(state.loggingIn).toBe(true, 'loggingin');
            expect(state.user).toBeNull('user');
        });

        it('should have proper state for login failure action', () => {
            const { initialState } = fromAuth;
            const action = new fromActions.AuthLoginFailure({ message: 'failure' });

            const state = fromAuth.reducer(initialState, action);

            expect(state.loggedIn).toBe(false, 'logged in');
            expect(state.loggingIn).toBe(false, 'logging in');
            expect(state.user).toBeNull('user');
        });

        it('should have proper state on login success action', () => {
            const user: User = { authID: 'anyauthid', displayName: 'nameus' };
            const { initialState } = fromAuth;
            const action = new fromActions.AuthLoginSuccess(user);

            const state = fromAuth.reducer(initialState, action);

            expect(state.loggedIn).toBe(true, 'logged in');
            expect(state.loggingIn).toBe(false, 'logging in');
            expect(state.user).toEqual(user);
        });
    });

    describe('Check Login Reducer', () => {
        it('should have proper state for checking the login action', () => {
            const { initialState } = fromAuth;
            const action = new fromActions.AuthCheckLogin();

            const state = fromAuth.reducer(initialState, action);

            expect(state.loggedIn).toBe(false, 'logged in');
            expect(state.loggingIn).toBe(false, 'logging in');
            expect(state.user).toBeNull('user');
        });
    });

    describe('Reducer Selector Functions', () => {
        it('isloggedin should return .loggedin', () => {
            const { initialState } = fromAuth;
            const previousState: fromAuth.AuthState = { ...initialState, loggedIn: true };
            const slice = fromAuth.isLoggedIn(previousState);

            expect(slice).toEqual(true);
        });

        it('isloggingin should return .loggingin', () => {
            const { initialState } = fromAuth;
            const previousState: fromAuth.AuthState = { ...initialState, loggingIn: true };
            const slice = fromAuth.isLoggingIn(previousState);

            expect(slice).toEqual(true);
        });

        it('getuser should return .user', () => {
            const { initialState } = fromAuth;
            const user = { authID: 'anyauthid', displayName: 'nameus' };
            const previousState: fromAuth.AuthState = { ...initialState, user };
            const slice = fromAuth.getUser(previousState);

            expect(slice).toEqual(user);
        });
    });
})