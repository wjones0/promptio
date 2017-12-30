import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export interface AppState {
    auth: fromAuth.AuthState;
};

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.reducer
};

export const selectAuth = (state: AppState): fromAuth.AuthState => state.auth;
