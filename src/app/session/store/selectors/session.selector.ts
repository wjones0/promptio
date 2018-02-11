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

export const selectCurrentPosition = createSelector(
    selectSessionState,
    (sessionState) => sessionState.position
);

export const selectCurrentRate = createSelector(
    selectCurrentSession,
    (session) => session ? session.rate : 0
);

export const selectRole = createSelector(
    selectSessionState,
    (sessionState) => sessionState.role
);
