import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(patientId: number) {
    this.patientService.deletePatient(patientId).subscribe(
      response => {
        // Handle success, update patient list, etc.
      },
      error => {
        // Handle error
      }
    );
  }
}
