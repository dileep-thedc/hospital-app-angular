import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patient: Patient = new Patient();

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(id).subscribe(data => {
      this.patient = data;
    });
  }

  onSubmit() {
    this.patientService.updatePatient(this.patient.id, this.patient).subscribe(data => {
      console.log('Patient updated:', data);
      this.router.navigate(['/patients']);
    });
  }
}
