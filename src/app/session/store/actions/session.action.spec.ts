import * as fromSessions from './session.action';

import { Session } from '@models/session';

describe('Session Actions', () => {
    it('should create a Get Session action', () => {
        const action = new fromSessions.GetSession('sessionid');

        expect({ ...action }).toEqual({
            type: fromSessions.GET_SESSION,
            payload: 'sessionid'
        });
    });

    it('should create an Added Session action', () => {
        const session: Session = {
            id: 'somelongid',
            promptId: 'anotherlongid',
            roles: {
                someuserid: 'owner'
            }
        };

        const action = new fromSessions.SessionLoaded(session);

        expect({ ...action }).toEqual({
            type: fromSessions.SESSION_LOADED,
            payload: session
        });
    });

    it('should create a Scroll Session action', () => {
        const action = new fromSessions.ScrollSession();

        expect({ ...action }).toEqual({
            type: fromSessions.SCROLL_SESSION
        });
    });

    it('should create a stop scroll session action', () => {
        const action = new fromSessions.StopScroll();

        expect({ ...action }).toEqual({
            type: fromSessions.STOP_SCROLL
        });
    });

    it('should create a scroll faster session action', () => {
        const action = new fromSessions.ScrollFaster();

        expect({ ...action }).toEqual({
            type: fromSessions.SCROLL_FASTER
        });
    });

    it('should create a scroll slower session action', () => {
        const action = new fromSessions.ScrollSlower();

        expect({ ...action }).toEqual({
            type: fromSessions.SCROLL_SLOWER
        });
    });

    it('should create a select role action', () => {
        const action = new fromSessions.SelectRole('viewer');

        expect({ ...action }).toEqual({
            type: fromSessions.SELECT_ROLE,
            payload: 'viewer'
        });
    });

});
