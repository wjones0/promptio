import * as fromPrompts from './prompts.action';

import { Prompt } from '@models/prompt';

describe('Prompt Actions', () => {
    it('should create a Get Prompts action', () => {
        const action = new fromPrompts.GetPrompts();

        expect({ ...action }).toEqual({
            type: fromPrompts.GET_PROMPTS
        });
    });

    it('should create an add prompt action', () => {
        const prompt: Prompt = {
            content: 'some content',
            id: 'thisistheid',
            roles: {
                someuserid: 'owner'
            },
            title: 'great thing'
        };

        const action = new fromPrompts.PromptAdded(prompt);

        expect(action.payload).toEqual(prompt);
    });
});
