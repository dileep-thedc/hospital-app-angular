import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor'; // Make sure to import the Doctor model if you have one

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.doctorService.getDoctorById(id).subscribe(data => {
      this.doctor = data;
    });
  }

  onSubmit() {
    this.doctorService.updateDoctor(this.doctor.id, this.doctor).subscribe(data => {
      console.log('Doctor updated:', data);
      this.router.navigate(['/doctors']);
    });
  }
}
