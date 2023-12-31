import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordCreateComponent } from './medical-record-create.component';

describe('MedicalRecordCreateComponent', () => {
  let component: MedicalRecordCreateComponent;
  let fixture: ComponentFixture<MedicalRecordCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalRecordCreateComponent]
    });
    fixture = TestBed.createComponent(MedicalRecordCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
