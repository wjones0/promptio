
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
            rate: 0,
            promptId: 'promptid',
            roles: {
                someuserid: 'owner'
            }
        };

        const action = new fromActions.SessionLoaded(session);

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            session,
            position: 0,
            role: ''
        });
    });

    it('should increase the scroll point for the scroll session action', () => {
        const { initialState } = fromSessions;

        const action = new fromActions.ScrollSession();

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            session: null,
            position: 1,
            role: ''
        });
    });

    it('should preserve state for the stop scroll action', () => {
        const { initialState } = fromSessions;
        const action = new fromActions.StopScroll();

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            ...initialState
        });
    });

    it('should preserve state for scroll faster session action', () => {
        const { initialState } = fromSessions;
        const action = new fromActions.ScrollFaster();

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            ...initialState
        });
    });

    it('should preserve state for scroll slower session action', () => {
        const { initialState } = fromSessions;
        const action = new fromActions.ScrollSlower();

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            ...initialState
        });
    });


    it('should set the role in the set role action', () => {
        const { initialState } = fromSessions;

        const action = new fromActions.SelectRole('viewer');

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual({
            session: null,
            position: 0,
            role: 'viewer'
        });
    });

});
