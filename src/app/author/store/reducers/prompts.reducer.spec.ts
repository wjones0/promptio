
import * as fromPrompts from './prompts.reducer';
import * as fromActions from '../actions/prompts.action';

import { Prompt } from '@models/prompt';

describe('Prompt Reducer', () => {
    it('should return the initial state with undefined action', () => {
        const { initialState } = fromPrompts;
        const action = {} as any;

        const state = fromPrompts.reducer(undefined, action);

        expect(state).toBe(initialState);
    });

    it('should return unchanged state for get prompts actions', () => {
        const { initialState } = fromPrompts;
        const action = new fromActions.GetPrompts();

        const state = fromPrompts.reducer(initialState, action);

        expect(state).toEqual(initialState);
    });

    it('should add a new prompt to the store for prompt added action', () => {
        const { initialState } = fromPrompts;
        let state = fromPrompts.reducer(initialState, {} as any);

        expect(state.ids.length).toEqual(0);
        expect(state.entities).toEqual({});

        const prompt: Prompt = {
            content: 'some content',
            id: 'thisistheid',
            roles: {
                someuserid: 'owner'
            },
            title: 'great thing'
        };

        const action = new fromActions.PromptAdded(prompt);

        state = fromPrompts.reducer(state, action);

        expect(state.ids.length).toEqual(1);
        expect(state.entities).toEqual({ thisistheid: { ...prompt } });
    });

});

