import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPrompts from './prompts.reducer';
import * as fromPromptSessions from './sessions.reducer';

export interface PromptModuleState {
    prompts: fromPrompts.PromptState;
    sessions: fromPromptSessions.PromptSessionState;
}

export const reducers: ActionReducerMap<PromptModuleState> = {
    prompts: fromPrompts.reducer,
    sessions: fromPromptSessions.reducer
};

export const getPromptModuleState = createFeatureSelector<PromptModuleState>('promptModule');

export const selectPrompts = createSelector(
    getPromptModuleState,
    (state: PromptModuleState) => state.prompts
);

export const selectPromptSessions = createSelector(
    getPromptModuleState,
    (state: PromptModuleState) => state.sessions
);
