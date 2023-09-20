import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { Insurance } from '../insurance';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
  insurances: Insurance[] = [];

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit() {
    this.getInsuranceList();
  }

  getInsuranceList() {
    this.insuranceService.getAllInsurances().subscribe(
      (data: Insurance[]) => {
        this.insurances = data;
      },
      (error) => {
        console.error('Error fetching insurance list:', error);
      }
    );
  }

  deleteInsurance(id: number) {
    if (confirm('Are you sure you want to delete this insurance?')) {
      this.insuranceService.deleteInsurance(id).subscribe(
        () => {
          this.getInsuranceList(); // Refresh the list after deletion
        },
        (error) => {
          console.error('Error deleting insurance:', error);
        }
      );
    }
  }
}
