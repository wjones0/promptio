import { TestBed } from '@angular/core/testing';

import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from './session.selector';
import * as fromSessionReducers from '../reducers/session.reducer';
import * as fromRoot from '@rootStore';

import { Session } from '@models/session';

describe('Session Selectors', () => {
    let store: Store<fromReducers.SessionModuleState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromRoot.reducers),
                // doing this so i have an initial state
                StoreModule.forFeature('sessionModule', { ...fromReducers.reducers })
            ]
        });

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should have a session state selector', () => {
        let result;

        store
            .select(fromSelectors.selectSessionState)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toEqual({ session: null });

        const session: Session = {
            id: 'sessionid',
            promptId: 'promptid',
            roles: {
                someuserid: 'owner'
            }
        };

        store.dispatch(new fromActions.SessionLoaded(session));

        expect(result).toEqual({
            session
        });
    });

    it('should have a current session selector', () => {
        let result;

        store
            .select(fromSelectors.selectCurrentSession)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBeNull();

        const session: Session = {
            id: 'sessionid',
            promptId: 'promptid',
            roles: {
                someuserid: 'owner'
            }
        };

        store.dispatch(new fromActions.SessionLoaded(session));

        expect(result).toEqual(session);
    });

});
