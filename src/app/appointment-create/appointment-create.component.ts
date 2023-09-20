import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { PatientService } from '../patient.service';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { Doctor } from '../doctor';
import { Appointment } from '../appointment'; // Import the Appointment class
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  appointmentDateTime: string = ''; // This will hold the selected date and time
  patientId: number = 0; // This will hold the selected patient's ID
  doctorId: number = 0; // This will hold the selected doctor's ID
  patients: Patient[] = [];
  doctors: Doctor[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPatients();
    this.fetchDoctors();
  }

  fetchPatients(): void {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  fetchDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });
  }
  onSubmit(): void {
  console.log('Selected appointment date and time:', this.appointmentDateTime);
  console.log('Selected patient ID:', this.patientId);
  console.log('Selected doctor ID:', this.doctorId);
  
  const parsedPatientId = parseInt(this.patientId as any); // Convert to number
  const parsedDoctorId = parseInt(this.doctorId as any);   // Convert to number

  // Fetch patients and doctors first
  this.patientService.getAllPatients().subscribe(patients => {
    this.patients = patients;
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;

      // Create new appointment after fetching data
      const newAppointment: Appointment = {
        id: 0,
        appointmentDateTime: this.appointmentDateTime,
        patientId: parsedPatientId,
        doctorId: parsedDoctorId,
        patient: this.patients.find(patient => patient.id === parsedPatientId) || new Patient(),
        doctor: this.doctors.find(doctor => doctor.id === parsedDoctorId) || new Doctor()
      };

      console.log('Creating appointment:', newAppointment);

      this.appointmentService.createAppointment(newAppointment).subscribe(
        () => {
          console.log('Appointment created successfully');
          this.router.navigate(['/appointments']);
          // Do something after creating the appointment
        },
        (error) => {
          console.error('Error creating appointment:', error);
        }
      );
    });
  });
}

  
  
}
