import * as fromPrompts from './prompt.action';

import { Prompt } from '@models/prompt';

describe('Session Prompt Actions', () => {
    it('should create a Get Prompt action', () => {
        const action = new fromPrompts.GetPrompt('promptid');

        expect({ ...action }).toEqual({
            type: fromPrompts.GET_PROMPT,
            payload: 'promptid'
        });
    });

    it('should create an Added Prompt action', () => {
        const prompt: Prompt = {
            content: 'longcontent',
            id: 'promptid',
            title: 'title',
            roles: {
                userid: 'owner'
            }
        };

        const action = new fromPrompts.PromptLoaded(prompt);

        expect({ ...action }).toEqual({
            type: fromPrompts.PROMPT_LOADED,
            payload: prompt
        });
    });

});
