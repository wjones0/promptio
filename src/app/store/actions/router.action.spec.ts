
import * as fromRouter from './router.action';

describe('Router Actions', () => {
    it('should create the Go action', () => {
        const payload = { path: ['/1'] };
        const action = new fromRouter.Go(payload);

        expect({ ...action }).toEqual({
            type: fromRouter.GO,
            payload
        });

    });

    it('should create the Forward action', () => {
        const action = new fromRouter.Forward();

        expect({ ...action }).toEqual({
            type: fromRouter.FORWARD
        });
    });

    it('should create the Back action', () => {
        const action = new fromRouter.Back();

        expect({ ...action }).toEqual({
            type: fromRouter.BACK
        });
    });
});
