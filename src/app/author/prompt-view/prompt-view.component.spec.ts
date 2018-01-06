import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatCardModule
} from '@angular/material';

import { StoreModule, Store } from '@ngrx/store';
import * as fromRoot from '@rootStore';
import * as fromReducers from '../store/reducers';
import * as fromActions from '../store/actions';

import { PromptCommonModule } from '../../prompt-common/prompt-common.module';
import { PromptViewComponent } from './prompt-view.component';

import { Prompt } from '@models/prompt';

describe('PromptViewComponent', () => {
  let component: PromptViewComponent;
  let fixture: ComponentFixture<PromptViewComponent>;
  let store: Store<fromReducers.PromptModuleState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        PromptCommonModule,
        StoreModule.forRoot(fromRoot.reducers),
        StoreModule.forFeature('promptModule', { ...fromReducers.reducers }),
      ],
      declarations: [
        PromptViewComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    const prompt: Prompt = {
      content: 'some content',
      id: 'thisistheid',
      roles: {
        someuserid: 'owner'
      },
      title: 'great thing'
    };

    const prompt2: Prompt = {
      content: 'some other content',
      id: 'thisistheotherid',
      roles: {
        someuserid2: 'owner'
      },
      title: 'greater thing'
    };

    const action = new fromActions.PromptAdded(prompt);
    store.dispatch(action);

    const action2 = new fromActions.PromptAdded(prompt2);
    store.dispatch(action2);

    store.dispatch({
      type: 'ROUTER_NAVIGATION',
      payload: {
        routerState: {
          url: '/author',
          queryParams: {},
          params: { promptID: 'thisistheotherid' },
        },
        event: {},
      },
    });


    fixture = TestBed.createComponent(PromptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
