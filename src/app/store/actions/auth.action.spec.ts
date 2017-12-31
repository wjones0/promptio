
import * as fromAuth from './auth.action';
import { User } from '@models/user';

describe('Auth Actions', () => {
    describe('Logging In Actions', () => {
        it('should create a Login action', () => {
            const action = new fromAuth.AuthLogin();

            expect({ ...action }).toEqual({
                type: fromAuth.LOGIN
            });
        });

        it('should create a login failure action', () => {
            const payload = { message: 'fail' };
            const action = new fromAuth.AuthLoginFailure(payload);

            expect({ ...action }).toEqual({
                type: fromAuth.LOGIN_FAILURE,
                payload
            });
        });

        it('should create a login success action', () => {
            const payload: User = {
                authID: 'someauthid',
                displayName: 'name'
            };

            const action = new fromAuth.AuthLoginSuccess(payload);

            expect({ ...action }).toEqual({
                type: fromAuth.LOGIN_SUCCESS,
                payload
            });
        });
    });

    describe('Check Login Actions', () => {
        it('should create a check login action', () => {
            const action = new fromAuth.AuthCheckLogin();

            expect({ ...action }).toEqual({
                type: fromAuth.CHECK_LOGIN
            });
        });
    });
});