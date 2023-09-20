import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentSlotService } from '../appointment-slot.service'; // Update with actual service import

@Component({
  selector: 'app-appointment-slot-details',
  templateUrl: './appointment-slot-details.component.html',
  styleUrls: ['./appointment-slot-details.component.css'] // Add any CSS styles if needed
})
export class AppointmentSlotDetailsComponent implements OnInit {
  appointmentSlot: any; // Update with actual data type

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentSlotService: AppointmentSlotService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const appointmentSlotId = params.get('id');
      this.fetchAppointmentSlotDetails(appointmentSlotId);
    });
  }

  fetchAppointmentSlotDetails(id: string | null): void {
    if (id) {
      this.appointmentSlotService.getAppointmentSlotById(id)
        .subscribe((slot: any) => {
          this.appointmentSlot = slot;
        });
    }
  }
  goBack(): void {
    this.router.navigate(['/appointment-slots']); // Navigate back to the list
  }
}
