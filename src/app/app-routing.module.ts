import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { AppointmentSlotListComponent } from './appointment-slot-list/appointment-slot-list.component';
import { AppointmentSlotDetailsComponent } from './appointment-slot-details/appointment-slot-details.component';
import { AppointmentSlotCreateComponent } from './appointment-slot-create/appointment-slot-create.component';
import { MedicalRecordListComponent } from './medical-record-list/medical-record-list.component';
import { MedicalRecordCreateComponent } from './medical-record-create/medical-record-create.component';
import { MedicalRecordDetailsComponent } from './medical-record-details/medical-record-details.component';
import { MedicalRecordUpdateComponent } from './medical-record-update/medical-record-update.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceCreateComponent } from './insurance-create/insurance-create.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceUpdateComponent } from './insurance-update/insurance-update.component';
import { BillingListComponent } from './billing-list/billing-list.component';
import { BillingCreatedComponent } from './billing-created/billing-created.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BillingUpdateComponent } from './billing-update/billing-update.component';



const routes: Routes = [


  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard
  //{ path: 'dashboard', component: DashboardComponent },
 // { path: 'patients', component: PatientListComponent },
  //{ path: 'doctors', component: DoctorListComponent },
  //{ path: 'appointments', component: AppointmentListComponent },
  //{ path: 'appointment-slots', component: AppointmentSlotListComponent },

  //Patients Routing
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: 'create', component: CreatePatientComponent },
  { path: 'update/:id', component: UpdatePatientComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  //Doctor Routing
  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/:id', component: DoctorDetailsComponent },
  { path: 'create-doctor', component: CreateDoctorComponent },
  { path: 'update-doctor/:id', component: UpdateDoctorComponent },
  { path: '', redirectTo: 'doctors', pathMatch: 'full' },

  // Appointment Routing
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/:id', component: AppointmentDetailsComponent },
  { path: 'create-appointment', component: AppointmentCreateComponent },
  { path: 'update-appointment/:id', component: AppointmentEditComponent },
  { path: '', redirectTo: 'appointments', pathMatch: 'full' },

  // Appointment-slot

  { path: 'appointment-slots', component: AppointmentSlotListComponent },
  { path: 'appointment-slots/:id', component: AppointmentSlotDetailsComponent },
  { path: 'create-appointment-slot', component: AppointmentSlotCreateComponent },

  { path: '', redirectTo: 'appointment-slots', pathMatch: 'full' },

  //Medical Record
  
  { path: 'medical-records', component: MedicalRecordListComponent },
  { path: 'create-medical-record', component: MedicalRecordCreateComponent },
  { path: 'medical-records/:id', component: MedicalRecordDetailsComponent },
  { path: 'update-medical-record/:id', component: MedicalRecordUpdateComponent },
  { path: '', redirectTo: '/medical-records', pathMatch: 'full' }, 
  
  // Insurance 

  
  { path: 'insurances', component: InsuranceListComponent },
  { path: 'create-insurance', component: InsuranceCreateComponent },
  { path: 'insurances/:id', component: InsuranceDetailsComponent },
  { path: 'update-insurance/:id', component: InsuranceUpdateComponent },
  { path: '', redirectTo: '/insurances', pathMatch: 'full' },

  // Billing 

  
  { path: 'billings', component: BillingListComponent },
  { path: 'billings/create', component: BillingCreatedComponent },
  { path: 'billings/:id', component: BillingDetailsComponent },
  { path: 'billings/:id/update', component: BillingUpdateComponent },
  { path: '', redirectTo: '/billings', pathMatch: 'full' },
  

  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
