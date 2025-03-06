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
import { DoctorService } from "./src/doctor/DoctorService.js";

const doctor = new Doctor(
  1,
  "12345",
  "Dr. Smith",
  ["Cardiology"],
  "11987654333"
);

const doctorRepository = new DoctorRepository();
const doctorService = new DoctorService(doctorRepository);
doctorService.addDoctor(doctor);
doctorService.deleteDoctor(1);

console.log(doctorService.findAllDoctors(1));
