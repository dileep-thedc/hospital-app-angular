import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient!: Patient;

  constructor(private route: ActivatedRoute, private router: Router, private patientService: PatientService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(id).subscribe(data => {
      this.patient = data;
    });
  }

  goBack() {
    this.router.navigate(['/patients']);
  }
}
