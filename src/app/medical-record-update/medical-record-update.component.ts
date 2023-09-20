import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalRecordService } from '../medical-record.service';
import { MedicalRecord } from '../medical-record';

@Component({
  selector: 'app-medical-record-update',
  templateUrl: './medical-record-update.component.html',
  styleUrls: ['./medical-record-update.component.css']
})
export class MedicalRecordUpdateComponent implements OnInit {
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

  onSubmit(): void {
    if (this.medicalRecord) {
      this.medicalRecordService.updateMedicalRecord(this.medicalRecord.id, this.medicalRecord).subscribe(
        () => {
          // Do something after updating the medical record
          this.router.navigate(['/medical-records']);
        },
        (error) => {
          console.error('Error updating medical record:', error);
        }
      );
    }
  }
}
