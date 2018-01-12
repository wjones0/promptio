
import * as fromSessions from './session.reducer';
import * as fromActions from '../actions/session.action';

import { Session } from '@models/session';

describe('Session Reducer', () => {
    it('should return the initial state with undefined action', () => {
        const { initialState } = fromSessions;
        const action = {} as any;

        const state = fromSessions.reducer(undefined, action);

        expect(state).toBe(initialState);
    });

    it('should preserve state for get session action', () => {
        const { initialState } = fromSessions;
        const action = new fromActions.GetSession('somesessionid');

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            ...initialState
        });
    });

    it('should add the session for add session action', () => {
        const { initialState } = fromSessions;
        const session: Session = {
            id: 'sessionid',
            promptId: 'promptid',
            roles: {
                someuserid: 'owner'
            }
        };

        const action = new fromActions.SessionLoaded(session);

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            session
        });
    });

});
