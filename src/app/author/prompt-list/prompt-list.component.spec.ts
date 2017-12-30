import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import * as fromRootStore from '@rootStore';

import { PromptCommonModule } from '../../prompt-common/prompt-common.module';
import { PromptListComponent } from './prompt-list.component';

describe('PromptListComponent', () => {
  let component: PromptListComponent;
  let fixture: ComponentFixture<PromptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PromptCommonModule,
        StoreModule.forRoot(fromRootStore.reducers),
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
