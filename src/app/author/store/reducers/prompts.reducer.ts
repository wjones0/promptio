import { createEntityAdapter, EntityState } from '@ngrx/entity';

import * as PromptActions from '../actions/prompts.action';

import { Prompt } from '@models/prompt';

export const promptAdapter = createEntityAdapter<Prompt>();

export interface PromptState extends EntityState<Prompt> { }

export const initialState: PromptState = promptAdapter.getInitialState();

export function reducer(state = initialState, action: PromptActions.PromptAction): PromptState {

    switch (action.type) {

        case (PromptActions.GET_PROMPTS): {
            return {
                ...state
            };
        }

        default:
            return state;
    }
}
