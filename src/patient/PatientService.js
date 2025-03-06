import { Allergy } from "./Allergy.js";
import { Patient } from "./Patient.js";

export class PatientService {
  constructor(patientRepository) {
    this.patientRepository = patientRepository;
  }

  addPatient(patientData) {
    const patient = new Patient(
      patientData.id,
      patientData.identificationDocument,
      patientData.name,
      patientData.birthDate,
      patientData.gender,
      patientData.bloodType,
      patientData.address,
      patientData.phone,
      patientData.email,
      patientData.emergencyContact,
    );

    this.patientRepository.add(patient.id, patient);

    return patient;
  }

  findPatientById(patientId) {
    return this.patientRepository.findById(patientId);
  }

  findAllPatients() {
    return this.patientRepository.findAll();
  }

  findPatientByName(name) {
    return this.patientRepository.findByName(name);
  }

  findPatientByBloodType(bloodType) {
    return this.patientRepository.findByBloodType(bloodType);
  }

  updatePatient(patientId, updateData) {
    const patient = this.findPatientById(patientId);
    if (!patient) {
      throw new Error('Patient not found.');
    }

    Object.assign(patient, updateData);

    this.patientRepository.update(patient.id, patient);
    return patient;
  }

  deletePatient(patientId) {
    const patient = this.findPatientById(patientId);
    if (!patient) {
      throw new Error('Patient not found.');
    }

    this.patientRepository.delete(patient.id);
    return patient;
  }

  addPatientAllergy(patientId, allergy) {
    const patient = this.findPatientById(patientId);
    if (!patient) {
      throw new Error('Patient not found.');
    }

    if (!(allergy instanceof Allergy)) {
      throw new Error('Invalid allergy object.');
    }

    const hasAllergy = patient.allergies.some((a) => a.equals(allergy));
    if (!hasAllergy) {
      patient.allergies.push(allergy);
      console.log(`Allergy added to patient ${patient.name}.`);
    } else {
      console.log(`Allergy already exists for patient ${patient.name}.;`)
    }

    this.updatePatient(patient.id, patient);
    return patient;
  }


  addPatientDiagnosis(patientId, diagnosis) {
    const patient = this.findPatientById(patientId);
    if (!patient) {
      throw new Error('Patient not found.');
    }

    patient.medicalRecord.addDiagnosis(diagnosis);
    this.updatePatient(patient.id, patient);
    return patient;
  }

  addPatientMedication(patientId, medication) {
    const patient = this.findPatientById(patientId);
    if (!patient) {
      throw new Error('Patient not found.');
    }
    this.medicalRecord.addMedication(medication);
    this.updatePatient(patient.id, patient);
    return patient;
  }

  addPatientTreatment(patientId, treatment) {
    const patient = this.findPatientById(patientId);
    if (!patient) {
      throw new Error('Patient not found.');
    }
    this.medicalRecord.addTreatment(treatment);
    this.updatePatient(patient.id, patient);
    return patient;
  }
}
