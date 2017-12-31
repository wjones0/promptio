import { Params } from '@angular/router';
import * as fromAuth from './auth.reducer';
import * as fromRouter from './router.reducer';
import { RouterReducerState } from '@ngrx/router-store';

import { AppState, selectAuth, selectRouter } from './';


describe('Root Selectors', () => {
    it('should return .auth from selectAuth', () => {
        const { initialState } = fromAuth;
        const params: Params = [];

        const appState: AppState = {
            auth: initialState,
            router: null
        };

        const state = selectAuth(appState);

        expect(state).toEqual(initialState);
    });

    it('should return .router from selectRouter', () => {
        const { initialState } = fromAuth;
        const params: Params = [];

        const routerState: RouterReducerState<fromRouter.RouterStateUrl> = {
            navigationId: 3,
            state: {
                params: params,
                queryParams: params,
                url: '/author'
            }
        };

        const appState: AppState = {
            auth: initialState,
            router: routerState
        };

        const state = selectRouter(appState);

        expect(state).toEqual(routerState);
    });
});
