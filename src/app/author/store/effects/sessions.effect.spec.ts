import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { SessionService, UserSessionService } from '../../services';
import * as fromEffects from './sessions.effect';
import * as fromActions from '../actions/sessions.action';
import * as fromRoot from '@rootStore';
import { AngularFireModule } from 'angularfire2';

import { User } from '@models/user';

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

describe('SessionsEffects', () => {
    let actions$: TestActions;
    let sessionService: SessionService;
    let userSessionService: UserSessionService;
    let effects: fromEffects.SessionEffects;
    let store: Store<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                SessionService,
                UserSessionService,
                { provide: Store, useClass: EmptyClass },
                { provide: AngularFirestore, useClass: EmptyClass },
                fromEffects.SessionEffects,
                { provide: Actions, useFactory: getActions },
            ],
        });

        actions$ = TestBed.get(Actions);
        sessionService = TestBed.get(SessionService);
        userSessionService = TestBed.get(UserSessionService);
        effects = TestBed.get(fromEffects.SessionEffects);
        store = TestBed.get(Store);

        const mockSession = {
            id: 'newsessionid'
        };

        const mockUserSession = {
            id: 'someusersessionid'
        };

        const mockUser: User = {
            authID: 'userauthid',
            displayName: 'myname',
        };

        spyOn(sessionService, 'addSession').and.returnValue(of(mockSession));
        spyOn(userSessionService, 'addUserSession').and.returnValue(of(mockUserSession));

        spyOn(store, 'select').and.returnValue(of(mockUser));
    });

    // can't seem to get this to work...
    // describe('createSession$', () => {
    //     it('should return a single session with new action', () => {
    //         const action = new fromActions.CreateSession('thePromptid');
    //         const completion = new fromRoot.Go({ path: ['session', 'newsessionid'] });

    //         actions$.stream = hot('-a', { a: action });
    //         const expected = cold('-b', { b: completion });
    //         effects.createSession$.subscribe((data) => console.log(data), (err) => console.log(err));
    //         // expect(effects.createSession$).toBeObservable(expected);
    //     });
    // });
});

