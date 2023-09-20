// Import necessary modules and AppointmentService

import { Component, OnInit } from "@angular/core";
import { Appointment } from "../appointment";
import { AppointmentService } from "../appointment.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.getAppointmentList();
  }

  getAppointmentList() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  deleteAppointment(id: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.deleteAppointment(id).subscribe(() => {
        this.getAppointmentList(); // Refresh the list after deletion
      });
    }
  }
}
