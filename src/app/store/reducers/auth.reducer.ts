import { User } from '@models/user';
import * as AuthActions from '../actions/auth.action';


export interface AuthState {
    user: User;
    loggedIn: boolean;
    loggingIn: boolean;
}

export const initialState: AuthState = {
    user: null,
    loggedIn: false,
    loggingIn: false
}


export function reducer(state = initialState, action: AuthActions.AuthAction): AuthState {

    switch (action.type) {
        case AuthActions.LOGIN: {
            return {
                ...state,
                loggedIn: false,
                loggingIn: true
            }
        }

        case AuthActions.LOGIN_SUCCESS: {
            const user = action.payload;
            return {
                ...state,
                loggedIn: true,
                loggingIn: false,
                user
            }
        }

        case AuthActions.LOGIN_FAILURE: {
            return {
                ...state,
                loggedIn: false,
                loggingIn: false
            }
        }

        case AuthActions.CHECK_LOGIN: {
            return {
                ...state,
                loggedIn: false,
                loggingIn: false
            }
        }
    }

    return state;
}


export const getUser = (state: AuthState): User => state.user;
export const isLoggedIn = (state: AuthState): boolean => state.loggedIn;
export const isLoggingIn = (state: AuthState): boolean => state.loggingIn;
