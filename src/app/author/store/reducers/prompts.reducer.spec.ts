
import * as fromPrompts from './prompts.reducer';
import * as fromActions from '../actions/prompts.action';

describe('Prompt Reducer', () => {
    it('should return the initial state with undefined action', () => {
        const { initialState } = fromPrompts;
        const action = {} as any;

        const state = fromPrompts.reducer(undefined, action);

        expect(state).toBe(initialState);
    });

    it('should return unchanged state for get prompts actions', () => {
        const { initialState } = fromPrompts;
        const action = new fromActions.GetPrompts();

        const state = fromPrompts.reducer(initialState, action);

        expect(state).toEqual(initialState);
    });

});

