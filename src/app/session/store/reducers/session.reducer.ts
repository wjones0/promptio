import * as SessionActions from '../actions/session.action';

import { Session } from '@models/session';

export interface SessionState {
    session: Session;
    position: number;
    role: string;
}

export const initialState: SessionState = {
    session: null,
    position: 0,
    role: ''
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

        case (SessionActions.STOP_SCROLL): {
            return {
                ...state
            };
        }

        case (SessionActions.SCROLL_FASTER): {
            return {
                ...state
            };
        }

        case (SessionActions.SCROLL_SLOWER): {
            return {
                ...state
            };
        }

        case (SessionActions.SELECT_ROLE): {
            return {
                ...state,
                role: action.payload
            };
        }
    }

    return state;
}
