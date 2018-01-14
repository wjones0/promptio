import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromAuthReducers from '../reducers/auth.reducer';

export const selectUser = createSelector(
    fromReducers.selectAuth,
    fromAuthReducers.getUser
);

export const selectLoggedIn = createSelector(
    fromReducers.selectAuth,
    fromAuthReducers.isLoggedIn
);

export const selectLoggingIn = createSelector(
    fromReducers.selectAuth,
    fromAuthReducers.isLoggingIn
);
