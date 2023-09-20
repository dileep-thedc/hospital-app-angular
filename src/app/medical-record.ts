// medical-record.ts
import { Patient } from './patient'; // Import the Patient class

export class MedicalRecord {
  id: number;
  diagnosis: string;
  prescriptions: string;
  testResults: string;
  patientId: number;
  patient: Patient; // Add the patient property

  constructor(
    id: number,
    diagnosis: string,
    prescriptions: string,
    testResults: string,
    patientId: number,
    patient: Patient // Add the patient parameter
  ) {
    this.id = id;
    this.diagnosis = diagnosis;
    this.prescriptions = prescriptions;
    this.testResults = testResults;
    this.patientId = patientId;
    this.patient = patient; // Assign the patient property
  }
}
