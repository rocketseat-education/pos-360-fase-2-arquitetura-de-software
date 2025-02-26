import { Address } from './src/shared/Address.js';
import { EmergencyContact } from './src/shared/EmergencyContact.js';

import { Allergy } from './src/patient/Allergy.js';
import { Appointment } from './src/patient/Appointment.js';
import { Exam } from './src/patient/Exam.js';
import { Patient } from './src/patient/Patient.js';

import { Diagnosis } from './src/patient/record/Diagnosis.js';
import { Treatment } from './src/patient/record/Treatment.js';
import { Medication } from "./src/patient/record/Medication.js";

import { Doctor } from './src/doctor/Doctor.js';

const address = new Address(
  'Rua das Flores',
  '123',
  'São Paulo',
  'São Paulo',
  '11111111',
);

const emergencyContact = new EmergencyContact('Maria Silva', '(11) 88888-88888');

const patient = new Patient(
  '1',
  '123-456-789-00',
  'João Silva',
  '1990-01-01',
  'Masculino',
  'O+',
  address,
  '(11) 99999-9999',
  'joao.silva@email.com',
  emergencyContact,
);

const doctor = new Doctor(
  '1',
  'CRM/SP 123456',
  'Dr. Carlos',
  ['Cardiologista', 'Clínica Geral'],
  '(11) 77777-7777',
);

const appointment = new Appointment(
  '1',
  '2025-10-10',
  patient,
  doctor,
  'Dor no peito',
  'Agendada',
  'Paciente relatou dor no peito após esforço físico.',
);

const exam = new Exam(
  '1',
  'Hemograma',
  'Normal',
  '2025-10-11',
  'Laboratório X',
  'Dr. Ana',
  patient,
);

doctor.addWorkingHours('Segunda', '14:00-18:00');
doctor.addWorkingHours('Quarta', '14:00-18:00');

patient.addAllergy(new Allergy('Penicilina'));
patient.scheduleAppointment(appointment);
patient.addExam(exam);

patient.medicalRecord.addDiagnosis(new Diagnosis('Hipertensão'));
patient.medicalRecord.addTreatment(new Treatment('Redução no consumo de sal'));
patient.medicalRecord.addMedication(new Medication("Captopril", "25mg"));

console.log(patient.medicalRecord.medications);
