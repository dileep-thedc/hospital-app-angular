import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from '../insurance.service';
import { Insurance } from '../insurance';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {
  insurance: Insurance | undefined;
  insuranceId: number=0;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private insuranceService: InsuranceService
    ) {}

  ngOnInit() {
    this.insuranceId = this.route.snapshot.params['id'];
    this.getInsuranceDetails();
  }

  getInsuranceDetails() {
    this.insuranceService.getInsuranceById(this.insuranceId).subscribe(
      (data: Insurance) => {
        this.insurance = data;
      },
      (error) => {
        console.error('Error fetching insurance details:', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/insurances']); // Navigate back to the list
  }
}
