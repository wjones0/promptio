import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSessions from './session.reducer';
import * as fromPrompts from './prompt.reducer';

export interface SessionModuleState {
    sessions: fromSessions.SessionState;
    prompts: fromPrompts.SessionPromptState;
}

export const reducers: ActionReducerMap<SessionModuleState> = {
    sessions: fromSessions.reducer,
    prompts: fromPrompts.reducer
};

export const getSessionModuleState = createFeatureSelector<SessionModuleState>('sessionModule');
