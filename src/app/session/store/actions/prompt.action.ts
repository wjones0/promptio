import { Action } from '@ngrx/store';

import { Prompt } from '@models/prompt';

export const GET_PROMPT = '[Prompt] Get';
export const PROMPT_LOADED = '[Prompt] value';

export class GetPrompt implements Action {
    readonly type = GET_PROMPT;
    constructor(public payload: string) { }
}

export class PromptLoaded implements Action {
    readonly type = PROMPT_LOADED;
    constructor(public payload: Prompt) { }
}

export type PromptAction = GetPrompt |
    PromptLoaded;
