import { createSelector } from '@ngrx/store';

import * as fromSessions from '../reducers';

export const SelectSessionState = createSelector(
    fromSessions.getSessionModuleState,
    (sessionModuleState) => sessionModuleState.sessions
);

export const SelectCurrentSession = createSelector(
    SelectSessionState,
    (sessionState) => sessionState.session
);
