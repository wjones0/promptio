import { User } from '../../models/user';
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
            return {
                ...state,
                loggedIn: true,
                loggingIn: false
            }
        }

        case AuthActions.LOGIN_FAILURE: {
            return {
                ...state,
                loggedIn: false,
                loggingIn: false
            }
        }
    }

    return state;
}