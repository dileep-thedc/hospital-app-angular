import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { BillingService } from '../billing.service'; // Import your BillingService
import { Billing } from '../billing';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit {
  billing: Billing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
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

  goBack() {
    this.router.navigate(['/billings']); // Navigate back to the billing list
  }
}
