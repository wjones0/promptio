import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  MatCardModule,
} from '@angular/material';

import { click } from '../../../testing/click';

import { RoleSelectorComponent } from './role-selector.component';

describe('RoleSelectorComponent', () => {
  let component: RoleSelectorComponent;
  let fixture: ComponentFixture<RoleSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
      ],
      declarations: [
        RoleSelectorComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a viewer event when viewer is clicked', () => {
    const des = fixture.debugElement.queryAll(By.css('mat-card'));

    // subscribe to the event emitter and check the value
    fixture.componentInstance.roleSelected.subscribe((value) => {
      expect(value).toBe('viewer');
    });

    // click the button and wait for change detection
    click(des[0]);
    fixture.detectChanges();
  });

});
