import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingUpdateComponent } from './billing-update.component';

describe('BillingUpdateComponent', () => {
  let component: BillingUpdateComponent;
  let fixture: ComponentFixture<BillingUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingUpdateComponent]
    });
    fixture = TestBed.createComponent(BillingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
