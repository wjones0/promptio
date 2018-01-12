import * as SessionActions from '../actions/session.action';

import { Session } from '@models/session';

export interface SessionState {
    session: Session;
}

export const initialState: SessionState = {
    session: null
};

export function reducer(state = initialState, action: SessionActions.SessionAction): SessionState {

    switch (action.type) {
        case (SessionActions.GET_SESSION): {
            return {
                ...state
            };
        }

        case (SessionActions.SESSION_LOADED): {
            return {
                ...state,
                session: action.payload
            };
        }
    }

    return state;
}
