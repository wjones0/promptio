import { Action } from '@ngrx/store';

import { Session } from '@models/session';

export const GET_SESSION = '[Session] Get Session';
export const SESSION_LOADED = '[Session] value';
export const SCROLL_SESSION = '[Session] Scroll Session';

export class GetSession implements Action {
    readonly type = GET_SESSION;
    constructor(public payload: string) { }
}

export class SessionLoaded implements Action {
    readonly type = SESSION_LOADED;
    constructor(public payload: Session) { }
}

export class ScrollSession implements Action {
    readonly type = SCROLL_SESSION;
}

export type SessionAction = GetSession |
    SessionLoaded |
    ScrollSession;
