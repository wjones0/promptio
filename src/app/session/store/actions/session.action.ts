import { Action } from '@ngrx/store';

import { Session } from '@models/session';

export const GET_SESSION = '[Session] Get Session';
export const SESSION_LOADED = '[Session] value';
export const SCROLL_SESSION = '[Session] Scroll Session';
export const STOP_SCROLL = '[Session] Stop Scroll';
export const SELECT_ROLE = '[Session] Select Role';

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

export class StopScroll implements Action {
    readonly type = STOP_SCROLL;
}

export class SelectRole implements Action {
    readonly type = SELECT_ROLE;
    constructor(public payload: string) { }
}

export type SessionAction = GetSession |
    SessionLoaded |
    ScrollSession |
    StopScroll |
    SelectRole;
