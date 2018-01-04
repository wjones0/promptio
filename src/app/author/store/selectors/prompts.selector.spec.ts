import { TestBed } from '@angular/core/testing';

import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';
import * as fromPromptReducers from '../reducers/prompts.reducer';

import { User } from '@models/user';

describe('Prompt Selectors', () => {
    let store: Store<fromReducers.PromptModuleState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                // doing this so i have an initial state
                StoreModule.forFeature('promptModule', { ...fromReducers.reducers })
            ]
        });

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();

    });

    it('should have an entities selector', () => {
        let result;

        store
            .select(fromSelectors.selectEntities)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toEqual({});

        // future - add something and then test it again
    });

    it('should have an array selector', () => {
        let result;

        store
            .select(fromSelectors.selectAll)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toEqual([]);

        // future - add something and then test it again
    });

});
