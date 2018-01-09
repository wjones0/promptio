import * as SessionsActions from '../actions/sessions.action';


export interface PromptSessionState {
}

export const initialState: PromptSessionState = {
};

export function reducer(state = initialState, action: SessionsActions.PromptSessionAction): PromptSessionState {

    switch (action.type) {

        case (SessionsActions.CREATE_SESSION): {
            return {
                ...state
            };
        }
    }

    return state;
}
