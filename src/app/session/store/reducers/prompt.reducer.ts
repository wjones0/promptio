import * as fromPrompts from '../actions/prompt.action';

import { Prompt } from '@models/prompt';

export interface SessionPromptState {
    prompt: Prompt;
}

export const initialState: SessionPromptState = {
    prompt: null
};

export function reducer(state = initialState, action: fromPrompts.PromptAction): SessionPromptState {

    switch (action.type) {
        case (fromPrompts.GET_PROMPT): {
            return {
                ...state
            };
        }

        case (fromPrompts.PROMPT_LOADED): {
            return {
                ...state,
                prompt: action.payload
            };
        }
    }

    return state;
}
