import { Action } from '@ngrx/store';

import { Session } from '@models/session';

export const GET_SESSION = '[Session] Get Session';
export const SESSION_LOADED = '[Session] value';

export class GetSession implements Action {
    readonly type = GET_SESSION;
    constructor(public payload: string) { }
}

export class SessionLoaded implements Action {
    readonly type = SESSION_LOADED;
    constructor(public payload: Session) { }
}

export type SessionAction = GetSession |
    SessionLoaded;
