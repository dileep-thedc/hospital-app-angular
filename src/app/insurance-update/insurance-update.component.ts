import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from '../insurance.service';
import { Insurance } from '../insurance';

@Component({
  selector: 'app-insurance-update',
  templateUrl: './insurance-update.component.html',
  styleUrls: ['./insurance-update.component.css']
})
export class InsuranceUpdateComponent implements OnInit {
  insurance: Insurance | undefined;
  insuranceId: number=0;

  constructor(private route: ActivatedRoute, private insuranceService: InsuranceService) {}

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

  onSubmit(): void {
    if (this.insurance) {
      this.insuranceService.updateInsurance(this.insuranceId, this.insurance).subscribe(
        () => {
          // Do something after updating the insurance
        },
        (error) => {
          console.error('Error updating insurance:', error);
        }
      );
    }
  }
}
