import { AppointmentRepository } from "../src/infrastructure/persistence/AppointmentRepository.js";
import { DoctorRepository } from "../src/infrastructure/persistence/DoctorRepository.js";
import { ExamRepository } from "../src/infrastructure/persistence/ExamRepository.js";
import { PatientRepository } from "../src/infrastructure/persistence/PatientRepository.js";

export const patientRepository = new PatientRepository();
export const doctorRepository = new DoctorRepository();
export const appointmentRepository = new AppointmentRepository();
export const examRepository = new ExamRepository();
