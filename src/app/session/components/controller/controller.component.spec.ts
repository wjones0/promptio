import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { click } from '../../../testing/click';

import { ControllerComponent } from './controller.component';

describe('ControllerComponent', () => {
  let component: ControllerComponent;
  let fixture: ComponentFixture<ControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControllerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a change rate event (+) when + is clicked', () => {
    const des = fixture.debugElement.queryAll(By.css('button'));

    // subscribe to the event emitter and check the value
    fixture.componentInstance.rateChange.subscribe((value) => {
      expect(value).toBe('+');
    });

    // click the button and wait for change detection
    click(des[0]);
    fixture.detectChanges();
  });

  it('should emit a change rate event (-) when - is clicked', () => {
    const des = fixture.debugElement.queryAll(By.css('button'));

    // subscribe to the event emitter and check the value
    fixture.componentInstance.rateChange.subscribe((value) => {
      expect(value).toBe('-');
    });

    // click the button and wait for change detection
    click(des[1]);
    fixture.detectChanges();
  });

});
