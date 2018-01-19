import { TestBed } from '@angular/core/testing';

import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from './prompt.selector';
import * as fromPromptReducers from '../reducers/prompt.reducer';
import * as fromRoot from '@rootStore';

import { Prompt } from '@models/prompt';

describe('SessionPrompt Selectors', () => {
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

    it('should have a session-prompt selector', () => {
        let result;

        store
            .select(fromSelectors.selectSessionPromptState)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toEqual({ prompt: null });

        const sessionPrompt: Prompt = {
            id: 'promptid',
            content: 'longcontent',
            title: 'title',
            roles: {
                userid: 'owner'
            }
        };

        store.dispatch(new fromActions.PromptLoaded(sessionPrompt));

        expect(result).toEqual({ prompt: sessionPrompt });
    });

    it('should have a current prompt selector', () => {
        let result;

        store
            .select(fromSelectors.selectCurrentPrompt)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toBeNull();

        const sessionPrompt: Prompt = {
            id: 'promptid',
            content: 'longcontent',
            title: 'title',
            roles: {
                userid: 'owner'
            }
        };

        store.dispatch(new fromActions.PromptLoaded(sessionPrompt));

        expect(result).toEqual(sessionPrompt);
    });

});
