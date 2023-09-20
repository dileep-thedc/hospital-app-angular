import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillingService } from '../billing.service';
import { Billing } from '../billing';
import { Patient } from '../patient'; // Import Patient model
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-billing-create',
  templateUrl: './billing-created.component.html',
  styleUrls: ['./billing-created.component.css']
})
export class BillingCreatedComponent implements OnInit {
  billing: Billing = new Billing(); // Initialize billing with an instance of the Billing model

  amount: number = 0; // This will hold the billing amount
  patients: Patient[] = []; // List of patients
  selectedPatient: Patient = new Patient(); // Initialize selectedPatient with an instance of the Patient model
  billingDateTime: string = ''; // Declare the billingDateTime property

  constructor(
    private billingService: BillingService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    // Call your service method to fetch patients
    this.patientService.getAllPatients().subscribe(
      (patients) => {
        this.patients = patients;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }

  createBilling() {
    const newBilling: Billing = {
      id: 0,
      cost: this.amount,
      billingDateTime: this.billingDateTime, // Provide a valid billing date and time
      patientId: this.selectedPatient.id, // Assign the ID of the selected patient
      patient: this.selectedPatient // Assign selected patient
    };
  
    this.billingService.createBilling(newBilling).subscribe(
      (createdBilling) => {
        console.log('Billing record created:', createdBilling);
        this.router.navigate(['/billings']); // Navigate back to the list after creation
      },
      (error) => {
        console.error('Error creating billing record:', error);
      }
    );
  }
  
  
}
