
import * as fromPrompts from './prompt.reducer';
import * as fromActions from '../actions/prompt.action';

import { Prompt } from '@models/prompt';

describe('SessionPrompt Reducer', () => {
    it('should return the initial state with undefined action', () => {
        const { initialState } = fromPrompts;
        const action = {} as any;

        const state = fromPrompts.reducer(undefined, action);

        expect(state).toBe(initialState);
    });

    it('should preserve state for get prompt action', () => {
        const { initialState } = fromPrompts;
        const action = new fromActions.GetPrompt('somepromptid');

        const state = fromPrompts.reducer(initialState, action);

        expect(state).toEqual({
            ...initialState
        });
    });

    it('should add the prompt for add prompt action', () => {
        const { initialState } = fromPrompts;
        const prompt: Prompt = {
            id: 'promptid',
            content: 'somelongcontent',
            title: 'title',
            roles: {
                userid: 'longuserid'
            }
        };

        const action = new fromActions.PromptLoaded(prompt);

        const state = fromPrompts.reducer(initialState, action);

        expect(state).toEqual({
            prompt
        });
    });

});
