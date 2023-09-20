import { Patient } from './patient'; // Import the Patient class if needed

export class Insurance {
  id: number;
  policyNumber: string;
  coverageAmount: number;
  patientId: number; // Add the patientId property
  patient: Patient; // You might need to import and use the Patient class

  constructor(id: number, policyNumber: string, coverageAmount: number, patientId: number, patient: Patient) {
    this.id = id;
    this.policyNumber = policyNumber;
    this.coverageAmount = coverageAmount;
    this.patientId = patientId;
    this.patient = patient;
  }
}
