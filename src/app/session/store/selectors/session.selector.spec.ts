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

        expect(result).toEqual({
            session: null,
            position: 0,
            role: ''
        });

        const session: Session = {
            id: 'sessionid',
            rate: 0,
            promptId: 'promptid',
            roles: {
                someuserid: 'owner'
            }
        };

        store.dispatch(new fromActions.SessionLoaded(session));

        expect(result).toEqual({
            session,
            position: 0,
            role: ''
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
            rate: 0,
            promptId: 'promptid',
            roles: {
                someuserid: 'owner'
            }
        };

        store.dispatch(new fromActions.SessionLoaded(session));

        expect(result).toEqual(session);
    });

    it('should have a current position selector', () => {
        let result;

        store
            .select(fromSelectors.selectCurrentPosition)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBe(0);
    });

    it('should have a current rate selector', () => {
        let result;

        store
            .select(fromSelectors.selectCurrentRate)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBe(0);
    });

    it('should have a role selector', () => {
        let result;

        store
            .select(fromSelectors.selectRole)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toEqual('');

        store.dispatch(new fromActions.SelectRole('viewer'));

        expect(result).toEqual('viewer');
    });

});
