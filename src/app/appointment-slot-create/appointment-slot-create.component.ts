import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentSlotService } from '../appointment-slot.service';
import { Doctor } from '../doctor'; // Import Doctor model
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-appointment-slot-create',
  templateUrl: './appointment-slot-create.component.html',
  styleUrls: ['./appointment-slot-create.component.css']
})
export class AppointmentSlotCreateComponent implements OnInit {
  startTime: string = ''; // This will hold the selected start time
  endTime: string = '';   // This will hold the selected end time
  selectedDoctor: Doctor = new Doctor(); // Initialize selectedDoctor with an instance of the Doctor model
  doctors: Doctor[] = []; // List of doctors

  constructor(
    private appointmentSlotService: AppointmentSlotService,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors(): void {
    // Call your service method to fetch doctors
    this.doctorService.getAllDoctors().subscribe(
      (doctors) => {
        this.doctors = doctors;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  createAppointmentSlot() {
    const newAppointmentSlot = {
      id: 0,
      startTime: this.startTime,
      endTime: this.endTime,
      doctor: this.selectedDoctor // Assign selected doctor
    };

    this.appointmentSlotService.createAppointmentSlot(newAppointmentSlot).subscribe(
      (createdSlot) => {
        console.log('Appointment slot created:', createdSlot);
        this.router.navigate(['/appointment-slots']); // Navigate back to the list after creation
      },
      (error) => {
        console.error('Error creating appointment slot:', error);
      }
    );
  }
}
