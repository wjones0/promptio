import { createSelector } from '@ngrx/store';

import * as fromRoot from '@rootStore';

import * as fromReducers from '../reducers';
import * as fromPromptsReducers from '../reducers/prompts.reducer';

import { Prompt } from '@models/prompt';

export const {
    // selectIds,
    selectEntities,
    selectAll,
    // selectTotal,
} = fromPromptsReducers.promptAdapter.getSelectors(fromReducers.selectPrompts);

export const selectSelectedPrompt = createSelector(
    selectEntities,
    fromRoot.selectRouter,
    (entities, router): Prompt => {
        return router.state && entities[router.state.params.promptID];
    }
);
