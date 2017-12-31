
import { Action } from '@ngrx/store';

import { User } from '@models/user';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const CHECK_LOGIN = '[Auth] Check Login';

export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const LOGOUT_FAILURE = '[Auth] Logout Failure';


export class AuthLogin implements Action {
    readonly type = LOGIN;
}

export class AuthLoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: User) { }
}

export class AuthLoginFailure implements Action {
    readonly type = LOGIN_FAILURE;
    constructor(public payload: any) { }
}

export class AuthCheckLogin implements Action {
    readonly type = CHECK_LOGIN;
}

export class AuthLogout implements Action {
    readonly type = LOGOUT;
}

export class AuthLogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;
}

export class AuthLogoutFailure implements Action {
    readonly type = LOGOUT_FAILURE;
    constructor(public payload: any) { }
}

// action type
export type AuthAction = AuthLogin
    | AuthLoginSuccess
    | AuthLoginFailure
    | AuthCheckLogin
    | AuthLogout
    | AuthLogoutSuccess
    | AuthLogoutFailure;
