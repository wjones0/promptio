import { Action } from '@ngrx/store';

import { Prompt } from '@models/prompt';

export const GET_PROMPTS = '[Prompts] Get';
export const PROMPT_ADDED = '[Prompts] added';


export class GetPrompts implements Action {
    readonly type = GET_PROMPTS;
}

export class PromptAdded implements Action {
    readonly type = PROMPT_ADDED;
    constructor(public payload: Prompt) { }
}


export type PromptAction = GetPrompts |
    PromptAdded;
