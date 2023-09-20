import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private baseUrl = 'http://localhost:1000/insurances'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllInsurances(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(`${this.baseUrl}`);
  }

  getInsuranceById(id: number): Observable<Insurance> {
    return this.http.get<Insurance>(`${this.baseUrl}/${id}`);
  }

  createInsurance(insurance: Insurance): Observable<Insurance> {
    return this.http.post<Insurance>(`${this.baseUrl}`, insurance);
  }

  updateInsurance(id: number, insurance: Insurance): Observable<Insurance> {
    return this.http.put<Insurance>(`${this.baseUrl}/${id}`, insurance);
  }

  deleteInsurance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
