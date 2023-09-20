import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';
import { Billing } from '../billing';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit {
  billings: Billing[] = [];

  constructor(private billingService: BillingService) {}

  ngOnInit() {
    this.getBillingList();
  }

  getBillingList() {
    this.billingService.getAllBillings().subscribe(
      (data: Billing[]) => {
        console.log(data); // Log the data received from the backend
        this.billings = data;
      },
      (error) => {
        console.error('Error fetching billings:', error);
      }
    );
  }
  

  deleteBilling(id: number) {
    if (confirm('Are you sure you want to delete this billing record?')) {
      this.billingService.deleteBilling(id).subscribe(
        () => {
          this.getBillingList(); // Refresh the list after deletion
        },
        (error) => {
          console.error('Error deleting billing record:', error);
        }
      );
    }
  }
}
