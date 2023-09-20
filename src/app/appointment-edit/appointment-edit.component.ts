// Import necessary modules and AppointmentService

import { Component, OnInit } from "@angular/core";
import { Appointment } from "../appointment";
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentService } from "../appointment.service";

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {
  appointment!: Appointment;

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // Fetch appointment details using appointmentService.getAppointmentById and populate appointment
  }

  onSubmit() {
    // Call appointmentService.updateAppointment to update the appointment
    this.router.navigate(['/appointments']); // Navigate back to the list after update
  }
}
