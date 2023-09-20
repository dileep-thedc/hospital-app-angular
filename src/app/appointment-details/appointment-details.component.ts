// Import necessary modules and AppointmentService

import { Component, OnInit } from "@angular/core";
import { Appointment } from "../appointment";
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentService } from "../appointment.service";

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  appointment!: Appointment;

  constructor(private route: ActivatedRoute, private router: Router, private appointmentService: AppointmentService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(id).subscribe(data => {
      this.appointment = data;
    });
  }

  goBack() {
    this.router.navigate(['/appointments']);
  }
}
