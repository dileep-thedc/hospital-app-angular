import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSlotCreateComponent } from './appointment-slot-create.component';

describe('AppointmentSlotCreateComponent', () => {
  let component: AppointmentSlotCreateComponent;
  let fixture: ComponentFixture<AppointmentSlotCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentSlotCreateComponent]
    });
    fixture = TestBed.createComponent(AppointmentSlotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
