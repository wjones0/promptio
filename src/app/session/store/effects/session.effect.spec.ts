import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { AngularFirestore } from 'angularfire2/firestore';

import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { SessionService } from '../../services';
import * as fromEffects from './session.effect';
import * as fromActions from '../actions/session.action';
import { AngularFireModule } from 'angularfire2';

export class TestActions extends Actions {
    constructor() {
        super(empty());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

class EmptyClass {
    select(something: any) { }
}

describe('SessionEffects', () => {
    let actions$: TestActions;
    let service: SessionService;
    let effects: fromEffects.SessionEffects;
    let store: Store<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                SessionService,
                { provide: Store, useClass: EmptyClass },
                { provide: AngularFirestore, useClass: EmptyClass },
                fromEffects.SessionEffects,
                { provide: Actions, useFactory: getActions },
            ],
        });

        actions$ = TestBed.get(Actions);
        service = TestBed.get(SessionService);
        effects = TestBed.get(fromEffects.SessionEffects);
        store = TestBed.get(Store);

        spyOn(service, 'getSingleSessionActionStream').and.returnValue(of({
            type: 'value',
            payload: {
                data: function () {
                    return {
                        id: 'somelongid',
                        promptId: 'promptID',
                        roles: {
                            userid: 'owner'
                        }
                    };
                }
            }
        }));

        spyOn(store, 'select').and.returnValue(of({
            params: {
                sessionID: 'sessionid'
            }
        }));
    });

    describe('getSession$', () => {
        it('should return a single session with new action', () => {
            const action = {
                type: ROUTER_NAVIGATION,
                payload: {}
            };
            const completion = {
                type: '[Session] value',
                payload: {
                    id: 'somelongid',
                    promptId: 'promptID',
                    roles: {
                        userid: 'owner'
                    }
                }
            };

            actions$.stream = hot('-a', { a: action });
            const expected = cold('-b', { b: completion });

            expect(effects.getSession$).toBeObservable(expected);
        });
    });
});

