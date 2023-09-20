import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceUpdateComponent } from './insurance-update.component';

describe('InsuranceUpdateComponent', () => {
  let component: InsuranceUpdateComponent;
  let fixture: ComponentFixture<InsuranceUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceUpdateComponent]
    });
    fixture = TestBed.createComponent(InsuranceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
