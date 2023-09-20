import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingService } from '../billing.service';
import { Billing } from '../billing';

@Component({
  selector: 'app-billing-update',
  templateUrl: './billing-update.component.html',
  styleUrls: ['./billing-update.component.css']
})
export class BillingUpdateComponent implements OnInit {
  billing: Billing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private billingService: BillingService
  ) {}

  ngOnInit() {
    this.getBillingDetails();
  }

  getBillingDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.billingService.getBillingById(Number(id)).subscribe(
        (data: Billing) => {
          this.billing = data;
        },
        (error) => {
          console.error('Error fetching billing details:', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.billing) {
      this.billingService.updateBilling(this.billing.id, this.billing).subscribe(
        () => {
          // Navigate to the detail page after a successful update
          this.router.navigate(['/billings', this.billing?.id]);
        },
        (error) => {
          console.error('Error updating billing record:', error);
        }
      );
    }
  }
}
