import { Doctor } from "./doctor";

// src/app/models/appointment-slot.model.ts
export class AppointmentSlot {
    id: number=0;
    startTime: string="";
    endTime: string="";
    doctor: Doctor=new Doctor; // Assuming you have a Doctor model
     
    constructor(){

    }
  }
  