import { Action } from '@ngrx/store';

export const GET_PROMPTS = '[Prompts] Get';


export class GetPrompts implements Action {
    readonly type = GET_PROMPTS;
}


export type PromptAction = GetPrompts;
