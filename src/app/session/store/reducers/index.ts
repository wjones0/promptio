import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSessions from './session.reducer';

export interface SessionModuleState {
    sessions: fromSessions.SessionState;
}

export const reducers: ActionReducerMap<SessionModuleState> = {
    sessions: fromSessions.reducer
};

export const getSessionModuleState = createFeatureSelector<SessionModuleState>('sessionModule');

export const selectSessions = createSelector(
    getSessionModuleState,
    (state: SessionModuleState) => state.sessions
);
