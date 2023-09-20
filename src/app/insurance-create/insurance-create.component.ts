import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { Insurance } from '../insurance';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-create',
  templateUrl: './insurance-create.component.html',
  styleUrls: ['./insurance-create.component.css']
})
export class InsuranceCreateComponent implements OnInit {
  policyNumber: string = '';
  coverageAmount: number = 0;
  patientId: number = 0;
  patients: Patient[] = [];

  constructor(
    private insuranceService: InsuranceService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.patientService.getAllPatients().subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }

  onSubmit(): void {
    // Fetch the selected patient using patientId
    this.patientService.getPatientById(this.patientId).subscribe(
      (patient) => {
        const newInsurance: Insurance = {
          id: 0, // The ID will be assigned by the backend
          policyNumber: this.policyNumber,
          coverageAmount: this.coverageAmount,
          patientId: this.patientId,
          patient: patient // Assign the selected patient object
        };

        this.insuranceService.createInsurance(newInsurance).subscribe(
          () => {
            // Do something after creating the insurance
            this.router.navigate(['/insurances']);
          },
          (error) => {
            console.error('Error creating insurance:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching patient details:', error);
      }
    );
  }
}
