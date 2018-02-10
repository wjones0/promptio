import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';

import * as fromRoot from '@rootStore';
import * as fromSessions from '../store';

import { PromptCommonModule } from '../../prompt-common/prompt-common.module';

import { SessionComponent } from './session.component';
import { ViewerComponent } from '../components/viewer/viewer.component';

describe('SessionComponent', () => {
  let component: SessionComponent;
  let fixture: ComponentFixture<SessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PromptCommonModule,
        StoreModule.forRoot(fromRoot.reducers),
        StoreModule.forFeature('sessionModule', { ...fromSessions.reducers }),
      ],
      declarations: [
        ViewerComponent,
        SessionComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
