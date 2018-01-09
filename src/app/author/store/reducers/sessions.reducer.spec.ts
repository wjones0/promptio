
import * as fromSessions from './sessions.reducer';
import * as fromActions from '../actions/sessions.action';

describe('PromptSessions Reducer', () => {
    it('should return the initial state with undefined action', () => {
        const { initialState } = fromSessions;
        const action = {} as any;

        const state = fromSessions.reducer(undefined, action);

        expect(state).toBe(initialState);
    });

    it('should return unchanged state for create session actions', () => {
        const { initialState } = fromSessions;
        const action = new fromActions.CreateSession('somelargeid');

        const state = fromSessions.reducer(initialState, action);

        expect(state).toEqual(initialState);
    });


});
