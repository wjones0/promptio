import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MatCardModule
} from '@angular/material';

import { StoreModule, Store } from '@ngrx/store';
import * as fromRoot from '@rootStore';
import * as fromPromptsModuleReducer from '../store/reducers';

import { PromptCommonModule } from '../../prompt-common/prompt-common.module';
import { PromptListComponent } from './prompt-list.component';

describe('PromptListComponent', () => {
  let component: PromptListComponent;
  let fixture: ComponentFixture<PromptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        PromptCommonModule,
        StoreModule.forRoot(fromRoot.reducers),
        StoreModule.forFeature('promptModule', { ...fromPromptsModuleReducer.reducers }),
      ],
      declarations: [
        PromptListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
