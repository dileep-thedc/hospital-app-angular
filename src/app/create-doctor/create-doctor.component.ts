import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor'; // Make sure to import the Doctor model if you have one

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.doctorService.createDoctor(this.doctor).subscribe(data => {
      console.log('Doctor created:', data);
      this.router.navigate(['/doctors']);
    });
  }
}
