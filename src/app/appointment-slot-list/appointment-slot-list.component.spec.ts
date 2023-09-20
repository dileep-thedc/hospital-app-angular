import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSlotListComponent } from './appointment-slot-list.component';

describe('AppointmentSlotListComponent', () => {
  let component: AppointmentSlotListComponent;
  let fixture: ComponentFixture<AppointmentSlotListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentSlotListComponent]
    });
    fixture = TestBed.createComponent(AppointmentSlotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
