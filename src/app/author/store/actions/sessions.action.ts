import { Action } from '@ngrx/store';


export const CREATE_SESSION = '[PromptSession] Create Session';


export class CreateSession implements Action {
    readonly type = CREATE_SESSION;
    constructor(public payload: string) { }
}

export type PromptSessionAction = CreateSession;
