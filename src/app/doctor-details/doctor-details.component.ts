import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor'; // Make sure to import the Doctor model if you have one

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctor!: Doctor;

  constructor(private route: ActivatedRoute, private router: Router, private doctorService: DoctorService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.doctorService.getDoctorById(id).subscribe(data => {
      this.doctor = data;
    });
  }

  goBack() {
    this.router.navigate(['/doctors']);
  }
}
