import * as fromPrompts from './prompts.action';

describe('Prompt Actions', () => {
    it('should create a Get Prompts action', () => {
        const action = new fromPrompts.GetPrompts();

        expect({ ...action }).toEqual({
            type: fromPrompts.GET_PROMPTS
        });
    });
});
