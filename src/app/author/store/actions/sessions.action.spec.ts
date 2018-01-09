import * as fromSessions from './sessions.action';


describe('PromptSession Actions', () => {
    it('should create a Create Session action', () => {
        const action = new fromSessions.CreateSession('somelargeid');

        expect({ ...action }).toEqual({
            type: fromSessions.CREATE_SESSION,
            payload: 'somelargeid'
        });
    });

});
