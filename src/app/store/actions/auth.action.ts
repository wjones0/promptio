
import { Action } from '@ngrx/store';

import { User } from '../../models/user';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';


export class AuthLogin implements Action {
    readonly type = LOGIN;
}

export class AuthLoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(payload: User) { }
}

export class AuthLoginFailure implements Action {
    readonly type = LOGIN_FAILURE;
    constructor(payload: any) { }
}

// action type
export type AuthAction = AuthLogin | AuthLoginSuccess | AuthLoginFailure;
