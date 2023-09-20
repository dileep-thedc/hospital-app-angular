import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCreatedComponent } from './billing-created.component';

describe('BillingCreatedComponent', () => {
  let component: BillingCreatedComponent;
  let fixture: ComponentFixture<BillingCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingCreatedComponent]
    });
    fixture = TestBed.createComponent(BillingCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
