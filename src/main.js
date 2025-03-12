import express from "express";
import { setupRoutes } from "./interfaces/routes/apiRoutes.js";
import { DoctorRepository } from "./infrastructure/persistence/DoctorRepository.js";
import { DoctorService } from "./domain/services/doctor-services/DoctorService.js";
import { ExamRepository } from "./infrastructure/persistence/ExamRepository.js";
import { ExamService } from "./domain/services/ExamService.js";
import { PatientRepository } from "./infrastructure/persistence/PatientRepository.js";
import { PatientService } from "./domain/services/PatientService.js";
import { AppointmentRepository } from "./infrastructure/persistence/AppointmentRepository.js";
import { AppointmentService } from "./application/services/AppointmentService.js";
import { DoctorAvailabilityService } from "./domain/services/doctor-services/DoctorAvailabilityService.js";
import { NotificationService } from "./infrastructure/notification/NotificationService.js";
import { DoctorWorkingHoursService } from "./domain/services/doctor-services/DoctorWorkingHoursService.js";
import { DoctorSpecialtyService } from "./domain/services/doctor-services/DoctorSpecialtyService.js";

const doctorRepository = new DoctorRepository();
const examRepository = new ExamRepository();
const patientRepository = new PatientRepository();
const appointmentRepository = new AppointmentRepository();

const doctorService = new DoctorService(doctorRepository);
const examService = new ExamService(examRepository);
const patientService = new PatientService(patientRepository);
const notificationService = new NotificationService(
  patientRepository,
  doctorRepository
);
const doctorWorkingHoursService = new DoctorWorkingHoursService(
  doctorRepository
);
const doctorAvailabilityService = new DoctorAvailabilityService(
  appointmentRepository,
  doctorService,
  doctorWorkingHoursService
);

const doctorSpecialtyService = new DoctorSpecialtyService(doctorRepository);

const appointmentService = new AppointmentService(
  patientService,
  doctorService,
  appointmentRepository,
  doctorAvailabilityService,
  notificationService
);

const app = express();
app.use(express.json());

setupRoutes(
  app,
  doctorService,
  examService,
  patientService,
  appointmentService,
  doctorAvailabilityService,
  doctorWorkingHoursService,
  doctorSpecialtyService
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
