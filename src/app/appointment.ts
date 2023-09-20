import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
    id: number=0;
    appointmentDateTime: string="";
   
    patientId: number=0;
    doctorId: number=0;
    patient!: Patient;
  doctor!: Doctor;

    constructor(){

    }
  }
  