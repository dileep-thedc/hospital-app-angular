import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalRecordService } from '../medical-record.service';
import { MedicalRecord } from '../medical-record';

@Component({
  selector: 'app-medical-record-details',
  templateUrl: './medical-record-details.component.html',
  styleUrls: ['./medical-record-details.component.css']
})
export class MedicalRecordDetailsComponent implements OnInit {
  medicalRecord: MedicalRecord | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private medicalRecordService: MedicalRecordService
  ) {}

  ngOnInit(): void {
    this.getMedicalRecordDetails();
  }

  getMedicalRecordDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.medicalRecordService.getMedicalRecordById(id).subscribe(data => {
      this.medicalRecord = data;
    });
  }
  goBack(): void {
    this.router.navigate(['/medical-records']); // Navigate back to the list
  }
}
