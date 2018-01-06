import { TestBed } from '@angular/core/testing';

import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';
import * as fromPromptReducers from '../reducers/prompts.reducer';
import * as fromRoot from '@rootStore';

import { Prompt } from '@models/prompt';

describe('Prompt Selectors', () => {
    let store: Store<fromReducers.PromptModuleState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromRoot.reducers),
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

        const prompt: Prompt = {
            content: 'some content',
            id: 'thisistheid',
            roles: {
                someuserid: 'owner'
            },
            title: 'great thing'
        };

        const prompt2: Prompt = {
            content: 'some other content',
            id: 'thisistheotherid',
            roles: {
                someuserid2: 'owner'
            },
            title: 'greater thing'
        };

        const action = new fromActions.PromptAdded(prompt);
        store.dispatch(action);

        const action2 = new fromActions.PromptAdded(prompt2);
        store.dispatch(action2);

        expect(result).toEqual({ thisistheid: { ...prompt }, thisistheotherid: { ...prompt2 } });
    });

    it('should have an array selector', () => {
        let result;

        store
            .select(fromSelectors.selectAll)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toEqual([]);

        const prompt: Prompt = {
            content: 'some content',
            id: 'thisistheid',
            roles: {
                someuserid: 'owner'
            },
            title: 'great thing'
        };

        const prompt2: Prompt = {
            content: 'some other content',
            id: 'thisistheotherid',
            roles: {
                someuserid2: 'owner'
            },
            title: 'greater thing'
        };

        const action = new fromActions.PromptAdded(prompt);
        store.dispatch(action);

        const action2 = new fromActions.PromptAdded(prompt2);
        store.dispatch(action2);

        expect(result).toEqual([prompt, prompt2]);
    });

    it('should have a selected prompt selector', () => {

        const prompt: Prompt = {
            content: 'some content',
            id: 'thisistheid',
            roles: {
                someuserid: 'owner'
            },
            title: 'great thing'
        };

        const prompt2: Prompt = {
            content: 'some other content',
            id: 'thisistheotherid',
            roles: {
                someuserid2: 'owner'
            },
            title: 'greater thing'
        };

        const action = new fromActions.PromptAdded(prompt);
        store.dispatch(action);

        const action2 = new fromActions.PromptAdded(prompt2);
        store.dispatch(action2);

        store.dispatch({
            type: 'ROUTER_NAVIGATION',
            payload: {
                routerState: {
                    url: '/author',
                    queryParams: {},
                    params: { promptID: 'thisistheotherid' },
                },
                event: {},
            },
        });

        let result;

        store
            .select(fromSelectors.selectSelectedPrompt)
            .subscribe((value) => {
                result = value;
            });

        expect(result).toEqual(prompt2);
    });
});
