import { createSelector } from '@ngrx/store';

import * as fromSessions from '../reducers';

export const selectSessionState = createSelector(
    fromSessions.getSessionModuleState,
    (sessionModuleState) => sessionModuleState.sessions
);

export const selectCurrentSession = createSelector(
    selectSessionState,
    (sessionState) => sessionState.session
);
