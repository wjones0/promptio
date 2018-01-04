import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromPromptsReducers from '../reducers/prompts.reducer';

export const {
    // selectIds,
    selectEntities,
    selectAll,
    // selectTotal,
} = fromPromptsReducers.promptAdapter.getSelectors(fromReducers.selectPrompts);


