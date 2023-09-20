import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billing } from './billing';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private baseUrl = 'http://localhost:1000/billings'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllBillings(): Observable<Billing[]> {
    return this.http.get<Billing[]>(`${this.baseUrl}`);
  }

  getBillingById(id: number): Observable<Billing> {
    return this.http.get<Billing>(`${this.baseUrl}/${id}`);
  }

  createBilling(billing: Billing): Observable<Billing> {
    return this.http.post<Billing>(`${this.baseUrl}`, billing);
  }

  updateBilling(id: number, billing: Billing): Observable<Billing> {
    return this.http.put<Billing>(`${this.baseUrl}/${id}`, billing);
  }

  deleteBilling(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
