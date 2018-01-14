import { TestBed } from '@angular/core/testing';

import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { } from '@ngrx/router-store';

import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';

describe('Router Selectors', () => {
    let store: Store<fromReducers.AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ ...fromReducers.reducers }, {
                    initialState: {
                        auth: {},
                        router: {}
                    }
                }),
            ]
        });

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        spyOn(store, 'subscribe').and.callThrough();
    });

    it('should have a router state selector', () => {
        store.dispatch(new fromActions.AuthLogoutFailure({}));
        let result;

        store
            .select(fromSelectors.selectRouterState)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBeFalsy('pre route');

        store.dispatch({
            type: 'ROUTER_NAVIGATION',
            payload: {
                routerState: {
                    url: '/session',
                    queryParams: {},
                    params: { sessionID: 'somelargething' },
                },
                event: {},
            }
        });

        expect(result).toEqual({
            url: '/session',
            queryParams: {},
            params: { sessionID: 'somelargething' },
        });
    });

    it('should have a router params selector', () => {
        store.dispatch({
            type: 'ROUTER_NAVIGATION',
            payload: {
                routerState: {
                    url: '/session',
                    queryParams: {},
                    params: { sessionID: 'somelargething' },
                },
                event: {},
            }
        });

        let result;

        store
            .select(fromSelectors.selectRouterParams)
            .subscribe((value) => {
                result = value;
            });

        expect(result.sessionID).toEqual('somelargething');
    });
});
