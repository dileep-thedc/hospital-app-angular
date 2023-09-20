import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor'; // Make sure to import the Doctor model if you have one

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[]=[];

  constructor(private router: Router, private doctorService: DoctorService) {
    this.doctors = [];
  }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorService.getAllDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
    });
  }

  deleteDoctor(id: number) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        // After successful deletion, update the doctors list
        this.getDoctors();
      });
    }
  }
}
