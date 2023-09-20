import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSlotEditComponent } from './appointment-slot-edit.component';

describe('AppointmentSlotEditComponent', () => {
  let component: AppointmentSlotEditComponent;
  let fixture: ComponentFixture<AppointmentSlotEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentSlotEditComponent]
    });
    fixture = TestBed.createComponent(AppointmentSlotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
