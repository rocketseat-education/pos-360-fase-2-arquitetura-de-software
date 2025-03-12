import { MedicalRecord } from '../value-objects/medical-record/MedicalRecord.js';

export class Patient {
  constructor(
    id,
    identificationDocument,
    name,
    birthDate,
    gender,
    bloodType,
    address,
    phone,
    email,
    emergencyContact,
  ) {
    this.id = id;
    this.identificationDocument = identificationDocument;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.bloodType = bloodType;
    this.allergies = [];
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.emergencyContact = emergencyContact;
    this.appointments = [];
    this.exams = [];
    this.medicalRecord = new MedicalRecord();
  }
}
