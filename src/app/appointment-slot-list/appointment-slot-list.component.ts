import { Component, OnInit } from '@angular/core';
import { AppointmentSlot } from '../appointment-slot';
import { AppointmentSlotService } from '../appointment-slot.service';

@Component({
  selector: 'app-appointment-slot-list',
  templateUrl: './appointment-slot-list.component.html',
  styleUrls: ['./appointment-slot-list.component.css']
})
export class AppointmentSlotListComponent implements OnInit {
  appointmentSlots: AppointmentSlot[] = [];

  constructor(private appointmentSlotService: AppointmentSlotService) {}

  ngOnInit() {
    this.fetchAppointmentSlots();
  }

  fetchAppointmentSlots() {
    this.appointmentSlotService.getAllAppointmentSlots().subscribe(slots => {
      this.appointmentSlots = slots;
    });
  }

  deleteAppointment(id: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentSlotService.deleteAppointmentSlot(id).subscribe(() => {
        this.fetchAppointmentSlots(); // Refresh the list after deletion
      });
    }
  }
  
}
