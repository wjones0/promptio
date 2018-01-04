import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPrompts from './prompts.reducer';

export interface PromptModuleState {
    prompts: fromPrompts.PromptState;
}

export const reducers: ActionReducerMap<PromptModuleState> = {
    prompts: fromPrompts.reducer
};

export const getPromptModuleState = createFeatureSelector<PromptModuleState>('promptModule');
export const selectPrompts = createSelector(
    getPromptModuleState,
    (state: PromptModuleState) => state.prompts
);
