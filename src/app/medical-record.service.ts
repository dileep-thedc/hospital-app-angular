import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalRecord } from './medical-record'; // Import the MedicalRecord model

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  private baseUrl = 'http://localhost:1000/medical-records'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  getAllMedicalRecords(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(`${this.baseUrl}`);
  }

  getMedicalRecordById(id: number): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(`${this.baseUrl}/${id}`);
  }

  createMedicalRecord(medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(`${this.baseUrl}`, medicalRecord);
  }

  updateMedicalRecord(id: number, medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.put<MedicalRecord>(`${this.baseUrl}/${id}`, medicalRecord);
  }

  deleteMedicalRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
