import { Address } from './src/shared/Address.js';
import { EmergencyContact } from './src/shared/EmergencyContact.js';

import { Exam } from "./src/patient/Exam.js";
import { ExamRepository } from "./src/patient/ExamRepository.js";

import { Appointment } from "./src/patient/Appointment.js";
import { AppointmentRepository } from "./src/patient/AppointmentRepository.js";

import { Patient } from './src/patient/Patient.js';
import { PatientRepository } from "./src/patient/PatientRepository.js";

import { Doctor } from "./src/doctor/Doctor.js";
import { DoctorRepository } from "./src/doctor/DoctorRepository.js";

const address = new Address(
  'Rua das Flores',
  '123',
  'São Paulo',
  'São Paulo',
  '11111111',
);

const emergencyContact = new EmergencyContact('Maria Silva', '(11) 88888-88888');

const patient = new Patient(
  1,
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
  1,
  "12345",
  "Dr. Smith",
  ["Cardiology"],
  "11987654333"
)

const appointment = new Appointment(
  1,
  new Date(),
  patient,
  doctor,
  "Checkup",
  "Scheduled",
  "Regular checkup"
);

const exam = new Exam(
  1,
  "Blood Test",
  "Normal",
  new Date(2025, 10, 10),
  "Lab A",
  "Dr. Smith",
  patient,
);
// --------------------------------------
const doctorRepository = new DoctorRepository();
const patientRepository = new PatientRepository();
const appointmentRepository = new AppointmentRepository();
const examRepository = new ExamRepository();
// --------------------------------------
doctorRepository.add(doctor.id, doctor);
patientRepository.add(patient.id, patient);
appointmentRepository.add(appointment.id, appointment); // Quem deve agendar é o paciente
examRepository.add(exam.id, exam);
// --------------------------------------
const foundPatient = patientRepository.findById(1);
const foundDoctor = doctorRepository.findById(1);
const foundAppointment = appointmentRepository.findById(1);
const foundExam = examRepository.findById(1);

console.log(doctorRepository.findBySpecialty("Cardiology"));
