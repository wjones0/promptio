import { createSelector } from '@ngrx/store';

import * as fromPrompts from '../reducers';

export const selectSessionPromptState = createSelector(
    fromPrompts.getSessionModuleState,
    (state: fromPrompts.SessionModuleState) => state.prompts
);

export const selectCurrentPrompt = createSelector(
    selectSessionPromptState,
    (state) => state.prompt
);
