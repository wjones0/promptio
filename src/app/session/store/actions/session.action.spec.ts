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

});
