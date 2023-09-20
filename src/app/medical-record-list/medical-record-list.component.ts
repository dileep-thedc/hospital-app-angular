import { Component, OnInit } from '@angular/core';
import { MedicalRecordService } from '../medical-record.service';
import { MedicalRecord } from '../medical-record';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.css']
})
export class MedicalRecordListComponent implements OnInit {
  medicalRecords: MedicalRecord[] = [];

  constructor(private medicalRecordService: MedicalRecordService) {}

  ngOnInit() {
    this.getMedicalRecordList();
  }

  getMedicalRecordList() {
    this.medicalRecordService.getAllMedicalRecords().subscribe(
      (data: MedicalRecord[]) => {
        this.medicalRecords = data;
      },
      (error) => {
        console.error('Error fetching medical records:', error);
      }
    );
  }

  deleteMedicalRecord(id: number) {
    if (confirm('Are you sure you want to delete this medical record?')) {
      this.medicalRecordService.deleteMedicalRecord(id).subscribe(
        () => {
          this.getMedicalRecordList(); // Refresh the list after deletion
        },
        (error) => {
          console.error('Error deleting medical record:', error);
        }
      );
    }
  }
}
