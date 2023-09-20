import { Patient } from './patient'; // Import the Patient model if you have it

export class Billing {
  id: number=0;
  cost: number=0;
  billingDateTime: String="";
  patientId: number=0;
  patient: Patient=new Patient;
  constructor(){
    
  }
}
