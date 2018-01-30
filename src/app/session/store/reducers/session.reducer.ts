import * as SessionActions from '../actions/session.action';

import { Session } from '@models/session';

export interface SessionState {
    session: Session;
    position: number;
    rate: number;
}

export const initialState: SessionState = {
    session: null,
    position: 0,
    rate: 0
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

        case (SessionActions.SCROLL_SESSION): {
            return {
                ...state,
                position: state.position + 1
            };
        }
    }

    return state;
}
