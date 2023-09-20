import { Component, OnInit } from '@angular/core';
import { MedicalRecordService } from '../medical-record.service';
import { MedicalRecord } from '../medical-record';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-record-create',
  templateUrl: './medical-record-create.component.html',
  styleUrls: ['./medical-record-create.component.css']
})
export class MedicalRecordCreateComponent implements OnInit {
  diagnosis: string = '';
  prescriptions: string = '';
  testResults: string = '';
  patientId: number = 0;
  patients: Patient[] = [];

  constructor(
    private medicalRecordService: MedicalRecordService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  onSubmit(): void {
    // Fetch the selected patient using patientId
    this.patientService.getPatientById(this.patientId).subscribe(
      (patient) => {
        const newMedicalRecord: MedicalRecord = {
          id: 0, // The ID will be assigned by the backend
          diagnosis: this.diagnosis,
          prescriptions: this.prescriptions,
          testResults: this.testResults,
          patientId: this.patientId,
          patient: patient // Assign the selected patient object
        };

        this.medicalRecordService.createMedicalRecord(newMedicalRecord).subscribe(
          () => {
            // Do something after creating the medical record
            this.router.navigate(['/medical-records']);
          },
          (error) => {
            console.error('Error creating medical record:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching patient details:', error);
      }
    );
  }
}
