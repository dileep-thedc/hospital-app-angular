import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSlotDetailsComponent } from './appointment-slot-details.component';

describe('AppointmentSlotDetailsComponent', () => {
  let component: AppointmentSlotDetailsComponent;
  let fixture: ComponentFixture<AppointmentSlotDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentSlotDetailsComponent]
    });
    fixture = TestBed.createComponent(AppointmentSlotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
