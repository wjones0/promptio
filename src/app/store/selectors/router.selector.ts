
import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';

export const selectRouterState = createSelector(
    fromReducers.selectRouter,
    (router) => router.state
);

export const selectRouterParams = createSelector(
    selectRouterState,
    (router) => router.params
);
