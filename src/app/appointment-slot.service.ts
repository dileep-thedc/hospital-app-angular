import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentSlot } from './appointment-slot';

@Injectable({
  providedIn: 'root'
})
export class AppointmentSlotService {
  private baseUrl = 'http://localhost:1000/appointment-slots'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllAppointmentSlots(): Observable<AppointmentSlot[]> {
    return this.http.get<AppointmentSlot[]>(this.baseUrl);
  }

  getAppointmentSlotById(id: string): Observable<AppointmentSlot> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<AppointmentSlot>(url);
  }

  createAppointmentSlot(appointmentSlot: AppointmentSlot): Observable<AppointmentSlot> {
    return this.http.post<AppointmentSlot>(this.baseUrl, appointmentSlot);
  }

  updateAppointmentSlot(id: string, appointmentSlot: AppointmentSlot): Observable<AppointmentSlot> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<AppointmentSlot>(url, appointmentSlot);
  }

  deleteAppointmentSlot(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
