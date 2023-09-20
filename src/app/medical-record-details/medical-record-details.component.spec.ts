import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordDetailsComponent } from './medical-record-details.component';

describe('MedicalRecordDetailsComponent', () => {
  let component: MedicalRecordDetailsComponent;
  let fixture: ComponentFixture<MedicalRecordDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalRecordDetailsComponent]
    });
    fixture = TestBed.createComponent(MedicalRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
