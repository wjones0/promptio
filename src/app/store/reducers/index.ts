import { ActionReducerMap } from '@ngrx/store';
import * as fromNGRXRouter from '@ngrx/router-store';

import * as fromAuth from './auth.reducer';
import * as fromRouter from './router.reducer';

export interface AppState {
    auth: fromAuth.AuthState;
    router: fromNGRXRouter.RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.reducer,
    router: fromNGRXRouter.routerReducer
};

export { RouterStateUrl } from './router.reducer';
export const selectAuth = (state: AppState): fromAuth.AuthState => state.auth;
export const selectRouter = (state: AppState): fromNGRXRouter.RouterReducerState<fromRouter.RouterStateUrl> => state.router;

