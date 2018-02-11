import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StoreModule, Store } from '@ngrx/store';

import * as fromRoot from '@rootStore';
import * as fromSessions from '../store';

import { PromptCommonModule } from '../../prompt-common/prompt-common.module';

import { SessionComponent } from './session.component';
import { ViewerComponent } from '../components/viewer/viewer.component';
import { ControllerComponent } from '../components/controller/controller.component';
import { RoleSelectorComponent } from '../components/role-selector/role-selector.component';

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
        ControllerComponent,
        RoleSelectorComponent,
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

  it('should show the role selector to start', () => {
    const de = fixture.debugElement.query(By.css('pro-role-selector'));
    expect(de).toBeTruthy();
  });

  it('should show the viewer when the role is viewer', () => {
    let de = fixture.debugElement.query(By.css('pro-viewer'));
    expect(de).toBeFalsy();

    const store = fixture.debugElement.injector.get(Store);
    store.dispatch(new fromSessions.SelectRole('viewer'));
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('pro-viewer'));
    expect(de).toBeTruthy();

  });
});
