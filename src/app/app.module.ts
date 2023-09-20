import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { AppointmentSlotListComponent } from './appointment-slot-list/appointment-slot-list.component';
import { AppointmentSlotDetailsComponent } from './appointment-slot-details/appointment-slot-details.component';
import { AppointmentSlotCreateComponent } from './appointment-slot-create/appointment-slot-create.component';
import { AppointmentSlotEditComponent } from './appointment-slot-edit/appointment-slot-edit.component';
import { MedicalRecordListComponent } from './medical-record-list/medical-record-list.component';
import { MedicalRecordCreateComponent } from './medical-record-create/medical-record-create.component';
import { MedicalRecordDetailsComponent } from './medical-record-details/medical-record-details.component';
import { MedicalRecordUpdateComponent } from './medical-record-update/medical-record-update.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceCreateComponent } from './insurance-create/insurance-create.component';
import { InsuranceUpdateComponent } from './insurance-update/insurance-update.component';
import { BillingListComponent } from './billing-list/billing-list.component';

import { BillingUpdateComponent } from './billing-update/billing-update.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BillingCreatedComponent } from './billing-created/billing-created.component';
import { LucideAngularModule, File, Home, Menu, UserCheck } from 'lucide-angular';

//import { DoctorManagementComponent } from './doctor-management/doctor-management.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientDetailsComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    CreateDoctorComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    UpdateDoctorComponent,
    AppointmentListComponent,
    AppointmentDetailsComponent,
    AppointmentCreateComponent,
    AppointmentEditComponent,
    AppointmentSlotListComponent,
    AppointmentSlotDetailsComponent,
    AppointmentSlotCreateComponent,
    AppointmentSlotEditComponent,
    MedicalRecordListComponent,
    MedicalRecordCreateComponent,
    MedicalRecordDetailsComponent,
    MedicalRecordUpdateComponent,
    InsuranceListComponent,
    InsuranceDetailsComponent,
    InsuranceCreateComponent,
    InsuranceUpdateComponent,
    BillingListComponent,
    BillingDetailsComponent,
    BillingUpdateComponent,
    BillingCreatedComponent,
    //DoctorManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LucideAngularModule.pick({File, Home, Menu, UserCheck}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
