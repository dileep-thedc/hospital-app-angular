import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log('Patient created:', data);
      this.router.navigate(['/patients']);
    });
  }
}
